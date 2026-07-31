import React from 'react';
import { Eye } from 'lucide-react';

interface EffectSlideProps {
  title: string;
  subtitle?: string;
  /** 特效类型标签，如 "ToolchainBadgeWall" / "StyleBeforeAfter" */
  effectType?: string;
  /** 特效主体（子组件） */
  children: React.ReactNode;
  /** 图例说明 */
  caption?: string;
  takeaway?: string;
}

// 视觉特效展示容器：标题 + 特效区 + 可选图例/结论
export const EffectSlide: React.FC<EffectSlideProps> = ({
  title,
  subtitle,
  effectType,
  children,
  caption,
  takeaway,
}) => (
  <div className="h-full flex flex-col min-h-0 space-y-4 max-w-5xl">
    <div>
      <div className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-md bg-rose-500/15 border border-rose-500/30 text-rose-300 text-[11px] font-bold mb-2">
        <Eye className="h-3.5 w-3.5" />
        <span>视觉特效{effectType ? ` · ${effectType}` : ''}</span>
      </div>
      <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">{title}</h2>
      {subtitle && <p className="text-xs sm:text-sm text-indigo-300 mt-1">{subtitle}</p>}
    </div>
    <div className="flex-1 min-h-0 flex items-start justify-center overflow-y-auto rounded-2xl border border-rose-500/20 bg-gradient-to-br from-slate-950 to-slate-900 p-6 min-h-[280px]">
      <div className="w-full my-auto">{children}</div>
    </div>
    {caption && (
      <div className="text-[11px] text-slate-400 italic text-center">{caption}</div>
    )}
    {takeaway && (
      <div className="p-3 rounded-xl bg-rose-950/40 border border-rose-800/60 text-xs text-rose-200 flex items-center space-x-2">
        <Eye className="h-4 w-4 text-rose-400 shrink-0" />
        <span><strong>关键结论：</strong> {takeaway}</span>
      </div>
    )}
  </div>
);
