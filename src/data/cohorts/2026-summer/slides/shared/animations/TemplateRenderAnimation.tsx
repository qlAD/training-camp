'use client';
import React, { useCallback, useEffect, useState } from 'react';
import { Play, Pause, RotateCcw, ChevronLeft, ChevronRight, Braces, Database, Eye } from 'lucide-react';

interface TemplateData {
  key: string;
  value: string;
}

interface TemplateStep {
  label: string;
  highlight?: 'template' | 'data' | 'rendered';
  desc?: string;
}

interface TemplateRenderAnimationProps {
  template: string;
  data: TemplateData[];
  steps: TemplateStep[];
}

function interpolate(template: string, data: TemplateData[]): string {
  return template.replace(/\{\{(\w+)\}\}/g, (_, k: string) => {
    const found = data.find((d) => d.key === k);
    return found ? found.value : `{{${k}}}`;
  });
}

export const TemplateRenderAnimation: React.FC<TemplateRenderAnimationProps> = ({ template, data, steps }) => {
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
    const t = setTimeout(() => setStep((s) => s + 1), 1600);
    return () => clearTimeout(t);
  }, [playing, step, total]);

  const current = steps[step];
  const hl = current?.highlight;

  const rendered = interpolate(template, data);

  const panelCls = (key: 'template' | 'data' | 'rendered') =>
    `rounded-xl border-2 p-3 transition-all duration-300 ${
      hl === key
        ? key === 'template'
          ? 'border-indigo-400 bg-indigo-500/10 shadow-lg shadow-indigo-500/20'
          : key === 'data'
          ? 'border-amber-400 bg-amber-500/10 shadow-lg shadow-amber-500/20'
          : 'border-emerald-400 bg-emerald-500/10 shadow-lg shadow-emerald-500/20'
        : 'border-slate-700/70 bg-slate-800/50'
    }`;

  return (
    <div className="w-full">
      <style>{`@keyframes tr-pulse { 0%,100%{ transform: scale(1);} 50%{ transform: scale(1.02);} }`}</style>
      <div className="h-1 bg-slate-800 rounded-full overflow-hidden mb-4">
        <div
          className="h-full bg-gradient-to-r from-indigo-500 via-amber-500 to-emerald-500 transition-all duration-500"
          style={{ width: `${((step + 1) / (total || 1)) * 100}%` }}
        />
      </div>

      <div className="rounded-2xl bg-slate-950/60 border border-slate-700/60 p-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {/* Template */}
          <div className={panelCls('template')} style={{ animation: hl === 'template' ? 'tr-pulse 1.4s ease-in-out infinite' : undefined }}>
            <div className="flex items-center gap-1.5 mb-2">
              <Braces className="h-3.5 w-3.5 text-indigo-300" />
              <span className="text-[10px] font-bold uppercase tracking-wide text-slate-400">模板</span>
            </div>
            <pre className="text-[11px] font-mono text-slate-200 whitespace-pre-wrap break-words leading-relaxed">{template}</pre>
          </div>

          {/* Data */}
          <div className={panelCls('data')} style={{ animation: hl === 'data' ? 'tr-pulse 1.4s ease-in-out infinite' : undefined }}>
            <div className="flex items-center gap-1.5 mb-2">
              <Database className="h-3.5 w-3.5 text-amber-300" />
              <span className="text-[10px] font-bold uppercase tracking-wide text-slate-400">数据</span>
            </div>
            <div className="space-y-1">
              {data.map((d) => (
                <div key={d.key} className="flex items-center gap-1.5 font-mono text-[11px]">
                  <span className="text-amber-300">{d.key}:</span>
                  <span className="text-slate-200">&quot;{d.value}&quot;</span>
                </div>
              ))}
            </div>
          </div>

          {/* Rendered */}
          <div className={panelCls('rendered')} style={{ animation: hl === 'rendered' ? 'tr-pulse 1.4s ease-in-out infinite' : undefined }}>
            <div className="flex items-center gap-1.5 mb-2">
              <Eye className="h-3.5 w-3.5 text-emerald-300" />
              <span className="text-[10px] font-bold uppercase tracking-wide text-slate-400">渲染结果</span>
            </div>
            <div className="text-sm text-white font-bold leading-relaxed">{rendered}</div>
          </div>
        </div>

        <div className="mt-4 text-center">
          <div className="inline-block px-3 py-1 rounded-md bg-violet-500/15 border border-violet-500/30 text-violet-200 text-xs font-bold">
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
          <button onClick={prev} disabled={step === 0} className="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-medium disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1">
            <ChevronLeft className="h-3.5 w-3.5" />上一步
          </button>
          <button onClick={toggle} className="px-3 py-1.5 rounded-lg bg-violet-600 hover:bg-violet-500 text-white text-xs font-medium flex items-center gap-1">
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
