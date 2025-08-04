import React from 'react';
import { Layout, Menu, Button } from 'antd';
import { GithubOutlined, MenuOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import './Header.css';

const { Header: AntHeader } = Layout;

const Header: React.FC = () => {
  const { t } = useTranslation();

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
    {
      key: 'github',
      label: (
        <a
          href="https://github.com/cc11001100/todo-for-ai"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubOutlined /> {t('header.menu.github')}
        </a>
      ),
    },
  ];

  return (
    <AntHeader className="site-header">
      <div className="header-content">
        <div className="logo">
          <h1>{t('header.logo')}</h1>
          <span className="tagline">{t('header.tagline')}</span>
        </div>

        <Menu
          mode="horizontal"
          items={menuItems}
          className="header-menu"
          theme="light"
        />

        <div className="header-actions">
          <LanguageSwitcher />
          <Button
            type="primary"
            size="large"
            href="https://todo4ai.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('header.getStarted')}
          </Button>
        </div>
      </div>
    </AntHeader>
  );
};

export default Header;
