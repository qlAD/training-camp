'use client';
import React, { useCallback, useEffect, useState } from 'react';
import { Play, Pause, RotateCcw, ChevronLeft, ChevronRight, TrendingUp, Trophy } from 'lucide-react';

interface Milestone {
  day: number | string;
  label: string;
  level?: number;
  desc?: string;
}

interface GrowthTrajectoryAnimationProps {
  milestones: Milestone[];
  title?: string;
}

export const GrowthTrajectoryAnimation: React.FC<GrowthTrajectoryAnimationProps> = ({ milestones, title }) => {
  const [step, setStep] = useState(0);
  const [playing, setPlaying] = useState(false);
  const total = milestones.length;

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
    const t = setTimeout(() => setStep((s) => s + 1), 1600);
    return () => clearTimeout(t);
  }, [playing, step, total]);

  const W = Math.max(milestones.length * 70, 280);
  const H = 120;
  const padX = 24;
  const pts = milestones.map((m, i) => {
    const x = milestones.length > 1 ? padX + (i * (W - padX * 2)) / (milestones.length - 1) : W / 2;
    const lv = m.level ?? 3;
    const y = H - 16 - (lv / 5) * (H - 40);
    return { x, y };
  });
  const visiblePts = pts.slice(0, step + 1);
  const polyPoints = visiblePts.map((p) => `${p.x},${p.y}`).join(' ');
  const current = milestones[step];

  return (
    <div className="w-full">
      <style>{`
        @keyframes gt-pulse { 0%,100%{ transform: scale(1);} 50%{ transform: scale(1.25);} }
        @keyframes gt-draw { from { stroke-dashoffset: 600; } to { stroke-dashoffset: 0; } }
      `}</style>
      {title && <div className="text-xs text-slate-400 mb-3 font-medium">{title}</div>}
      <div className="h-1 bg-slate-800 rounded-full overflow-hidden mb-4">
        <div
          className="h-full bg-gradient-to-r from-indigo-500 to-emerald-500 transition-all duration-500"
          style={{ width: `${((step + 1) / (total || 1)) * 100}%` }}
        />
      </div>

      <div className="rounded-2xl bg-slate-950/60 border border-slate-700/60 p-5">
        <div className="w-full overflow-x-auto">
          <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} className="block mx-auto" style={{ maxWidth: '100%' }}>
            <defs>
              <linearGradient id="gt-grad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="rgb(99 102 241)" />
                <stop offset="100%" stopColor="rgb(52 211 153)" />
              </linearGradient>
            </defs>
            {/* 基线 */}
            <line x1={padX} y1={H - 16} x2={W - padX} y2={H - 16} className="stroke-slate-700" strokeWidth="1" />
            {/* 曲线 */}
            {visiblePts.length > 1 && (
              <polyline
                key={step}
                points={polyPoints}
                fill="none"
                stroke="url(#gt-grad)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="600"
                style={{ animation: 'gt-draw 0.6s ease-out forwards' }}
              />
            )}
            {/* 节点 */}
            {visiblePts.map((p, i) => {
              const isCurrent = i === step;
              const m = milestones[i];
              return (
                <g key={i}>
                  <circle
                    cx={p.x}
                    cy={p.y}
                    r={isCurrent ? 5 : 3.5}
                    className={isCurrent ? 'fill-emerald-400' : 'fill-indigo-400'}
                    style={{ animation: isCurrent ? 'gt-pulse 1.2s ease-in-out infinite' : undefined, transformOrigin: `${p.x}px ${p.y}px` }}
                  />
                  <text x={p.x} y={H - 4} textAnchor="middle" className="fill-slate-500" style={{ fontSize: 9 }}>
                    {String(m.day)}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
          {milestones.map((m, i) => {
            const reached = i <= step;
            const isCurrent = i === step;
            return (
              <div
                key={i}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg border transition-all duration-300 ${
                  isCurrent ? 'border-emerald-400 bg-emerald-500/10' : reached ? 'border-indigo-500/40 bg-indigo-500/5' : 'border-slate-700/60 bg-slate-800/30 opacity-60'
                }`}
              >
                <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${reached ? 'bg-indigo-500/20 text-indigo-300' : 'bg-slate-700/50 text-slate-500'}`}>D{m.day}</span>
                <div className="min-w-0 flex-1">
                  <div className={`text-xs font-bold ${isCurrent ? 'text-white' : reached ? 'text-slate-200' : 'text-slate-500'}`}>{m.label}</div>
                  {m.desc && <div className="text-[10px] text-slate-500 truncate">{m.desc}</div>}
                </div>
                {reached && <TrendingUp className={`h-3.5 w-3.5 ${isCurrent ? 'text-emerald-400' : 'text-indigo-400/60'}`} />}
              </div>
            );
          })}
        </div>

        <div className="mt-4 text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-emerald-500/15 border border-emerald-500/30 text-emerald-200 text-xs font-bold">
            {step >= total - 1 ? <Trophy className="h-3.5 w-3.5" /> : <TrendingUp className="h-3.5 w-3.5" />}
            {current?.label}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between gap-2 pt-3 mt-3 border-t border-slate-700/60">
        <span className="text-[11px] text-slate-400 font-mono">Step {step + 1}/{total}</span>
        <div className="flex items-center gap-1.5">
          <button onClick={prev} disabled={step === 0} className="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-medium disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1"><ChevronLeft className="h-3.5 w-3.5" />上一步</button>
          <button onClick={toggle} className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-medium flex items-center gap-1">{playing ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}{playing ? '暂停' : step >= total - 1 ? '重播' : '播放'}</button>
          <button onClick={next} disabled={step >= total - 1} className="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-medium disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1">下一步<ChevronRight className="h-3.5 w-3.5" /></button>
          <button onClick={reset} className="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-medium flex items-center gap-1"><RotateCcw className="h-3.5 w-3.5" />重置</button>
        </div>
      </div>
    </div>
  );
};
