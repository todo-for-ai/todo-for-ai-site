import React from 'react';
import { Button } from 'antd';
import { MessageOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import './CommunityGroup.css';

const CommunityGroup: React.FC = () => {
  const { t, i18n } = useTranslation();

  const isChineseLanguage = i18n.language.startsWith('zh');

  const handleJoinCommunity = () => {
    if (!isChineseLanguage) {
      // 英文用户直接跳转到TG群
      window.open(t('community.modal.linkUrl'), '_blank');
    }
    // 中文用户不需要处理，二维码直接显示在页面上
  };

  return (
    <div className="community-group">
      <div className="community-content">
        <div className="community-text">
          <h3>{t('community.title')}</h3>
          <p>{t('community.description')}</p>
          {isChineseLanguage && (
            <div className="qr-display">
              <img
                src="/images/wechat-group-qr.png"
                alt={t('community.modal.qrAlt')}
                className="qr-code-inline"
              />
              <p className="qr-description-inline">{t('community.modal.description')}</p>
            </div>
          )}
        </div>
        {!isChineseLanguage && (
          <Button
            type="primary"
            icon={<MessageOutlined />}
            onClick={handleJoinCommunity}
            className="join-group-btn"
            size="large"
          >
            {t('community.joinGroup')}
          </Button>
        )}
      </div>


    </div>
  );
};

export default CommunityGroup;
