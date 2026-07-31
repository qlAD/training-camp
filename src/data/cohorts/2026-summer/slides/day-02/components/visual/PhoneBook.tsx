'use client';

import React from 'react';
import { BookOpen, Search } from 'lucide-react';
import { motion } from 'motion/react';
import { useTimeline } from '../scene/TimelineScene';
import { EASE } from '../scene/theme';

interface PhoneBookProps {
  /** 时间轴位置 */
  at: number;
  className?: string;
}

const ENTRIES: [string, string][] = [
  ['www.example.com', '93.184.216.34'],
  ['baidu.com', '39.156.66.10'],
  ['gitee.com', '120.55.55.55'],
];

/** DNS 通讯录：域名→IP 翻译（0 封面 1-3 条目 4 高亮 5 总结） */
export const PhoneBook: React.FC<PhoneBookProps> = ({ at, className = '' }) => {
  const { active } = useTimeline();
  const s = (i: number) => active >= at + i;

  return (
    <div className={`w-full flex flex-col items-center ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: -14 }}
        animate={s(0) ? { opacity: 1, y: 0 } : { opacity: 0, y: -14 }}
        transition={{ duration: 0.5, ease: EASE }}
        className="flex items-center gap-2 rounded-xl border border-amber-400/30 bg-amber-400/10 px-4 py-2"
      >
        <BookOpen className="h-4 w-4 text-amber-300" />
        <span className="text-sm font-bold text-amber-100">互联网通讯录 · DNS</span>
      </motion.div>

      <div className="mt-4 w-full max-w-md space-y-2">
        {ENTRIES.map(([name, ip], i) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, x: -16 }}
            animate={s(i + 1) ? { opacity: 1, x: 0 } : { opacity: 0, x: -16 }}
            transition={{ duration: 0.45, ease: EASE }}
            className={`flex items-center justify-between rounded-xl border px-4 py-2.5 ${
              s(4) && i === 1
                ? 'border-teal-400/50 bg-teal-400/10'
                : 'border-white/10 bg-slate-950/50'
            }`}
          >
            <span className="font-mono text-sm text-slate-200">{name}</span>
            <span className="font-mono text-sm text-teal-300">{ip}</span>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={s(4) ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
        transition={{ type: 'spring', stiffness: 280, damping: 20 }}
        className="mt-4 flex items-center gap-2 rounded-full border border-sky-400/40 bg-sky-400/10 px-4 py-1.5"
      >
        <Search className="h-3.5 w-3.5 text-sky-300" />
        <span className="font-mono text-xs text-sky-200">example.com → 93.184.216.34</span>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={s(5) ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, ease: EASE }}
        className="mt-3 text-sm text-slate-300"
      >
        你记名字，DNS 负责把它翻译成机器认得的数字
      </motion.p>
    </div>
  );
};
