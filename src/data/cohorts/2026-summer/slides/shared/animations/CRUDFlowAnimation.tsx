'use client';
import React, { useCallback, useEffect, useState } from 'react';
import { Play, Pause, RotateCcw, ChevronLeft, ChevronRight, Plus, Search, Pencil, Trash2 } from 'lucide-react';

type CrudType = 'create' | 'read' | 'update' | 'delete';

interface CrudOperation {
  type: CrudType;
  label: string;
  desc?: string;
}

interface CRUDFlowAnimationProps {
  operations: CrudOperation[];
  title?: string;
}

const CRUD_STYLE: Record<CrudType, { icon: React.ComponentType<{ className?: string }>; border: string; bg: string; text: string; accent: string }> = {
  create: { icon: Plus, border: 'border-emerald-400', bg: 'bg-emerald-500/15', text: 'text-emerald-300', accent: 'from-emerald-500 to-emerald-700' },
  read: { icon: Search, border: 'border-indigo-400', bg: 'bg-indigo-500/15', text: 'text-indigo-300', accent: 'from-indigo-500 to-indigo-700' },
  update: { icon: Pencil, border: 'border-amber-400', bg: 'bg-amber-500/15', text: 'text-amber-300', accent: 'from-amber-500 to-amber-700' },
  delete: { icon: Trash2, border: 'border-rose-400', bg: 'bg-rose-500/15', text: 'text-rose-300', accent: 'from-rose-500 to-rose-700' },
};

export const CRUDFlowAnimation: React.FC<CRUDFlowAnimationProps> = ({ operations, title }) => {
  const [step, setStep] = useState(0);
  const [playing, setPlaying] = useState(false);
  const total = operations.length;

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

  const current = operations[step];
  const currentStyle = current ? CRUD_STYLE[current.type] : null;

  return (
    <div className="w-full">
      <style>{`
        @keyframes crud-pulse { 0%,100%{ transform: scale(1);} 50%{ transform: scale(1.06);} }
        @keyframes crud-rise { from { opacity: 0; transform: translateY(8px);} to { opacity: 1; transform: none; } }
      `}</style>
      {title && <div className="text-xs text-slate-400 mb-3 font-medium">{title}</div>}
      <div className="h-1 bg-slate-800 rounded-full overflow-hidden mb-4">
        <div
          className="h-full bg-gradient-to-r from-emerald-500 via-amber-500 to-rose-500 transition-all duration-500"
          style={{ width: `${((step + 1) / (total || 1)) * 100}%` }}
        />
      </div>

      <div className="rounded-2xl bg-slate-950/60 border border-slate-700/60 p-5">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {operations.map((op, i) => {
            const st = CRUD_STYLE[op.type];
            const Icon = st.icon;
            const on = i === step;
            const done = i < step;
            return (
              <div
                key={i}
                className={`relative p-3 rounded-xl border-2 transition-all duration-300 ${
                  on ? `${st.border} ${st.bg}` : done ? 'border-slate-700/60 bg-slate-800/40' : 'border-slate-700/70 bg-slate-800/50'
                }`}
                style={{ animation: on ? 'crud-pulse 1.4s ease-in-out infinite' : undefined }}
              >
                <div className={`h-9 w-9 rounded-lg bg-gradient-to-br ${st.accent} flex items-center justify-center mb-2 ${on ? '' : 'opacity-50'}`}>
                  <Icon className="h-4 w-4 text-white" />
                </div>
                <div className={`text-[10px] font-bold uppercase tracking-wide ${on ? st.text : 'text-slate-500'}`}>{op.type}</div>
                <div className={`text-xs font-bold mt-0.5 ${on ? 'text-white' : 'text-slate-400'}`}>{op.label}</div>
              </div>
            );
          })}
        </div>

        <div className="mt-4 text-center" style={{ animation: 'crud-rise 0.35s ease-out' }} key={step}>
          {current && currentStyle && (
            <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-bold border ${currentStyle.border} ${currentStyle.bg} ${currentStyle.text}`}>
              <currentStyle.icon className="h-3.5 w-3.5" />
              {current.label}
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
