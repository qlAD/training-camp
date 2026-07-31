'use client';

import React from 'react';
import { motion } from 'motion/react';
import { useTimeline } from '../scene/TimelineScene';
import { EASE } from '../scene/theme';

interface FlowTextProps {
  text: string;
  /** 时间轴位置：active >= at 后开始逐词涌入 */
  at: number;
  className?: string;
}

/** 逐词涌入文本：时间轴到 at 后按词依次滑入（保留未揭示词占位，避免跳动） */
export const FlowText: React.FC<FlowTextProps> = ({ text, at, className = '' }) => {
  const { active } = useTimeline();
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
            transition={{ duration: 0.3, ease: EASE, delay: shown ? 0 : undefined }}
            className="inline-block"
          >
            {w}
          </motion.span>
        );
      })}
    </p>
  );
};
