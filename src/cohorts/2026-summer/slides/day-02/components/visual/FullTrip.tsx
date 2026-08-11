'use client';

import React from 'react';
import { MousePointerClick, Search, Send, Server, Download, Eye } from 'lucide-react';
import { motion } from 'motion/react';
import { useTimeline } from '../scene/TimelineScene';
import { EASE } from '../scene/theme';

interface FullTripProps {
  /* 时间轴位置 */
  at: number;
  className?: string;
}

const STEPS = [
  { icon: MousePointerClick, label: '点击' },
  { icon: Search, label: 'DNS 查 IP' },
  { icon: Send, label: '发送请求' },
  { icon: Server, label: '服务器处理' },
  { icon: Download, label: '返回内容' },
  { icon: Eye, label: '渲染页面' },
];

/* 一次完整旅程：六段流水线逐段点亮（0-5 六段 6 总结），7 段 */
export const FullTrip: React.FC<FullTripProps> = ({ at, className = '' }) => {
  const { active } = useTimeline();
  const s = (i: number) => active >= at + i;

  return (
    <div className={`w-full ${className}`}>
      <div className="flex items-stretch gap-1.5 sm:gap-2">
        {STEPS.map((step, i) => {
          const Icon = step.icon;
          const lit = s(i);
          return (
            <motion.div
              key={step.label}
              initial={{ opacity: 0, y: 16 }}
              animate={lit ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              transition={{ duration: 0.45, ease: EASE }}
              className="flex min-w-0 flex-1 flex-col items-center gap-1.5 rounded-xl border border-white/10 bg-slate-950/50 px-1.5 py-3 sm:px-2"
            >
              <Icon className={`h-5 w-5 sm:h-6 sm:w-6 ${lit ? 'text-sky-300' : 'text-slate-600'}`} />
              <span className={`text-[11px] font-bold sm:text-xs ${lit ? 'text-slate-100' : 'text-slate-500'}`}>
                {step.label}
              </span>
            </motion.div>
          );
        })}
      </div>

      {/* 流动箭头 */}
      <div className="mt-1.5 flex items-center gap-1.5 px-1 sm:gap-2">
        {STEPS.slice(0, -1).map((_, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0 }}
            animate={s(i + 1) ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="flex-1 text-center font-mono text-sky-400/70"
          >
            ▶
          </motion.span>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={s(6) ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, ease: EASE }}
        className="mt-3 text-center text-sm text-slate-300"
      >
        全过程只要几百毫秒 —— 这就是你每次点开网页时，互联网在做的事
      </motion.p>
    </div>
  );
};
