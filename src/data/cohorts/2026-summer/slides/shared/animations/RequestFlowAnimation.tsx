'use client';
import React, { useCallback, useEffect, useState } from 'react';
import { Play, Pause, RotateCcw, ChevronLeft, ChevronRight, ArrowDown } from 'lucide-react';

interface FlowLayer {
  label: string;
  icon?: React.ComponentType<{ className?: string }>;
}

interface RequestStep {
  label: string;
  /** 当前步骤高亮的层索引列表 */
  highlight: number[];
  desc?: string;
}

interface RequestFlowAnimationProps {
  layers: FlowLayer[];
  steps: RequestStep[];
}

export const RequestFlowAnimation: React.FC<RequestFlowAnimationProps> = ({ layers, steps }) => {
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
  const active = new Set(current?.highlight ?? []);
  const isActive = (i: number) => active.has(i);

  return (
    <div className="w-full">
      <style>{`
        @keyframes rf-pulse { 0%,100%{ transform: scale(1);} 50%{ transform: scale(1.03);} }
        @keyframes rf-flow { to { stroke-dashoffset: -14; } }
      `}</style>
      <div className="h-1 bg-slate-800 rounded-full overflow-hidden mb-4">
        <div
          className="h-full bg-gradient-to-r from-indigo-500 to-emerald-500 transition-all duration-500"
          style={{ width: `${((step + 1) / (total || 1)) * 100}%` }}
        />
      </div>

      <div className="rounded-2xl bg-slate-950/60 border border-slate-700/60 p-5">
        <div className="flex flex-col items-center max-w-xs mx-auto">
          {layers.map((layer, i) => {
            const Icon = layer.icon;
            const on = isActive(i);
            return (
              <React.Fragment key={i}>
                <div
                  className="w-full flex items-center gap-2.5 px-4 py-3 rounded-xl border-2 transition-all duration-300"
                  style={{ animation: on ? 'rf-pulse 1.3s ease-in-out infinite' : undefined }}
                >
                  <div
                    className={`h-9 w-9 rounded-lg flex items-center justify-center border shrink-0 ${
                      on ? 'border-indigo-400 bg-indigo-500/25' : 'border-slate-700/70 bg-slate-800/60'
                    }`}
                  >
                    {Icon ? <Icon className={`h-4 w-4 ${on ? 'text-white' : 'text-slate-500'}`} /> : null}
                  </div>
                  <span className={`text-sm font-bold ${on ? 'text-white' : 'text-slate-400'}`}>{layer.label}</span>
                  {on && <span className="ml-auto text-[10px] text-indigo-300 font-mono">active</span>}
                </div>
                {i < layers.length - 1 && (
                  <div className="h-6 flex items-center">
                    <svg width="20" height="24" viewBox="0 0 20 24" className="overflow-visible">
                      <line
                        x1="10" y1="2" x2="10" y2="16"
                        strokeWidth="2"
                        strokeDasharray="4 4"
                        className={isActive(i) && isActive(i + 1) ? 'stroke-indigo-400' : 'stroke-slate-600'}
                        style={{ animation: isActive(i) && isActive(i + 1) ? 'rf-flow 0.7s linear infinite' : undefined }}
                      />
                      <polygon
                        points="4,16 10,22 16,16"
                        className={isActive(i) && isActive(i + 1) ? 'fill-indigo-400' : 'fill-slate-600'}
                      />
                    </svg>
                  </div>
                )}
              </React.Fragment>
            );
          })}
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
