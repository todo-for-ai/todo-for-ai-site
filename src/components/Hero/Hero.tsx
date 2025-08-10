import React from 'react';
import { Button, Typography, Space, Badge } from 'antd';
import {
  RocketOutlined,
  GithubOutlined,
  ThunderboltOutlined,
  BranchesOutlined,
  ClockCircleOutlined,
  TeamOutlined,
  SafetyOutlined
} from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import HeroDiagram from '../HeroDiagram/HeroDiagram';
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
              <Badge count="✓" className="stat-badge" />
              <span className="stat-label">{t('hero.stats.productivityBoost')}</span>
            </div>
            <div className="stat-item">
              <Badge count="24/7" className="stat-badge" />
              <span className="stat-label">{t('hero.stats.aiAssistance')}</span>
            </div>
            <div className="stat-item">
              <Badge count="✓" className="stat-badge" />
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
          <HeroDiagram />
        </div>
      </div>
    </section>
  );
};

export default Hero;
