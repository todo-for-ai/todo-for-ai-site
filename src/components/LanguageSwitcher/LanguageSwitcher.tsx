import React from 'react';
import { Select } from 'antd';
import { GlobalOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import './LanguageSwitcher.css';

const { Option } = Select;

const LanguageSwitcher: React.FC = () => {
  const { i18n, t } = useTranslation();

  const handleLanguageChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  const languages = [
    {
      code: 'en',
      name: t('language.english'),
      flag: '🇺🇸'
    },
    {
      code: 'zh',
      name: t('language.chinese'),
      flag: '🇨🇳'
    }
  ];

  return (
    <div className="language-switcher">
      <Select
        value={i18n.language}
        onChange={handleLanguageChange}
        className="language-select"
        suffixIcon={<GlobalOutlined />}
        size="middle"
        popupClassName="language-dropdown"
      >
        {languages.map((lang) => (
          <Option key={lang.code} value={lang.code}>
            <span className="language-option">
              <span className="language-flag">{lang.flag}</span>
              <span className="language-name">{lang.name}</span>
            </span>
          </Option>
        ))}
      </Select>
    </div>
  );
};

export default LanguageSwitcher;
