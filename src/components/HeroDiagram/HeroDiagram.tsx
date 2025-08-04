import React from 'react';
import './HeroDiagram.css';

const HeroDiagram: React.FC = () => {
  const aiEditors = [
    { name: 'Cursor', image: '/images/ai-editors/cursor.png' },
    { name: 'TRAE', image: '/images/ai-editors/trae.png' },
    { name: 'Windsurf', image: '/images/ai-editors/windsurf.png' },
    { name: 'GitHub Copilot', image: '/images/ai-editors/copilot.png' },
    { name: 'Replit', image: '/images/ai-editors/replit.png' },
    { name: 'V0', image: '/images/ai-editors/v0.png' },
  ];

  // 计算从中心到每个AI编辑器的贝塞尔曲线路径
  const getArrowPath = (index: number) => {
    const centerX = 250; // 容器中心X
    const centerY = 250; // 容器中心Y

    // 计算目标位置（基于CSS中的位置）
    const positions = [
      { x: centerX - 141, y: centerY - 141 }, // Cursor
      { x: centerX - 200, y: centerY - 70 },  // TRAE
      { x: centerX - 200, y: centerY + 0 },   // Windsurf
      { x: centerX - 200, y: centerY + 70 },  // GitHub Copilot
      { x: centerX - 141, y: centerY + 141 }, // Replit
      { x: centerX + 0, y: centerY + 200 },   // V0
    ];

    const target = positions[index];

    // 计算控制点，创建平滑的曲线
    const controlX = centerX + (target.x - centerX) * 0.5;
    const controlY = centerY + (target.y - centerY) * 0.3;

    return `M ${centerX} ${centerY} Q ${controlX} ${controlY} ${target.x} ${target.y}`;
  };

  return (
    <div className="hero-diagram">
      {/* 中心Todo for AI logo */}
      <div className="todo-logo-section">
        <div className="todo-logo-container">
          <img
            src="https://todo4ai.org/todo-for-ai-logo.png"
            alt="Todo for AI"
            className="todo-logo"
          />
          <div className="todo-logo-glow"></div>
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
        </defs>
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
              <div className="ai-editor-icon">
                <img src={editor.image} alt={editor.name} />
              </div>
              <span className="ai-editor-name">{editor.name}</span>
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
