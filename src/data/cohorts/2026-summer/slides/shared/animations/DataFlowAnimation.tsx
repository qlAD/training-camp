'use client';
import React, { useCallback, useEffect, useState } from 'react';
import { Play, Pause, RotateCcw, ChevronLeft, ChevronRight, Monitor, PlugZap, Server, Database } from 'lucide-react';

type NodeType = 'frontend' | 'axios' | 'backend' | 'db';

interface FlowNode {
  id: string;
  label: string;
  type: NodeType;
}

interface DataFlowStep {
  label: string;
  /** 流经的节点 id 序列 */
  path: string[];
  desc?: string;
}

interface DataFlowAnimationProps {
  nodes: FlowNode[];
  steps: DataFlowStep[];
}

const NODE_ICON: Record<NodeType, React.ComponentType<{ className?: string }>> = {
  frontend: Monitor,
  axios: PlugZap,
  backend: Server,
  db: Database,
};

const NODE_TONE: Record<NodeType, { active: string; text: string }> = {
  frontend: { active: 'border-indigo-400 bg-indigo-500/20', text: 'text-indigo-200' },
  axios: { active: 'border-cyan-400 bg-cyan-500/20', text: 'text-cyan-200' },
  backend: { active: 'border-violet-400 bg-violet-500/20', text: 'text-violet-200' },
  db: { active: 'border-emerald-400 bg-emerald-500/20', text: 'text-emerald-200' },
};

export const DataFlowAnimation: React.FC<DataFlowAnimationProps> = ({ nodes, steps }) => {
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
    const t = setTimeout(() => setStep((s) => s + 1), 1900);
    return () => clearTimeout(t);
  }, [playing, step, total]);

  const current = steps[step];
  const path = current?.path ?? [];
  const pathSet = new Set(path);
  const nodeById = new Map(nodes.map((n) => [n.id, n]));
  const pathEdgeActive = (a: string, b: string) => {
    const ia = path.indexOf(a);
    const ib = path.indexOf(b);
    return ia >= 0 && ib >= 0 && ib === ia + 1;
  };

  return (
    <div className="w-full">
      <style>{`
        @keyframes df-pulse { 0%,100%{ transform: scale(1);} 50%{ transform: scale(1.06);} }
        @keyframes df-flow { to { stroke-dashoffset: -14; } }
      `}</style>
      <div className="h-1 bg-slate-800 rounded-full overflow-hidden mb-4">
        <div
          className="h-full bg-gradient-to-r from-cyan-500 via-violet-500 to-emerald-500 transition-all duration-500"
          style={{ width: `${((step + 1) / (total || 1)) * 100}%` }}
        />
      </div>

      <div className="rounded-2xl bg-slate-950/60 border border-slate-700/60 p-5">
        <div className="flex flex-wrap items-stretch justify-center gap-y-3">
          {nodes.map((n, i) => {
            const Icon = NODE_ICON[n.type];
            const on = pathSet.has(n.id);
            const tone = NODE_TONE[n.type];
            return (
              <React.Fragment key={n.id}>
                <div
                  className="flex flex-col items-center justify-center px-2.5 py-3 rounded-xl border-2 min-w-[84px] transition-all duration-300"
                  style={{ animation: on ? 'df-pulse 1.3s ease-in-out infinite' : undefined }}
                >
                  <div className={`h-10 w-10 rounded-lg flex items-center justify-center mb-1.5 border transition-colors ${on ? tone.active : 'border-slate-700/70 bg-slate-800/60'}`}>
                    <Icon className={`h-5 w-5 ${on ? 'text-white' : 'text-slate-500'}`} />
                  </div>
                  <span className={`text-[11px] font-bold ${on ? 'text-white' : 'text-slate-400'}`}>{n.label}</span>
                </div>
                {i < nodes.length - 1 && (
                  <div className="flex items-center px-0.5">
                    <svg width="40" height="20" viewBox="0 0 40 20" className="overflow-visible">
                      <line
                        x1="2" y1="10" x2="32" y2="10"
                        strokeWidth="2"
                        strokeDasharray="5 4"
                        className={pathEdgeActive(nodes[i].id, nodes[i + 1].id) ? 'stroke-violet-400' : 'stroke-slate-600'}
                        style={{ animation: pathEdgeActive(nodes[i].id, nodes[i + 1].id) ? 'df-flow 0.7s linear infinite' : undefined }}
                      />
                      <polygon points="32,4 38,10 32,16" className={pathEdgeActive(nodes[i].id, nodes[i + 1].id) ? 'fill-violet-400' : 'fill-slate-600'} />
                    </svg>
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* path chip */}
        <div className="mt-4 flex flex-wrap items-center justify-center gap-1.5">
          <span className="text-[10px] text-slate-500 font-mono">路径：</span>
          {path.map((id, i) => {
            const n = nodeById.get(id);
            return (
              <React.Fragment key={`${id}-${i}`}>
                <span className="px-2 py-0.5 rounded bg-violet-500/15 border border-violet-500/30 text-violet-200 text-[10px] font-mono font-bold">
                  {n?.label ?? id}
                </span>
                {i < path.length - 1 && <span className="text-slate-600 text-[10px]">→</span>}
              </React.Fragment>
            );
          })}
        </div>

        <div className="mt-3 text-center">
          <div className="inline-block px-3 py-1 rounded-md bg-violet-500/15 border border-violet-500/30 text-violet-200 text-xs font-bold">
            {current?.label}
          </div>
          {current?.desc && (
            <p className="text-[11px] text-slate-400 mt-2 leading-snug max-w-md mx-auto">{current.desc}</p>
          )}
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
