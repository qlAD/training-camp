'use client';
import React, { useCallback, useEffect, useState } from 'react';
import { Play, Pause, RotateCcw, ChevronLeft, ChevronRight, Compass, Route } from 'lucide-react';

type Tone = 'indigo' | 'emerald' | 'amber' | 'rose' | 'violet' | 'cyan' | 'fuchsia';

interface LearningPath {
  label: string;
  desc: string;
  difficulty: string;
  tone?: Tone;
}

interface LearningPathAnimationProps {
  paths: LearningPath[];
  title?: string;
}

const TONE_ACTIVE: Record<Tone, { border: string; bg: string; text: string; dot: string }> = {
  indigo: { border: 'border-indigo-400', bg: 'bg-indigo-500/15', text: 'text-indigo-300', dot: 'bg-indigo-400' },
  emerald: { border: 'border-emerald-400', bg: 'bg-emerald-500/15', text: 'text-emerald-300', dot: 'bg-emerald-400' },
  amber: { border: 'border-amber-400', bg: 'bg-amber-500/15', text: 'text-amber-300', dot: 'bg-amber-400' },
  rose: { border: 'border-rose-400', bg: 'bg-rose-500/15', text: 'text-rose-300', dot: 'bg-rose-400' },
  violet: { border: 'border-violet-400', bg: 'bg-violet-500/15', text: 'text-violet-300', dot: 'bg-violet-400' },
  cyan: { border: 'border-cyan-400', bg: 'bg-cyan-500/15', text: 'text-cyan-300', dot: 'bg-cyan-400' },
  fuchsia: { border: 'border-fuchsia-400', bg: 'bg-fuchsia-500/15', text: 'text-fuchsia-300', dot: 'bg-fuchsia-400' },
};

export const LearningPathAnimation: React.FC<LearningPathAnimationProps> = ({ paths, title }) => {
  const [step, setStep] = useState(0);
  const [playing, setPlaying] = useState(false);
  const total = paths.length;

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

  return (
    <div className="w-full">
      <style>{`
        @keyframes lp-fade { from { opacity: 0; transform: translateX(-10px);} to { opacity: 1; transform: none; } }
        @keyframes lp-pulse { 0%,100%{ transform: scale(1);} 50%{ transform: scale(1.05);} }
      `}</style>
      {title && <div className="text-xs text-slate-400 mb-3 font-medium">{title}</div>}
      <div className="h-1 bg-slate-800 rounded-full overflow-hidden mb-4">
        <div
          className="h-full bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 transition-all duration-500"
          style={{ width: `${((step + 1) / (total || 1)) * 100}%` }}
        />
      </div>

      <div className="rounded-2xl bg-slate-950/60 border border-slate-700/60 p-5">
        <div className="flex items-stretch gap-3">
          {/* 起点 */}
          <div className="flex flex-col items-center justify-center pr-2">
            <div className="h-12 w-12 rounded-xl flex items-center justify-center border-2 border-indigo-400 bg-indigo-500/20" style={{ animation: 'lp-pulse 1.4s ease-in-out infinite' }}>
              <Compass className="h-5 w-5 text-white" />
            </div>
            <span className="text-[10px] font-bold text-slate-400 mt-1.5">起点</span>
          </div>

          {/* 分叉路径 */}
          <div className="flex-1 space-y-2">
            {paths.map((p, i) => {
              const revealed = i <= step;
              const isCurrent = i === step;
              const tone = p.tone ?? 'indigo';
              const ta = TONE_ACTIVE[tone];
              if (!revealed) {
                return (
                  <div key={i} className="h-[52px] rounded-lg border border-dashed border-slate-700/50 bg-slate-800/20 flex items-center px-3">
                    <span className="text-[10px] text-slate-600 font-mono">待解锁路径 {i + 1}</span>
                  </div>
                );
              }
              return (
                <div key={i} className="flex items-center gap-2" style={{ animation: 'lp-fade 0.4s ease-out both' }}>
                  <svg width="28" height="20" viewBox="0 0 28 20" className="shrink-0 overflow-visible">
                    <line x1="2" y1="10" x2="20" y2="10" strokeWidth="2" strokeDasharray="4 4" className={isCurrent ? 'stroke-fuchsia-400' : 'stroke-slate-600'} />
                    <polygon points="20,4 26,10 20,16" className={isCurrent ? 'fill-fuchsia-400' : 'fill-slate-600'} />
                  </svg>
                  <div
                    className={`flex-1 flex items-center gap-2 px-3 py-2 rounded-lg border-2 transition-all duration-300 ${isCurrent ? `${ta.border} ${ta.bg}` : 'border-slate-700/70 bg-slate-800/50'}`}
                    style={{ animation: isCurrent ? 'lp-pulse 1.3s ease-in-out infinite' : undefined }}
                  >
                    <span className={`h-2 w-2 rounded-full ${ta.dot} shrink-0`} />
                    <div className="min-w-0 flex-1">
                      <div className={`text-xs font-bold ${isCurrent ? 'text-white' : 'text-slate-300'}`}>{p.label}</div>
                      <div className="text-[10px] text-slate-500 truncate">{p.desc}</div>
                    </div>
                    <span className={`px-1.5 py-0.5 rounded text-[9px] font-bold border ${isCurrent ? `${ta.border} ${ta.text}` : 'border-slate-600/50 text-slate-500'}`}>
                      {p.difficulty}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-4 text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-indigo-500/15 border border-indigo-500/30 text-indigo-200 text-xs font-bold">
            <Route className="h-3.5 w-3.5" />
            已展开 {Math.min(step + 1, total)}/{total} 条路径
          </div>
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
