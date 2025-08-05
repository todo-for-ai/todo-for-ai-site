#!/bin/bash

# Todo4AI Site Startup Script
# This script starts the Todo4AI site with automatic process management
# It ensures only one instance is running by killing any existing processes

set -e  # Exit on any error

# Configuration
PROJECT_NAME="todo-for-ai-site"
PORT=51701
LOG_FILE="startup.log"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Function to check if port is in use
check_port() {
    local port=$1
    if lsof -Pi :$port -sTCP:LISTEN -t >/dev/null 2>&1; then
        return 0  # Port is in use
    else
        return 1  # Port is free
    fi
}

# Function to get process ID using the port
get_process_by_port() {
    local port=$1
    lsof -Pi :$port -sTCP:LISTEN -t 2>/dev/null || echo ""
}

# Function to get process info
get_process_info() {
    local pid=$1
    if [ -n "$pid" ] && ps -p $pid > /dev/null 2>&1; then
        ps -p $pid -o pid,ppid,cmd --no-headers 2>/dev/null || echo ""
    fi
}

# Function to kill process by PID
kill_process() {
    local pid=$1
    if [ -n "$pid" ] && ps -p $pid > /dev/null 2>&1; then
        print_warning "Killing process $pid..."
        kill -TERM $pid 2>/dev/null || true
        sleep 2
        
        # If process still exists, force kill
        if ps -p $pid > /dev/null 2>&1; then
            print_warning "Force killing process $pid..."
            kill -KILL $pid 2>/dev/null || true
            sleep 1
        fi
        
        # Verify process is dead
        if ps -p $pid > /dev/null 2>&1; then
            print_error "Failed to kill process $pid"
            return 1
        else
            print_success "Process $pid killed successfully"
            return 0
        fi
    fi
}

# Function to kill processes by name pattern
kill_processes_by_name() {
    local pattern=$1
    print_status "Looking for processes matching pattern: $pattern"
    
    # Find processes matching the pattern
    local pids=$(pgrep -f "$pattern" 2>/dev/null || echo "")
    
    if [ -n "$pids" ]; then
        for pid in $pids; do
            local process_info=$(get_process_info $pid)
            if [ -n "$process_info" ]; then
                print_warning "Found process: $process_info"
                kill_process $pid
            fi
        done
    else
        print_status "No processes found matching pattern: $pattern"
    fi
}

# Function to cleanup existing processes
cleanup_existing_processes() {
    print_status "Cleaning up existing processes..."
    
    # Method 1: Kill by port
    if check_port $PORT; then
        local pid=$(get_process_by_port $PORT)
        if [ -n "$pid" ]; then
            local process_info=$(get_process_info $pid)
            print_warning "Port $PORT is in use by process: $process_info"
            kill_process $pid
        fi
    fi
    
    # Method 2: Kill by process name patterns
    kill_processes_by_name "react-scripts"
    kill_processes_by_name "node.*react-scripts"
    kill_processes_by_name "npm.*start"
    kill_processes_by_name "$PROJECT_NAME"
    
    # Wait a moment for cleanup
    sleep 2
    
    # Final check
    if check_port $PORT; then
        local remaining_pid=$(get_process_by_port $PORT)
        if [ -n "$remaining_pid" ]; then
            print_error "Port $PORT is still in use by process $remaining_pid"
            print_error "Manual intervention may be required"
            exit 1
        fi
    fi
    
    print_success "Process cleanup completed"
}

# Function to check prerequisites
check_prerequisites() {
    print_status "Checking prerequisites..."
    
    # Check if we're in the right directory
    if [ ! -f "package.json" ]; then
        print_error "package.json not found. Please run this script from the project root directory."
        exit 1
    fi
    
    # Check if node_modules exists
    if [ ! -d "node_modules" ]; then
        print_warning "node_modules not found. Installing dependencies..."
        npm install
    fi
    
    # Check Node.js
    if ! command -v node &> /dev/null; then
        print_error "Node.js is not installed. Please install Node.js first."
        exit 1
    fi
    
    # Check npm
    if ! command -v npm &> /dev/null; then
        print_error "npm is not installed. Please install npm first."
        exit 1
    fi
    
    print_success "Prerequisites check passed"
}

# Function to start the application
start_application() {
    print_status "Starting Todo4AI site on port $PORT..."
    
    # Create log file
    touch $LOG_FILE
    
    # Start the application in background
    print_status "Executing: npm start"
    nohup npm start > $LOG_FILE 2>&1 &
    local npm_pid=$!
    
    print_status "Application started with PID: $npm_pid"
    print_status "Logs are being written to: $LOG_FILE"
    
    # Wait for the application to start
    print_status "Waiting for application to start..."
    local max_wait=60  # Maximum wait time in seconds
    local wait_time=0
    
    while [ $wait_time -lt $max_wait ]; do
        if check_port $PORT; then
            print_success "Application is running on port $PORT"
            print_success "You can access the site at: http://localhost:$PORT"
            return 0
        fi
        
        # Check if npm process is still running
        if ! ps -p $npm_pid > /dev/null 2>&1; then
            print_error "npm process died unexpectedly"
            print_error "Check the log file for details: $LOG_FILE"
            tail -20 $LOG_FILE
            exit 1
        fi
        
        sleep 2
        wait_time=$((wait_time + 2))
        echo -n "."
    done
    
    echo ""
    print_error "Application failed to start within $max_wait seconds"
    print_error "Check the log file for details: $LOG_FILE"
    tail -20 $LOG_FILE
    exit 1
}

# Function to show usage
show_usage() {
    echo "Usage: $0 [OPTIONS]"
    echo ""
    echo "Options:"
    echo "  -h, --help     Show this help message"
    echo "  -v, --verbose  Enable verbose output"
    echo "  -f, --force    Force restart even if already running"
    echo ""
    echo "This script starts the Todo4AI site with automatic process management."
    echo "It ensures only one instance is running by killing any existing processes."
}

# Main execution
main() {
    local force_restart=false
    local verbose=false
    
    # Parse command line arguments
    while [[ $# -gt 0 ]]; do
        case $1 in
            -h|--help)
                show_usage
                exit 0
                ;;
            -v|--verbose)
                verbose=true
                shift
                ;;
            -f|--force)
                force_restart=true
                shift
                ;;
            *)
                print_error "Unknown option: $1"
                show_usage
                exit 1
                ;;
        esac
    done
    
    print_status "Starting Todo4AI Site..."
    print_status "Project: $PROJECT_NAME"
    print_status "Port: $PORT"
    print_status "Time: $(date)"
    echo ""
    
    # Check if already running
    if check_port $PORT && [ "$force_restart" = false ]; then
        local existing_pid=$(get_process_by_port $PORT)
        print_warning "Application appears to be already running on port $PORT (PID: $existing_pid)"
        print_status "Use --force flag to restart, or access the site at: http://localhost:$PORT"
        exit 0
    fi
    
    # Execute startup sequence
    check_prerequisites
    cleanup_existing_processes
    start_application
    
    echo ""
    print_success "Todo4AI site started successfully!"
    print_success "Access the site at: http://localhost:$PORT"
    print_status "To stop the application, use Ctrl+C or kill the process"
    print_status "Log file: $LOG_FILE"
}

# Run main function with all arguments
main "$@"
