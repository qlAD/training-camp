'use client';

import React from 'react';
import { motion } from 'motion/react';
import { useStage } from '../scene/StageClock';
import { EASE } from '../scene/theme';

interface WordSlideProps {
  text: string;
  /** 时间轴位置：active >= at 后开始逐词滑入 */
  at: number;
  className?: string;
}

/** 逐词滑入文本：时间轴到 at 后按词依次滑入（保留未揭示词占位，避免跳动） */
export const WordSlide: React.FC<WordSlideProps> = ({ text, at, className = '' }) => {
  const { active } = useStage();
  const words = text.split(' ');
  const revealed = Math.max(0, active - at);
  return (
    <p className={`flex flex-wrap justify-center gap-x-2 gap-y-1 ${className}`}>
      {words.map((w, i) => {
        const shown = revealed > i;
        return (
          <motion.span
            key={i}
            initial={false}
            animate={shown ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
            transition={{ duration: 0.3, ease: EASE }}
            className="inline-block"
          >
            {w}
          </motion.span>
        );
      })}
    </p>
  );
};
