'use client';

import React from 'react';
import { motion } from 'motion/react';
import { EASE } from '../scene/theme';

interface GlowTitleProps {
  text: string;
  sub?: string;
  size?: 'lg' | 'xl';
  className?: string;
}

/* 霓虹标题：青系文字渐变 + 轻微光晕，入场上浮 + 去模糊 */
export const GlowTitle: React.FC<GlowTitleProps> = ({ text, sub, size = 'xl', className = '' }) => {
  const base = size === 'xl' ? 'text-3xl sm:text-4xl' : 'text-2xl sm:text-3xl';
  return (
    <div className={`text-center ${className}`}>
      <motion.h2
        initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ duration: 0.6, ease: EASE }}
        className={`${base} font-black bg-gradient-to-r from-sky-200 via-teal-200 to-lime-200 bg-clip-text text-transparent drop-shadow-[0_0_18px_rgba(56,189,248,0.35)]`}
      >
        {text}
      </motion.h2>
      {sub && (
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.5, ease: EASE }}
          className="mt-2 text-sm font-medium text-slate-300"
        >
          {sub}
        </motion.p>
      )}
    </div>
  );
};
