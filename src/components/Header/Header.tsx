import React from 'react';
import { Layout, Menu, Button } from 'antd';
import { GithubOutlined, MenuOutlined } from '@ant-design/icons';
import './Header.css';

const { Header: AntHeader } = Layout;

const Header: React.FC = () => {
  const menuItems = [
    {
      key: 'features',
      label: <a href="#features">Features</a>,
    },
    {
      key: 'how-it-works',
      label: <a href="#how-it-works">How It Works</a>,
    },
    {
      key: 'docs',
      label: <a href="#docs">Documentation</a>,
    },
    {
      key: 'github',
      label: (
        <a 
          href="https://github.com/cc11001100/todo-for-ai" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <GithubOutlined /> GitHub
        </a>
      ),
    },
  ];

  return (
    <AntHeader className="site-header">
      <div className="header-content">
        <div className="logo">
          <h1>Todo4AI</h1>
          <span className="tagline">AI Task Management</span>
        </div>
        
        <Menu
          mode="horizontal"
          items={menuItems}
          className="header-menu"
          theme="light"
        />
        
        <div className="header-actions">
          <Button 
            type="primary" 
            size="large"
            href="https://todo4ai.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Started
          </Button>
        </div>
      </div>
    </AntHeader>
  );
};

export default Header;
