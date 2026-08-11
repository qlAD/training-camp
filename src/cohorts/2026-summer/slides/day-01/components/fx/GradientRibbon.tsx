'use client';

import React from 'react';
import { motion } from 'motion/react';

interface GradientRibbonProps {
  className?: string;
  /* 径向渐变颜色列表（带透明度） */
  colors: string[];
  /* 单个漂移周期（s） */
  duration?: number;
  rotate?: number;
}

/* 多彩渐变流体光带（Wonderful Tools 风）：模糊渐变椭圆柔滑漂移 + 明暗呼吸 */
export const GradientRibbon: React.FC<GradientRibbonProps> = ({
  className = '',
  colors,
  duration = 24,
  rotate = 0,
}) => (
  <motion.div
    className={`absolute rounded-full pointer-events-none ${className}`}
    style={{
      background: `radial-gradient(ellipse at center, ${colors.join(', ')})`,
      filter: 'blur(70px)',
      rotate: `${rotate}deg`,
    }}
    animate={{
      x: ['-5%', '5%', '-3%', '4%', '-5%'],
      y: ['-4%', '4%', '-3%', '3%', '-4%'],
      scale: [1, 1.12, 0.96, 1.08, 1],
      opacity: [0.5, 0.72, 0.45, 0.68, 0.5],
    }}
    transition={{ duration, repeat: Infinity, ease: 'easeInOut' }}
    aria-hidden
  />
);
