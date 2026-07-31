import React from 'react';
import { ListChecks, Target } from 'lucide-react';

interface AgendaObjective {
  title: string;
  desc?: string;
}

interface AgendaSlideProps {
  title: string;
  subtitle?: string;
  objectives: AgendaObjective[];
  /** 右上角徽章文案，例如 "5 目标" */
  objectiveCountLabel?: string;
}

// 议程/学习目标页：标题 + 目标卡片网格（编号 + 标题 + 描述）
export const AgendaSlide: React.FC<AgendaSlideProps> = ({
  title,
  subtitle,
  objectives,
  objectiveCountLabel,
}) => (
  <div className="space-y-6 max-w-4xl">
    <div className="flex items-start justify-between gap-4">
      <div>
        <div className="inline-flex items-center space-x-2 px-2.5 py-1 rounded-md bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-[11px] font-bold mb-2">
          <Target className="h-3.5 w-3.5" />
          <span>今日学习目标</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">{title}</h2>
        {subtitle && <p className="text-xs sm:text-sm text-indigo-300 mt-1">{subtitle}</p>}
      </div>
      {objectiveCountLabel && (
        <span className="shrink-0 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-200 text-xs font-bold">
          {objectiveCountLabel}
        </span>
      )}
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      {objectives.map((obj, i) => (
        <div
          key={i}
          className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80 flex items-start space-x-3"
        >
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-700 text-white font-extrabold text-sm flex items-center justify-center shrink-0">
            {i + 1}
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="font-bold text-sm text-white flex items-center space-x-1.5">
              <ListChecks className="h-3.5 w-3.5 text-indigo-400 shrink-0" />
              <span>{obj.title}</span>
            </h4>
            {obj.desc && (
              <p className="text-[11px] text-slate-400 mt-1 leading-snug">{obj.desc}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  </div>
);
