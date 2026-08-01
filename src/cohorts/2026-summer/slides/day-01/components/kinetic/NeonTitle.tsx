'use client';

import React from 'react';
import { motion } from 'motion/react';
import { useScene } from '../scene/SceneSlide';
import { EASE, TEXT_GRADIENT } from '../scene/theme';

interface NeonTitleProps {
  text: string;
  /** 起始场景序号 */
  at?: number;
  sub?: string;
  subAt?: number;
  className?: string;
  size?: 'lg' | 'xl';
}

/** 渐变霓虹大字标题（clip-text 渐变 + 辉光 + 平滑 ease 入场） */
export const NeonTitle: React.FC<NeonTitleProps> = ({
  text,
  at = 0,
  sub,
  subAt,
  className = '',
  size = 'lg',
}) => {
  const { active } = useScene();
  const show = active > at;
  const showSub = subAt !== undefined ? active > subAt : show;

  return (
    <div className={className}>
      <motion.h2
        className={`${TEXT_GRADIENT} font-black tracking-tight ${
          size === 'xl' ? 'text-5xl sm:text-6xl' : 'text-4xl sm:text-5xl'
        }`}
        initial={{ opacity: 0, y: 20, scale: 0.96, filter: 'blur(10px)' }}
        animate={
          show
            ? { opacity: 1, y: 0, scale: 1, filter: 'drop-shadow(0 0 26px rgba(99,102,241,0.5))' }
            : { opacity: 0, y: 20, scale: 0.96, filter: 'blur(10px)' }
        }
        transition={{ duration: 0.7, ease: EASE }}
      >
        {text}
      </motion.h2>
      {sub && (
        <motion.p
          className="mt-2.5 text-sm text-slate-400"
          initial={{ opacity: 0, y: 10 }}
          animate={showSub ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.5, ease: EASE }}
        >
          {sub}
        </motion.p>
      )}
    </div>
  );
};
