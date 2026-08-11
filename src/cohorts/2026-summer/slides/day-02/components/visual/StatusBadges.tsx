'use client';

import React from 'react';
import { CheckCircle2, AlertCircle, ServerCrash } from 'lucide-react';
import { motion } from 'motion/react';
import { useTimeline } from '../scene/TimelineScene';

interface StatusBadgesProps {
  /* 时间轴位置 */
  at: number;
  className?: string;
}

const BADGES = [
  {
    icon: CheckCircle2,
    code: '200 OK',
    desc: '一切正常，你要的东西在这',
    cls: 'border-lime-400/40 bg-lime-400/10 text-lime-200',
    iconCls: 'text-lime-300',
  },
  {
    icon: AlertCircle,
    code: '404 Not Found',
    desc: '地址写错 / 内容不存在',
    cls: 'border-amber-400/40 bg-amber-400/10 text-amber-200',
    iconCls: 'text-amber-300',
  },
  {
    icon: ServerCrash,
    code: '500 Server Error',
    desc: '服务器自己出问题了',
    cls: 'border-rose-400/40 bg-rose-400/10 text-rose-200',
    iconCls: 'text-rose-300',
  },
];

/* 状态码徽章：200/404/500 逐张弹入（0-2 徽章 3 说明） */
export const StatusBadges: React.FC<StatusBadgesProps> = ({ at, className = '' }) => {
  const { active } = useTimeline();
  const s = (i: number) => active >= at + i;

  return (
    <div className={`w-full ${className}`}>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        {BADGES.map((b, i) => {
          const Icon = b.icon;
          const lit = s(i);
          return (
            <motion.div
              key={b.code}
              initial={{ opacity: 0, scale: 0.7, y: 16 }}
              animate={lit ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.7, y: 16 }}
              transition={{ type: 'spring', stiffness: 280, damping: 20 }}
              className={`flex flex-col items-center gap-2 rounded-2xl border px-4 py-4 ${b.cls}`}
            >
              <Icon className={`h-7 w-7 ${b.iconCls}`} />
              <span className="font-mono text-lg font-black text-white">{b.code}</span>
              <span className="text-center text-[11px] leading-snug opacity-80">{b.desc}</span>
            </motion.div>
          );
        })}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={s(3) ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="mt-4 text-center text-sm text-slate-300"
      >
        2xx 成功 · 4xx 你的问题 · 5xx 服务器的问题 —— 看到 4xx 先检查自己的地址
      </motion.p>
    </div>
  );
};
