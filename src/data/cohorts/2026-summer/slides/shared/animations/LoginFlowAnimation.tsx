'use client';
import React, { useCallback, useEffect, useState } from 'react';
import { Play, Pause, RotateCcw, ChevronLeft, ChevronRight, IdCard, LogIn, Server, Database, KeyRound, Route } from 'lucide-react';

type LoginNode = 'form' | 'submit' | 'service' | 'db' | 'token' | 'redirect';

interface LoginStep {
  label: string;
  node: LoginNode;
  desc?: string;
}

interface LoginFlowAnimationProps {
  steps: LoginStep[];
  nodeLabels?: Partial<Record<LoginNode, string>>;
}

const ORDER: LoginNode[] = ['form', 'submit', 'service', 'db', 'token', 'redirect'];

const DEFAULT_LABELS: Record<LoginNode, string> = {
  form: '登录表单',
  submit: '提交凭证',
  service: '认证服务',
  db: '用户库',
  token: '签发令牌',
  redirect: '重定向',
};

const NODE_ICON: Record<LoginNode, React.ComponentType<{ className?: string }>> = {
  form: IdCard,
  submit: LogIn,
  service: Server,
  db: Database,
  token: KeyRound,
  redirect: Route,
};

export const LoginFlowAnimation: React.FC<LoginFlowAnimationProps> = ({ steps, nodeLabels }) => {
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

  const labels = { ...DEFAULT_LABELS, ...(nodeLabels ?? {}) };
  const current = steps[step];
  const visited = new Set<LoginNode>();
  for (let i = 0; i <= step; i++) visited.add(steps[i].node);
  const currentNode = current?.node;

  return (
    <div className="w-full">
      <style>{`
        @keyframes lf-pulse { 0%,100%{ transform: scale(1);} 50%{ transform: scale(1.08);} }
        @keyframes lf-flow { to { stroke-dashoffset: -14; } }
      `}</style>
      <div className="h-1 bg-slate-800 rounded-full overflow-hidden mb-4">
        <div
          className="h-full bg-gradient-to-r from-indigo-500 to-emerald-500 transition-all duration-500"
          style={{ width: `${((step + 1) / (total || 1)) * 100}%` }}
        />
      </div>

      <div className="rounded-2xl bg-slate-950/60 border border-slate-700/60 p-5">
        <div className="flex flex-wrap items-stretch justify-center gap-y-3">
          {ORDER.map((key, i) => {
            const Icon = NODE_ICON[key];
            const isCurrent = key === currentNode;
            const isDone = visited.has(key) && !isCurrent;
            return (
              <React.Fragment key={key}>
                <div
                  className="flex flex-col items-center justify-center px-2.5 py-3 rounded-xl border-2 min-w-[84px] transition-all duration-300"
                  style={{ animation: isCurrent ? 'lf-pulse 1.3s ease-in-out infinite' : undefined }}
                >
                  <div className={`h-10 w-10 rounded-lg flex items-center justify-center mb-1.5 border transition-colors ${isCurrent ? 'border-amber-400 bg-amber-500/20' : isDone ? 'border-emerald-500/50 bg-emerald-500/15' : 'border-slate-700/70 bg-slate-800/60'}`}>
                    <Icon className={`h-5 w-5 ${isCurrent ? 'text-amber-200' : isDone ? 'text-emerald-300' : 'text-slate-500'}`} />
                  </div>
                  <span className={`text-[11px] font-bold ${isCurrent ? 'text-white' : isDone ? 'text-emerald-300' : 'text-slate-500'}`}>{labels[key]}</span>
                </div>
                {i < ORDER.length - 1 && (
                  <div className="flex items-center px-0.5">
                    <svg width="36" height="20" viewBox="0 0 36 20" className="overflow-visible">
                      <line x1="2" y1="10" x2="28" y2="10" strokeWidth="2" strokeDasharray="5 4" className={visited.has(ORDER[i]) && visited.has(ORDER[i + 1]) ? 'stroke-emerald-400' : 'stroke-slate-600'} style={{ animation: visited.has(ORDER[i]) && visited.has(ORDER[i + 1]) ? 'lf-flow 0.7s linear infinite' : undefined }} />
                      <polygon points="28,4 34,10 28,16" className={visited.has(ORDER[i]) && visited.has(ORDER[i + 1]) ? 'fill-emerald-400' : 'fill-slate-600'} />
                    </svg>
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>

        <div className="mt-4 text-center">
          <div className="inline-block px-3 py-1 rounded-md bg-amber-500/15 border border-amber-500/30 text-amber-200 text-xs font-bold">
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
