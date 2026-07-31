'use client';

import React from 'react';
import { motion } from 'motion/react';
import { useScene } from '../scene/SceneSlide';
import { COLORS, EASE } from '../scene/theme';

export interface CompareSide {
  title: string;
  icon: React.ReactNode;
  items: string[];
}

interface CompareCardsProps {
  left: CompareSide;
  right: CompareSide;
  /** 起始场景序号：step1 左卡、step2 中间箭头、step3 右卡 */
  at?: number;
  className?: string;
}

/** 左右对比卡 + 中间流动箭头「旧 → 新」（镜头 5） */
export const CompareCards: React.FC<CompareCardsProps> = ({ left, right, at = 0, className = '' }) => {
  const { active } = useScene();
  const step = Math.max(0, active - at);

  const side = (s: CompareSide, sideClass: string, lit: boolean, accent: string) => (
    <motion.div
      className={`rounded-2xl border px-4 py-4 ${sideClass}`}
      style={{
        borderColor: lit ? `${accent}77` : 'rgba(148,163,184,0.25)',
        backgroundColor: lit ? `${accent}14` : 'rgba(15,23,42,0.5)',
        boxShadow: lit ? `0 0 24px ${accent}33` : 'none',
      }}
      initial={{ opacity: 0, x: sideClass.includes('left') ? -24 : 24 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.55, ease: EASE }}
    >
      <div className="mb-2 flex items-center gap-2" style={{ color: lit ? accent : 'rgba(148,163,184,0.6)' }}>
        {s.icon}
        <p className="text-sm font-black" style={{ color: lit ? '#F1F5F9' : 'rgba(148,163,184,0.75)' }}>
          {s.title}
        </p>
      </div>
      <ul className="space-y-1.5">
        {s.items.map((it, i) => (
          <li key={i} className="flex items-center gap-1.5 text-[11px] text-slate-400">
            <span className="text-[8px]" style={{ color: lit ? accent : 'rgba(148,163,184,0.4)' }}>◆</span>
            {it}
          </li>
        ))}
      </ul>
    </motion.div>
  );

  return (
    <div className={`grid grid-cols-[1fr_auto_1fr] items-center gap-2 ${className}`}>
      {side(left, 'text-left', step >= 1, COLORS.amber)}
      {/* 中间流动箭头 */}
      <motion.div
        className="flex flex-col items-center px-1"
        animate={{ opacity: step >= 2 ? 1 : 0.25 }}
        transition={{ duration: 0.4 }}
        style={{ color: step >= 2 ? COLORS.cyan : 'rgba(148,163,184,0.4)' }}
      >
        <motion.svg
          width="26"
          height="34"
          viewBox="0 0 26 34"
          fill="none"
          animate={{ x: step >= 2 ? [0, 4, 0] : 0 }}
          transition={{ duration: 1.6, repeat: step >= 2 ? Infinity : 0, ease: 'easeInOut' }}
        >
          <path d="M3 6 L23 17 L3 28" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </motion.svg>
        <span className="text-[9px] font-bold" style={{ color: step >= 2 ? COLORS.cyan : 'rgba(148,163,184,0.5)' }}>
          范式跃迁
        </span>
      </motion.div>
      {side(right, 'text-right', step >= 3, COLORS.green)}
    </div>
  );
};
