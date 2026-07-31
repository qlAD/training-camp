'use client';
import React, { useCallback, useEffect, useState } from 'react';
import { Play, Pause, RotateCcw, ChevronLeft, ChevronRight, GitCommitHorizontal, User, Clock } from 'lucide-react';

type Tone = 'indigo' | 'emerald' | 'amber' | 'rose' | 'violet' | 'cyan' | 'fuchsia';

interface Commit {
  hash: string;
  message: string;
  author: string;
  time: string;
  tone?: Tone;
}

interface GitHistoryAnimationProps {
  commits: Commit[];
  title?: string;
}

const TONE_DOT: Record<Tone, string> = {
  indigo: 'bg-indigo-400 border-indigo-300',
  emerald: 'bg-emerald-400 border-emerald-300',
  amber: 'bg-amber-400 border-amber-300',
  rose: 'bg-rose-400 border-rose-300',
  violet: 'bg-violet-400 border-violet-300',
  cyan: 'bg-cyan-400 border-cyan-300',
  fuchsia: 'bg-fuchsia-400 border-fuchsia-300',
};

export const GitHistoryAnimation: React.FC<GitHistoryAnimationProps> = ({ commits, title }) => {
  const [step, setStep] = useState(0);
  const [playing, setPlaying] = useState(false);
  const total = commits.length;

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
    const t = setTimeout(() => setStep((s) => s + 1), 1400);
    return () => clearTimeout(t);
  }, [playing, step, total]);

  return (
    <div className="w-full">
      <style>{`
        @keyframes gh-fade { from { opacity: 0; transform: translateX(-8px);} to { opacity: 1; transform: none; } }
        @keyframes gh-pulse { 0%,100%{ transform: scale(1);} 50%{ transform: scale(1.15);} }
      `}</style>
      {title && <div className="text-xs text-slate-400 mb-3 font-medium">{title}</div>}
      <div className="h-1 bg-slate-800 rounded-full overflow-hidden mb-4">
        <div
          className="h-full bg-gradient-to-r from-violet-500 to-emerald-500 transition-all duration-500"
          style={{ width: `${((step + 1) / (total || 1)) * 100}%` }}
        />
      </div>

      <div className="rounded-2xl bg-slate-950/60 border border-slate-700/60 p-5">
        <div className="relative max-w-md mx-auto pl-6">
          {/* 垂直时间线 */}
          <div className="absolute left-[10px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-violet-500/60 to-emerald-500/40" />
          <div className="space-y-2.5">
            {commits.slice(0, step + 1).map((c, i) => {
              const isLatest = i === step;
              const tone = c.tone ?? 'violet';
              return (
                <div key={i} className="relative" style={{ animation: 'gh-fade 0.4s ease-out both' }}>
                  <div
                    className={`absolute -left-6 top-3 h-3.5 w-3.5 rounded-full border-2 ${TONE_DOT[tone]}`}
                    style={{ animation: isLatest ? 'gh-pulse 1.2s ease-in-out infinite' : undefined }}
                  />
                  <div className={`px-3 py-2 rounded-lg border transition-colors ${isLatest ? 'border-violet-400 bg-violet-500/10' : 'border-slate-700/70 bg-slate-800/50'}`}>
                    <div className="flex items-center gap-2 mb-0.5">
                      <GitCommitHorizontal className="h-3.5 w-3.5 text-slate-400 shrink-0" />
                      <span className="font-mono text-[10px] text-amber-300 font-bold">{c.hash}</span>
                      {isLatest && <span className="ml-auto text-[9px] px-1.5 py-0.5 rounded bg-violet-500/20 text-violet-300 font-bold">HEAD</span>}
                    </div>
                    <div className={`text-xs font-bold ${isLatest ? 'text-white' : 'text-slate-200'}`}>{c.message}</div>
                    <div className="flex items-center gap-3 mt-1 text-[10px] text-slate-500">
                      <span className="flex items-center gap-1"><User className="h-2.5 w-2.5" />{c.author}</span>
                      <span className="flex items-center gap-1"><Clock className="h-2.5 w-2.5" />{c.time}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-4 text-center">
          <div className="inline-block px-3 py-1 rounded-md bg-violet-500/15 border border-violet-500/30 text-violet-200 text-xs font-bold">
            已展示 {Math.min(step + 1, total)}/{total} 个提交
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between gap-2 pt-3 mt-3 border-t border-slate-700/60">
        <span className="text-[11px] text-slate-400 font-mono">Step {step + 1}/{total}</span>
        <div className="flex items-center gap-1.5">
          <button onClick={prev} disabled={step === 0} className="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-medium disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1"><ChevronLeft className="h-3.5 w-3.5" />上一步</button>
          <button onClick={toggle} className="px-3 py-1.5 rounded-lg bg-violet-600 hover:bg-violet-500 text-white text-xs font-medium flex items-center gap-1">{playing ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}{playing ? '暂停' : step >= total - 1 ? '重播' : '播放'}</button>
          <button onClick={next} disabled={step >= total - 1} className="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-medium disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1">下一步<ChevronRight className="h-3.5 w-3.5" /></button>
          <button onClick={reset} className="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-medium flex items-center gap-1"><RotateCcw className="h-3.5 w-3.5" />重置</button>
        </div>
      </div>
    </div>
  );
};
