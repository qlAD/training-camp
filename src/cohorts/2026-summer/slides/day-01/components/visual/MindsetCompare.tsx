'use client';

import React from 'react';
import { motion } from 'motion/react';
import { useScene } from '../scene/SceneSlide';
import { COLORS, EASE } from '../scene/theme';
import { Code2, Wrench, Lightbulb, ShieldCheck, Clock, Gauge } from 'lucide-react';

interface MindsetCompareProps {
  /* 起始场景序号：step1 左卡点亮、step2 中间箭头、step3 右卡点亮 */
  at?: number;
  className?: string;
}

export const MindsetCompare: React.FC<MindsetCompareProps> = ({ at = 0, className = '' }) => {
  const { active } = useScene();
  const step = Math.max(0, active - at);

  const leftItems = [
    { icon: <Code2 className="h-3 w-3" />, text: '我能不能写出来？' },
    { icon: <Gauge className="h-3 w-3" />, text: '功能能不能跑？' },
    { icon: <Wrench className="h-3 w-3" />, text: '交付了就行' },
  ];

  const rightItems = [
    { icon: <Lightbulb className="h-3 w-3" />, text: '该不该做？' },
    { icon: <ShieldCheck className="h-3 w-3" />, text: '会不会塌？' },
    { icon: <Clock className="h-3 w-3" />, text: '半年后还能改？' },
  ];

  const side = (
    title: string,
    items: { icon: React.ReactNode; text: string }[],
    sideClass: string,
    lit: boolean,
    accent: string,
  ) => (
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
        {sideClass.includes('left') ? (
          <Code2 className="h-4 w-4" />
        ) : (
          <Lightbulb className="h-4 w-4" />
        )}
        <p className="text-sm font-black" style={{ color: lit ? '#F1F5F9' : 'rgba(148,163,184,0.75)' }}>
          {title}
        </p>
      </div>
      <ul className="space-y-1.5">
        {items.map((it, i) => (
          <li
            key={i}
            className="flex items-center gap-1.5 text-[11px] text-slate-400"
            style={{ color: lit ? 'rgba(226,232,240,0.8)' : 'rgba(148,163,184,0.5)' }}
          >
            <span style={{ color: lit ? accent : 'rgba(148,163,184,0.4)' }}>{it.icon}</span>
            {it.text}
          </li>
        ))}
      </ul>
    </motion.div>
  );

  return (
    <div className={`grid grid-cols-[1fr_auto_1fr] items-center gap-2 ${className}`}>
      {side('普通程序员', leftItems, 'text-left', step >= 1, COLORS.amber)}
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
          <path
            d="M3 6 L23 17 L3 28"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.svg>
        <span
          className="text-[9px] font-bold"
          style={{ color: step >= 2 ? COLORS.cyan : 'rgba(148,163,184,0.5)' }}
        >
          思维跃迁
        </span>
      </motion.div>
      {side('软件工程师', rightItems, 'text-right', step >= 3, COLORS.green)}
    </div>
  );
};