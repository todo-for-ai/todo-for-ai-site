import React, { useState } from 'react';
import { MessageOutlined, CloseOutlined } from '@ant-design/icons';
import './FloatingCommunity.css';

const FloatingCommunity: React.FC = () => {
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
    setIsExpanded(!isExpanded);
  };

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
        <span className="floating-text">AI交流群</span>
      </div>

      {/* 悬浮显示的二维码 */}
      {(isHovered || isExpanded) && (
        <div className={`qr-popup ${isExpanded ? 'expanded' : ''}`}>
          <div className="qr-popup-header">
            <h4>加入AI交流群</h4>
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
              alt="微信群二维码"
              className="qr-image"
            />
            <p className="qr-description">
              扫描二维码加入微信群<br />
              反馈问题和建议
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default FloatingCommunity;
