'use client';

import React, { useEffect, useState } from 'react';
import { LogIn, Check, Loader, Lock, KeyRound, ShieldCheck, CornerDownRight } from 'lucide-react';

type StepStatus = 'pending' | 'active' | 'done';

interface LoginStep {
  label: string;
  status?: StepStatus;
  detail?: string;
}

interface LoginInteractiveEffectProps {
  steps: LoginStep[];
  title?: string;
}

const stepIcons = [Lock, KeyRound, ShieldCheck, CornerDownRight];

const statusStyle = (status: StepStatus) => {
  if (status === 'done') return { ring: 'border-emerald-500 bg-emerald-500/20', text: 'text-emerald-300', bar: 'bg-emerald-400' };
  if (status === 'active') return { ring: 'border-indigo-500 bg-indigo-500/20', text: 'text-indigo-300', bar: 'bg-indigo-400' };
  return { ring: 'border-slate-600 bg-slate-800/60', text: 'text-slate-500', bar: 'bg-slate-600' };
};

// 登录交互效果：步骤动画 输入 → 校验 → Token → 跳转
export const LoginInteractiveEffect: React.FC<LoginInteractiveEffectProps> = ({ steps, title }) => {
  const [active, setActive] = useState(0);
  const total = steps.length;

  useEffect(() => {
    if (total === 0) return;
    const cycle = (total + 1) * 1100;
    const id = setInterval(() => {
      setActive((prev) => {
        if (prev >= total) return 0;
        return prev + 1;
      });
    }, 1100);
    const resetId = setTimeout(() => setActive(0), cycle);
    return () => {
      clearInterval(id);
      clearTimeout(resetId);
    };
  }, [total]);

  const currentStatus = (index: number): StepStatus => {
    if (active > total) return 'done';
    if (index < active) return 'done';
    if (index === active) return 'active';
    return 'pending';
  };

  return (
    <div className="space-y-4">
      <style>{`
        @keyframes login-step-spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes login-step-grow {
          0% { width: 0%; }
          100% { width: 100%; }
        }
      `}</style>
      {title && (
        <div className="flex items-center space-x-2">
          <LogIn className="h-4 w-4 text-indigo-400" />
          <h3 className="text-sm font-bold text-white">{title}</h3>
        </div>
      )}

      <div className="rounded-2xl bg-gradient-to-br from-slate-950 to-indigo-950/40 border border-slate-700/80 p-5 sm:p-6">
        <div className="flex items-center justify-between mb-4">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">登录流程</span>
          <span className="text-[10px] font-mono text-indigo-300">
            {Math.min(active, total)}/{total}
          </span>
        </div>

        {/* 进度条 */}
        <div className="h-1.5 rounded-full bg-slate-800 overflow-hidden mb-5">
          <div
            className="h-full bg-gradient-to-r from-indigo-500 to-emerald-500 transition-all duration-700"
            style={{ width: `${(Math.min(active, total) / Math.max(total, 1)) * 100}%` }}
          />
        </div>

        <div className="space-y-3">
          {steps.map((step, i) => {
            const status = currentStatus(i);
            const style = statusStyle(status);
            const Icon = stepIcons[i % stepIcons.length];
            const StepIcon = status === 'done' ? Check : status === 'active' ? Loader : Icon;
            return (
              <div
                key={`${step.label}-${i}`}
                className={`flex items-center space-x-3 p-3 rounded-lg border ${style.ring} transition-all duration-300`}
              >
                <div className={`h-8 w-8 rounded-full flex items-center justify-center shrink-0 ${style.text}`}>
                  <StepIcon
                    className="h-4 w-4"
                    style={status === 'active' ? { animation: 'login-step-spin 0.9s linear infinite' } : undefined}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-bold text-white">{step.label}</span>
                    <span className={`text-[10px] font-bold uppercase ${style.text}`}>
                      {status === 'done' ? '完成' : status === 'active' ? '进行中' : '等待'}
                    </span>
                  </div>
                  {step.detail && <p className="text-[10px] text-slate-400 mt-0.5">{step.detail}</p>}
                </div>
                <div className={`h-1.5 w-10 rounded-full ${style.bar} ${status === 'active' ? 'opacity-100' : 'opacity-40'}`} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
