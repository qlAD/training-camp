import React from 'react';
import { CheckCircle2, ClipboardList, Trophy } from 'lucide-react';

interface ExerciseSlideProps {
  title: string;
  subtitle?: string;
  tasks: string[];
  /** 打卡/验收文案，显示在底部 */
  submissionText?: string;
  /** 是否显示 Task 编号，默认 true */
  showTaskNumbers?: boolean;
}

// 练习任务清单页：标题 + 任务清单卡片 + 打卡提示
export const ExerciseSlide: React.FC<ExerciseSlideProps> = ({
  title,
  subtitle,
  tasks,
  submissionText = '完成后截图发到企微群打卡，助教实时点评！',
  showTaskNumbers = true,
}) => (
  <div className="h-full flex flex-col min-h-0 space-y-6 max-w-3xl">
    <div>
      <div className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-md bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-[11px] font-bold mb-2">
        <ClipboardList className="h-3.5 w-3.5" />
        <span>实操跟练</span>
      </div>
      <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">{title}</h2>
      {subtitle && (
        <p className="text-xs sm:text-sm text-emerald-300 font-semibold mt-1">{subtitle}</p>
      )}
    </div>
    <div className="flex-1 min-h-0 overflow-y-auto p-6 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 space-y-3">
      <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-300 flex items-center space-x-2">
        <CheckCircle2 className="h-4 w-4" />
        <span>实操跟练步骤清单</span>
      </h3>
      <div className="space-y-2">
        {tasks.map((t, i) => (
          <div
            key={i}
            className="p-3 rounded-xl bg-black/20 text-xs text-emerald-100 font-medium flex items-start space-x-2"
          >
            {showTaskNumbers && (
              <span className="px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold text-[10px] shrink-0">
                Task {i + 1}
              </span>
            )}
            <span>{t}</span>
          </div>
        ))}
      </div>
    </div>
    <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs text-amber-200 flex items-center space-x-2">
      <Trophy className="h-4 w-4 text-amber-400 shrink-0" />
      <span>{submissionText}</span>
    </div>
  </div>
);
