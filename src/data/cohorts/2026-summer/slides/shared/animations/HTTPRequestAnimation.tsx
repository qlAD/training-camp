'use client';
import React, { useCallback, useEffect, useState } from 'react';
import { Play, Pause, RotateCcw, ChevronLeft, ChevronRight } from 'lucide-react';

interface HttpEndpoint {
  label: string;
  icon?: React.ComponentType<{ className?: string }>;
}

interface HttpStep {
  label: string;
  direction: 'req' | 'resp';
  payload?: string;
  desc?: string;
}

interface HTTPRequestAnimationProps {
  client: HttpEndpoint;
  server: HttpEndpoint;
  steps: HttpStep[];
}

export const HTTPRequestAnimation: React.FC<HTTPRequestAnimationProps> = ({
  client,
  server,
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
    const t = setTimeout(() => setStep((s) => s + 1), 2200);
    return () => clearTimeout(t);
  }, [playing, step, total]);

  const current = steps[step];
  const isReq = current?.direction === 'req';

  const ClientIcon = client.icon;
  const ServerIcon = server.icon;

  return (
    <div className="w-full">
      <style>{`
        @keyframes http-req { 0%{ left: 8%; opacity: 0;} 15%{ opacity: 1;} 85%{ opacity: 1;} 100%{ left: 92%; opacity: 0;} }
        @keyframes http-resp { 0%{ left: 92%; opacity: 0;} 15%{ opacity: 1;} 85%{ opacity: 1;} 100%{ left: 8%; opacity: 0;} }
      `}</style>
      <div className="h-1 bg-slate-800 rounded-full overflow-hidden mb-4">
        <div
          className="h-full bg-gradient-to-r from-cyan-500 to-indigo-500 transition-all duration-500"
          style={{ width: `${((step + 1) / (total || 1)) * 100}%` }}
        />
      </div>

      <div className="rounded-2xl bg-slate-950/60 border border-slate-700/60 p-5">
        <div className="relative flex items-center justify-between min-h-[120px]">
          {/* Client */}
          <div className="flex flex-col items-center z-10">
            <div
              className={`h-14 w-14 rounded-xl flex items-center justify-center border-2 transition-colors ${
                isReq ? 'border-cyan-400 bg-cyan-500/20' : 'border-slate-700/70 bg-slate-800/70'
              }`}
            >
              {ClientIcon ? <ClientIcon className="h-6 w-6 text-white" /> : null}
            </div>
            <span className="text-xs font-bold text-white mt-1.5">{client.label}</span>
          </div>

          {/* Track */}
          <div className="absolute left-[14%] right-[14%] top-7 h-0.5 bg-slate-700/80">
            <div
              key={step}
              className="absolute -top-3 px-2 py-0.5 rounded-md text-[10px] font-mono font-bold whitespace-nowrap"
              style={{
                animation: `${isReq ? 'http-req' : 'http-resp'} 2s ease-in-out forwards`,
                background: isReq ? 'rgb(34 211 238 / 0.25)' : 'rgb(52 211 153 / 0.25)',
                border: `1px solid ${isReq ? 'rgb(34 211 238 / 0.6)' : 'rgb(52 211 153 / 0.6)'}`,
                color: isReq ? 'rgb(165 243 252)' : 'rgb(167 243 208)',
              }}
            >
              {current?.payload ?? (isReq ? '→ 请求' : '← 响应')}
            </div>
          </div>

          {/* Server */}
          <div className="flex flex-col items-center z-10">
            <div
              className={`h-14 w-14 rounded-xl flex items-center justify-center border-2 transition-colors ${
                !isReq ? 'border-emerald-400 bg-emerald-500/20' : 'border-slate-700/70 bg-slate-800/70'
              }`}
            >
              {ServerIcon ? <ServerIcon className="h-6 w-6 text-white" /> : null}
            </div>
            <span className="text-xs font-bold text-white mt-1.5">{server.label}</span>
          </div>
        </div>

        <div className="mt-3 text-center">
          <div
            className={`inline-block px-3 py-1 rounded-md text-xs font-bold border ${
              isReq
                ? 'bg-cyan-500/15 border-cyan-500/30 text-cyan-200'
                : 'bg-emerald-500/15 border-emerald-500/30 text-emerald-200'
            }`}
          >
            {isReq ? '请求 →' : '← 响应'} {current?.label}
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
            className="px-3 py-1.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-medium flex items-center gap-1"
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
