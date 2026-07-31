'use client';
import React, { useCallback, useEffect, useState } from 'react';
import { Play, Pause, RotateCcw, ChevronLeft, ChevronRight, ArrowRight, Clapperboard } from 'lucide-react';

interface RecordStep {
  label: string;
  icon?: React.ComponentType<{ className?: string }>;
  desc?: string;
}

interface RecordFlowAnimationProps {
  steps: RecordStep[];
  title?: string;
}

export const RecordFlowAnimation: React.FC<RecordFlowAnimationProps> = ({ steps, title }) => {
  const [step, setStep] = useState(0);
  const [playing, setPlaying] = useState(false);
  const total = steps.length;

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

  const current = steps[step];

  return (
    <div className="w-full">
      <style>{`
        @keyframes rc-pulse { 0%,100%{ box-shadow: 0 0 0 0 rgba(244,63,94,0);} 50%{ box-shadow: 0 0 0 6px rgba(244,63,94,0.18);} }
        @keyframes rc-rec { 0%,100%{ opacity: 1;} 50%{ opacity: 0.3;} }
      `}</style>
      {title && <div className="text-xs text-slate-400 mb-3 font-medium">{title}</div>}
      <div className="h-1 bg-slate-800 rounded-full overflow-hidden mb-4">
        <div
          className="h-full bg-gradient-to-r from-rose-500 via-amber-500 to-emerald-500 transition-all duration-500"
          style={{ width: `${((step + 1) / (total || 1)) * 100}%` }}
        />
      </div>

      <div className="rounded-2xl bg-slate-950/60 border border-slate-700/60 p-5">
        <div className="flex flex-wrap items-center justify-center gap-y-3">
          {steps.map((s, i) => {
            const Icon = s.icon ?? Clapperboard;
            const on = i === step;
            const done = i < step;
            const isRecord = on && s.label.includes('录制');
            return (
              <React.Fragment key={i}>
                <div
                  className="flex flex-col items-center justify-center w-[96px] py-3 rounded-xl border-2 transition-all duration-300"
                  style={{
                    animation: isRecord ? 'rc-pulse 1.2s ease-in-out infinite' : undefined,
                    borderColor: on ? 'rgb(244 63 94)' : done ? 'rgb(52 211 153 / 0.5)' : 'rgb(51 65 85 / 0.8)',
                    background: on ? 'rgb(244 63 94 / 0.12)' : done ? 'rgb(16 185 129 / 0.08)' : 'rgb(30 41 59 / 0.7)',
                  }}
                >
                  <div className={`h-9 w-9 rounded-lg flex items-center justify-center mb-1.5 border ${on ? 'border-rose-400 bg-rose-500/25' : done ? 'border-emerald-500/40 bg-emerald-500/15' : 'border-slate-700/70 bg-slate-800/60'}`}>
                    <Icon className={`h-4 w-4 ${on ? 'text-white' : done ? 'text-emerald-300' : 'text-slate-500'}`} />
                  </div>
                  <span className={`text-[11px] font-bold ${on ? 'text-white' : done ? 'text-emerald-300' : 'text-slate-400'}`}>{s.label}</span>
                  {isRecord && (
                    <span className="mt-1 flex items-center gap-1 text-[9px] text-rose-300 font-bold">
                      <span className="h-1.5 w-1.5 rounded-full bg-rose-500" style={{ animation: 'rc-rec 1s ease-in-out infinite' }} />REC
                    </span>
                  )}
                </div>
                {i < steps.length - 1 && (
                  <div className="flex items-center px-1">
                    <ArrowRight className={`h-4 w-4 ${i < step ? 'text-emerald-400' : 'text-slate-600'}`} />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>

        <div className="mt-4 text-center">
          {current?.desc && (
            <p className="text-[11px] text-slate-300 leading-snug max-w-md mx-auto bg-slate-800/60 rounded-lg px-3 py-2 border border-slate-700/60 inline-block">
              {current.desc}
            </p>
          )}
        </div>
      </div>

      <div className="flex items-center justify-between gap-2 pt-3 mt-3 border-t border-slate-700/60">
        <span className="text-[11px] text-slate-400 font-mono">Step {step + 1}/{total}</span>
        <div className="flex items-center gap-1.5">
          <button onClick={prev} disabled={step === 0} className="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-medium disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1"><ChevronLeft className="h-3.5 w-3.5" />上一步</button>
          <button onClick={toggle} className="px-3 py-1.5 rounded-lg bg-rose-600 hover:bg-rose-500 text-white text-xs font-medium flex items-center gap-1">{playing ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}{playing ? '暂停' : step >= total - 1 ? '重播' : '播放'}</button>
          <button onClick={next} disabled={step >= total - 1} className="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-medium disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1">下一步<ChevronRight className="h-3.5 w-3.5" /></button>
          <button onClick={reset} className="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-medium flex items-center gap-1"><RotateCcw className="h-3.5 w-3.5" />重置</button>
        </div>
      </div>
    </div>
  );
};
