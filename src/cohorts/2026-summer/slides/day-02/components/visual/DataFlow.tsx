'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Radio, MousePointerClick, Cpu, Reply, Monitor, Zap, ArrowRight } from 'lucide-react';
import { useTimeline } from '../scene/TimelineScene';
import { COLORS, EASE } from '../scene/theme';

interface DataFlowProps {
  at: number;
  className?: string;
}

const STAGES = [
  { label: '请求', sub: 'DNS→IP', icon: Radio, color: COLORS.sky },
  { label: '传输', sub: 'HTTP/HTTPS', icon: MousePointerClick, color: COLORS.teal },
  { label: '处理', sub: '服务器+DB', icon: Cpu, color: COLORS.lime },
  { label: '响应', sub: '返回数据', icon: Reply, color: COLORS.amber },
  { label: '渲染', sub: '浏览器画屏', icon: Monitor, color: COLORS.sky },
];

const easeOut = { duration: 0.45, ease: EASE };

export const DataFlow: React.FC<DataFlowProps> = ({ at, className = '' }) => {
  const { active } = useTimeline();
  const s = (i: number) => active >= at + i;

  return (
    <div className={`w-full ${className}`}>
      <div className="flex items-stretch gap-1.5">
        {STAGES.map((stage, i) => {
          const Icon = stage.icon;
          const lit = s(i);
          const isLast = i === STAGES.length - 1;
          return (
            <React.Fragment key={stage.label}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: lit ? 1 : 0 }}
                transition={easeOut}
                className="relative flex min-w-0 flex-1 flex-col items-center gap-1.5 rounded-xl border border-white/10 bg-slate-950/50 px-2 py-3"
                style={{
                  borderColor: lit ? `${COLORS.sky}66` : 'rgba(148,163,184,0.2)',
                  backgroundColor: lit ? `${COLORS.sky}12` : 'rgba(15,23,42,0.55)',
                  boxShadow: lit ? `0 0 18px ${COLORS.sky}33` : 'none',
                }}
              >
                <div
                  className="flex h-9 w-9 items-center justify-center rounded-lg"
                  style={{
                    backgroundColor: lit ? `${COLORS.sky}22` : 'rgba(148,163,184,0.12)',
                  }}
                >
                  <Icon className={`h-5 w-5 ${lit ? 'text-sky-300' : 'text-slate-500'}`} />
                </div>
                <span className={`text-xs font-bold ${lit ? 'text-slate-100' : 'text-slate-500'}`}>
                  {stage.label}
                </span>
                <span className="text-[10px] text-slate-500">{stage.sub}</span>
              </motion.div>
              {!isLast && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: s(i + 1) ? 1 : 0.2 }}
                  transition={easeOut}
                  className="flex items-center"
                  style={{ minWidth: 28 }}
                >
                  <div
                    className="absolute h-[2px] w-full rounded-full"
                    style={{
                      backgroundColor: s(i + 1) ? `${COLORS.sky}44` : 'rgba(148,163,184,0.18)',
                    }}
                  />
                  <ArrowRight
                    className="relative z-10 mx-auto h-4 w-4"
                    style={{ color: s(i + 1) ? COLORS.sky : 'rgba(148,163,184,0.4)' }}
                  />
                </motion.div>
              )}
            </React.Fragment>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: s(5) ? 1 : 0 }}
        transition={easeOut}
        className="mt-3 flex items-center justify-center gap-2"
      >
        <Zap className="h-4 w-4" style={{ color: COLORS.amber }} />
        <p
          className="text-sm font-bold"
          style={{
            background: `linear-gradient(90deg, ${COLORS.amber}, ${COLORS.sky})`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          全过程几百毫秒
        </p>
        <Zap className="h-4 w-4" style={{ color: COLORS.amber }} />
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: s(6) ? 1 : 0 }}
        transition={easeOut}
        className="mt-1 text-center text-xs text-slate-400"
      >
        五个阶段流水线并行推进 — 数据在网络中高速流动
      </motion.p>
    </div>
  );
};
