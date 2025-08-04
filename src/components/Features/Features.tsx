import React from 'react';
import { Row, Col, Card, Typography } from 'antd';
import { 
  RobotOutlined, 
  ThunderboltOutlined, 
  BranchesOutlined,
  ClockCircleOutlined,
  TeamOutlined,
  SafetyOutlined
} from '@ant-design/icons';
import './Features.css';

const { Title, Paragraph } = Typography;

const Features: React.FC = () => {
  const features = [
    {
      icon: <RobotOutlined />,
      title: 'AI-Powered Task Creation',
      description: 'Automatically generate and break down complex tasks using advanced AI algorithms. Let artificial intelligence understand your goals and create actionable task lists.'
    },
    {
      icon: <ThunderboltOutlined />,
      title: 'Smart Prioritization',
      description: 'Intelligent priority ranking based on deadlines, dependencies, and importance. Never miss critical tasks with AI-driven scheduling recommendations.'
    },
    {
      icon: <BranchesOutlined />,
      title: 'Automated Workflows',
      description: 'Create sophisticated automation rules that adapt to your work patterns. Streamline repetitive processes with intelligent workflow automation.'
    },
    {
      icon: <ClockCircleOutlined />,
      title: 'Intelligent Scheduling',
      description: 'AI analyzes your calendar, energy levels, and task complexity to suggest optimal scheduling. Maximize productivity with smart time management.'
    },
    {
      icon: <TeamOutlined />,
      title: 'Collaborative AI',
      description: 'Share AI insights across teams and learn from collective productivity patterns. Enhance team coordination with intelligent collaboration features.'
    },
    {
      icon: <SafetyOutlined />,
      title: 'Privacy-First Design',
      description: 'Your data stays secure with local processing and encrypted storage. Enjoy AI benefits without compromising privacy or data ownership.'
    }
  ];

  return (
    <section id="features" className="features-section">
      <div className="features-container">
        <div className="features-header">
          <Title level={2} className="features-title">
            Powerful Features for Modern Productivity
          </Title>
          <Paragraph className="features-subtitle">
            Discover how Todo4AI transforms task management with cutting-edge artificial intelligence
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
            Ready to Experience AI-Powered Productivity?
          </Title>
          <Paragraph className="cta-description">
            Join thousands of users who have revolutionized their task management with Todo4AI
          </Paragraph>
        </div>
      </div>
    </section>
  );
};

export default Features;
