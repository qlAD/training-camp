'use client';

import React from 'react';
import { motion } from 'motion/react';
import { useTimeline } from '../scene/TimelineScene';
import { EASE } from '../scene/theme';

export interface NetNode {
  id: string;
  label: string;
  x: number;
  y: number; // viewBox 坐标（0-100 x 0-60）
  kind?: 'hub' | 'leaf';
}

interface NetworkMeshProps {
  /* 时间轴位置：active >= at 后节点/连线逐项点亮 */
  at: number;
  nodes: NetNode[];
  edges?: [string, string][];
  className?: string;
}

/* 网络拓扑：hub 先现 → 节点逐颗弹出 → 连线逐条点亮并脉冲，营造"网"的生长感 */
export const NetworkMesh: React.FC<NetworkMeshProps> = ({ at, nodes, edges = [], className = '' }) => {
  const { active } = useTimeline();
  const pos = (id: string) => nodes.find((n) => n.id === id)!;
  return (
    <svg viewBox="0 0 100 60" preserveAspectRatio="xMidYMid meet" className={`w-full max-h-[260px] ${className}`}>
      <defs>
        <linearGradient id="d2-edge" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#38BDF8" />
          <stop offset="100%" stopColor="#2DD4BF" />
        </linearGradient>
      </defs>
      {edges.map(([a, b], i) => {
        const na = pos(a);
        const nb = pos(b);
        const lit = active >= at + i;
        return (
          <motion.line
            key={`${a}-${b}`}
            x1={na.x}
            y1={na.y}
            x2={nb.x}
            y2={nb.y}
            stroke={lit ? 'url(#d2-edge)' : 'rgba(148,163,184,0.16)'}
            strokeWidth="0.35"
            strokeLinecap="round"
            initial={{ opacity: 0 }}
            animate={{ opacity: lit ? 1 : 0 }}
            transition={{ duration: 0.5, ease: EASE }}
          />
        );
      })}
      {nodes.map((n, i) => {
        const lit = active >= at + i;
        return (
          <g key={n.id}>
            <motion.circle
              cx={n.x}
              cy={n.y}
              fill={n.kind === 'hub' ? '#38BDF8' : '#2DD4BF'}
              initial={{ r: 0, opacity: 0 }}
              animate={{ r: lit ? (n.kind === 'hub' ? 4 : 2.2) : 0, opacity: lit ? 1 : 0 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              style={{ filter: lit ? 'drop-shadow(0 0 4px rgba(56,189,248,0.8))' : 'none' }}
            />
            {lit && (
              <motion.text
                x={n.x}
                y={n.y - (n.kind === 'hub' ? 4.5 : 3)}
                textAnchor="middle"
                style={{ fontSize: 2.4, fontWeight: 600 }}
                className="fill-slate-200"
                initial={{ opacity: 0, y: 2 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: EASE }}
              >
                {n.label}
              </motion.text>
            )}
          </g>
        );
      })}
    </svg>
  );
};
