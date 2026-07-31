'use client';
import React, { useCallback, useEffect, useState } from 'react';
import { Play, Pause, RotateCcw, ChevronLeft, ChevronRight, Globe, Server } from 'lucide-react';

interface CorsEndpoint {
  label: string;
}

interface CorsStep {
  label: string;
  phase: 'preflight' | 'preflight-resp' | 'real-request' | 'real-resp';
  desc?: string;
}

interface CORSPreflightAnimationProps {
  origin: CorsEndpoint;
  target: CorsEndpoint;
  steps: CorsStep[];
}

const PHASE_META: Record<CorsStep['phase'], { dir: 'req' | 'resp'; method: string; border: string; bg: string; text: string }> = {
  preflight: { dir: 'req', method: 'OPTIONS', border: 'border-cyan-400/60', bg: 'bg-cyan-500/20', text: 'text-cyan-200' },
  'preflight-resp': { dir: 'resp', method: '200 OK', border: 'border-emerald-400/60', bg: 'bg-emerald-500/20', text: 'text-emerald-200' },
  'real-request': { dir: 'req', method: 'GET/POST', border: 'border-indigo-400/60', bg: 'bg-indigo-500/20', text: 'text-indigo-200' },
  'real-resp': { dir: 'resp', method: '200 OK', border: 'border-emerald-400/60', bg: 'bg-emerald-500/20', text: 'text-emerald-200' },
};

export const CORSPreflightAnimation: React.FC<CORSPreflightAnimationProps> = ({ origin, target, steps }) => {
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
    const t = setTimeout(() => setStep((s) => s + 1), 2100);
    return () => clearTimeout(t);
  }, [playing, step, total]);

  const current = steps[step];
  const meta = current ? PHASE_META[current.phase] : null;
  const isReq = meta?.dir === 'req';

  return (
    <div className="w-full">
      <style>{`
        @keyframes cors-req { 0%{ left: 10%; opacity: 0;} 15%{ opacity: 1;} 85%{ opacity: 1;} 100%{ left: 90%; opacity: 0;} }
        @keyframes cors-resp { 0%{ left: 90%; opacity: 0;} 15%{ opacity: 1;} 85%{ opacity: 1;} 100%{ left: 10%; opacity: 0;} }
      `}</style>
      <div className="h-1 bg-slate-800 rounded-full overflow-hidden mb-4">
        <div
          className="h-full bg-gradient-to-r from-cyan-500 via-indigo-500 to-emerald-500 transition-all duration-500"
          style={{ width: `${((step + 1) / (total || 1)) * 100}%` }}
        />
      </div>

      <div className="rounded-2xl bg-slate-950/60 border border-slate-700/60 p-5">
        <div className="relative flex items-center justify-between min-h-[120px]">
          <div className="flex flex-col items-center z-10">
            <div className={`h-14 w-14 rounded-xl flex items-center justify-center border-2 transition-colors ${isReq ? 'border-cyan-400 bg-cyan-500/20' : 'border-slate-700/70 bg-slate-800/70'}`}>
              <Globe className="h-6 w-6 text-white" />
            </div>
            <span className="text-xs font-bold text-white mt-1.5">{origin.label}</span>
          </div>

          <div className="absolute left-[16%] right-[16%] top-7 h-0.5 bg-slate-700/80">
            {meta && (
              <div
                key={step}
                className={`absolute -top-3.5 px-2.5 py-1 rounded-md text-[10px] font-mono font-bold border ${meta.border} ${meta.bg} ${meta.text} whitespace-nowrap`}
                style={{ animation: `${isReq ? 'cors-req' : 'cors-resp'} 2s ease-in-out forwards` }}
              >
                {meta.method}
              </div>
            )}
          </div>

          <div className="flex flex-col items-center z-10">
            <div className={`h-14 w-14 rounded-xl flex items-center justify-center border-2 transition-colors ${!isReq ? 'border-emerald-400 bg-emerald-500/20' : 'border-slate-700/70 bg-slate-800/70'}`}>
              <Server className="h-6 w-6 text-white" />
            </div>
            <span className="text-xs font-bold text-white mt-1.5">{target.label}</span>
          </div>
        </div>

        <div className="mt-4 flex justify-center gap-2 flex-wrap">
          {(['preflight', 'preflight-resp', 'real-request', 'real-resp'] as const).map((ph) => {
            const m = PHASE_META[ph];
            const on = current?.phase === ph;
            const phaseIdx = steps.findIndex((s) => s.phase === ph);
            const reached = phaseIdx >= 0 && phaseIdx <= step;
            return (
              <div
                key={ph}
                className={`px-2 py-0.5 rounded text-[10px] font-bold border transition-colors ${
                  on ? `${m.border} ${m.bg} ${m.text}` : reached ? 'border-slate-600/60 text-slate-400' : 'border-slate-700/50 text-slate-600'
                }`}
              >
                {ph}
              </div>
            );
          })}
        </div>

        <div className="mt-3 text-center">
          <div className={`inline-block px-3 py-1 rounded-md text-xs font-bold border ${meta ? `${meta.border} ${meta.bg} ${meta.text}` : ''}`}>
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
