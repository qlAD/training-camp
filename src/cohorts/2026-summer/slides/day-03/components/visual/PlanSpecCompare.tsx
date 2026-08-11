'use client';

import React from 'react';
import { motion } from 'motion/react';
import { useStage } from '../scene/StageClock';
import { EASE } from '../scene/theme';
import { Lightbulb, FileText } from 'lucide-react';

interface PlanSpecCompareProps {
  at: number;
  className?: string;
}

const PLAN = {
  icon: Lightbulb,
  title: 'Plan 模式',
  tag: '先出图纸',
  desc: 'AI 先帮你梳理思路、拆分任务、给出实施步骤，等你确认了再动手',
  points: [
    '适合复杂业务或整体设计',
    '先想清楚再动手，少走弯路',
    '确认实施步骤后才写代码',
  ],
  cls: 'border-amber-400/40 bg-amber-400/10',
  iconCls: 'text-amber-300',
  titleCls: 'text-amber-100',
  badgeCls: 'bg-amber-400/20 text-amber-200',
};

const SPEC = {
  icon: FileText,
  title: 'Spec 模式',
  tag: '按规格施工',
  desc: '在明确的规范与规格约束下精确生成代码',
  points: [
    '适合已经想清楚要什么',
    '稳定可复用产出',
    '风格统一，不会这次圆下次方',
  ],
  cls: 'border-sky-400/40 bg-sky-400/10',
  iconCls: 'text-sky-300',
  titleCls: 'text-sky-100',
  badgeCls: 'bg-sky-400/20 text-sky-200',
};

export const PlanSpecCompare: React.FC<PlanSpecCompareProps> = ({ at, className = '' }) => {
  const { active } = useStage();
  const s = (i: number) => active >= at + i;

  return (
    <div className={`w-full ${className}`}>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {[PLAN, SPEC].map((data, i) => {
          const Icon = data.icon;
          const lit = s(i);
          return (
            <motion.div
              key={data.title}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={lit ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.5, ease: EASE }}
              className={`flex flex-col gap-3 rounded-2xl border px-5 py-5 ${data.cls}`}
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-950/50">
                  <Icon className={`h-5 w-5 ${data.iconCls}`} />
                </div>
                <div>
                  <span className={`text-base font-black ${data.titleCls}`}>{data.title}</span>
                  <span className={`ml-2 rounded px-2 py-0.5 font-mono text-[10px] ${data.badgeCls}`}>
                    {data.tag}
                  </span>
                </div>
              </div>
              <p className="text-[13px] leading-relaxed text-slate-300">{data.desc}</p>
              <ul className="space-y-1.5">
                {data.points.map((p, j) => (
                  <li key={j} className="flex items-start gap-2 text-[12px] text-slate-400">
                    <span className={`mt-0.5 ${data.iconCls}`}>•</span>
                    {p}
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={s(2) ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, ease: EASE }}
        className="mt-4 rounded-xl border border-white/10 bg-slate-950/50 px-4 py-3 text-center"
      >
        <p className="text-sm font-bold text-slate-200">怎么选？</p>
        <p className="mt-1 text-[12px] text-slate-400">
          思路不清用 <span className="text-amber-300 font-bold">Plan</span>，规格明确用 <span className="text-sky-300 font-bold">Spec</span>
        </p>
      </motion.div>
    </div>
  );
};