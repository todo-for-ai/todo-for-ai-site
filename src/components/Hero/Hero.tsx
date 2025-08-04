import React from 'react';
import { Button, Typography, Space, Badge } from 'antd';
import {
  RocketOutlined,
  GithubOutlined,
  PlayCircleOutlined,
  ThunderboltOutlined,
  BranchesOutlined,
  ClockCircleOutlined,
  TeamOutlined,
  SafetyOutlined
} from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import './Hero.css';

const { Title, Paragraph } = Typography;

const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <Title level={1} className="hero-title">
            {t('hero.title')}
            <br />
            <span className="highlight">{t('hero.titleHighlight')}</span>
          </Title>

          <Paragraph className="hero-description">
            {t('hero.description')}
          </Paragraph>

          <div className="hero-features">
            <div className="feature-item">
              <RocketOutlined className="feature-icon" />
              <span>{t('hero.features.smartTaskCreation')}</span>
            </div>
            <div className="feature-item">
              <ThunderboltOutlined className="feature-icon" />
              <span>{t('hero.features.aiDrivenAutomation')}</span>
            </div>
            <div className="feature-item">
              <BranchesOutlined className="feature-icon" />
              <span>{t('hero.features.automatedWorkflows')}</span>
            </div>
            <div className="feature-item">
              <ClockCircleOutlined className="feature-icon" />
              <span>{t('hero.features.intelligentScheduling')}</span>
            </div>
            <div className="feature-item">
              <TeamOutlined className="feature-icon" />
              <span>{t('hero.features.collaborativeAI')}</span>
            </div>
            <div className="feature-item">
              <SafetyOutlined className="feature-icon" />
              <span>{t('hero.features.privacyFirst')}</span>
            </div>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <Badge count="40%" className="stat-badge" />
              <span className="stat-label">{t('hero.stats.productivityBoost')}</span>
            </div>
            <div className="stat-item">
              <Badge count="24/7" className="stat-badge" />
              <span className="stat-label">{t('hero.stats.aiAssistance')}</span>
            </div>
            <div className="stat-item">
              <Badge count="100%" className="stat-badge" />
              <span className="stat-label">{t('hero.stats.privacyProtected')}</span>
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
              {t('hero.buttons.getStartedFree')}
            </Button>
            <Button
              size="large"
              className="secondary-button"
              href="https://github.com/cc11001100/todo-for-ai"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubOutlined /> {t('hero.buttons.viewOnGithub')}
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
              <span className="demo-title">{t('hero.demo.title')}</span>
            </div>
            <div className="demo-content">
              <div className="task-item completed">
                <span className="task-icon">✓</span>
                <span className="task-text">{t('hero.demo.tasks.analyzed')}</span>
                <span className="task-time">2 min ago</span>
              </div>
              <div className="task-item active">
                <span className="task-icon">🤖</span>
                <span className="task-text">{t('hero.demo.tasks.creating')}</span>
                <span className="task-progress">85%</span>
              </div>
              <div className="task-item pending">
                <span className="task-icon">📋</span>
                <span className="task-text">{t('hero.demo.tasks.review')}</span>
                <span className="task-priority">High</span>
              </div>
              <div className="task-item">
                <span className="task-icon">🎯</span>
                <span className="task-text">{t('hero.demo.tasks.optimize')}</span>
                <span className="task-ai">AI Suggested</span>
              </div>
              <div className="task-item">
                <span className="task-icon">📊</span>
                <span className="task-text">{t('hero.demo.tasks.analytics')}</span>
                <span className="task-schedule">Tomorrow 9AM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
