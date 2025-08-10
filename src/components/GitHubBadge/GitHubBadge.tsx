import React, { useState, useEffect } from 'react';
import { GithubOutlined, StarOutlined } from '@ant-design/icons';
import './GitHubBadge.css';

interface GitHubBadgeProps {
  repo: string; // 格式: "owner/repo"
  className?: string;
}

interface GitHubRepoData {
  stargazers_count: number;
}

const GitHubBadge: React.FC<GitHubBadgeProps> = ({ repo, className = '' }) => {
  const [stars, setStars] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStars = async () => {
      try {
        // 检查缓存
        const cacheKey = `github-stars-${repo}`;
        const cached = localStorage.getItem(cacheKey);
        const cacheTime = localStorage.getItem(`${cacheKey}-time`);
        
        // 如果缓存存在且未过期（30分钟）
        if (cached && cacheTime) {
          const cacheAge = Date.now() - parseInt(cacheTime);
          if (cacheAge < 30 * 60 * 1000) { // 30分钟
            setStars(parseInt(cached));
            setLoading(false);
            return;
          }
        }

        // 获取新数据
        const response = await fetch(`https://api.github.com/repos/${repo}`);
        if (response.ok) {
          const data: GitHubRepoData = await response.json();
          setStars(data.stargazers_count);
          
          // 缓存数据
          localStorage.setItem(cacheKey, data.stargazers_count.toString());
          localStorage.setItem(`${cacheKey}-time`, Date.now().toString());
        } else {
          console.warn('Failed to fetch GitHub stars');
        }
      } catch (error) {
        console.warn('Error fetching GitHub stars:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStars();
  }, [repo]);

  const formatStars = (count: number): string => {
    if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}k`;
    }
    return count.toString();
  };

  const handleClick = () => {
    window.open(`https://github.com/${repo}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div 
      className={`github-badge ${className}`}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleClick();
        }
      }}
    >
      <div className="github-badge-content">
        <GithubOutlined className="github-icon" />
        {!loading && stars !== null && (
          <div className="stars-count">
            <StarOutlined className="star-icon" />
            <span className="stars-number">{formatStars(stars)}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default GitHubBadge;
