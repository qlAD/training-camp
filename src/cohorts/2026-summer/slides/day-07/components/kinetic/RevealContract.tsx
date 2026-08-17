'use client';

import React from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { useApiContract } from '../scene/useApiContract';
import { EASE } from '../scene/theme';

interface RevealContractProps {
  index: number;
  className?: string;
  children: React.ReactNode;
  from?: 'bottom' | 'left' | 'right' | 'fade';
}

export const RevealContract: React.FC<RevealContractProps> = ({
  index,
  className = '',
  children,
  from = 'bottom',
}) => {
  const { active } = useApiContract();
  const visible = active >= index;

  const initial: Record<string, number> = { opacity: 0 };
  if (from === 'bottom') {
    initial.y = 18;
    initial.scale = 0.985;
  } else if (from === 'left') {
    initial.x = -24;
  } else if (from === 'right') {
    initial.x = 24;
  }

  return (
    <AnimatePresence initial={false}>
      {visible && (
        <motion.div
          initial={initial}
          animate={{ opacity: 1, y: 0, x: 0, scale: 1 }}
          transition={{ duration: 0.45, ease: EASE }}
          className={className}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
