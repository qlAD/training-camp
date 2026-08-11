'use client';

import React from 'react';
import { motion, Variants } from 'motion/react';
import { useScene } from '../scene/SceneSlide';
import { COLORS } from '../scene/theme';

interface SloganRevealProps {
  text: string;
  /* 起始场景序号 */
  at?: number;
  /* 每词间隔（ms） */
  stagger?: number;
  className?: string;
}

/* 收尾 Slogan：逐词点亮（琥珀辉光常驻） */
export const SloganReveal: React.FC<SloganRevealProps> = ({
  text,
  at = 0,
  stagger = 260,
  className = '',
}) => {
  const { active } = useScene();
  const started = active > at;
  const words = text.split(' ');

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: stagger / 1000 } },
  };
  const item: Variants = {
    hidden: { opacity: 0, scale: 0.8, filter: 'blur(6px)' },
    show: {
      opacity: 1,
      scale: 1,
      filter: 'blur(0px)',
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <motion.p
      className={`flex flex-wrap items-center justify-center gap-x-[0.5em] text-2xl sm:text-3xl font-black tracking-wide ${className}`}
      variants={container}
      initial="hidden"
      animate={started ? 'show' : 'hidden'}
      aria-hidden={!started}
    >
      {words.map((w, i) => (
        <motion.span
          key={i}
          variants={item}
          className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-orange-200 to-amber-300"
          style={{ filter: started ? `drop-shadow(0 0 18px ${COLORS.amber}66)` : 'none' }}
        >
          {w}
        </motion.span>
      ))}
    </motion.p>
  );
};
