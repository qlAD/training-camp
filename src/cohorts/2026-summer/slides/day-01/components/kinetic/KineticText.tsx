'use client';

import React from 'react';
import { motion, Variants } from 'motion/react';
import { useScene } from '../scene/SceneSlide';
import { EASE } from '../scene/theme';

interface KineticTextProps {
  text: string;
  /* 起始场景序号（active > at 时开始弹出） */
  at?: number;
  /* words = 逐词弹出；chars = 逐字弹出 */
  mode?: 'words' | 'chars';
  /* 每词/每字间隔（ms） */
  stagger?: number;
  className?: string;
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16, scale: 0.92, filter: 'blur(8px)' },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: { duration: 0.55, ease: EASE },
  },
};

/* 动能排版：大字逐词/逐字弹出（scale + blur + y，stagger） */
export const KineticText: React.FC<KineticTextProps> = ({
  text,
  at = 0,
  mode = 'words',
  stagger = 140,
  className = '',
}) => {
  const { active } = useScene();
  const started = active > at;
  const parts = mode === 'words' ? text.split(' ') : Array.from(text);

  const containerVariants: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: stagger / 1000 } },
  };

  return (
    <motion.span
      className={`inline-flex flex-wrap items-baseline ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate={started ? 'show' : 'hidden'}
      aria-hidden={!started}
    >
      {parts.map((p, i) => (
        <motion.span
          key={`${i}-${p}`}
          variants={itemVariants}
          className={mode === 'words' ? 'inline-block mr-[0.35em]' : 'inline-block'}
        >
          {p}
        </motion.span>
      ))}
    </motion.span>
  );
};
