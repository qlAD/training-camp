'use client';

import React from 'react';
import { motion } from 'motion/react';
import { useScene } from '../scene/SceneSlide';
import { EASE } from '../scene/theme';

interface RevealBlockProps {
  /* 场景块序号（active > index 时揭示） */
  index: number;
  className?: string;
  children: React.ReactNode;
}

/*
 * 场景块：读 SceneContext，activeScene 到达前 opacity-0 占位（防跳动），到达后平滑 ease 入场。
 */
export const RevealBlock: React.FC<RevealBlockProps> = ({ index, className, children }) => {
  const { active } = useScene();
  const visible = active > index;
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      animate={visible ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 24, scale: 0.98 }}
      transition={{ duration: 0.6, ease: EASE }}
      aria-hidden={!visible}
    >
      {children}
    </motion.div>
  );
};
