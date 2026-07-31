import React from 'react';
import { Triangle } from 'lucide-react';

type Tone = 'indigo' | 'emerald' | 'amber' | 'rose' | 'violet' | 'cyan';

interface PyramidLevel {
  label: string;
  desc?: string;
  tone?: Tone;
  icon?: React.ComponentType<{ className?: string }>;
}

interface PyramidDiagramProps {
  levels: PyramidLevel[];
  title?: string;
  direction?: 'up' | 'down';
}

const TONE_BG: Record<Tone, { bg: string; border: string; text: string; icon: string }> = {
  indigo: { bg: 'bg-indigo-600/30', border: 'border-indigo-500/50', text: 'text-white', icon: 'text-indigo-300' },
  emerald: { bg: 'bg-emerald-600/30', border: 'border-emerald-500/50', text: 'text-white', icon: 'text-emerald-300' },
  amber: { bg: 'bg-amber-600/30', border: 'border-amber-500/50', text: 'text-white', icon: 'text-amber-300' },
  rose: { bg: 'bg-rose-600/30', border: 'border-rose-500/50', text: 'text-white', icon: 'text-rose-300' },
  violet: { bg: 'bg-violet-600/30', border: 'border-violet-500/50', text: 'text-white', icon: 'text-violet-300' },
  cyan: { bg: 'bg-cyan-600/30', border: 'border-cyan-500/50', text: 'text-white', icon: 'text-cyan-300' },
};

const W_MIN = 40; // 最窄边宽度 (%)
const W_MAX = 100; // 最宽边宽度 (%)

// 金字塔/层级图：levels 按视觉自上而下排列；direction 'up' 顶窄底宽，'down' 顶宽底窄
export const PyramidDiagram: React.FC<PyramidDiagramProps> = ({ levels, title, direction = 'up' }) => {
  const n = levels.length;
  const isUp = direction === 'up';
  // n+1 条边的宽度（从顶到底）
  const edges: number[] = [];
  for (let k = 0; k <= n; k++) {
    const frac = n === 0 ? 0 : k / n;
    if (isUp) {
      const apex = W_MIN * 0.4;
      edges.push(apex + (W_MAX - apex) * frac);
    } else {
      const apex = W_MIN * 0.4;
      edges.push(W_MAX - (W_MAX - apex) * frac);
    }
  }

  return (
    <div className="w-full">
      {title && (
        <div className="mb-4 flex items-center gap-2">
          <Triangle className="h-4 w-4 text-cyan-400" />
          <h3 className="text-sm font-bold text-white">{title}</h3>
        </div>
      )}
      <div className="flex flex-col items-center gap-1.5">
        {levels.map((level, i) => {
          const tone = level.tone ?? 'indigo';
          const t = TONE_BG[tone];
          const Icon = level.icon;
          const topW = edges[i];
          const botW = edges[i + 1];
          const divW = Math.max(topW, botW);
          let clipPath: string;
          if (topW <= botW) {
            // 上窄下宽
            const inset = ((1 - topW / botW) / 2) * 100;
            clipPath = `polygon(${inset}% 0, ${100 - inset}% 0, 100% 100%, 0% 100%)`;
          } else {
            // 上宽下窄
            const inset = ((1 - botW / topW) / 2) * 100;
            clipPath = `polygon(0% 0, 100% 0, ${100 - inset}% 100%, ${inset}% 100%)`;
          }
          return (
            <div key={i} className="flex w-full justify-center">
              <div
                className={`flex h-14 items-center justify-center gap-2 border ${t.border} ${t.bg} px-4 sm:h-16`}
                style={{ width: `${divW}%`, clipPath }}
              >
                {Icon && <Icon className={`h-4 w-4 shrink-0 ${t.icon}`} />}
                <div className="min-w-0 text-center">
                  <div className={`truncate text-xs font-bold sm:text-sm ${t.text}`}>{level.label}</div>
                  {level.desc && <div className="truncate text-[10px] text-slate-300/80">{level.desc}</div>}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
