import React from 'react';
import { useTranslation } from 'react-i18next';
import './HeroDiagram.css';

const HeroDiagram: React.FC = () => {
  const { t } = useTranslation();

  const aiEditors = [
    { name: 'Cursor', image: '/images/ai-editors/cursor.png', url: 'https://cursor.com/' },
    { name: 'TRAE', image: '/images/ai-editors/trae.png', url: 'https://trae.ai/' },
    { name: 'Windsurf', image: '/images/ai-editors/windsurf.png', url: 'https://codeium.com/windsurf' },
    { name: 'GitHub Copilot', image: '/images/ai-editors/copilot.png', url: 'https://github.com/features/copilot' },
    { name: 'Replit', image: '/images/ai-editors/replit.png', url: 'https://replit.com/' },
    { name: 'V0', image: '/images/ai-editors/v0.png', url: 'https://v0.dev/' },
  ];

  // 计算从中心到每个AI编辑器的贝塞尔曲线路径
  const getArrowPath = (index: number) => {
    const centerX = 250; // 容器中心X
    const centerY = 250; // 容器中心Y

    // 计算目标位置（基于新的半圆形拱卫布局）
    const positions = [
      { x: centerX - 220, y: centerY + 0 },   // Cursor - 180° (正左)
      { x: centerX - 190, y: centerY - 110 }, // TRAE - 150° (左上)
      { x: centerX - 110, y: centerY - 190 }, // Windsurf - 120° (上左)
      { x: centerX - 110, y: centerY + 190 }, // GitHub Copilot - 240° (下左)
      { x: centerX - 190, y: centerY + 110 }, // Replit - 210° (左下)
      { x: centerX - 155, y: centerY - 155 }, // V0 - 135° (左上角)
    ];

    const target = positions[index];

    // 计算控制点，创建平滑的曲线
    const controlX = centerX + (target.x - centerX) * 0.6;
    const controlY = centerY + (target.y - centerY) * 0.6;

    // 计算箭头终点，使其指向图标边缘而不是中心
    const distance = Math.sqrt((target.x - centerX) ** 2 + (target.y - centerY) ** 2);
    const iconRadius = 30; // 图标半径
    const endX = centerX + (target.x - centerX) * (distance - iconRadius) / distance;
    const endY = centerY + (target.y - centerY) * (distance - iconRadius) / distance;

    return `M ${centerX} ${centerY} Q ${controlX} ${controlY} ${endX} ${endY}`;
  };

  // 计算从开发者到Todo For AI的贝塞尔曲线路径
  const getDeveloperToTodoPath = () => {
    const centerX = 250; // Todo For AI中心X
    const centerY = 250; // Todo For AI中心Y
    const developerX = 370; // 开发者位置X (调整为距离两倍)
    const developerY = 250; // 开发者位置Y（垂直居中）

    // 创建平滑的贝塞尔曲线，从开发者指向Todo For AI
    // 为文字预留空间，使曲线稍微向上弯曲
    const controlX1 = developerX - 80; // 第一个控制点
    const controlY1 = developerY - 50; // 向上弯曲
    const controlX2 = centerX + 60; // 第二个控制点
    const controlY2 = centerY - 40; // 向上弯曲

    // 箭头终点稍微偏移，避免与Todo For AI图标重叠
    const endX = centerX + 45;
    const endY = centerY - 5;

    return `M ${developerX} ${developerY} C ${controlX1} ${controlY1}, ${controlX2} ${controlY2}, ${endX} ${endY}`;
  };

  // 计算文字在连接线上的位置
  const getDeveloperTextPosition = () => {
    const developerX = 370;
    const developerY = 250;
    const centerX = 250;
    const centerY = 250;

    // 文字位置在连接线的中点偏上方
    const textX = (developerX + centerX) / 2;
    const textY = (developerY + centerY) / 2 - 35; // 向上偏移

    return { x: textX, y: textY };
  };

  return (
    <div className="hero-diagram">
      {/* 中心Todo for AI logo */}
      <div className="todo-logo-section">
        <div className="todo-logo-container">
          <a
            href="https://todo4ai.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="todo-logo-link"
            title="Visit Todo4AI"
          >
            <img
              src="https://todo4ai.org/todo-for-ai-logo.png"
              alt="Todo for AI"
              className="todo-logo"
            />
            <div className="todo-logo-glow"></div>
          </a>
          <div className="todo-logo-label">Todo for AI</div>
        </div>
      </div>

      {/* 贝塞尔曲线箭头 */}
      <svg className="arrows-svg" viewBox="0 0 500 500">
        <defs>
          <marker
            id="arrowhead"
            markerWidth="10"
            markerHeight="7"
            refX="9"
            refY="3.5"
            orient="auto"
          >
            <polygon
              points="0 0, 10 3.5, 0 7"
              fill="rgba(255, 255, 255, 0.8)"
            />
          </marker>
          <marker
            id="developer-arrowhead"
            markerWidth="12"
            markerHeight="8"
            refX="11"
            refY="4"
            orient="auto"
          >
            <polygon
              points="0 0, 12 4, 0 8"
              fill="rgba(255, 255, 255, 0.9)"
            />
          </marker>
        </defs>

        {/* 从开发者到Todo For AI的连接线 */}
        <path
          d={getDeveloperToTodoPath()}
          stroke="rgba(255, 255, 255, 0.8)"
          strokeWidth="3"
          fill="none"
          markerEnd="url(#developer-arrowhead)"
          className="developer-arrow-path"
          strokeDasharray="10, 5"
        />

        {/* 连接线上的文字 */}
        <text
          x={getDeveloperTextPosition().x}
          y={getDeveloperTextPosition().y}
          textAnchor="middle"
          className="developer-connection-text"
          fill="rgba(255, 255, 255, 0.9)"
          fontSize="14"
          fontWeight="600"
        >
          {t('diagram.voiceInput')}
        </text>

        {aiEditors.map((editor, index) => (
          <path
            key={`arrow-${editor.name}`}
            d={getArrowPath(index)}
            stroke="rgba(255, 255, 255, 0.6)"
            strokeWidth="2"
            fill="none"
            markerEnd="url(#arrowhead)"
            className={`arrow-path arrow-${index}`}
            style={{
              '--delay': `${index * 0.3}s`,
            } as React.CSSProperties}
          />
        ))}
      </svg>

      {/* AI编辑器围绕布局 */}
      <div className="ai-editors-section">
        <div className="ai-editors-circle">
          {aiEditors.map((editor, index) => (
            <div
              key={editor.name}
              className={`ai-editor-item ai-editor-${index}`}
              style={{
                '--index': index,
                '--total': aiEditors.length,
              } as React.CSSProperties}
            >
              <a
                href={editor.url}
                target="_blank"
                rel="noopener noreferrer"
                className="ai-editor-link"
                title={`Visit ${editor.name}`}
              >
                <div className="ai-editor-icon">
                  <img src={editor.image} alt={editor.name} />
                </div>
                <span className="ai-editor-name">{editor.name}</span>
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* 右侧开发者小人 */}
      <div className="developer-section">
        <div className="developer-container">
          <div className="developer-icon">
            <svg viewBox="0 0 100 100" className="developer-svg">
              {/* 头部 */}
              <circle cx="50" cy="25" r="12" fill="#4A90E2" />

              {/* 身体 */}
              <rect x="42" y="35" width="16" height="25" rx="8" fill="#4A90E2" />

              {/* 手臂 */}
              <rect x="30" y="40" width="12" height="4" rx="2" fill="#4A90E2" />
              <rect x="58" y="40" width="12" height="4" rx="2" fill="#4A90E2" />

              {/* 腿部 */}
              <rect x="44" y="58" width="5" height="20" rx="2.5" fill="#4A90E2" />
              <rect x="51" y="58" width="5" height="20" rx="2.5" fill="#4A90E2" />

              {/* 笔记本电脑 */}
              <rect x="25" y="45" width="20" height="12" rx="1" fill="#333" />
              <rect x="26" y="46" width="18" height="8" rx="0.5" fill="#00FF00" opacity="0.8" />

              {/* 代码行 */}
              <line x1="28" y1="48" x2="35" y2="48" stroke="#00FF00" strokeWidth="0.5" />
              <line x1="28" y1="50" x2="40" y2="50" stroke="#00FF00" strokeWidth="0.5" />
              <line x1="28" y1="52" x2="33" y2="52" stroke="#00FF00" strokeWidth="0.5" />
            </svg>
          </div>
          <div className="developer-label">Developer</div>
        </div>
      </div>
    </div>
  );
};

export default HeroDiagram;
