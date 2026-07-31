'use client';
import React, { useCallback, useEffect, useState } from 'react';
import { Play, Pause, RotateCcw, ChevronLeft, ChevronRight, ListPlus, Loader } from 'lucide-react';

interface ListItem {
  label: string;
  desc?: string;
}

interface ListLoadAnimationProps {
  items: ListItem[];
  title?: string;
  skeletonCount?: number;
}

export const ListLoadAnimation: React.FC<ListLoadAnimationProps> = ({ items, title, skeletonCount = 3 }) => {
  const [step, setStep] = useState(0);
  const [playing, setPlaying] = useState(false);
  const total = items.length + 1; // 0 = 全骨架；1..n = 逐条加载；n = 全部+加载更多

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
    const t = setTimeout(() => setStep((s) => s + 1), 1200);
    return () => clearTimeout(t);
  }, [playing, step, total]);

  const visibleCount = Math.min(step, items.length);
  const allLoaded = step >= items.length;
  const skeletonRemaining = Math.min(skeletonCount, items.length - visibleCount);

  return (
    <div className="w-full">
      <style>{`
        @keyframes ll-blink { 0%,100%{ opacity: 0.4;} 50%{ opacity: 0.9;} }
        @keyframes ll-fade { from { opacity: 0; transform: translateY(6px);} to { opacity: 1; transform: none; } }
      `}</style>
      {title && <div className="text-xs text-slate-400 mb-3 font-medium">{title}</div>}
      <div className="h-1 bg-slate-800 rounded-full overflow-hidden mb-4">
        <div
          className="h-full bg-gradient-to-r from-cyan-500 to-indigo-500 transition-all duration-500"
          style={{ width: `${((step + 1) / (total || 1)) * 100}%` }}
        />
      </div>

      <div className="rounded-2xl bg-slate-950/60 border border-slate-700/60 p-5">
        <div className="max-w-md mx-auto space-y-2">
          {items.slice(0, visibleCount).map((it, i) => (
            <div
              key={i}
              className="flex items-center gap-2.5 px-3 py-2 rounded-lg border border-slate-700/70 bg-slate-800/60"
              style={{ animation: 'll-fade 0.4s ease-out both' }}
            >
              <div className="h-8 w-8 rounded-md bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white text-[11px] font-bold shrink-0">
                {i + 1}
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-xs font-bold text-white truncate">{it.label}</div>
                {it.desc && <div className="text-[10px] text-slate-400 truncate">{it.desc}</div>}
              </div>
            </div>
          ))}

          {!allLoaded &&
            Array.from({ length: skeletonRemaining }).map((_, i) => (
              <div key={`sk-${i}`} className="flex items-center gap-2.5 px-3 py-2 rounded-lg border border-slate-800/60 bg-slate-800/30">
                <div className="h-8 w-8 rounded-md bg-slate-700/60" style={{ animation: 'll-blink 1.2s ease-in-out infinite' }} />
                <div className="flex-1 space-y-1.5">
                  <div className="h-2.5 w-2/3 rounded bg-slate-700/60" style={{ animation: 'll-blink 1.2s ease-in-out infinite', animationDelay: `${i * 0.15}s` }} />
                  <div className="h-2 w-1/3 rounded bg-slate-700/40" style={{ animation: 'll-blink 1.2s ease-in-out infinite', animationDelay: `${i * 0.15 + 0.1}s` }} />
                </div>
              </div>
            ))}

          {allLoaded && (
            <div className="flex justify-center pt-2">
              <button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-600/80 border border-indigo-400/50 text-white text-xs font-medium">
                <ListPlus className="h-3.5 w-3.5" />加载更多
              </button>
            </div>
          )}
        </div>

        <div className="mt-4 text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-cyan-500/15 border border-cyan-500/30 text-cyan-200 text-xs font-bold">
            <Loader className="h-3 w-3" />
            {allLoaded ? '加载完成' : `已加载 ${visibleCount}/${items.length}`}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between gap-2 pt-3 mt-3 border-t border-slate-700/60">
        <span className="text-[11px] text-slate-400 font-mono">Step {step + 1}/{total}</span>
        <div className="flex items-center gap-1.5">
          <button onClick={prev} disabled={step === 0} className="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-medium disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1"><ChevronLeft className="h-3.5 w-3.5" />上一步</button>
          <button onClick={toggle} className="px-3 py-1.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-medium flex items-center gap-1">{playing ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}{playing ? '暂停' : step >= total - 1 ? '重播' : '播放'}</button>
          <button onClick={next} disabled={step >= total - 1} className="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-medium disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1">下一步<ChevronRight className="h-3.5 w-3.5" /></button>
          <button onClick={reset} className="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-medium flex items-center gap-1"><RotateCcw className="h-3.5 w-3.5" />重置</button>
        </div>
      </div>
    </div>
  );
};
