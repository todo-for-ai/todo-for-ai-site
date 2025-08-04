import React from 'react';
import { Button, Typography, Space } from 'antd';
import { RocketOutlined, GithubOutlined, PlayCircleOutlined } from '@ant-design/icons';
import './Hero.css';

const { Title, Paragraph } = Typography;

const Hero: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <Title level={1} className="hero-title">
            AI-Powered Task Management
            <br />
            <span className="highlight">Reimagined</span>
          </Title>
          
          <Paragraph className="hero-description">
            Todo4AI revolutionizes how you manage tasks with intelligent automation, 
            smart prioritization, and seamless AI integration. Let artificial intelligence 
            handle the complexity while you focus on what matters most.
          </Paragraph>
          
          <div className="hero-features">
            <div className="feature-item">
              <RocketOutlined className="feature-icon" />
              <span>Smart Task Creation</span>
            </div>
            <div className="feature-item">
              <PlayCircleOutlined className="feature-icon" />
              <span>AI-Driven Automation</span>
            </div>
            <div className="feature-item">
              <GithubOutlined className="feature-icon" />
              <span>Open Source</span>
            </div>
          </div>
          
          <Space size="large" className="hero-actions">
            <Button 
              type="primary" 
              size="large" 
              className="cta-button"
              href="https://todo4ai.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Started Free
            </Button>
            <Button 
              size="large" 
              className="secondary-button"
              href="https://github.com/cc11001100/todo-for-ai"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubOutlined /> View on GitHub
            </Button>
          </Space>
        </div>
        
        <div className="hero-visual">
          <div className="demo-card">
            <div className="demo-header">
              <div className="demo-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <span className="demo-title">Todo4AI Dashboard</span>
            </div>
            <div className="demo-content">
              <div className="task-item completed">
                <span className="task-icon">✓</span>
                <span className="task-text">AI analyzed and prioritized 15 tasks</span>
              </div>
              <div className="task-item active">
                <span className="task-icon">🤖</span>
                <span className="task-text">Creating automated workflow...</span>
              </div>
              <div className="task-item">
                <span className="task-icon">📋</span>
                <span className="task-text">Review quarterly goals</span>
              </div>
              <div className="task-item">
                <span className="task-icon">🎯</span>
                <span className="task-text">Optimize team productivity</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
