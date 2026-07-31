'use client';
import React, { useCallback, useEffect, useState } from 'react';
import { Play, Pause, RotateCcw, ChevronLeft, ChevronRight, Sparkles, TrendingUp } from 'lucide-react';

interface PromptVersion {
  label: string;
  prompt: string;
  result: string;
  /** 质量分数 0-100 */
  quality: number;
}

interface PromptOptimizationAnimationProps {
  versions: PromptVersion[];
  title?: string;
}

function qualityTone(q: number): { bar: string; text: string } {
  if (q >= 80) return { bar: 'from-emerald-500 to-emerald-400', text: 'text-emerald-300' };
  if (q >= 60) return { bar: 'from-amber-500 to-amber-400', text: 'text-amber-300' };
  return { bar: 'from-rose-500 to-rose-400', text: 'text-rose-300' };
}

export const PromptOptimizationAnimation: React.FC<PromptOptimizationAnimationProps> = ({ versions, title }) => {
  const [step, setStep] = useState(0);
  const [playing, setPlaying] = useState(false);
  const total = versions.length;

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
    const t = setTimeout(() => setStep((s) => s + 1), 2000);
    return () => clearTimeout(t);
  }, [playing, step, total]);

  const current = versions[step];

  return (
    <div className="w-full">
      <style>{`@keyframes po-rise { from { transform: scaleX(0); } to { transform: scaleX(1); } }`}</style>
      {title && <div className="text-xs text-slate-400 mb-3 font-medium">{title}</div>}
      <div className="h-1 bg-slate-800 rounded-full overflow-hidden mb-4">
        <div
          className="h-full bg-gradient-to-r from-rose-500 via-amber-500 to-emerald-500 transition-all duration-500"
          style={{ width: `${((step + 1) / (total || 1)) * 100}%` }}
        />
      </div>

      <div className="rounded-2xl bg-slate-950/60 border border-slate-700/60 p-5">
        {/* 版本质量对比条 */}
        <div className="space-y-2 mb-4">
          {versions.map((v, i) => {
            const on = i === step;
            const tone = qualityTone(v.quality);
            return (
              <div key={i} className={`flex items-center gap-2 px-2.5 py-1.5 rounded-lg border transition-all duration-300 ${on ? 'border-indigo-400 bg-indigo-500/10' : 'border-slate-700/60 bg-slate-800/40'}`}>
                <span className={`text-[11px] font-bold w-16 shrink-0 ${on ? 'text-white' : 'text-slate-400'}`}>{v.label}</span>
                <div className="flex-1 h-3 bg-slate-900/70 rounded-full overflow-hidden">
                  <div
                    key={`${i}-${on ? step : 'idle'}`}
                    className={`h-full bg-gradient-to-r ${tone.bar} rounded-full origin-left`}
                    style={{ width: `${v.quality}%`, animation: on ? 'po-rise 0.7s ease-out' : undefined, transformOrigin: 'left' }}
                  />
                </div>
                <span className={`text-[11px] font-mono font-bold w-9 text-right ${tone.text}`}>{v.quality}</span>
              </div>
            );
          })}
        </div>

        {/* 当前版本详情 */}
        {current && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3" key={step}>
            <div className="rounded-xl border border-cyan-500/30 bg-cyan-500/5 p-3">
              <div className="flex items-center gap-1.5 mb-1.5">
                <Sparkles className="h-3.5 w-3.5 text-cyan-300" />
                <span className="text-[10px] font-bold uppercase tracking-wide text-slate-400">提示词</span>
              </div>
              <p className="text-[11px] text-slate-200 leading-snug font-mono">{current.prompt}</p>
            </div>
            <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-3">
              <div className="flex items-center gap-1.5 mb-1.5">
                <TrendingUp className="h-3.5 w-3.5 text-emerald-300" />
                <span className="text-[10px] font-bold uppercase tracking-wide text-slate-400">生成结果</span>
              </div>
              <p className="text-[11px] text-slate-200 leading-snug">{current.result}</p>
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
