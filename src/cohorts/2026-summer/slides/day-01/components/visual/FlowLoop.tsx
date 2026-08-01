'use client';

import React from 'react';
import { motion } from 'motion/react';
import { useScene } from '../scene/SceneSlide';
import { COLORS, EASE } from '../scene/theme';

interface FlowLoopProps {
  /** 闭环节点（5 个） */
  nodes: string[];
  /** 起始场景序号：step k 点亮第 k 个节点（k=1..5），step 6 回流 */
  at?: number;
  className?: string;
}

/** 闭环圆环：节点逐一点亮 + 环线流动 + 末节点回流（镜头 6） */
export const FlowLoop: React.FC<FlowLoopProps> = ({ nodes, at = 0, className = '' }) => {
  const { active } = useScene();
  const step = Math.max(0, active - at);
  const n = nodes.length;
  const r = 34;
  const pos = nodes.map((_, i) => {
    const a = (-90 + (i * 360) / n) * (Math.PI / 180);
    return { x: 50 + r * Math.cos(a), y: 50 + r * Math.sin(a) };
  });

  return (
    <div className={`relative mx-auto aspect-square w-full max-w-[430px] ${className}`}>
      {/* 虚线环 */}
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full">
        <circle
          cx="50"
          cy="50"
          r={r}
          fill="none"
          stroke="rgba(148,163,184,0.25)"
          strokeWidth="0.7"
          strokeDasharray="2 3"
        />
        {/* 已点亮节点之间的连接线 + 回流弧 */}
        {pos.map((p, i) => {
          const next = pos[(i + 1) % n];
          const lit = step > i + 1;
          const isLoopBack = i === n - 1;
          return (
            <motion.line
              key={i}
              x1={p.x}
              y1={p.y}
              x2={next.x}
              y2={next.y}
              stroke={lit ? (isLoopBack && step >= n ? COLORS.amber : COLORS.cyan) : 'rgba(148,163,184,0.18)'}
              strokeWidth={isLoopBack && lit ? 0.9 : 0.6}
              strokeDasharray={isLoopBack ? '1.6 1.6' : '1 1.4'}
              initial={{ opacity: 0.3 }}
              animate={{ opacity: lit ? 1 : 0.3 }}
              transition={{ duration: 0.5 }}
            />
          );
        })}
        {/* 回流流动光点 */}
        {step >= n && (
          <motion.circle
            cx={pos[0].x}
            cy={pos[0].y}
            r="1.1"
            fill={COLORS.amber}
            animate={{ opacity: [0.2, 1, 0.2] }}
            transition={{ duration: 1.1, repeat: Infinity }}
          />
        )}
      </svg>

      {/* 节点 */}
      {nodes.map((label, i) => {
        const lit = step >= i + 1;
        return (
          <motion.div
            key={i}
            className="absolute flex items-center justify-center rounded-full border text-[11px] sm:text-xs font-bold text-center px-1"
            style={{
              width: '21%',
              height: '21%',
              left: `${pos[i].x - 10.5}%`,
              top: `${pos[i].y - 10.5}%`,
              borderColor: lit ? `${COLORS.cyan}99` : 'rgba(148,163,184,0.3)',
              backgroundColor: lit ? 'rgba(34,211,238,0.14)' : 'rgba(15,23,42,0.6)',
              color: lit ? '#E2F9FF' : 'rgba(148,163,184,0.65)',
              boxShadow: lit ? `0 0 22px ${COLORS.cyan}55` : 'none',
            }}
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.45, ease: EASE, delay: 0.05 }}
          >
            <span>{label}</span>
          </motion.div>
        );
      })}

      {/* 中心隐喻：闭环完成 */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={{ opacity: step >= n ? 1 : 0, scale: step >= n ? 1 : 0.9 }}
        transition={{ duration: 0.5, ease: EASE }}
      >
        <span
          className="text-2xl sm:text-3xl font-black"
          style={{ color: COLORS.amber, textShadow: `0 0 20px ${COLORS.amber}88` }}
        >
          ∞
        </span>
      </motion.div>
    </div>
  );
};
