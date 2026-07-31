'use client';

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, FileCode, RotateCcw, Sparkles } from 'lucide-react';

interface BuildStep {
  /** 当前步骤累计显示的行数 */
  lines: number;
  label?: string;
  desc?: string;
}

interface CodeBuildSlideProps {
  title: string;
  subtitle?: string;
  code: string;
  language?: string;
  filename?: string;
  steps: BuildStep[];
  /** 关键结论 */
  takeaway?: string;
}

// 代码逐块构建动画页：按 steps 顺序逐步显示前 N 行，带上一步/下一步/重置
export const CodeBuildSlide: React.FC<CodeBuildSlideProps> = ({
  title,
  subtitle,
  code,
  language = 'text',
  filename,
  steps,
  takeaway,
}) => {
  const [stepIdx, setStepIdx] = useState(0);
  const allLines = code.split('\n');
  const total = steps.length;
  const currentLines = steps[stepIdx]?.lines ?? allLines.length;
  const prevLines = stepIdx > 0 ? steps[stepIdx - 1].lines : 0;
  const visibleCount = Math.max(0, Math.min(currentLines, allLines.length));
  const prevCount = Math.max(0, Math.min(prevLines, allLines.length));
  const step = steps[stepIdx];

  const next = () => setStepIdx((i) => Math.min(i + 1, total - 1));
  const prev = () => setStepIdx((i) => Math.max(i - 1, 0));
  const reset = () => setStepIdx(0);

  const ext = language === 'text' ? 'txt' : language;

  return (
    <div className="space-y-4 max-w-5xl">
      <div>
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">{title}</h2>
        {subtitle && <p className="text-xs sm:text-sm text-indigo-300 mt-1">{subtitle}</p>}
      </div>
      <div className="rounded-2xl border border-slate-800 bg-slate-950 overflow-hidden text-xs">
        <div className="px-4 py-2 bg-slate-900 border-b border-slate-800 flex items-center space-x-2">
          <FileCode className="h-4 w-4 text-indigo-400" />
          <span className="font-mono text-slate-300 font-bold">{filename || `build.${ext}`}</span>
          <span className="ml-auto text-[10px] px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 font-bold">
            步骤 {stepIdx + 1}/{total}
          </span>
        </div>
        <pre className="p-4 text-emerald-300 font-mono text-xs leading-relaxed overflow-x-auto">
          <code>
            {allLines.slice(0, visibleCount).map((line, i) => {
              const n = i + 1;
              const isNew = n > prevCount;
              return (
                <div
                  key={n}
                  className={`flex ${isNew ? '-mx-4 px-4 bg-indigo-500/10 border-l-2 border-indigo-400' : ''}`}
                  style={isNew ? { animation: 'cds-slide-in-right 0.3s ease both' } : undefined}
                >
                  <span className="select-none text-slate-600 w-8 shrink-0 text-right pr-3">{n}</span>
                  <span className={isNew ? 'text-white' : ''}>{line || ' '}</span>
                </div>
              );
            })}
          </code>
        </pre>
        {(step?.label || step?.desc) && (
          <div className="px-4 py-3 bg-slate-900/60 border-t border-slate-800 space-y-1">
            {step.label && <div className="text-xs font-bold text-indigo-300">{step.label}</div>}
            {step.desc && <div className="text-[11px] text-slate-400 leading-snug">{step.desc}</div>}
          </div>
        )}
      </div>
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <button
            onClick={prev}
            disabled={stepIdx === 0}
            className="cursor-pointer flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="h-3.5 w-3.5" />
            <span>上一步</span>
          </button>
          <button
            onClick={next}
            disabled={stepIdx >= total - 1}
            className="cursor-pointer flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <span>下一步</span>
            <ChevronRight className="h-3.5 w-3.5" />
          </button>
          <button
            onClick={reset}
            className="cursor-pointer flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold transition-colors"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            <span>重置</span>
          </button>
        </div>
        <div className="flex gap-1.5">
          {steps.map((_, i) => (
            <span
              key={i}
              className={`h-1.5 rounded-full transition-all ${
                i === stepIdx ? 'w-6 bg-indigo-400' : i < stepIdx ? 'w-1.5 bg-indigo-700' : 'w-1.5 bg-slate-700'
              }`}
            />
          ))}
        </div>
      </div>
      {takeaway && (
        <div className="p-3 rounded-xl bg-indigo-950/60 border border-indigo-800/60 text-xs text-indigo-200 flex items-center space-x-2">
          <Sparkles className="h-4 w-4 text-indigo-400 shrink-0" />
          <span><strong>关键结论：</strong>{takeaway}</span>
        </div>
      )}
    </div>
  );
};
