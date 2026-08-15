'use client';

import React from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { useDesignCanvas } from '../scene/useDesignCanvas';
import { EASE } from '../scene/theme';

interface RevealFrameProps {
  index: number;
  className?: string;
  children: React.ReactNode;
}

export const RevealFrame: React.FC<RevealFrameProps> = ({ index, className = '', children }) => {
  const { active } = useDesignCanvas();
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
