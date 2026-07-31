import React from 'react';
import { Network } from 'lucide-react';

interface DiagramSlideProps {
  title: string;
  subtitle?: string;
  /** 图解内容（SVG / ReactNode / 子组件） */
  children: React.ReactNode;
  /** 图例说明，可选 */
  caption?: string;
  /** 关键结论 */
  takeaway?: string;
  /** 顶部小标签文案，默认 "架构图解" */
  badgeText?: string;
}

// 架构/流程图解容器：标题 + 居中图解区域 + 图例/结论
export const DiagramSlide: React.FC<DiagramSlideProps> = ({
  title,
  subtitle,
  children,
  caption,
  takeaway,
  badgeText = '架构图解',
}) => (
  <div className="h-full flex flex-col min-h-0 space-y-4 max-w-5xl">
    <div>
      <div className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-md bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 text-[11px] font-bold mb-2">
        <Network className="h-3.5 w-3.5" />
        <span>{badgeText}</span>
      </div>
      <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">{title}</h2>
      {subtitle && <p className="text-xs sm:text-sm text-indigo-300 mt-1">{subtitle}</p>}
    </div>
    <div className="flex-1 min-h-0 flex items-start justify-center overflow-y-auto rounded-2xl border border-slate-800 bg-slate-950/60 p-6 min-h-[280px]">
      <div className="w-full my-auto">{children}</div>
    </div>
    {caption && (
      <div className="text-[11px] text-slate-400 italic text-center">{caption}</div>
    )}
    {takeaway && (
      <div className="p-3 rounded-xl bg-indigo-950/60 border border-indigo-800/60 text-xs text-indigo-200 flex items-center space-x-2">
        <Network className="h-4 w-4 text-cyan-400 shrink-0" />
        <span><strong>关键结论：</strong> {takeaway}</span>
      </div>
    )}
  </div>
);
