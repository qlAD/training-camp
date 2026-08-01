'use client';

import React from 'react';
import { motion } from 'motion/react';
import { useTimeline } from '../scene/TimelineScene';
import { EASE } from '../scene/theme';

interface CheckoffProps {
  /** 时间轴位置 */
  at: number;
  items: string[];
  className?: string;
}

/** 打卡清单：逐条打勾（0..n-1 项，n 总结） */
export const Checkoff: React.FC<CheckoffProps> = ({ at, items, className = '' }) => {
  const { active } = useTimeline();
  const s = (i: number) => active >= at + i;

  return (
    <div className={`w-full ${className}`}>
      <div className="mx-auto w-full max-w-md space-y-2.5">
        {items.map((item, i) => {
          const lit = s(i);
          return (
            <motion.div
              key={item}
              initial={{ opacity: 0, x: -18 }}
              animate={lit ? { opacity: 1, x: 0 } : { opacity: 0, x: -18 }}
              transition={{ duration: 0.45, ease: EASE }}
              className={`flex items-center gap-3 rounded-xl border px-4 py-2.5 ${
                lit ? 'border-lime-400/30 bg-lime-400/5' : 'border-white/10 bg-slate-950/40'
              }`}
            >
              <span
                className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border text-[11px] font-bold transition-all duration-300 ${
                  lit ? 'border-lime-400 bg-lime-400 text-slate-950' : 'border-slate-500 text-transparent'
                }`}
              >
                ✓
              </span>
              <span className={`text-sm ${lit ? 'text-slate-100' : 'text-slate-500'}`}>{item}</span>
            </motion.div>
          );
        })}
      </div>

      <motion.p
        initial={{ opacity: 0, scale: 0.9 }}
        animate={s(items.length) ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
        transition={{ type: 'spring', stiffness: 280, damping: 20 }}
        className="mt-4 text-center text-sm font-bold text-lime-300"
      >
        ✅ 今日打卡目标：100%
      </motion.p>
    </div>
  );
};
