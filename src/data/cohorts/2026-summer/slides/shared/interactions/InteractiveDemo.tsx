'use client';

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Play, RotateCcw, Terminal } from 'lucide-react';

interface DemoStep {
  input: string;
  output: React.ReactNode;
  label?: string;
}

interface InteractiveDemoProps {
  title?: string;
  subtitle?: string;
  steps: DemoStep[];
}

// 可点击交互演示：多步输入输出，点击"执行"显示对应输出，带步骤计数与重置
export const InteractiveDemo: React.FC<InteractiveDemoProps> = ({ title, subtitle, steps }) => {
  const [idx, setIdx] = useState(0);
  const [executed, setExecuted] = useState(false);
  const total = steps.length;
  const safeIdx = Math.max(0, Math.min(idx, total - 1));
  const step = steps[safeIdx];

  const execute = () => setExecuted(true);
  const reset = () => {
    setIdx(0);
    setExecuted(false);
  };
  const go = (n: number) => {
    setIdx(Math.max(0, Math.min(n, total - 1)));
    setExecuted(false);
  };

  return (
    <div className="space-y-4 max-w-4xl">
      <div>
        {title && <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">{title}</h2>}
        {subtitle && <p className="text-xs sm:text-sm text-indigo-300 mt-1">{subtitle}</p>}
      </div>
      <div className="rounded-2xl border border-slate-700/80 bg-slate-800/80 overflow-hidden">
        <div className="px-4 py-2 bg-slate-900 border-b border-slate-700 flex items-center justify-between">
          <div className="flex items-center space-x-2 text-xs font-bold text-slate-300">
            <Terminal className="h-4 w-4 text-fuchsia-400" />
            <span>交互演示</span>
            {step?.label && (
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-fuchsia-500/20 text-fuchsia-300">{step.label}</span>
            )}
          </div>
          <span className="text-[11px] text-slate-400 font-mono">
            步骤 {safeIdx + 1}/{total}
          </span>
        </div>
        <div className="p-4 space-y-3">
          <div className="rounded-xl bg-slate-950 border border-slate-700/60 p-3 font-mono text-xs">
            <div className="flex items-start space-x-2">
              <span className="text-fuchsia-400 shrink-0">$</span>
              <span className="text-slate-100 break-all">{step?.input}</span>
            </div>
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            {!executed ? (
              <button
                onClick={execute}
                className="cursor-pointer flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-fuchsia-600 hover:bg-fuchsia-500 text-white text-xs font-bold transition-colors"
              >
                <Play className="h-3.5 w-3.5" />
                <span>执行</span>
              </button>
            ) : (
              <span className="text-[11px] text-emerald-400 font-bold">✓ 已执行</span>
            )}
            <button
              onClick={() => go(safeIdx - 1)}
              disabled={safeIdx === 0}
              className="cursor-pointer flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-slate-700 hover:bg-slate-600 text-slate-200 text-xs font-bold transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="h-3.5 w-3.5" />
              <span>上一步</span>
            </button>
            <button
              onClick={() => go(safeIdx + 1)}
              disabled={safeIdx >= total - 1}
              className="cursor-pointer flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-slate-700 hover:bg-slate-600 text-slate-200 text-xs font-bold transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <span>下一步</span>
              <ChevronRight className="h-3.5 w-3.5" />
            </button>
            <button
              onClick={reset}
              className="cursor-pointer flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-slate-700 hover:bg-slate-600 text-slate-300 text-xs font-bold transition-colors ml-auto"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              <span>重置</span>
            </button>
          </div>
          {executed && (
            <div
              className="rounded-xl bg-slate-950 border border-emerald-500/30 p-3"
              style={{ animation: 'cds-slide-up 0.3s ease both' }}
            >
              <div className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider mb-1">输出</div>
              <div className="text-xs text-slate-200">{step?.output}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
