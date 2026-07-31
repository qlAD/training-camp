'use client';

import React from 'react';
import { User, Database, Globe } from 'lucide-react';
import { motion } from 'motion/react';
import { useTimeline } from '../scene/TimelineScene';
import { EASE } from '../scene/theme';

interface DNSTripProps {
  /** 时间轴位置 */
  at: number;
  className?: string;
}

const STOPS = [
  { icon: User, label: '你', sub: '输入网址' },
  { icon: Database, label: '本地 DNS', sub: '先问缓存' },
  { icon: Globe, label: '根 DNS', sub: '全球 13 台' },
  { icon: Globe, label: '顶级 DNS', sub: '.com / .cn' },
  { icon: Database, label: '权威 DNS', sub: '最终答案' },
];

/** DNS 解析旅程：逐跳查询（0-4 各节点 5 拿到IP回流 6 总结），6+ 段 */
export const DNSTrip: React.FC<DNSTripProps> = ({ at, className = '' }) => {
  const { active } = useTimeline();
  const s = (i: number) => active >= at + i;

  return (
    <div className={`w-full ${className}`}>
      <div className="flex items-stretch gap-2">
        {STOPS.map((stop, i) => {
          const Icon = stop.icon;
          const lit = s(i);
          return (
            <motion.div
              key={stop.label}
              initial={{ opacity: 0, y: 14 }}
              animate={lit ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
              transition={{ duration: 0.45, ease: EASE }}
              className="flex min-w-0 flex-1 flex-col items-center gap-1.5 rounded-2xl border border-white/10 bg-slate-950/50 px-2 py-3"
            >
              <Icon className={`h-5 w-5 ${lit ? 'text-sky-300' : 'text-slate-500'}`} />
              <span className={`text-xs font-bold ${lit ? 'text-slate-100' : 'text-slate-500'}`}>
                {stop.label}
              </span>
              <span className="text-[10px] text-slate-500">{stop.sub}</span>
            </motion.div>
          );
        })}
      </div>

      {/* 箭头：相邻已点亮节点之间出现 */}
      <div className="mt-2 flex items-center gap-2 px-2">
        {STOPS.slice(0, -1).map((_, i) => (
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

      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={s(5) ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.85 }}
        transition={{ type: 'spring', stiffness: 280, damping: 20 }}
        className="mt-3 flex justify-center"
      >
        <span className="rounded-full border border-teal-400/40 bg-teal-400/10 px-4 py-1.5 font-mono text-xs font-bold text-teal-200">
          ✅ 拿到 IP：93.184.216.34 → 返回给你
        </span>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={s(6) ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, ease: EASE }}
        className="mt-3 text-center text-sm text-slate-300"
      >
        层层转发、层层查，最后把「名字」翻译成「数字地址」告诉你
      </motion.p>
    </div>
  );
};
