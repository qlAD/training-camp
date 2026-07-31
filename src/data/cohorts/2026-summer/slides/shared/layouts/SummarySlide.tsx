import React from 'react';
import { ArrowRight, BookOpen, Sparkles } from 'lucide-react';

interface SummarySlideProps {
  title: string;
  subtitle?: string;
  takeaways: string[];
  /** 明日预告文案 */
  nextDayPreview?: string;
  /** 当日编号，用于"Day N 收获"标签 */
  dayNumber?: number;
}

// 总结回顾页：今日要点 + 明日预告
export const SummarySlide: React.FC<SummarySlideProps> = ({
  title,
  subtitle,
  takeaways,
  nextDayPreview,
  dayNumber,
}) => (
  <div className="space-y-6 max-w-4xl">
    <div>
      <div className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-md bg-indigo-500/15 border border-indigo-500/30 text-indigo-300 text-[11px] font-bold mb-2">
        <BookOpen className="h-3.5 w-3.5" />
        <span>今日总结{dayNumber ? ` · Day ${dayNumber} 收获` : ''}</span>
      </div>
      <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">{title}</h2>
      {subtitle && <p className="text-xs sm:text-sm text-indigo-300 mt-1">{subtitle}</p>}
    </div>
    <div className="space-y-3">
      {takeaways.map((t, idx) => (
        <div
          key={idx}
          className="p-4 rounded-2xl bg-gradient-to-r from-slate-800/80 to-slate-800/40 border border-slate-700/80 text-sm text-slate-200 font-medium leading-relaxed flex items-start space-x-3"
        >
          <div className="h-7 w-7 rounded-xl bg-emerald-500/20 text-emerald-400 font-extrabold text-xs flex items-center justify-center shrink-0 mt-0.5">
            ✓
          </div>
          <span>{t}</span>
        </div>
      ))}
    </div>
    {nextDayPreview && (
      <div className="p-4 rounded-2xl bg-indigo-950/60 border border-indigo-700/60 text-sm text-indigo-100 flex items-center space-x-3">
        <Sparkles className="h-5 w-5 text-indigo-300 shrink-0" />
        <div>
          <div className="text-[11px] font-bold uppercase tracking-wider text-indigo-300 mb-0.5">明日预告</div>
          <div className="flex items-center space-x-1.5">
            <ArrowRight className="h-3.5 w-3.5 text-indigo-400" />
            <span>{nextDayPreview}</span>
          </div>
        </div>
      </div>
    )}
  </div>
);
