import React from 'react';
import { Layout, Row, Col, Typography, Space, Divider } from 'antd';
import { 
  GithubOutlined, 
  TwitterOutlined, 
  LinkedinOutlined,
  MailOutlined,
  HeartFilled
} from '@ant-design/icons';
import './Footer.css';

const { Footer: AntFooter } = Layout;
const { Title, Paragraph, Link } = Typography;

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <AntFooter className="site-footer">
      <div className="footer-content">
        <Row gutter={[48, 32]}>
          <Col xs={24} md={8}>
            <div className="footer-brand">
              <Title level={3} className="footer-logo">
                Todo4AI
              </Title>
              <Paragraph className="footer-description">
                Revolutionizing task management with artificial intelligence. 
                Boost your productivity and focus on what truly matters.
              </Paragraph>
              <Space size="large" className="social-links">
                <Link 
                  href="https://github.com/cc11001100/todo-for-ai" 
                  target="_blank"
                  className="social-link"
                >
                  <GithubOutlined />
                </Link>
                <Link 
                  href="#" 
                  target="_blank"
                  className="social-link"
                >
                  <TwitterOutlined />
                </Link>
                <Link 
                  href="#" 
                  target="_blank"
                  className="social-link"
                >
                  <LinkedinOutlined />
                </Link>
                <Link 
                  href="mailto:contact@todo4ai.org" 
                  className="social-link"
                >
                  <MailOutlined />
                </Link>
              </Space>
            </div>
          </Col>
          
          <Col xs={24} md={5}>
            <div className="footer-section">
              <Title level={5} className="footer-section-title">
                Product
              </Title>
              <ul className="footer-links">
                <li><Link href="#features">Features</Link></li>
                <li><Link href="#how-it-works">How It Works</Link></li>
                <li><Link href="https://todo4ai.org/" target="_blank">Get Started</Link></li>
                <li><Link href="#">Pricing</Link></li>
                <li><Link href="#">API</Link></li>
              </ul>
            </div>
          </Col>
          
          <Col xs={24} md={5}>
            <div className="footer-section">
              <Title level={5} className="footer-section-title">
                Resources
              </Title>
              <ul className="footer-links">
                <li><Link href="#">Documentation</Link></li>
                <li><Link href="#">Tutorials</Link></li>
                <li><Link href="#">Blog</Link></li>
                <li><Link href="#">Community</Link></li>
                <li><Link href="#">Support</Link></li>
              </ul>
            </div>
          </Col>
          
          <Col xs={24} md={6}>
            <div className="footer-section">
              <Title level={5} className="footer-section-title">
                Company
              </Title>
              <ul className="footer-links">
                <li><Link href="#">About Us</Link></li>
                <li><Link href="#">Careers</Link></li>
                <li><Link href="#">Privacy Policy</Link></li>
                <li><Link href="#">Terms of Service</Link></li>
                <li><Link href="#">Contact</Link></li>
              </ul>
            </div>
          </Col>
        </Row>
        
        <Divider className="footer-divider" />
        
        <div className="footer-bottom">
          <Row justify="space-between" align="middle">
            <Col xs={24} md={12}>
              <Paragraph className="copyright">
                © {currentYear} Todo4AI. All rights reserved.
              </Paragraph>
            </Col>
            <Col xs={24} md={12}>
              <Paragraph className="made-with-love">
                Made with <HeartFilled className="heart-icon" /> for productivity enthusiasts
              </Paragraph>
            </Col>
          </Row>
        </div>
      </div>
    </AntFooter>
  );
};

export default Footer;
