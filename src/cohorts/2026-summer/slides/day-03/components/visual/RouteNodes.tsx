'use client';

import React from 'react';
import { motion } from 'motion/react';
import { useStage } from '../scene/StageClock';
import { EASE } from '../scene/theme';

interface RouteNodesProps {
  /* 时间轴位置 */
  at: number;
  stops: { label: string; sub: string; tone: 'html' | 'css' | 'js' | 'ok' }[];
  className?: string;
}

const TONE = {
  html: { dot: 'bg-orange-400', ring: 'border-orange-400/40', text: 'text-orange-100' },
  css: { dot: 'bg-sky-400', ring: 'border-sky-400/40', text: 'text-sky-100' },
  js: { dot: 'bg-amber-400', ring: 'border-amber-400/40', text: 'text-amber-100' },
  ok: { dot: 'bg-lime-400', ring: 'border-lime-400/40', text: 'text-lime-100' },
} as const;

/* 路线节点：横向五站逐点亮起（编辑器主题：圆点 + 卡片 + 流动虚线） */
export const RouteNodes: React.FC<RouteNodesProps> = ({ at, stops, className = '' }) => {
  const { active } = useStage();
  const s = (i: number) => active >= at + i;

  return (
    <div className={`w-full ${className}`}>
      <div className="flex items-stretch gap-1.5 sm:gap-2">
        {stops.map((stop, i) => {
          const lit = s(i);
          return (
            <motion.div
              key={stop.label}
              initial={{ opacity: 0, y: 16 }}
              animate={lit ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              transition={{ duration: 0.45, ease: EASE }}
              className={`flex min-w-0 flex-1 flex-col items-center gap-1.5 rounded-2xl border px-2 py-3 ${lit ? TONE[stop.tone].ring : 'border-white/10'}`}
            >
              <span className={`h-2.5 w-2.5 rounded-full ${lit ? TONE[stop.tone].dot : 'bg-slate-600'}`} />
              <span className={`text-xs font-bold sm:text-sm ${lit ? TONE[stop.tone].text : 'text-slate-500'}`}>
                {stop.label}
              </span>
              <span className="text-[10px] text-slate-500">{stop.sub}</span>
            </motion.div>
          );
        })}
      </div>
      {/* 流动连接线 */}
      <div className="mt-1.5 flex items-center gap-1.5 px-1 sm:gap-2">
        {stops.slice(0, -1).map((_, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0 }}
            animate={s(i + 1) ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="flex-1 text-center font-mono text-orange-400/70"
          >
            ▶
          </motion.span>
        ))}
      </div>
    </div>
  );
};
