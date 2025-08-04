import React from 'react';
import { Steps, Typography, Card, Row, Col } from 'antd';
import { 
  UserAddOutlined, 
  RobotOutlined, 
  ThunderboltOutlined, 
  TrophyOutlined 
} from '@ant-design/icons';
import './HowItWorks.css';

const { Title, Paragraph } = Typography;

const HowItWorks: React.FC = () => {
  const steps = [
    {
      title: 'Connect & Setup',
      description: 'Sign up and connect your existing tools and workflows',
      icon: <UserAddOutlined />,
      details: 'Seamlessly integrate with your favorite productivity tools, calendars, and project management platforms. Our AI learns from your existing data to provide personalized recommendations from day one.'
    },
    {
      title: 'AI Analysis',
      description: 'Our AI analyzes your patterns and preferences',
      icon: <RobotOutlined />,
      details: 'Advanced machine learning algorithms study your work habits, peak productivity hours, task completion patterns, and collaboration styles to create a personalized productivity profile.'
    },
    {
      title: 'Smart Automation',
      description: 'Automated task creation, prioritization, and scheduling',
      icon: <ThunderboltOutlined />,
      details: 'Experience intelligent task breakdown, automatic priority assignment, smart deadline suggestions, and optimized scheduling that adapts to your energy levels and availability.'
    },
    {
      title: 'Achieve More',
      description: 'Focus on what matters while AI handles the complexity',
      icon: <TrophyOutlined />,
      details: 'Boost your productivity by up to 40% with AI-powered insights, automated workflows, and intelligent recommendations that help you accomplish more in less time.'
    }
  ];

  return (
    <section id="how-it-works" className="how-it-works-section">
      <div className="how-it-works-container">
        <div className="section-header">
          <Title level={2} className="section-title">
            How Todo4AI Works
          </Title>
          <Paragraph className="section-subtitle">
            Transform your productivity in four simple steps with AI-powered task management
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
            See Todo4AI in Action
          </Title>
          <div className="demo-video-placeholder">
            <div className="play-button">
              <div className="play-icon">▶</div>
            </div>
            <div className="demo-overlay">
              <Title level={4} className="overlay-title">
                Watch Demo Video
              </Title>
              <Paragraph className="overlay-description">
                See how Todo4AI transforms chaotic task lists into organized, AI-powered productivity systems
              </Paragraph>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
