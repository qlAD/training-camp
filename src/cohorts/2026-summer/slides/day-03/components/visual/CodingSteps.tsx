'use client';

import React from 'react';
import { motion } from 'motion/react';
import { useStage } from '../scene/StageClock';
import { EASE } from '../scene/theme';
import { MessageSquare, ListChecks, FileText, ShieldCheck, Rocket } from 'lucide-react';

interface CodingStepsProps {
  at: number;
  className?: string;
}

const STEPS = [
  {
    icon: MessageSquare,
    title: '理清需求',
    desc: '想清楚要做什么，写给 AI 看',
    cls: 'border-orange-400/40 bg-orange-400/10',
    iconCls: 'text-orange-300',
    numCls: 'bg-orange-400 text-slate-950',
  },
  {
    icon: ListChecks,
    title: '拆解任务',
    desc: '大任务拆成小步骤，一步步交付',
    cls: 'border-sky-400/40 bg-sky-400/10',
    iconCls: 'text-sky-300',
    numCls: 'bg-sky-400 text-slate-950',
  },
  {
    icon: FileText,
    title: '写提示词',
    desc: '角色 + 任务 + 上下文 + 输出格式',
    cls: 'border-amber-400/40 bg-amber-400/10',
    iconCls: 'text-amber-300',
    numCls: 'bg-amber-400 text-slate-950',
  },
  {
    icon: ShieldCheck,
    title: '审查调整',
    desc: '跑起来看看，不对就微调',
    cls: 'border-emerald-400/40 bg-emerald-400/10',
    iconCls: 'text-emerald-300',
    numCls: 'bg-emerald-400 text-slate-950',
  },
  {
    icon: Rocket,
    title: '迭代发布',
    desc: '能跑就先发，再慢慢打磨',
    cls: 'border-violet-400/40 bg-violet-400/10',
    iconCls: 'text-violet-300',
    numCls: 'bg-violet-400 text-slate-950',
  },
];

export const CodingSteps: React.FC<CodingStepsProps> = ({ at, className = '' }) => {
  const { active } = useStage();
  const s = (i: number) => active >= at + i;

  return (
    <div className={`w-full ${className}`}>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-5">
        {STEPS.map((step, i) => {
          const Icon = step.icon;
          const lit = s(i);
          return (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              animate={lit ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.45, ease: EASE }}
              className={`relative flex flex-col items-center gap-2 rounded-2xl border px-3 py-4 ${step.cls}`}
            >
              <span
                className={`absolute -top-2 left-1/2 flex h-5 w-5 -translate-x-1/2 items-center justify-center rounded-full font-mono text-[10px] font-black ${step.numCls}`}
              >
                {i + 1}
              </span>
              <Icon className={`h-6 w-6 ${step.iconCls}`} />
              <span className="text-sm font-bold text-slate-100">{step.title}</span>
              <span className="text-center text-[11px] leading-snug text-slate-400">{step.desc}</span>
            </motion.div>
          );
        })}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={s(STEPS.length) ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, ease: EASE }}
        className="mt-4 text-center text-sm text-slate-300"
      >
        Vibe Coding 五步曲：想清楚 · 拆明白 · 写清楚 · 审仔细 · 发出去
      </motion.p>
    </div>
  );
};