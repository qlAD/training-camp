import React from 'react';
import { Play } from 'lucide-react';

interface AnimationSlideProps {
  title: string;
  subtitle?: string;
  /** 动画类型标签，如 "CollaborationFlow" / "DOMTree" */
  animationType?: string;
  /** 动画主体（子组件） */
  children: React.ReactNode;
  /** 图例说明 */
  caption?: string;
  takeaway?: string;
}

// 动画演示容器：标题 + 动画区 + 可选图例/结论
export const AnimationSlide: React.FC<AnimationSlideProps> = ({
  title,
  subtitle,
  animationType,
  children,
  caption,
  takeaway,
}) => (
  <div className="space-y-4 max-w-5xl">
    <div>
      <div className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-md bg-violet-500/15 border border-violet-500/30 text-violet-300 text-[11px] font-bold mb-2">
        <Play className="h-3.5 w-3.5" />
        <span>动画演示{animationType ? ` · ${animationType}` : ''}</span>
      </div>
      <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">{title}</h2>
      {subtitle && <p className="text-xs sm:text-sm text-indigo-300 mt-1">{subtitle}</p>}
    </div>
    <div className="rounded-2xl border border-violet-500/20 bg-gradient-to-br from-slate-950 to-violet-950/30 p-6 min-h-[300px] flex items-center justify-center">
      <div className="w-full">{children}</div>
    </div>
    {caption && (
      <div className="text-[11px] text-slate-400 italic text-center">{caption}</div>
    )}
    {takeaway && (
      <div className="p-3 rounded-xl bg-violet-950/50 border border-violet-800/60 text-xs text-violet-200 flex items-center space-x-2">
        <Play className="h-4 w-4 text-violet-400 shrink-0" />
        <span><strong>关键结论：</strong> {takeaway}</span>
      </div>
    )}
  </div>
);
