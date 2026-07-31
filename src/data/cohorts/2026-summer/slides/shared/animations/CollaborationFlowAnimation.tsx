'use client';
import React, { useCallback, useEffect, useState } from 'react';
import { Play, Pause, RotateCcw, ChevronLeft, ChevronRight, RefreshCw } from 'lucide-react';

type Tone = 'indigo' | 'emerald' | 'amber' | 'rose' | 'violet' | 'cyan' | 'fuchsia';

interface CollabNode {
  id: string;
  label: string;
  icon?: React.ComponentType<{ className?: string }>;
  tone?: Tone;
}

interface CollabStep {
  label: string;
  /** 当前步骤高亮的节点 id 列表 */
  highlight: string[];
  desc?: string;
}

interface CollaborationFlowAnimationProps {
  nodes: CollabNode[];
  steps: CollabStep[];
}

const TONE_ACTIVE: Record<Tone, string> = {
  indigo: 'border-indigo-400 bg-indigo-500/20 shadow-lg shadow-indigo-500/30',
  emerald: 'border-emerald-400 bg-emerald-500/20 shadow-lg shadow-emerald-500/30',
  amber: 'border-amber-400 bg-amber-500/20 shadow-lg shadow-amber-500/30',
  rose: 'border-rose-400 bg-rose-500/20 shadow-lg shadow-rose-500/30',
  violet: 'border-violet-400 bg-violet-500/20 shadow-lg shadow-violet-500/30',
  cyan: 'border-cyan-400 bg-cyan-500/20 shadow-lg shadow-cyan-500/30',
  fuchsia: 'border-fuchsia-400 bg-fuchsia-500/20 shadow-lg shadow-fuchsia-500/30',
};

export const CollaborationFlowAnimation: React.FC<CollaborationFlowAnimationProps> = ({
  nodes,
  steps,
}) => {
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
  const active = new Set(current?.highlight ?? []);
  const isActive = (id: string) => active.has(id);
  const arrowActive = (a: string, b: string) => active.has(a) && active.has(b);
  const loopActive = nodes.length > 1 && active.has(nodes[nodes.length - 1].id) && active.has(nodes[0].id);

  return (
    <div className="w-full">
      <style>{`
        @keyframes collab-pulse { 0%,100%{ transform: scale(1);} 50%{ transform: scale(1.05);} }
        @keyframes collab-flow { to { stroke-dashoffset: -16; } }
      `}</style>
      <div className="h-1 bg-slate-800 rounded-full overflow-hidden mb-4">
        <div
          className="h-full bg-gradient-to-r from-indigo-500 to-violet-500 transition-all duration-500"
          style={{ width: `${((step + 1) / (total || 1)) * 100}%` }}
        />
      </div>

      <div className="rounded-2xl bg-slate-950/60 border border-slate-700/60 p-5 sm:p-6">
        <div className="flex flex-wrap items-stretch justify-center gap-y-3">
          {nodes.map((n, i) => {
            const Icon = n.icon;
            const on = isActive(n.id);
            const tone = n.tone ?? 'indigo';
            return (
              <React.Fragment key={n.id}>
                <div
                  className="flex flex-col items-center justify-center px-3 py-3 rounded-xl border-2 min-w-[88px] transition-all duration-300"
                  style={{ animation: on ? 'collab-pulse 1.6s ease-in-out infinite' : undefined }}
                  data-on={on}
                >
                  <div
                    className={`h-10 w-10 rounded-lg flex items-center justify-center mb-1.5 border ${
                      on
                        ? TONE_ACTIVE[tone]
                        : 'border-slate-700/70 bg-slate-800/70'
                    } transition-colors`}
                  >
                    {Icon ? <Icon className="h-5 w-5 text-white" /> : null}
                  </div>
                  <span className={`text-xs font-bold ${on ? 'text-white' : 'text-slate-400'}`}>
                    {n.label}
                  </span>
                </div>
                {i < nodes.length - 1 && (
                  <div className="flex items-center px-0.5">
                    <svg width="42" height="20" viewBox="0 0 42 20" className="overflow-visible">
                      <line
                        x1="2" y1="10" x2="34" y2="10"
                        strokeWidth="2"
                        strokeDasharray="6 4"
                        className={arrowActive(n.id, nodes[i + 1].id) ? 'stroke-indigo-400' : 'stroke-slate-600'}
                        style={{
                          animation: arrowActive(n.id, nodes[i + 1].id) ? 'collab-flow 0.8s linear infinite' : undefined,
                        }}
                      />
                      <polygon
                        points="34,4 40,10 34,16"
                        className={arrowActive(n.id, nodes[i + 1].id) ? 'fill-indigo-400' : 'fill-slate-600'}
                      />
                    </svg>
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* 闭环回流 */}
        <div className="mt-4 flex justify-center">
          <div
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold border transition-colors ${
              loopActive
                ? 'border-fuchsia-400 bg-fuchsia-500/15 text-fuchsia-300'
                : 'border-slate-700/70 bg-slate-800/50 text-slate-500'
            }`}
          >
            <RefreshCw
              className={`h-3 w-3 ${loopActive ? 'animate-spin' : ''}`}
              style={loopActive ? { animationDuration: '1.6s' } : undefined}
            />
            闭环回流 · 返回起点
          </div>
        </div>

        <div className="mt-4 text-center">
          <div className="inline-block px-3 py-1 rounded-md bg-indigo-500/15 border border-indigo-500/30 text-indigo-200 text-xs font-bold">
            {current?.label}
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
          <button
            onClick={prev}
            disabled={step === 0}
            className="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-medium disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1"
          >
            <ChevronLeft className="h-3.5 w-3.5" />上一步
          </button>
          <button
            onClick={toggle}
            className="px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-medium flex items-center gap-1"
          >
            {playing ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
            {playing ? '暂停' : step >= total - 1 ? '重播' : '播放'}
          </button>
          <button
            onClick={next}
            disabled={step >= total - 1}
            className="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-medium disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1"
          >
            下一步<ChevronRight className="h-3.5 w-3.5" />
          </button>
          <button
            onClick={reset}
            className="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-medium flex items-center gap-1"
          >
            <RotateCcw className="h-3.5 w-3.5" />重置
          </button>
        </div>
      </div>
    </div>
  );
};
