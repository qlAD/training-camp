'use client';
import React, { useCallback, useEffect, useState } from 'react';
import { Play, Pause, RotateCcw, ChevronLeft, ChevronRight, CircleCheck, CircleX, Loader, Pencil } from 'lucide-react';

interface FormField {
  label: string;
  type: string;
  valid?: boolean;
  value?: string;
}

interface FormStep {
  label: string;
  /** 目标字段索引 */
  field: number;
  action: 'focus' | 'input' | 'validate' | 'pass' | 'fail';
  desc?: string;
}

interface FormInteractionAnimationProps {
  fields: FormField[];
  steps: FormStep[];
}

const ACTION_STYLE: Record<FormStep['action'], { border: string; bg: string; text: string; label: string }> = {
  focus: { border: 'border-indigo-400', bg: 'bg-indigo-500/10', text: 'text-indigo-300', label: '聚焦' },
  input: { border: 'border-cyan-400', bg: 'bg-cyan-500/10', text: 'text-cyan-300', label: '输入' },
  validate: { border: 'border-amber-400', bg: 'bg-amber-500/10', text: 'text-amber-300', label: '校验中' },
  pass: { border: 'border-emerald-400', bg: 'bg-emerald-500/10', text: 'text-emerald-300', label: '通过' },
  fail: { border: 'border-rose-400', bg: 'bg-rose-500/10', text: 'text-rose-300', label: '失败' },
};

export const FormInteractionAnimation: React.FC<FormInteractionAnimationProps> = ({ fields, steps }) => {
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
  const activeField = current?.field;
  const action = current?.action;
  const currentStyle = action ? ACTION_STYLE[action] : null;

  // 跟踪每个字段是否已通过（基于已走过的 pass 步骤）
  const passedFields = new Set<number>();
  for (let i = 0; i <= step; i++) {
    if (steps[i].action === 'pass') passedFields.add(steps[i].field);
  }

  return (
    <div className="w-full">
      <style>{`@keyframes fi-pulse { 0%,100%{ box-shadow: 0 0 0 0 rgba(99,102,241,0);} 50%{ box-shadow: 0 0 0 4px rgba(99,102,241,0.18);} }`}</style>
      <div className="h-1 bg-slate-800 rounded-full overflow-hidden mb-4">
        <div
          className="h-full bg-gradient-to-r from-indigo-500 to-emerald-500 transition-all duration-500"
          style={{ width: `${((step + 1) / (total || 1)) * 100}%` }}
        />
      </div>

      <div className="rounded-2xl bg-slate-950/60 border border-slate-700/60 p-5">
        <div className="max-w-md mx-auto space-y-3">
          {fields.map((f, i) => {
            const isActive = i === activeField;
            const passed = passedFields.has(i) && !isActive;
            const style = isActive && action ? ACTION_STYLE[action] : null;
            return (
              <div key={i} className="space-y-1">
                <label className={`text-[11px] font-bold ${isActive ? 'text-white' : passed ? 'text-emerald-300' : 'text-slate-400'}`}>
                  {f.label}
                </label>
                <div
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg border-2 transition-all duration-300 ${
                    style ? `${style.border} ${style.bg}` : passed ? 'border-emerald-500/40 bg-emerald-500/5' : 'border-slate-700/70 bg-slate-800/50'
                  }`}
                  style={{ animation: isActive && action === 'focus' ? 'fi-pulse 1.3s ease-in-out infinite' : undefined }}
                >
                  <input
                    readOnly
                    value={isActive && (action === 'input' || action === 'validate' || action === 'pass' || action === 'fail') ? f.value ?? '' : passed ? f.value ?? '' : ''}
                    placeholder={f.type}
                    className="flex-1 bg-transparent outline-none text-xs text-white font-mono placeholder:text-slate-600"
                  />
                  {isActive && action === 'validate' && <Loader className="h-4 w-4 text-amber-300 animate-spin" style={{ animationDuration: '0.9s' }} />}
                  {isActive && action === 'input' && <Pencil className="h-3.5 w-3.5 text-cyan-300" />}
                  {isActive && action === 'pass' && <CircleCheck className="h-4 w-4 text-emerald-300" />}
                  {isActive && action === 'fail' && <CircleX className="h-4 w-4 text-rose-300" />}
                  {passed && <CircleCheck className="h-4 w-4 text-emerald-400/70" />}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-4 text-center">
          {action && currentStyle && (
            <div className={`inline-block px-3 py-1 rounded-md text-xs font-bold border ${currentStyle.border} ${currentStyle.bg} ${currentStyle.text}`}>
              {currentStyle.label} · {current?.label}
            </div>
          )}
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
          <button onClick={toggle} className="px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-medium flex items-center gap-1">
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
