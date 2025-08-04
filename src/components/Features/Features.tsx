import React from 'react';
import { Row, Col, Card, Typography } from 'antd';
import {
  RobotOutlined,
  ThunderboltOutlined,
  BranchesOutlined,
  ClockCircleOutlined,
  TeamOutlined,
  SafetyOutlined,
  ApiOutlined,
  CloudOutlined,
  BarChartOutlined
} from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import './Features.css';

const { Title, Paragraph } = Typography;

const Features: React.FC = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: <RobotOutlined />,
      title: t('features.items.aiTaskCreation.title'),
      description: t('features.items.aiTaskCreation.description')
    },
    {
      icon: <ThunderboltOutlined />,
      title: t('features.items.smartPrioritization.title'),
      description: t('features.items.smartPrioritization.description')
    },
    {
      icon: <BranchesOutlined />,
      title: t('features.items.automatedWorkflows.title'),
      description: t('features.items.automatedWorkflows.description')
    },
    {
      icon: <ClockCircleOutlined />,
      title: t('features.items.intelligentScheduling.title'),
      description: t('features.items.intelligentScheduling.description')
    },
    {
      icon: <TeamOutlined />,
      title: t('features.items.collaborativeAI.title'),
      description: t('features.items.collaborativeAI.description')
    },
    {
      icon: <SafetyOutlined />,
      title: t('features.items.privacyFirst.title'),
      description: t('features.items.privacyFirst.description')
    },
    {
      icon: <ApiOutlined />,
      title: t('features.items.mcpIntegration.title'),
      description: t('features.items.mcpIntegration.description')
    },
    {
      icon: <CloudOutlined />,
      title: t('features.items.cloudSync.title'),
      description: t('features.items.cloudSync.description')
    },
    {
      icon: <BarChartOutlined />,
      title: t('features.items.analytics.title'),
      description: t('features.items.analytics.description')
    }
  ];

  return (
    <section id="features" className="features-section">
      <div className="features-container">
        <div className="features-header">
          <Title level={2} className="features-title">
            {t('features.title')}
          </Title>
          <Paragraph className="features-subtitle">
            {t('features.subtitle')}
          </Paragraph>
        </div>
        
        <Row gutter={[32, 32]} className="features-grid">
          {features.map((feature, index) => (
            <Col xs={24} md={12} lg={8} key={index}>
              <Card
                className="feature-card"
                hoverable
                variant="borderless"
              >
                <div className="feature-icon-wrapper">
                  {feature.icon}
                </div>
                <Title level={4} className="feature-title">
                  {feature.title}
                </Title>
                <Paragraph className="feature-description">
                  {feature.description}
                </Paragraph>
              </Card>
            </Col>
          ))}
        </Row>
        
        <div className="features-cta">
          <Title level={3} className="cta-title">
            {t('features.cta.title')}
          </Title>
          <Paragraph className="cta-description">
            {t('features.cta.description')}
          </Paragraph>
        </div>
      </div>
    </section>
  );
};

export default Features;
