import React from 'react';
import { GitBranch, Star, GitFork, BookMarked } from 'lucide-react';

interface RepoInfo {
  name: string;
  owner: string;
  description: string;
  stars: number;
  forks: number;
  language: string;
  languageColor?: string;
  topics?: string[];
}

interface RepoFacadeShowcaseProps {
  repo: RepoInfo;
  title?: string;
}

const fmtNum = (n: number) =>
  n >= 1000 ? `${(n / 1000).toFixed(1)}k` : `${n}`;

// 仓库门面展示：GitHub/Gitee 风格仓库卡片
export const RepoFacadeShowcase: React.FC<RepoFacadeShowcaseProps> = ({ repo, title }) => {
  return (
    <div className="space-y-4">
      <style>{`
        @keyframes repo-facade-rise {
          0% { transform: translateY(10px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        @keyframes repo-facade-shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>
      {title && (
        <div className="flex items-center space-x-2">
          <BookMarked className="h-4 w-4 text-indigo-400" />
          <h3 className="text-sm font-bold text-white">{title}</h3>
        </div>
      )}

      <div
        className="relative rounded-2xl bg-slate-800/50 border border-slate-700/80 overflow-hidden"
        style={{ animation: 'repo-facade-rise 0.5s ease-out both' }}
      >
        {/* 顶部渐变条 */}
        <div
          className="h-1 w-full bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-500"
          style={{
            backgroundImage: 'linear-gradient(90deg, #6366f1, #8b5cf6, #06b6d4, #6366f1)',
            backgroundSize: '200% 100%',
            animation: 'repo-facade-shimmer 3s linear infinite',
          }}
        />

        <div className="p-5">
          {/* 路径 */}
          <div className="flex items-center space-x-1.5 text-sm">
            <GitBranch className="h-4 w-4 text-slate-400 shrink-0" />
            <span className="font-bold text-slate-400">{repo.owner}</span>
            <span className="text-slate-600">/</span>
            <span className="font-bold text-indigo-300">{repo.name}</span>
            <span className="ml-2 text-[10px] px-2 py-0.5 rounded-full border border-slate-600 text-slate-400 font-bold">
              Public
            </span>
          </div>

          {/* 描述 */}
          <p className="mt-3 text-xs text-slate-300 leading-relaxed">{repo.description}</p>

          {/* Topics */}
          {repo.topics && repo.topics.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-1.5">
              {repo.topics.map((t, i) => (
                <span
                  key={i}
                  className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20"
                >
                  {t}
                </span>
              ))}
            </div>
          )}

          {/* 底部统计 */}
          <div className="mt-4 flex flex-wrap items-center gap-4 text-[11px] text-slate-400 border-t border-slate-700/60 pt-3">
            <span className="flex items-center space-x-1.5">
              <span
                className="h-2.5 w-2.5 rounded-full"
                style={{ backgroundColor: repo.languageColor || '#6366f1' }}
              />
              <span className="font-bold text-slate-300">{repo.language}</span>
            </span>
            <span className="flex items-center space-x-1 hover:text-amber-300 transition-colors cursor-default">
              <Star className="h-3.5 w-3.5" />
              <span className="font-bold text-slate-300">{fmtNum(repo.stars)}</span>
            </span>
            <span className="flex items-center space-x-1 hover:text-cyan-300 transition-colors cursor-default">
              <GitFork className="h-3.5 w-3.5" />
              <span className="font-bold text-slate-300">{fmtNum(repo.forks)}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
