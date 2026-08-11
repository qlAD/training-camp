'use client';

import React from 'react';
import { motion } from 'motion/react';
import { useStage } from '../scene/StageClock';

interface ChipPopProps {
  /* 快闪关键词 / 徽章文字 */
  words: string[];
  /* 时间轴位置：active >= at 后开始弹入 */
  at: number;
  tone?: 'html' | 'css' | 'js' | 'ok';
  className?: string;
}

const TONE_CLS = {
  html: 'border-orange-400/30 bg-orange-400/10 text-orange-100 shadow-[0_0_20px_rgba(249,115,22,0.15)]',
  css: 'border-sky-400/30 bg-sky-400/10 text-sky-100 shadow-[0_0_20px_rgba(56,189,248,0.15)]',
  js: 'border-amber-400/30 bg-amber-400/10 text-amber-100 shadow-[0_0_20px_rgba(251,191,36,0.15)]',
  ok: 'border-lime-400/30 bg-lime-400/10 text-lime-100 shadow-[0_0_20px_rgba(163,230,53,0.15)]',
} as const;

/* 卡片弹入：时间轴每推进一块弹出下一张卡（弹入后保持） */
export const ChipPop: React.FC<ChipPopProps> = ({ words, at, tone = 'html', className = '' }) => {
  const { active } = useStage();
  const shown = Math.max(0, active - at);
  return (
    <div className={`flex flex-wrap justify-center gap-3 ${className}`}>
      {words.map((w, i) => {
        const visible = shown > i;
        return (
          <motion.div
            key={w}
            initial={{ opacity: 0, scale: 0.5, y: 16 }}
            animate={visible ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.5, y: 16 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className={`rounded-2xl border px-5 py-2.5 font-bold ${TONE_CLS[tone]}`}
          >
            {w}
          </motion.div>
        );
      })}
    </div>
  );
};
