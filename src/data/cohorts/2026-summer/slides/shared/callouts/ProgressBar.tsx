import React from 'react';

interface Milestone {
  label: string;
  /** 里程碑对应的数值（与 current/total 同量纲） */
  value: number;
}

interface ProgressBarProps {
  current: number;
  total: number;
  label?: string;
  showPercentage?: boolean;
  milestones?: Milestone[];
}

// 进度条/里程碑条：横向进度条 + 可选里程碑节点 + 百分比
export const ProgressBar: React.FC<ProgressBarProps> = ({
  current,
  total,
  label,
  showPercentage = true,
  milestones = [],
}) => {
  const pct = total > 0 ? Math.min(100, Math.max(0, (current / total) * 100)) : 0;

  return (
    <div className="space-y-2 max-w-3xl">
      {(label || showPercentage) && (
        <div className="flex items-center justify-between text-xs">
          {label && <span className="text-slate-300 font-bold">{label}</span>}
          {showPercentage && <span className="text-indigo-300 font-mono font-bold">{Math.round(pct)}%</span>}
        </div>
      )}
      <div className="relative h-3 rounded-full bg-slate-800 border border-slate-700/80 overflow-visible">
        <div
          className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 transition-all duration-700 ease-out"
          style={{ width: `${pct}%` }}
        />
        {milestones.map((m, i) => {
          const mp = total > 0 ? Math.min(100, Math.max(0, (m.value / total) * 100)) : 0;
          const reached = current >= m.value;
          return (
            <div
              key={i}
              className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 flex flex-col items-center"
              style={{ left: `${mp}%` }}
            >
              <span
                className={`h-3 w-3 rounded-full border-2 ${
                  reached ? 'bg-emerald-400 border-emerald-200' : 'bg-slate-700 border-slate-500'
                }`}
              />
              <span className="mt-1.5 text-[10px] text-slate-400 whitespace-nowrap">{m.label}</span>
            </div>
          );
        })}
      </div>
      <div className="text-[11px] text-slate-400 font-mono">
        {current} / {total}
      </div>
    </div>
  );
};
