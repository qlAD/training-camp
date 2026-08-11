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
  tag: '快 · 粗 · 能跑就行',
  desc: 'AI 先生成一个执行计划，然后一步步生成代码',
  points: [
    '适合新手入门、快速出原型',
    'AI 自主决策多，速度快',
    '代码质量依赖 AI 水平',
  ],
  cls: 'border-amber-400/40 bg-amber-400/10',
  iconCls: 'text-amber-300',
  titleCls: 'text-amber-100',
  badgeCls: 'bg-amber-400/20 text-amber-200',
};

const SPEC = {
  icon: FileText,
  title: 'Spec 模式',
  tag: '慢 · 精 · 按规范来',
  desc: 'AI 先写需求文档（Spec），经你确认后再写代码',
  points: [
    '适合正式项目、团队协作',
    '你说了算，AI 按规范生成',
    '代码质量可控，可审查',
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
          练手用 <span className="text-amber-300 font-bold">Plan</span>，做项目用 <span className="text-sky-300 font-bold">Spec</span>
        </p>
      </motion.div>
    </div>
  );
};