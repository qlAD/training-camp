'use client';
import React, { useCallback, useEffect, useState } from 'react';
import { Play, Pause, RotateCcw, ChevronLeft, ChevronRight, Bug, CircleCheck, Wrench } from 'lucide-react';

type Severity = 'low' | 'medium' | 'high';

interface BugInfo {
  label: string;
  severity: Severity;
}

interface FixStep {
  label: string;
  desc?: string;
}

interface BugFixAnimationProps {
  bug: BugInfo;
  fixSteps: FixStep[];
  title?: string;
}

const SEVERITY_STYLE: Record<Severity, { border: string; bg: string; text: string; label: string }> = {
  low: { border: 'border-emerald-400/60', bg: 'bg-emerald-500/15', text: 'text-emerald-300', label: '低危' },
  medium: { border: 'border-amber-400/60', bg: 'bg-amber-500/15', text: 'text-amber-300', label: '中危' },
  high: { border: 'border-rose-400/60', bg: 'bg-rose-500/15', text: 'text-rose-300', label: '高危' },
};

export const BugFixAnimation: React.FC<BugFixAnimationProps> = ({ bug, fixSteps, title }) => {
  const [step, setStep] = useState(0);
  const [playing, setPlaying] = useState(false);
  const total = fixSteps.length;

  const next = useCallback(() => setStep((s) => Math.min(s + 1, total - 1)), [total]);
  const prev = useCallback(() => setStep((s) => Math.max(s - 1, 0)), []);
  const reset = useCallback(() => {
    setStep(0);
    setPlaying(false);
  }, []);
  const toggle = useCallback(() => {
    if (step >= total - 1) setStep(0);
    setPlaying((p) => !p);
  }, [step, total]);

  useEffect(() => {
    if (!playing) return;
    if (step >= total - 1) {
      setPlaying(false);
      return;
    }
    const t = setTimeout(() => setStep((s) => s + 1), 1800);
    return () => clearTimeout(t);
  }, [playing, step, total]);

  const sev = SEVERITY_STYLE[bug.severity];
  const allDone = step >= total - 1 && total > 0;

  return (
    <div className="w-full">
      <style>{`
        @keyframes bf-pulse { 0%,100%{ transform: scale(1);} 50%{ transform: scale(1.04);} }
        @keyframes bf-slide { from { opacity: 0; transform: translateX(-6px);} to { opacity: 1; transform: none; } }
      `}</style>
      {title && <div className="text-xs text-slate-400 mb-3 font-medium">{title}</div>}
      <div className="h-1 bg-slate-800 rounded-full overflow-hidden mb-4">
        <div
          className="h-full bg-gradient-to-r from-rose-500 to-emerald-500 transition-all duration-500"
          style={{ width: `${((step + 1) / (total || 1)) * 100}%` }}
        />
      </div>

      <div className="rounded-2xl bg-slate-950/60 border border-slate-700/60 p-5">
        {/* Bug 卡片 */}
        <div className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl border-2 ${sev.border} ${sev.bg} mb-4`}>
          <Bug className={`h-5 w-5 ${sev.text}`} />
          <div className="flex-1">
            <div className="text-xs font-bold text-white">{bug.label}</div>
          </div>
          <span className={`px-2 py-0.5 rounded text-[10px] font-bold border ${sev.border} ${sev.text}`}>{sev.label}</span>
        </div>

        {/* 修复步骤 */}
        <div className="space-y-2">
          {fixSteps.map((fs, i) => {
            const on = i === step;
            const done = i < step;
            return (
              <div
                key={i}
                className={`flex items-center gap-2.5 px-3 py-2 rounded-lg border transition-all duration-300 ${
                  on ? 'border-indigo-400 bg-indigo-500/10' : done ? 'border-emerald-500/40 bg-emerald-500/5' : 'border-slate-700/70 bg-slate-800/40'
                }`}
                style={{ animation: on ? 'bf-slide 0.35s ease-out' : undefined }}
              >
                <div
                  className={`h-6 w-6 rounded-full flex items-center justify-center border-2 shrink-0 ${
                    done ? 'border-emerald-400 bg-emerald-500/20' : on ? 'border-indigo-400 bg-indigo-500/20' : 'border-slate-600 bg-slate-800'
                  }`}
                  style={{ animation: on ? 'bf-pulse 1.3s ease-in-out infinite' : undefined }}
                >
                  {done ? (
                    <CircleCheck className="h-3.5 w-3.5 text-emerald-300" />
                  ) : on ? (
                    <Wrench className="h-3 w-3 text-indigo-300" />
                  ) : (
                    <span className="text-[10px] text-slate-500 font-bold">{i + 1}</span>
                  )}
                </div>
                <div className="min-w-0 flex-1">
                  <div className={`text-xs font-bold ${on ? 'text-white' : done ? 'text-emerald-200' : 'text-slate-400'}`}>{fs.label}</div>
                  {fs.desc && <div className="text-[10px] text-slate-500 leading-snug">{fs.desc}</div>}
                </div>
              </div>
            );
          })}
        </div>

        {allDone && (
          <div className="mt-4 flex justify-center">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/15 border border-emerald-400/50 text-emerald-200 text-xs font-bold">
              <CircleCheck className="h-4 w-4" />修复完成，验证通过
            </div>
          </div>
        )}
      </div>

      <div className="flex items-center justify-between gap-2 pt-3 mt-3 border-t border-slate-700/60">
        <span className="text-[11px] text-slate-400 font-mono">Step {step + 1}/{total}</span>
        <div className="flex items-center gap-1.5">
          <button onClick={prev} disabled={step === 0} className="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-medium disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1"><ChevronLeft className="h-3.5 w-3.5" />上一步</button>
          <button onClick={toggle} className="px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-medium flex items-center gap-1">{playing ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}{playing ? '暂停' : step >= total - 1 ? '重播' : '播放'}</button>
          <button onClick={next} disabled={step >= total - 1} className="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-medium disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1">下一步<ChevronRight className="h-3.5 w-3.5" /></button>
          <button onClick={reset} className="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-medium flex items-center gap-1"><RotateCcw className="h-3.5 w-3.5" />重置</button>
        </div>
      </div>
    </div>
  );
};
