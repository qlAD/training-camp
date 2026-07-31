'use client';

import React from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { useTimeline } from '../scene/TimelineScene';
import { EASE } from '../scene/theme';

interface RevealLayerProps {
  /** 时间轴位置：active >= index 时该层出现 */
  index: number;
  className?: string;
  children: React.ReactNode;
}

/** 揭示层：时间轴推进到 index 时淡入 + 上浮出现（挂载即播驱动） */
export const RevealLayer: React.FC<RevealLayerProps> = ({ index, className = '', children }) => {
  const { active } = useTimeline();
  const visible = active >= index;
  return (
    <AnimatePresence initial={false}>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 18, scale: 0.985 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.45, ease: EASE }}
          className={className}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
