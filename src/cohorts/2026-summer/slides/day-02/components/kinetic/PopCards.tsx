'use client';

import React from 'react';
import { motion } from 'motion/react';
import { useTimeline } from '../scene/TimelineScene';

interface PopCardsProps {
  /* 快闪关键词 / 徽章文字 */
  words: string[];
  /* 时间轴位置：active >= at 后开始弹入 */
  at: number;
  className?: string;
}

/* 卡片弹入：时间轴每推进一块弹出下一张卡（弹入后保持） */
export const PopCards: React.FC<PopCardsProps> = ({ words, at, className = '' }) => {
  const { active } = useTimeline();
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
            className="rounded-2xl border border-sky-400/30 bg-sky-400/10 px-5 py-2.5 font-bold text-sky-100 shadow-[0_0_20px_rgba(56,189,248,0.2)]"
          >
            {w}
          </motion.div>
        );
      })}
    </div>
  );
};
