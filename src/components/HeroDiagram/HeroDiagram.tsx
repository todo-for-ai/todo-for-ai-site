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
    { name: 'Kiro', image: '/images/ai-editors/kiro.svg', url: 'https://kiro.dev/' },
  ];

  // 正确计算SVG坐标 - 考虑SVG的left: -220px偏移
  const createConnectionPaths = () => {
    // SVG的CSS定位：left: -220px，这意味着SVG的原点(0,0)对应容器的(-220, 0)
    // 容器宽度800px，SVG viewBox "0 0 1200 800"

    // Todo for AI在SVG中的位置（中心位置，考虑translateX(100px)偏移）
    const todoX = 600; // 中心位置 + 100px偏移
    const todoY = 405; // 垂直中心 - 15px（与箭头对齐）+ 40px（向上移动）

    // 箭头终点位置（向右移动150px以缩短箭头）
    const arrowEndX = todoX + 35 + 150;

    // 开发者在SVG中的位置
    // CSS: right: -220px, top: 50%
    // 转换为SVG坐标：容器宽度800px + 220px + 200px = 1220px，垂直中心400px - 15px + 40px
    const developerX = 1220;
    const developerY = 405;

    // AI编辑器的CSS位置转换为SVG坐标
    // 基于CSS中的位置计算，考虑SVG的left: -220px偏移
    // CSS位置 + 220px(SVG偏移) = SVG坐标
    const editorPositions = [
      { x: 230 + 220, y: 150 + 50, index: 0 }, // Cursor
      { x: 179 + 220, y: 250 + 50, index: 1 }, // TRAE
      { x: 160 + 220, y: 350 + 50, index: 2 }, // Windsurf
      { x: 160 + 220, y: 450 + 50, index: 3 }, // GitHub Copilot
      { x: 179 + 220, y: 550 + 50, index: 4 }, // Replit
      { x: 230 + 220, y: 650 + 50, index: 5 }  // Kiro
    ];

    // 从Todo for AI指向各个AI编辑器的箭头（长度扩展1.5倍 + 20px）
    const centerArrows = editorPositions.map((pos) => {
      // 计算原始箭头的向量
      const deltaX = pos.x - todoX;
      const deltaY = pos.y - todoY;

      // 计算箭头长度
      const length = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

      // 计算单位向量
      const unitX = deltaX / length;
      const unitY = deltaY / length;

      // 计算新的终点位置，使箭头长度扩展1.5倍再加20px
      const newEndX = todoX + deltaX * 1.5 + unitX * 20;
      const newEndY = todoY + deltaY * 1.5 + unitY * 20;

      return {
        id: `center-arrow-${pos.index}`,
        path: `M ${todoX} ${todoY} L ${newEndX} ${newEndY}`,
        delay: 0  // 删除动画延迟，所有箭头同时出现
      };
    });

    // 从开发者指向Todo for AI的语音输入箭头（终点向右移动150px）
    const developerArrow = {
      id: 'developer-arrow',
      path: `M ${developerX} ${developerY} L ${arrowEndX} ${todoY}`,
      delay: 0
    };

    return { centerArrows, developerArrow };
  };

  const { centerArrows, developerArrow } = createConnectionPaths();

  return (
    <div className="hero-diagram">
      {/* 重新设计的SVG箭头层 - 扩大viewBox以包含开发者位置和所有箭头 */}
      <svg className="connections-svg" viewBox="0 0 1400 900">
        <defs>
          {/* 重新设计的箭头标记 */}
          <marker
            id="flow-arrow"
            markerWidth="12"
            markerHeight="8"
            refX="11"
            refY="4"
            orient="auto"
          >
            <polygon
              points="0 0, 12 4, 0 8"
              fill="rgba(34, 197, 94, 0.9)"
              stroke="rgba(34, 197, 94, 0.4)"
              strokeWidth="0.5"
            />
          </marker>
          
          {/* 开发者箭头标记 - 语音输入箭头 */}
          <marker
            id="developer-arrow-marker"
            markerWidth="14"
            markerHeight="10"
            refX="13"
            refY="5"
            orient="auto"
          >
            <polygon
              points="0 0, 14 5, 0 10"
              fill="rgba(34, 197, 94, 0.95)"
              stroke="rgba(34, 197, 94, 0.4)"
              strokeWidth="0.5"
            />
          </marker>

          {/* 渐变效果 */}
          <linearGradient id="arrowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255, 255, 255, 0.8)" />
            <stop offset="100%" stopColor="rgba(255, 255, 255, 0.4)" />
          </linearGradient>
        </defs>

        {/* 重新编写：Todo for AI到各个AI编辑器的箭头 */}
        {centerArrows.map((arrow) => (
          <g key={arrow.id}>
            {/* 发光效果 */}
            <path
              d={arrow.path}
              stroke="rgba(34, 197, 94, 0.4)"
              strokeWidth="6"
              fill="none"
              className="arrow-glow"
              style={{ '--delay': `${arrow.delay}s` } as React.CSSProperties}
            />
            {/* 主箭头线 */}
            <path
              d={arrow.path}
              stroke="rgba(34, 197, 94, 0.9)"
              strokeWidth="2"
              fill="none"
              markerEnd="url(#flow-arrow)"
              className="arrow-line"
              style={{ '--delay': `${arrow.delay}s` } as React.CSSProperties}
            />
          </g>
        ))}

        {/* 重新编写：开发者到Todo for AI的语音输入箭头 */}
        <g>
          {/* 发光效果 */}
          <path
            d={developerArrow.path}
            stroke="rgba(34, 197, 94, 0.4)"
            strokeWidth="8"
            fill="none"
            className="developer-glow"
            strokeDasharray="15, 10"
          />
          {/* 主连接线 */}
          <path
            d={developerArrow.path}
            stroke="rgba(34, 197, 94, 0.9)"
            strokeWidth="3"
            fill="none"
            markerEnd="url(#developer-arrow-marker)"
            className="developer-line"
            strokeDasharray="15, 10"
          />

          {/* 语音输入标签 - 沿箭头路径中点放置 */}
          <text
            x={(1220 + 785) / 2}
            y={(385 + 385) / 2 - 20}
            textAnchor="middle"
            className="connection-label"
            fill="rgba(156, 163, 175, 0.9)"
            fontSize="14"
            fontWeight="600"
          >
            {t('diagram.voiceInput', 'Markdown需求配合语音输入法')}
          </text>
        </g>
      </svg>

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
              src="/images/favicon-round.png"
              alt="Todo for AI"
              className="todo-logo"
            />
            <div className="todo-logo-glow"></div>
          </a>
        </div>
        <div className="todo-logo-label">Todo for AI</div>
      </div>

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
          <a
            href="https://github.com/CC11001100"
            target="_blank"
            rel="noopener noreferrer"
            className="developer-link"
            title="Visit Developer's GitHub"
          >
            <div className="developer-icon">
              <img
                src="/devloper.png"
                alt="Developer"
                className="developer-image"
              />
            </div>
            <div className="developer-label">{t('diagram.developer')}</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroDiagram;
