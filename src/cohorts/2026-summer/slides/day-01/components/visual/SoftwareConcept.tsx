'use client';

import React from 'react';
import { motion } from 'motion/react';
import { useScene } from '../scene/SceneSlide';
import { COLORS, EASE } from '../scene/theme';
import { Lightbulb, Network, Code2 } from 'lucide-react';

interface SoftwareConceptProps {
  at?: number;
  className?: string;
}

const nodes = [
  { label: '需求', sub: 'Demand', icon: Lightbulb, color: COLORS.amber },
  { label: '组织', sub: 'Organization', icon: Network, color: COLORS.cyan },
  { label: '代码数据', sub: 'Code & Data', icon: Code2, color: COLORS.magenta },
];

export const SoftwareConcept: React.FC<SoftwareConceptProps> = ({ at = 0, className = '' }) => {
  const { active } = useScene();
  const step = Math.max(0, active - at);
  const allLit = step >= 3;

  const positions = [
    { x: 50, y: 8 },
    { x: 18, y: 78 },
    { x: 82, y: 78 },
  ];

  return (
    <div className={`relative mx-auto aspect-square w-full max-w-[380px] ${className}`}>
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full">
        {positions.map((p, i) => {
          const next = positions[(i + 1) % positions.length];
          const lit = step > i + 1;
          return (
            <motion.line
              key={`edge-${i}`}
              x1={p.x}
              y1={p.y}
              x2={next.x}
              y2={next.y}
              stroke={lit ? COLORS.cyan : 'rgba(148,163,184,0.15)'}
              strokeWidth={lit ? 0.6 : 0.4}
              strokeDasharray={lit ? '1.2 1.2' : '0.8 1.6'}
              initial={{ opacity: 0.2 }}
              animate={{ opacity: lit ? 1 : 0.2 }}
              transition={{ duration: 0.5 }}
            />
          );
        })}
        {positions.map((p, i) => {
          const lit = step >= i + 1;
          return (
            <motion.line
              key={`center-${i}`}
              x1={50}
              y1={50}
              x2={p.x}
              y2={p.y}
              stroke={lit ? nodes[i].color : 'rgba(148,163,184,0.12)'}
              strokeWidth={lit ? 0.7 : 0.4}
              initial={{ opacity: 0.2 }}
              animate={{ opacity: lit ? 0.9 : 0.2 }}
              transition={{ duration: 0.5 }}
            />
          );
        })}
      </svg>

      {nodes.map((node, i) => {
        const lit = step >= i + 1;
        const pos = positions[i];
        const Icon = node.icon;
        return (
          <motion.div
            key={i}
            className="absolute flex flex-col items-center justify-center"
            style={{
              left: `${pos.x}%`,
              top: `${pos.y}%`,
              transform: 'translate(-50%, -50%)',
            }}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: EASE, delay: i * 0.08 }}
          >
            <div
              className="flex h-14 w-14 items-center justify-center rounded-2xl border-2"
              style={{
                borderColor: lit ? `${node.color}99` : 'rgba(148,163,184,0.3)',
                backgroundColor: lit ? `${node.color}22` : 'rgba(15,23,42,0.85)',
                boxShadow: lit ? `0 0 22px ${node.color}66` : 'none',
              }}
            >
              <Icon className="h-6 w-6" style={{ color: lit ? node.color : 'rgba(148,163,184,0.5)' }} />
            </div>
            <motion.p
              className="mt-1.5 text-xs font-black"
              animate={{ color: lit ? '#F1F5F9' : 'rgba(148,163,184,0.65)' }}
              transition={{ duration: 0.4 }}
            >
              {node.label}
            </motion.p>
            <motion.p
              className="text-[9px] font-medium"
              animate={{ color: lit ? `${node.color}CC` : 'rgba(148,163,184,0.4)' }}
              transition={{ duration: 0.4 }}
            >
              {node.sub}
            </motion.p>
          </motion.div>
        );
      })}

      <motion.div
        className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border-2"
        style={{
          width: '28%',
          height: '28%',
          borderColor: allLit ? `${COLORS.cyan}DD` : 'rgba(148,163,184,0.3)',
          backgroundColor: allLit ? `${COLORS.cyan}22` : 'rgba(15,23,42,0.9)',
          boxShadow: allLit ? `0 0 32px ${COLORS.cyan}88, 0 0 60px ${COLORS.indigo}44` : 'none',
        }}
        animate={{
          scale: allLit ? [1, 1.06, 1] : 1,
        }}
        transition={{
          scale: { duration: 2, repeat: allLit ? Infinity : 0, ease: 'easeInOut' },
          default: { duration: 0.6, ease: EASE },
        }}
      >
        <span
          className="text-lg font-black"
          style={{ color: allLit ? COLORS.cyan : 'rgba(148,163,184,0.6)' }}
        >
          软件
        </span>
        <span
          className="text-[9px] font-medium"
          style={{ color: allLit ? 'rgba(125,243,255,0.8)' : 'rgba(148,163,184,0.4)' }}
        >
          Software
        </span>
      </motion.div>
    </div>
  );
};