import React from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';

interface ComparisonSide {
  title: string;
  items: string[];
}

interface ComparisonSlideProps {
  title: string;
  subtitle?: string;
  left: ComparisonSide;
  right: ComparisonSide;
  /** 左侧标签（默认 "传统方案"），右侧标签（默认 "推荐方案"） */
  leftLabel?: string;
  rightLabel?: string;
  /** 关键结论 */
  keyTakeaway?: string;
  /** 是否使用 ✗/✓ 风格图标，默认 true */
  contrastIcons?: boolean;
}

// 左右对比页：左（默认灰/弱化） vs 右（默认 indigo/推荐） 双栏卡片
export const ComparisonSlide: React.FC<ComparisonSlideProps> = ({
  title,
  subtitle,
  left,
  right,
  leftLabel = '传统方案',
  rightLabel = '推荐方案',
  keyTakeaway,
  contrastIcons = true,
}) => (
  <div className="space-y-6 max-w-5xl">
    <div>
      <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">{title}</h2>
      {subtitle && <p className="text-xs sm:text-sm text-indigo-300 mt-1">{subtitle}</p>}
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="p-5 rounded-2xl bg-slate-800/50 border border-slate-700/80 space-y-3">
        <div className="flex items-center justify-between pb-2 border-b border-slate-700">
          <h3 className="text-sm font-bold text-slate-300">{left.title}</h3>
          <span className="text-[10px] px-2 py-0.5 rounded bg-slate-700 text-slate-400 font-bold uppercase tracking-wider">
            {leftLabel}
          </span>
        </div>
        <ul className="space-y-2 text-xs text-slate-400">
          {left.items.map((item, i) => (
            <li key={i} className="flex items-start space-x-2">
              {contrastIcons ? (
                <XCircle className="h-4 w-4 text-rose-400/70 shrink-0 mt-0.5" />
              ) : (
                <span className="h-1.5 w-1.5 rounded-full bg-slate-500 mt-1.5 shrink-0"></span>
              )}
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="p-5 rounded-2xl bg-indigo-950/50 border border-indigo-500/40 space-y-3">
        <div className="flex items-center justify-between pb-2 border-b border-indigo-800">
          <h3 className="text-sm font-bold text-indigo-300">{right.title}</h3>
          <span className="text-[10px] px-2 py-0.5 rounded bg-indigo-500/30 text-indigo-200 font-bold uppercase tracking-wider">
            {rightLabel}
          </span>
        </div>
        <ul className="space-y-2 text-xs text-indigo-100">
          {right.items.map((item, i) => (
            <li key={i} className="flex items-start space-x-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
    {keyTakeaway && (
      <div className="p-3 rounded-xl bg-indigo-950/60 border border-indigo-800/60 text-xs text-indigo-200 flex items-center space-x-2">
        <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
        <span><strong>关键结论：</strong> {keyTakeaway}</span>
      </div>
    )}
  </div>
);
