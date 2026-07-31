'use client';
import React, { useCallback, useEffect, useState } from 'react';
import { Play, Pause, RotateCcw, ChevronLeft, ChevronRight, Eye, RefreshCw, Zap } from 'lucide-react';

interface ReactiveState {
  label: string;
  value?: string;
}

interface ReactiveView {
  label: string;
}

interface ReactivityStep {
  label: string;
  action: 'set' | 'notify' | 'update';
  desc?: string;
}

interface ReactivityAnimationProps {
  state: ReactiveState;
  views: ReactiveView[];
  steps: ReactivityStep[];
}

export const ReactivityAnimation: React.FC<ReactivityAnimationProps> = ({ state, views, steps }) => {
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
    const t = setTimeout(() => setStep((s) => s + 1), 1700);
    return () => clearTimeout(t);
  }, [playing, step, total]);

  const current = steps[step];
  const action = current?.action;
  const stateActive = action === 'set';
  const notifyActive = action === 'notify';
  const viewsActive = action === 'update';

  const actionBadge = {
    set: { text: '① 修改数据', cls: 'bg-amber-500/15 border-amber-500/30 text-amber-200' },
    notify: { text: '② 派发通知', cls: 'bg-indigo-500/15 border-indigo-500/30 text-indigo-200' },
    update: { text: '③ 视图刷新', cls: 'bg-emerald-500/15 border-emerald-500/30 text-emerald-200' },
  } as const;

  return (
    <div className="w-full">
      <style>{`
        @keyframes rx-pulse { 0%,100%{ transform: scale(1);} 50%{ transform: scale(1.06);} }
        @keyframes rx-flow { to { stroke-dashoffset: -14; } }
        @keyframes rx-shake { 0%,100%{ transform: translateX(0);} 25%{ transform: translateX(-2px);} 75%{ transform: translateX(2px);} }
      `}</style>
      <div className="h-1 bg-slate-800 rounded-full overflow-hidden mb-4">
        <div
          className="h-full bg-gradient-to-r from-amber-500 to-emerald-500 transition-all duration-500"
          style={{ width: `${((step + 1) / (total || 1)) * 100}%` }}
        />
      </div>

      <div className="rounded-2xl bg-slate-950/60 border border-slate-700/60 p-5">
        <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr] gap-4 items-center">
          {/* State */}
          <div className="flex justify-center">
            <div
              className="px-4 py-4 rounded-xl border-2 w-full max-w-[200px] transition-colors"
              style={{
                animation: stateActive ? 'rx-pulse 1.3s ease-in-out infinite' : undefined,
                borderColor: stateActive ? 'rgb(251 191 36)' : notifyActive ? 'rgb(99 102 241)' : 'rgb(51 65 85 / 0.8)',
                background: stateActive ? 'rgb(251 191 36 / 0.15)' : notifyActive ? 'rgb(99 102 241 / 0.12)' : 'rgb(30 41 59 / 0.7)',
              }}
            >
              <div className="flex items-center gap-1.5 mb-1">
                <Zap className={`h-3.5 w-3.5 ${stateActive ? 'text-amber-300' : 'text-slate-400'}`} />
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wide">响应式状态</span>
              </div>
              <div className="text-white font-bold text-sm">{state.label}</div>
              <div className="mt-1.5 px-2 py-1 rounded bg-slate-900/70 border border-slate-700/60 font-mono text-xs text-emerald-300">
                {state.value ?? '—'}
              </div>
            </div>
          </div>

          {/* Arrows */}
          <div className="flex sm:flex-col items-center justify-center gap-1 py-2">
            <svg width="56" height="20" viewBox="0 0 56 20" className="overflow-visible">
              <line
                x1="2" y1="10" x2="46" y2="10"
                strokeWidth="2"
                strokeDasharray="5 4"
                className={notifyActive || viewsActive ? 'stroke-indigo-400' : 'stroke-slate-600'}
                style={{ animation: notifyActive ? 'rx-flow 0.7s linear infinite' : undefined }}
              />
              <polygon points="46,4 54,10 46,16" className={notifyActive || viewsActive ? 'fill-indigo-400' : 'fill-slate-600'} />
            </svg>
            <span className="text-[10px] text-slate-500 font-mono">notify</span>
          </div>

          {/* Views */}
          <div className="flex flex-col gap-2">
            {views.map((v, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-3 py-2 rounded-lg border transition-colors"
                style={{
                  animation: viewsActive ? 'rx-shake 0.5s ease-in-out' : undefined,
                  borderColor: viewsActive ? 'rgb(52 211 153 / 0.6)' : 'rgb(51 65 85 / 0.8)',
                  background: viewsActive ? 'rgb(16 185 129 / 0.12)' : 'rgb(30 41 59 / 0.7)',
                }}
              >
                <Eye className={`h-3.5 w-3.5 ${viewsActive ? 'text-emerald-300' : 'text-slate-500'}`} />
                <span className={`text-xs font-bold ${viewsActive ? 'text-emerald-200' : 'text-slate-400'}`}>{v.label}</span>
                {viewsActive && <RefreshCw className="h-3 w-3 text-emerald-400 ml-auto animate-spin" style={{ animationDuration: '1.2s' }} />}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 text-center">
          <div className={`inline-block px-3 py-1 rounded-md text-xs font-bold border ${action ? actionBadge[action].cls : ''}`}>
            {action ? actionBadge[action].text : ''} · {current?.label}
          </div>
          {current?.desc && (
            <p className="text-[11px] text-slate-400 mt-2 leading-snug max-w-md mx-auto">{current.desc}</p>
          )}
        </div>
      </div>

      <div className="flex items-center justify-between gap-2 pt-3 mt-3 border-t border-slate-700/60">
        <span className="text-[11px] text-slate-400 font-mono">
          Step {step + 1}/{total}
        </span>
        <div className="flex items-center gap-1.5">
          <button onClick={prev} disabled={step === 0} className="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-medium disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1">
            <ChevronLeft className="h-3.5 w-3.5" />上一步
          </button>
          <button onClick={toggle} className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-medium flex items-center gap-1">
            {playing ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
            {playing ? '暂停' : step >= total - 1 ? '重播' : '播放'}
          </button>
          <button onClick={next} disabled={step >= total - 1} className="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-medium disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1">
            下一步<ChevronRight className="h-3.5 w-3.5" />
          </button>
          <button onClick={reset} className="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-medium flex items-center gap-1">
            <RotateCcw className="h-3.5 w-3.5" />重置
          </button>
        </div>
      </div>
    </div>
  );
};
