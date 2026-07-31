'use client';
import React, { useCallback, useEffect, useState } from 'react';
import { Play, Pause, RotateCcw, ChevronLeft, ChevronRight, TriangleAlert, ClipboardPaste, Crosshair, Wrench, CheckCheck, ArrowRight } from 'lucide-react';

interface DebugStep {
  label: string;
  action: 'error' | 'paste' | 'locate' | 'fix' | 'verify';
  desc?: string;
}

interface DebugFlowAnimationProps {
  steps: DebugStep[];
}

const ACTION_META: Record<DebugStep['action'], { icon: React.ComponentType<{ className?: string }>; border: string; bg: string; text: string; label: string }> = {
  error: { icon: TriangleAlert, border: 'border-rose-400', bg: 'bg-rose-500/15', text: 'text-rose-300', label: '报错' },
  paste: { icon: ClipboardPaste, border: 'border-cyan-400', bg: 'bg-cyan-500/15', text: 'text-cyan-300', label: '粘贴' },
  locate: { icon: Crosshair, border: 'border-amber-400', bg: 'bg-amber-500/15', text: 'text-amber-300', label: '定位' },
  fix: { icon: Wrench, border: 'border-indigo-400', bg: 'bg-indigo-500/15', text: 'text-indigo-300', label: '修复' },
  verify: { icon: CheckCheck, border: 'border-emerald-400', bg: 'bg-emerald-500/15', text: 'text-emerald-300', label: '验证' },
};

export const DebugFlowAnimation: React.FC<DebugFlowAnimationProps> = ({ steps }) => {
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
  const currentMeta = current ? ACTION_META[current.action] : null;

  return (
    <div className="w-full">
      <style>{`@keyframes db-pulse { 0%,100%{ transform: scale(1);} 50%{ transform: scale(1.07);} }`}</style>
      <div className="h-1 bg-slate-800 rounded-full overflow-hidden mb-4">
        <div
          className="h-full bg-gradient-to-r from-rose-500 via-amber-500 to-emerald-500 transition-all duration-500"
          style={{ width: `${((step + 1) / (total || 1)) * 100}%` }}
        />
      </div>

      <div className="rounded-2xl bg-slate-950/60 border border-slate-700/60 p-5">
        <div className="flex flex-wrap items-center justify-center gap-y-3">
          {steps.map((s, i) => {
            const meta = ACTION_META[s.action];
            const Icon = meta.icon;
            const on = i === step;
            const done = i < step;
            return (
              <React.Fragment key={i}>
                <div
                  className="flex flex-col items-center justify-center px-2.5 py-3 rounded-xl border-2 min-w-[80px] transition-all duration-300"
                  style={{ animation: on ? 'db-pulse 1.3s ease-in-out infinite' : undefined }}
                >
                  <div className={`h-10 w-10 rounded-lg flex items-center justify-center mb-1.5 border transition-colors ${on ? `${meta.border} ${meta.bg}` : done ? 'border-emerald-500/40 bg-emerald-500/10' : 'border-slate-700/70 bg-slate-800/60'}`}>
                    <Icon className={`h-5 w-5 ${on ? meta.text : done ? 'text-emerald-300' : 'text-slate-500'}`} />
                  </div>
                  <span className={`text-[11px] font-bold ${on ? 'text-white' : done ? 'text-emerald-300' : 'text-slate-400'}`}>{meta.label}</span>
                </div>
                {i < steps.length - 1 && (
                  <div className="flex items-center px-0.5">
                    <ArrowRight className={`h-4 w-4 ${i < step ? 'text-emerald-400' : 'text-slate-600'}`} />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>

        <div className="mt-4 text-center">
          {currentMeta && (
            <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-bold border ${currentMeta.border} ${currentMeta.bg} ${currentMeta.text}`}>
              <currentMeta.icon className="h-3.5 w-3.5" />
              {current?.label}
            </div>
          )}
          {current?.desc && (
            <p className="text-[11px] text-slate-400 mt-2 leading-snug max-w-md mx-auto">{current.desc}</p>
          )}
        </div>
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
