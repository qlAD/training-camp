'use client';

import React from 'react';
import { motion } from 'motion/react';
import { useTimeline } from '../scene/TimelineScene';
import { EASE } from '../scene/theme';

interface URLSplitProps {
  /** 时间轴位置 */
  at: number;
  parts?: { label: string; value: string }[];
  className?: string;
}

const DEFAULT_PARTS = [
  { label: '协议', value: 'https://' },
  { label: '域名', value: 'example.com' },
  { label: '端口', value: ':443' },
  { label: '路径', value: '/about' },
  { label: '参数', value: '?lang=zh' },
];

/** URL 拆解：五个组成部分逐段点亮（0 整条URL 1-5 分段标签 6 总结） */
export const URLSplit: React.FC<URLSplitProps> = ({ at, parts = DEFAULT_PARTS, className = '' }) => {
  const { active } = useTimeline();
  const s = (i: number) => active >= at + i;
  const colors = ['text-sky-300', 'text-teal-300', 'text-amber-300', 'text-lime-300', 'text-fuchsia-300'];

  return (
    <div className={`w-full flex flex-col items-center ${className}`}>
      {/* 整条 URL */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={s(0) ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ duration: 0.5, ease: EASE }}
        className="flex flex-wrap justify-center rounded-2xl border border-white/10 bg-slate-950/60 px-5 py-3 font-mono text-lg font-bold text-slate-100"
      >
        {parts.map((p, i) => (
          <motion.span
            key={p.label}
            initial={{ opacity: 0.25 }}
            animate={s(i + 1) ? { opacity: 1 } : { opacity: 0.25 }}
            transition={{ duration: 0.4, ease: EASE }}
            className={colors[i % colors.length]}
          >
            {p.value}
          </motion.span>
        ))}
      </motion.div>

      {/* 分段标签 */}
      <div className="mt-4 flex flex-wrap justify-center gap-2">
        {parts.map((p, i) => (
          <motion.span
            key={p.label}
            initial={{ opacity: 0, y: 10 }}
            animate={s(i + 1) ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.4, ease: EASE }}
            className={`rounded-full border px-3 py-1 text-xs font-semibold ${
              i === 1
                ? 'border-teal-400/40 bg-teal-400/10 text-teal-200'
                : 'border-sky-400/30 bg-sky-400/10 text-sky-200'
            }`}
          >
            {p.label}
          </motion.span>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={s(6) ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, ease: EASE }}
        className="mt-4 text-sm text-slate-300"
      >
        一个 URL = 一封信的完整地址：协议告诉怎么寄，域名告诉寄给谁
      </motion.p>
    </div>
  );
};
