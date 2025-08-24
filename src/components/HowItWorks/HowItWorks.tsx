import React from 'react';
import { Steps, Typography, Card, Row, Col } from 'antd';
import {
  UserAddOutlined,
  RobotOutlined,
  ThunderboltOutlined,
  TrophyOutlined
} from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import './HowItWorks.css';

const { Title, Paragraph } = Typography;

const HowItWorks: React.FC = () => {
  const { t, i18n } = useTranslation();

  const steps = [
    {
      title: t('howItWorks.steps.connect.title'),
      description: t('howItWorks.steps.connect.description'),
      icon: <UserAddOutlined />,
      details: t('howItWorks.steps.connect.details')
    },
    {
      title: t('howItWorks.steps.analysis.title'),
      description: t('howItWorks.steps.analysis.description'),
      icon: <RobotOutlined />,
      details: t('howItWorks.steps.analysis.details')
    },
    {
      title: t('howItWorks.steps.automation.title'),
      description: t('howItWorks.steps.automation.description'),
      icon: <ThunderboltOutlined />,
      details: t('howItWorks.steps.automation.details')
    },
    {
      title: t('howItWorks.steps.achieve.title'),
      description: t('howItWorks.steps.achieve.description'),
      icon: <TrophyOutlined />,
      details: t('howItWorks.steps.achieve.details')
    }
  ];

  return (
    <section id="how-it-works" className="how-it-works-section">
      <div className="how-it-works-container">
        <div className="section-header">
          <Title level={2} className="section-title">
            {t('howItWorks.title')}
          </Title>
          <Paragraph className="section-subtitle">
            {t('howItWorks.subtitle')}
          </Paragraph>
        </div>

        <div className="steps-container">
          <Steps
            direction="vertical"
            className="main-steps"
            items={steps.map((step, index) => ({
              title: step.title,
              description: step.description,
              icon: step.icon,
              status: 'process'
            }))}
          />
        </div>

        <Row gutter={[32, 32]} className="steps-details">
          {steps.map((step, index) => (
            <Col xs={24} md={12} key={index}>
              <Card
                className="step-card"
                hoverable
                variant="borderless"
              >
                <div className="step-number">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <div className="step-icon">
                  {step.icon}
                </div>
                <Title level={4} className="step-title">
                  {step.title}
                </Title>
                <Paragraph className="step-details">
                  {step.details}
                </Paragraph>
              </Card>
            </Col>
          ))}
        </Row>

        <div className="demo-section">
          <Title level={3} className="demo-title">
            {t('howItWorks.demo.title')}
          </Title>
          <div className="demo-video-container">
            <div className="video-wrapper">
              <iframe
                width="100%"
                height="400"
                src={i18n.language.startsWith('zh')
                  ? "https://www.youtube.com/embed/v96wqWLEHk8"
                  : "https://www.youtube.com/embed/L5SjoKRzJXQ?start=30"
                }
                title={t('howItWorks.demo.videoTitle')}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{
                  borderRadius: '12px',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
                }}
              />
            </div>
            <div className="video-description">
              <Paragraph className="video-description-text">
                {t('howItWorks.demo.videoDescription')}
              </Paragraph>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
