'use client';

import React from 'react';
import { motion } from 'motion/react';
import { useBlueprint } from '../scene/useBlueprint';
import { EASE } from '../scene/theme';
import { Users, Target, HelpCircle } from 'lucide-react';

export const ProductThinking: React.FC = () => {
  const { active } = useBlueprint();

  const questions = [
    {
      icon: Users,
      q: '它是给谁用的？',
      desc: '你的作品集不是给自己看的，是给 HR、面试官、合作方看的',
      color: 'amber',
    },
    {
      icon: Target,
      q: '它解决了什么痛点？',
      desc: '访客三秒内想看到什么？名字、作品、联系方式',
      color: 'cyan',
    },
    {
      icon: HelpCircle,
      q: '没有它会怎样？',
      desc: '答不上来，就先别做 —— 避免功能堆砌',
      color: 'emerald',
    },
  ];

  const colorMap = {
    amber: {
      border: 'border-amber-400/30',
      bg: 'bg-amber-500/10',
      text: 'text-amber-300',
      iconBg: 'bg-amber-500/20',
    },
    cyan: {
      border: 'border-cyan-400/30',
      bg: 'bg-cyan-500/10',
      text: 'text-cyan-300',
      iconBg: 'bg-cyan-500/20',
    },
    emerald: {
      border: 'border-emerald-400/30',
      bg: 'bg-emerald-500/10',
      text: 'text-emerald-300',
      iconBg: 'bg-emerald-500/20',
    },
  } as const;

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col items-center gap-4">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: active >= 1 ? 1 : 0, y: active >= 1 ? 0 : -10 }}
        transition={{ duration: 0.5, ease: EASE }}
        className="rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-center"
      >
        <p className="text-sm font-bold text-slate-200">
          产品思维的核心：先想清楚「为谁解决什么问题」，再决定「做什么」
        </p>
      </motion.div>

      <div className="grid w-full grid-cols-1 gap-3 md:grid-cols-3">
        {questions.map((item, i) => {
          const Icon = item.icon;
          const c = colorMap[item.color as keyof typeof colorMap];
          return (
            <motion.div
              key={item.q}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: active >= 2 + i ? 1 : 0, y: active >= 2 + i ? 0 : 20 }}
              transition={{ duration: 0.4, ease: EASE }}
              className={`rounded-xl border ${c.border} ${c.bg} p-4`}
            >
              <div className={`mb-2 flex h-9 w-9 items-center justify-center rounded-lg ${c.iconBg}`}>
                <Icon className={`h-5 w-5 ${c.text}`} />
              </div>
              <p className="mb-1 text-sm font-bold text-slate-100">{item.q}</p>
              <p className="text-[11px] leading-relaxed text-slate-400">{item.desc}</p>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: active >= 5 ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className="rounded-lg border border-slate-600/50 bg-slate-800/40 px-3 py-2 text-center"
      >
        <p className="text-xs italic text-slate-400">
          {'>'} 小贴士：判断一个功能该不该做，问自己这三个问题
        </p>
      </motion.div>
    </div>
  );
};