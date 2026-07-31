import React from 'react';
import { Wrench } from 'lucide-react';

interface Tool {
  name: string;
  category: string;
  iconColor?: string;
  logoText?: string;
}

interface ToolchainBadgeWallProps {
  tools: Tool[];
  title?: string;
}

// 按类别分配色调
const categoryTone = (category: string): { badge: string; ring: string; text: string } => {
  const map: Record<string, { badge: string; ring: string; text: string }> = {
    default: { badge: 'bg-indigo-500/15 text-indigo-300', ring: 'ring-indigo-500/30', text: 'text-indigo-300' },
  };
  const key = category.toLowerCase();
  if (/构建|build|tool|工具/.test(key)) return { badge: 'bg-amber-500/15 text-amber-300', ring: 'ring-amber-500/30', text: 'text-amber-300' };
  if (/框架|frame|lib|库/.test(key)) return { badge: 'bg-indigo-500/15 text-indigo-300', ring: 'ring-indigo-500/30', text: 'text-indigo-300' };
  if (/样式|style|css|ui/.test(key)) return { badge: 'bg-violet-500/15 text-violet-300', ring: 'ring-violet-500/30', text: 'text-violet-300' };
  if (/语言|lang|core|核心/.test(key)) return { badge: 'bg-emerald-500/15 text-emerald-300', ring: 'ring-emerald-500/30', text: 'text-emerald-300' };
  if (/测试|test/.test(key)) return { badge: 'bg-rose-500/15 text-rose-300', ring: 'ring-rose-500/30', text: 'text-rose-300' };
  if (/数据|data|db/.test(key)) return { badge: 'bg-cyan-500/15 text-cyan-300', ring: 'ring-cyan-500/30', text: 'text-cyan-300' };
  return map.default;
};

// 工具链徽章墙：一组工具徽章卡片，hover 放大，徽章显示首字母 + 名称 + 类别标签
export const ToolchainBadgeWall: React.FC<ToolchainBadgeWallProps> = ({ tools, title }) => {
  return (
    <div className="space-y-4">
      <style>{`
        @keyframes toolchain-badge-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        @keyframes toolchain-badge-pop {
          0% { transform: scale(0.9); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
      `}</style>
      {title && (
        <div className="flex items-center space-x-2">
          <Wrench className="h-4 w-4 text-indigo-400" />
          <h3 className="text-sm font-bold text-white">{title}</h3>
        </div>
      )}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {tools.map((tool, i) => {
          const tone = categoryTone(tool.category);
          const initial = (tool.logoText || tool.name).charAt(0).toUpperCase();
          return (
            <div
              key={`${tool.name}-${i}`}
              className="group relative p-4 rounded-xl bg-slate-800/60 border border-slate-700/80 hover:border-indigo-500/50 hover:bg-slate-800 transition-all duration-300 hover:scale-[1.04] hover:-translate-y-1 cursor-default"
              style={{ animation: `toolchain-badge-pop 0.4s ease-out ${i * 0.05}s both` }}
            >
              <div className="flex flex-col items-center text-center space-y-2">
                <div
                  className={`h-12 w-12 rounded-xl bg-slate-900/80 ring-1 ${tone.ring} flex items-center justify-center text-lg font-black ${tone.text}`}
                  style={{ animation: `toolchain-badge-float 3s ease-in-out ${i * 0.2}s infinite` }}
                >
                  {initial}
                </div>
                <div className="text-xs font-bold text-white">{tool.name}</div>
                <span className={`inline-block text-[10px] font-bold px-2 py-0.5 rounded ${tone.badge}`}>
                  {tool.category}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
