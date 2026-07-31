import React from 'react';
import { CheckCircle2, Sparkles } from 'lucide-react';

interface CoverSlideProps {
  title: string;
  subtitle?: string;
  bullets?: string[];
  stageName?: string;
  /** 顶部小标签文案，默认 "课程讲义" */
  badgeText?: string;
}

// 封面页：stageName 徽章 + 大标题 + 副标题 + 要点卡片网格
export const CoverSlide: React.FC<CoverSlideProps> = ({
  title,
  subtitle,
  bullets,
  stageName,
  badgeText = '课程讲义',
}) => (
  <div className="h-full flex flex-col justify-center space-y-5 max-w-3xl relative">
    {stageName && (
      <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-xs font-bold w-fit">
        <Sparkles className="h-3.5 w-3.5" />
        <span>{stageName} · {badgeText}</span>
      </div>
    )}
    <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
      {title}
    </h2>
    {subtitle && (
      <p className="text-lg text-indigo-200 font-medium leading-relaxed">{subtitle}</p>
    )}
    {bullets && bullets.length > 0 && (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
        {bullets.map((b, i) => (
          <div
            key={i}
            className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-200 font-medium flex items-center space-x-2"
          >
            <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
            <span>{b}</span>
          </div>
        ))}
      </div>
    )}
  </div>
);
