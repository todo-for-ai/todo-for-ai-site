import React from 'react';
import { Layout, Menu, Button } from 'antd';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import GitHubBadge from '../GitHubBadge/GitHubBadge';
import './Header.css';

const { Header: AntHeader } = Layout;

const Header: React.FC = () => {
  const { t } = useTranslation();

  const handleLogoClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const menuItems = [
    {
      key: 'features',
      label: <a href="#features">{t('header.menu.features')}</a>,
    },
    {
      key: 'how-it-works',
      label: <a href="#how-it-works">{t('header.menu.howItWorks')}</a>,
    },
    {
      key: 'docs',
      label: <a href="#docs">{t('header.menu.documentation')}</a>,
    },
  ];

  return (
    <AntHeader className="site-header">
      <div className="header-content">
        <div className="logo" onClick={handleLogoClick}>
          <img src="/images/favicon-round.png" alt="Todo4AI Logo" className="logo-image" />
          <div className="logo-text">
            <h1>{t('header.logo')}</h1>
            <span className="tagline">{t('header.tagline')}</span>
          </div>
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
            {t('header.getStarted')}
          </Button>
          <LanguageSwitcher />
          <GitHubBadge repo="todo-for-ai/todo-for-ai" />
        </div>
      </div>
    </AntHeader>
  );
};

export default Header;
