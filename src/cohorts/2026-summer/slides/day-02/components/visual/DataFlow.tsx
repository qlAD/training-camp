'use client';

import React from 'react';
import { MousePointerClick, Radio, Cpu, Reply, Monitor, Zap } from 'lucide-react';
import { motion } from 'motion/react';
import { useTimeline } from '../scene/TimelineScene';
import { COLORS, EASE } from '../scene/theme';

interface DataFlowProps {
  at: number;
  className?: string;
}

const STAGES = [
  { icon: MousePointerClick, label: '请求', sub: '发起 HTTP 请求' },
  { icon: Radio, label: '传输', sub: 'TCP/TLS 传输' },
  { icon: Cpu, label: '处理', sub: '服务器处理' },
  { icon: Reply, label: '响应', sub: '返回数据' },
  { icon: Monitor, label: '渲染', sub: '浏览器渲染' },
];

const PACKETS = [
  { top: 18, delay: 0 },
  { top: 42, delay: 0.3 },
  { top: 66, delay: 0.6 },
];

export const DataFlow: React.FC<DataFlowProps> = ({ at, className = '' }) => {
  const { active } = useTimeline();
  const s = (i: number) => active >= at + i;

  return (
    <div className={`w-full ${className}`}>
      <div className="relative">
        <div className="flex items-stretch gap-1.5">
          {STAGES.map((stage, i) => {
            const Icon = stage.icon;
            const lit = s(i);
            const isLast = i === STAGES.length - 1;
            return (
              <React.Fragment key={stage.label}>
                <motion.div
                  className="relative flex min-w-0 flex-1 flex-col items-center gap-1.5 rounded-xl border border-white/10 bg-slate-950/50 px-2 py-3"
                  style={{
                    borderColor: lit ? `${COLORS.sky}66` : 'rgba(148,163,184,0.2)',
                    backgroundColor: lit ? `${COLORS.sky}12` : 'rgba(15,23,42,0.55)',
                    boxShadow: lit ? `0 0 18px ${COLORS.sky}33` : 'none',
                  }}
                  initial={{ opacity: 0, y: 14 }}
                  animate={lit ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
                  transition={{ duration: 0.45, ease: EASE }}
                >
                  <div
                    className="flex h-9 w-9 items-center justify-center rounded-lg"
                    style={{
                      backgroundColor: lit ? `${COLORS.sky}22` : 'rgba(148,163,184,0.12)',
                    }}
                  >
                    <Icon
                      className={`h-5 w-5 ${lit ? 'text-sky-300' : 'text-slate-500'}`}
                    />
                  </div>
                  <span
                    className={`text-xs font-bold ${lit ? 'text-slate-100' : 'text-slate-500'}`}
                  >
                    {stage.label}
                  </span>
                  <span className="text-[10px] text-slate-500">{stage.sub}</span>
                </motion.div>
                {!isLast && (
                  <motion.div
                    className="relative flex items-center"
                    style={{ minWidth: 28 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: lit ? 1 : 0.2 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div
                      className="absolute h-[2px] w-full rounded-full"
                      style={{
                        backgroundColor: lit ? `${COLORS.sky}44` : 'rgba(148,163,184,0.18)',
                      }}
                    />
                    {lit && (
                      <>
                        {PACKETS.map((p, pi) => (
                          <motion.div
                            key={pi}
                            className="absolute h-2 w-2 rounded-full"
                            style={{
                              backgroundColor: COLORS.sky,
                              boxShadow: `0 0 8px ${COLORS.sky}`,
                              top: p.top,
                            }}
                            initial={{ left: 0, opacity: 0 }}
                            animate={{ left: '100%', opacity: [0, 1, 1, 0] }}
                            transition={{
                              duration: 1.4,
                              repeat: Infinity,
                              delay: p.delay,
                              ease: 'linear',
                            }}
                          />
                        ))}
                      </>
                    )}
                    <span
                      className="relative z-10 mx-auto font-mono text-[11px]"
                      style={{ color: lit ? COLORS.sky : 'rgba(148,163,184,0.4)' }}
                    >
                      ▶
                    </span>
                  </motion.div>
                )}
              </React.Fragment>
            );
          })}
        </div>

        <div className="mt-3 flex items-center justify-center gap-2">
          <motion.div
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 1.6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <Zap className="h-4 w-4" style={{ color: COLORS.amber }} />
          </motion.div>
          <motion.p
            className="text-sm font-bold"
            style={{
              background: `linear-gradient(90deg, ${COLORS.amber}, ${COLORS.sky})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
            initial={{ opacity: 0 }}
            animate={s(5) ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
          >
            全过程几百毫秒
          </motion.p>
          <motion.div
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 1.6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <Zap className="h-4 w-4" style={{ color: COLORS.amber }} />
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={s(6) ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, ease: EASE }}
          className="mt-1 text-center text-xs text-slate-400"
        >
          五个阶段流水线并行推进 — 数据在网络中高速流动
        </motion.p>
      </div>
    </div>
  );
};