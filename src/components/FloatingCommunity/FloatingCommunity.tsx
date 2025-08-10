import React, { useState } from 'react';
import { MessageOutlined, CloseOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import './FloatingCommunity.css';

const FloatingCommunity: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsExpanded(false);
  };

  const handleClick = () => {
    if (i18n.language.startsWith('zh')) {
      setIsExpanded(!isExpanded);
    } else {
      // 英文用户直接跳转到TG群
      window.open(t('community.floating.linkUrl'), '_blank');
    }
  };

  const isChineseLanguage = i18n.language.startsWith('zh');

  return (
    <div 
      className="floating-community"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* 主按钮 */}
      <div
        className={`floating-button ${isHovered ? 'hovered' : ''}`}
        onClick={handleClick}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            handleClick();
          }
        }}
      >
        <MessageOutlined className="floating-icon" />
        <span className="floating-text">{t('community.floating.title')}</span>
      </div>

      {/* 悬浮显示的内容 */}
      {(isHovered || isExpanded) && isChineseLanguage && (
        <div className={`qr-popup ${isExpanded ? 'expanded' : ''}`}>
          <div className="qr-popup-header">
            <h4>{t('community.floating.modalTitle')}</h4>
            {isExpanded && (
              <button
                className="close-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsExpanded(false);
                }}
                aria-label="关闭"
              >
                <CloseOutlined />
              </button>
            )}
          </div>
          <div className="qr-popup-content">
            <img
              src="/images/wechat-group-qr.png"
              alt={t('community.floating.qrAlt')}
              className="qr-image"
            />
            <p className="qr-description">
              {t('community.floating.description')}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default FloatingCommunity;
