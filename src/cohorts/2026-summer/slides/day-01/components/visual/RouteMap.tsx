'use client';

import React from 'react';
import { motion } from 'motion/react';
import { useScene } from '../scene/SceneSlide';
import { COLORS, EASE } from '../scene/theme';
import { Flag } from 'lucide-react';

interface RouteMapProps {
  stations: string[];
  /* 起始场景序号：step k 点亮第 k 站（k=1..N），step N+1 旗帜落地 */
  at?: number;
  className?: string;
}

/* 路线图：横向进度线逐站点亮 + 终点旗帜（镜头 3） */
export const RouteMap: React.FC<RouteMapProps> = ({ stations, at = 0, className = '' }) => {
  const { active } = useScene();
  const step = Math.max(0, active - at);
  const total = stations.length;
  const pct = Math.min(100, (step / total) * 100);

  return (
    <div className={`w-full ${className}`}>
      <div className="relative flex items-start justify-between">
        {/* 底轨 */}
        <div className="absolute top-[13px] left-[6%] right-[6%] h-1 rounded-full bg-slate-800/80" />
        {/* 已推进进度 */}
        <motion.div
          className="absolute top-[13px] left-[6%] h-1 rounded-full"
          style={{ background: `linear-gradient(90deg, ${COLORS.cyan}, ${COLORS.magenta})`, boxShadow: `0 0 12px ${COLORS.cyan}66` }}
          animate={{ width: `calc(${pct}% * 0.88 + 6%)` }}
          transition={{ duration: 0.5, ease: EASE }}
        />
        {stations.map((s, i) => {
          const lit = step >= i + 1;
          const isLast = i === total - 1;
          return (
            <div key={i} className="relative z-10 flex flex-1 flex-col items-center">
              <motion.div
                className={`flex h-7 w-7 items-center justify-center rounded-full border-2 text-[11px] font-black ${
                  isLast && lit ? '' : ''
                }`}
                style={{
                  borderColor: lit ? COLORS.cyan : 'rgba(148,163,184,0.35)',
                  backgroundColor: lit ? 'rgba(34,211,238,0.2)' : 'rgba(15,23,42,0.8)',
                  color: lit ? '#7DF3FF' : 'rgba(148,163,184,0.6)',
                  boxShadow: lit ? `0 0 16px ${COLORS.cyan}55` : 'none',
                }}
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4, ease: EASE }}
              >
                {isLast && lit ? <Flag className="h-3.5 w-3.5" color={COLORS.amber} /> : i + 1}
              </motion.div>
              <motion.p
                className="mt-2 text-center text-[11px] font-bold"
                animate={{ color: lit ? '#E2F9FF' : 'rgba(148,163,184,0.55)' }}
                transition={{ duration: 0.4 }}
              >
                {s}
              </motion.p>
            </div>
          );
        })}
      </div>
      {/* 终点彩带（完成） */}
      <motion.div
        className="mt-4 flex justify-center"
        animate={{ opacity: step >= total ? 1 : 0, scale: step >= total ? 1 : 0.9 }}
        transition={{ duration: 0.5, ease: EASE }}
      >
        <span
          className="rounded-full px-3 py-1 text-[11px] font-bold"
          style={{
            backgroundColor: 'rgba(251,191,36,0.14)',
            color: COLORS.amber,
            border: `1px solid ${COLORS.amber}66`,
          }}
        >
          🏁 今天就带你走到这
        </span>
      </motion.div>
    </div>
  );
};
