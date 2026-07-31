import React from 'react';
import { Flag, Milestone } from 'lucide-react';

interface TimelineMilestone {
  /** 节点标签，如 "Day 1" 或 "D7" */
  day: string;
  /** 事件标题 */
  event: string;
  /** 事件描述，可选 */
  desc?: string;
  /** 是否高亮（例如当天或重点里程碑），默认 false */
  highlight?: boolean;
}

interface TimelineSlideProps {
  title: string;
  subtitle?: string;
  milestones: TimelineMilestone[];
  takeaway?: string;
}

// 里程碑时间线页：横向时间线 + 节点卡片
export const TimelineSlide: React.FC<TimelineSlideProps> = ({
  title,
  subtitle,
  milestones,
  takeaway,
}) => (
  <div className="space-y-6 max-w-5xl">
    <div>
      <div className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-md bg-amber-500/15 border border-amber-500/30 text-amber-300 text-[11px] font-bold mb-2">
        <Milestone className="h-3.5 w-3.5" />
        <span>里程碑</span>
      </div>
      <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">{title}</h2>
      {subtitle && <p className="text-xs sm:text-sm text-indigo-300 mt-1">{subtitle}</p>}
    </div>
    <div className="relative pt-4">
      {/* 横向连接线 */}
      <div className="absolute top-7 left-4 right-4 h-0.5 bg-gradient-to-r from-indigo-500/40 via-indigo-500/60 to-emerald-500/40"></div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 relative">
        {milestones.map((m, i) => (
          <div key={i} className="flex flex-col items-center text-center space-y-2">
            <div
              className={`h-6 w-6 rounded-full border-2 flex items-center justify-center ${
                m.highlight
                  ? 'bg-emerald-500 border-emerald-300 shadow-lg shadow-emerald-500/40'
                  : 'bg-slate-800 border-indigo-400'
              }`}
            >
              <Flag className={`h-2.5 w-2.5 ${m.highlight ? 'text-white' : 'text-indigo-300'}`} />
            </div>
            <div
              className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                m.highlight
                  ? 'bg-emerald-500/20 text-emerald-300'
                  : 'bg-indigo-500/20 text-indigo-300'
              }`}
            >
              {m.day}
            </div>
            <div
              className={`p-2.5 rounded-xl border text-[11px] leading-snug w-full ${
                m.highlight
                  ? 'bg-emerald-950/50 border-emerald-500/40 text-emerald-100'
                  : 'bg-slate-800/70 border-slate-700/70 text-slate-200'
              }`}
            >
              <div className="font-bold">{m.event}</div>
              {m.desc && <div className="text-slate-400 mt-1">{m.desc}</div>}
            </div>
          </div>
        ))}
      </div>
    </div>
    {takeaway && (
      <div className="p-3 rounded-xl bg-indigo-950/60 border border-indigo-800/60 text-xs text-indigo-200 flex items-center space-x-2">
        <Milestone className="h-4 w-4 text-amber-400 shrink-0" />
        <span><strong>关键结论：</strong> {takeaway}</span>
      </div>
    )}
  </div>
);
