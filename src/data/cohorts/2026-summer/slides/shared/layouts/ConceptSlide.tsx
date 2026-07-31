import React from 'react';
import { Sparkles } from 'lucide-react';

interface ConceptSlideProps {
  title: string;
  subtitle?: string;
  bullets?: string[];
  /** 关键结论，显示在底部高亮条 */
  keyTakeaway?: string;
  /** 顶部小标签文案，默认 "核心概念" */
  badgeText?: string;
}

// 概念要点页：标题 + 副标题 + 编号要点列表 + 关键结论条
export const ConceptSlide: React.FC<ConceptSlideProps> = ({
  title,
  subtitle,
  bullets,
  keyTakeaway,
  badgeText = '核心概念',
}) => (
  <div className="h-full flex flex-col min-h-0 space-y-6 max-w-4xl">
    <div>
      <div className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-md bg-indigo-500/15 border border-indigo-500/30 text-indigo-300 text-[11px] font-bold mb-2">
        <Sparkles className="h-3 w-3" />
        <span>{badgeText}</span>
      </div>
      <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">{title}</h2>
      {subtitle && <p className="text-xs sm:text-sm text-indigo-300 mt-1">{subtitle}</p>}
    </div>
    {bullets && bullets.length > 0 && (
      <div className="flex-1 min-h-0 overflow-y-auto space-y-3">
        {bullets.map((bullet, idx) => (
          <div
            key={idx}
            className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80 text-sm text-slate-200 font-medium leading-relaxed flex items-start space-x-3"
          >
            <div className="h-6 w-6 rounded-full bg-indigo-600/30 text-indigo-300 font-extrabold text-xs flex items-center justify-center shrink-0 mt-0.5">
              {idx + 1}
            </div>
            <span>{bullet}</span>
          </div>
        ))}
      </div>
    )}
    {keyTakeaway && (
      <div className="p-3 rounded-xl bg-indigo-950/60 border border-indigo-800/60 text-xs text-indigo-200 flex items-center space-x-2">
        <Sparkles className="h-4 w-4 text-indigo-400 shrink-0" />
        <span><strong>关键结论：</strong> {keyTakeaway}</span>
      </div>
    )}
  </div>
);
