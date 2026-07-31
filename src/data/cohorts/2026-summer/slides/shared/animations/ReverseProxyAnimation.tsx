'use client';
import React, { useCallback, useEffect, useState } from 'react';
import { Play, Pause, RotateCcw, ChevronLeft, ChevronRight, Globe, Server, ServerOff } from 'lucide-react';

interface Backend {
  label: string;
  healthy?: boolean;
}

interface ProxyStep {
  label: string;
  /** 目标后端索引 */
  target: number;
  desc?: string;
}

interface ReverseProxyAnimationProps {
  client: { label: string };
  nginx: { label: string };
  backends: Backend[];
  steps: ProxyStep[];
}

export const ReverseProxyAnimation: React.FC<ReverseProxyAnimationProps> = ({ client, nginx, backends, steps }) => {
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
    const t = setTimeout(() => setStep((s) => s + 1), 2000);
    return () => clearTimeout(t);
  }, [playing, step, total]);

  const current = steps[step];
  const targetIdx = current?.target ?? -1;

  return (
    <div className="w-full">
      <style>{`
        @keyframes rp-pulse { 0%,100%{ transform: scale(1);} 50%{ transform: scale(1.06);} }
        @keyframes rp-flow { to { stroke-dashoffset: -14; } }
      `}</style>
      <div className="h-1 bg-slate-800 rounded-full overflow-hidden mb-4">
        <div
          className="h-full bg-gradient-to-r from-cyan-500 to-emerald-500 transition-all duration-500"
          style={{ width: `${((step + 1) / (total || 1)) * 100}%` }}
        />
      </div>

      <div className="rounded-2xl bg-slate-950/60 border border-slate-700/60 p-5">
        <div className="grid grid-cols-3 gap-3 items-center">
          {/* Client */}
          <div className="flex flex-col items-center">
            <div className="h-12 w-12 rounded-xl flex items-center justify-center border-2 border-cyan-400 bg-cyan-500/20" style={{ animation: 'rp-pulse 1.4s ease-in-out infinite' }}>
              <Globe className="h-5 w-5 text-white" />
            </div>
            <span className="text-[11px] font-bold text-white mt-1.5 text-center">{client.label}</span>
          </div>

          {/* Nginx */}
          <div className="flex flex-col items-center relative">
            <svg className="absolute -left-6 top-5" width="40" height="20" viewBox="0 0 40 20">
              <line x1="2" y1="10" x2="32" y2="10" strokeWidth="2" strokeDasharray="5 4" className="stroke-cyan-400" style={{ animation: 'rp-flow 0.7s linear infinite' }} />
              <polygon points="32,4 38,10 32,16" className="fill-cyan-400" />
            </svg>
            <div className="h-12 w-12 rounded-xl flex items-center justify-center border-2 border-indigo-400 bg-indigo-500/20" style={{ animation: 'rp-pulse 1.4s ease-in-out infinite' }}>
              <Server className="h-5 w-5 text-white" />
            </div>
            <span className="text-[11px] font-bold text-white mt-1.5 text-center">{nginx.label}</span>
          </div>

          {/* Backends */}
          <div className="flex flex-col gap-1.5">
            {backends.map((b, i) => {
              const isTarget = i === targetIdx;
              const healthy = b.healthy !== false;
              return (
                <div key={i} className="relative">
                  {isTarget && (
                    <svg className="absolute -left-5 top-1/2 -translate-y-1/2" width="36" height="20" viewBox="0 0 36 20">
                      <line x1="2" y1="10" x2="26" y2="10" strokeWidth="2" strokeDasharray="5 4" className="stroke-emerald-400" style={{ animation: 'rp-flow 0.7s linear infinite' }} />
                      <polygon points="26,4 32,10 26,16" className="fill-emerald-400" />
                    </svg>
                  )}
                  <div
                    className={`flex items-center gap-1.5 px-2 py-1.5 rounded-lg border-2 transition-all duration-300 ${
                      isTarget ? 'border-emerald-400 bg-emerald-500/15' : healthy ? 'border-slate-700/70 bg-slate-800/60' : 'border-rose-500/40 bg-rose-500/10'
                    }`}
                    style={{ animation: isTarget ? 'rp-pulse 1.2s ease-in-out infinite' : undefined }}
                  >
                    {healthy ? <Server className="h-3.5 w-3.5 text-slate-300" /> : <ServerOff className="h-3.5 w-3.5 text-rose-300" />}
                    <span className={`text-[11px] font-bold ${isTarget ? 'text-emerald-200' : healthy ? 'text-slate-300' : 'text-rose-300'}`}>{b.label}</span>
                  </div>
                </div>
              );
            })}
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
