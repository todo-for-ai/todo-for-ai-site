import React from 'react';
import { Layout, Row, Col, Typography, Space, Divider } from 'antd';
import {
  GithubOutlined,
  TwitterOutlined,
  LinkedinOutlined,
  MailOutlined,
  HeartFilled
} from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import './Footer.css';

const { Footer: AntFooter } = Layout;
const { Title, Paragraph, Link } = Typography;

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <AntFooter className="site-footer">
      <div className="footer-content">
        <Row gutter={[48, 32]}>
          <Col xs={24} md={8}>
            <div className="footer-brand">
              <Title level={3} className="footer-logo">
                {t('footer.brand.title')}
              </Title>
              <Paragraph className="footer-description">
                {t('footer.brand.description')}
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
                {t('footer.sections.product.title')}
              </Title>
              <ul className="footer-links">
                <li><Link href="#features">{t('footer.sections.product.links.features')}</Link></li>
                <li><Link href="#how-it-works">{t('footer.sections.product.links.howItWorks')}</Link></li>
                <li><Link href="https://todo4ai.org/" target="_blank">{t('footer.sections.product.links.getStarted')}</Link></li>
                <li><Link href="#">{t('footer.sections.product.links.pricing')}</Link></li>
                <li><Link href="#">{t('footer.sections.product.links.api')}</Link></li>
              </ul>
            </div>
          </Col>
          
          <Col xs={24} md={5}>
            <div className="footer-section">
              <Title level={5} className="footer-section-title">
                {t('footer.sections.resources.title')}
              </Title>
              <ul className="footer-links">
                <li><Link href="#">{t('footer.sections.resources.links.documentation')}</Link></li>
                <li><Link href="#">{t('footer.sections.resources.links.tutorials')}</Link></li>
                <li><Link href="#">{t('footer.sections.resources.links.blog')}</Link></li>
                <li><Link href="#">{t('footer.sections.resources.links.community')}</Link></li>
                <li><Link href="#">{t('footer.sections.resources.links.support')}</Link></li>
              </ul>
            </div>
          </Col>
          
          <Col xs={24} md={6}>
            <div className="footer-section">
              <Title level={5} className="footer-section-title">
                {t('footer.sections.company.title')}
              </Title>
              <ul className="footer-links">
                <li><Link href="#">{t('footer.sections.company.links.about')}</Link></li>
                <li><Link href="#">{t('footer.sections.company.links.careers')}</Link></li>
                <li><Link href="#">{t('footer.sections.company.links.privacy')}</Link></li>
                <li><Link href="#">{t('footer.sections.company.links.terms')}</Link></li>
                <li><Link href="#">{t('footer.sections.company.links.contact')}</Link></li>
              </ul>
            </div>
          </Col>
        </Row>
        
        <Divider className="footer-divider" />
        
        <div className="footer-bottom">
          <Row justify="space-between" align="middle">
            <Col xs={24} md={12}>
              <Paragraph className="copyright">
                {t('footer.copyright', { year: currentYear })}
              </Paragraph>
            </Col>
            <Col xs={24} md={12}>
              <Paragraph className="made-with-love">
                {t('footer.madeWithLove')}
              </Paragraph>
            </Col>
          </Row>
        </div>
      </div>
    </AntFooter>
  );
};

export default Footer;
