import React from 'react';
import { Button, Typography, Space } from 'antd';
import { RocketOutlined, GithubOutlined, PlayCircleOutlined } from '@ant-design/icons';
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
              <PlayCircleOutlined className="feature-icon" />
              <span>{t('hero.features.aiDrivenAutomation')}</span>
            </div>
            <div className="feature-item">
              <GithubOutlined className="feature-icon" />
              <span>{t('hero.features.openSource')}</span>
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
              </div>
              <div className="task-item active">
                <span className="task-icon">🤖</span>
                <span className="task-text">{t('hero.demo.tasks.creating')}</span>
              </div>
              <div className="task-item">
                <span className="task-icon">📋</span>
                <span className="task-text">{t('hero.demo.tasks.review')}</span>
              </div>
              <div className="task-item">
                <span className="task-icon">🎯</span>
                <span className="task-text">{t('hero.demo.tasks.optimize')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
