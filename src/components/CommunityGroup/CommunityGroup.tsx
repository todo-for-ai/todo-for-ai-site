import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { MessageOutlined, WechatOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import './CommunityGroup.css';

const CommunityGroup: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const isChineseLanguage = i18n.language.startsWith('zh');

  const handleJoinCommunity = () => {
    if (isChineseLanguage) {
      showModal();
    } else {
      // 英文用户直接跳转到TG群
      window.open(t('community.modal.linkUrl'), '_blank');
    }
  };

  return (
    <div className="community-group">
      <div className="community-content">
        <div className="community-text">
          <h3>{t('community.title')}</h3>
          <p>{t('community.description')}</p>
        </div>
        <Button
          type="primary"
          icon={<MessageOutlined />}
          onClick={handleJoinCommunity}
          className="join-group-btn"
          size="large"
        >
          {t('community.joinGroup')}
        </Button>
      </div>

      {isChineseLanguage && (
        <Modal
          title={
            <div className="modal-title">
              <WechatOutlined style={{ color: '#07c160', marginRight: 8 }} />
              {t('community.modal.title')}
            </div>
          }
          open={isModalVisible}
          onCancel={handleCancel}
          footer={null}
          centered
          className="community-modal"
        >
          <div className="qr-content">
            <img
              src="/images/wechat-group-qr.png"
              alt={t('community.modal.qrAlt')}
              className="qr-code"
            />
            <p className="qr-description">{t('community.modal.description')}</p>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default CommunityGroup;
