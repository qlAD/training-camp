'use client';

import React from 'react';
import { motion } from 'motion/react';
import { EASE, TEXT_GRADIENT } from '../scene/theme';

interface ServerTitleProps {
  text: string;
  sub?: string;
  size?: 'lg' | 'xl';
  className?: string;
}

export const ServerTitle: React.FC<ServerTitleProps> = ({
  text,
  sub,
  size = 'xl',
  className = '',
}) => {
  const base = size === 'xl' ? 'text-3xl sm:text-4xl' : 'text-2xl sm:text-3xl';
  return (
    <div className={`text-center ${className}`}>
      {/* 机架边框装饰 */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0.85 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.5, ease: EASE }}
        className="mx-auto mb-3 inline-flex items-center gap-2"
      >
        <span className="h-px w-10 bg-gradient-to-r from-transparent to-emerald-400/50" />
        <span className="flex h-2 w-2 items-center justify-center">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.7)]" />
        </span>
        <span className="h-px w-10 bg-gradient-to-l from-transparent to-blue-400/50" />
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ duration: 0.6, ease: EASE }}
        className={`${base} font-black ${TEXT_GRADIENT} drop-shadow-[0_0_18px_rgba(16,185,129,0.25)]`}
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

      {/* 底部装饰线 */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0.85 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ delay: 0.4, duration: 0.5, ease: EASE }}
        className="mx-auto mt-3 inline-flex items-center gap-2"
      >
        <span className="h-px w-14 bg-gradient-to-r from-emerald-400/40 via-cyan-400/40 to-amber-400/40" />
      </motion.div>
    </div>
  );
};
