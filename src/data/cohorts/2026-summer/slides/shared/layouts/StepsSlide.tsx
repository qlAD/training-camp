import React from 'react';
import { ArrowRight, Footprints } from 'lucide-react';

interface StepItem {
  num: number;
  title: string;
  desc?: string;
}

interface StepsSlideProps {
  title: string;
  subtitle?: string;
  steps: StepItem[];
  /** 列数：2/3/4，默认 4 */
  columns?: 2 | 3 | 4;
  takeaway?: string;
}

// 流程步骤页：标题 + 步骤卡片网格（编号 + 标题 + 描述）+ 可选箭头连接
export const StepsSlide: React.FC<StepsSlideProps> = ({
  title,
  subtitle,
  steps,
  columns = 4,
  takeaway,
}) => {
  const colsClass =
    columns === 2 ? 'sm:grid-cols-2' : columns === 3 ? 'sm:grid-cols-3' : 'sm:grid-cols-2 md:grid-cols-4';
  return (
    <div className="space-y-6 max-w-5xl">
      <div>
        <div className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-md bg-amber-500/15 border border-amber-500/30 text-amber-300 text-[11px] font-bold mb-2">
          <Footprints className="h-3.5 w-3.5" />
          <span>流程步骤</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">{title}</h2>
        {subtitle && <p className="text-xs sm:text-sm text-indigo-300 mt-1">{subtitle}</p>}
      </div>
      <div className={`grid grid-cols-1 ${colsClass} gap-3`}>
        {steps.map((st, i) => (
          <div
            key={st.num}
            className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-2 flex flex-col justify-between relative"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="h-7 w-7 rounded-lg bg-gradient-to-br from-indigo-500 to-indigo-700 text-white font-extrabold text-xs flex items-center justify-center">
                  {st.num}
                </div>
                {i < steps.length - 1 && columns === 4 && (
                  <ArrowRight className="h-3 w-3 text-slate-600 hidden md:block" />
                )}
              </div>
              <h4 className="font-bold text-xs text-white">{st.title}</h4>
              {st.desc && (
                <p className="text-[11px] text-slate-400 mt-1 leading-snug">{st.desc}</p>
              )}
            </div>
          </div>
        ))}
      </div>
      {takeaway && (
        <div className="p-3 rounded-xl bg-indigo-950/60 border border-indigo-800/60 text-xs text-indigo-200 flex items-center space-x-2">
          <ArrowRight className="h-4 w-4 text-indigo-400 shrink-0" />
          <span><strong>关键结论：</strong> {takeaway}</span>
        </div>
      )}
    </div>
  );
};
