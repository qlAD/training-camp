'use client';

import React from 'react';
import { motion, Variants } from 'motion/react';
import { useScene } from '../scene/SceneSlide';
import { EASE } from '../scene/theme';

export interface StaggerItem {
  icon?: React.ReactNode;
  title: string;
  desc?: string;
}

interface StaggerListProps {
  items: StaggerItem[];
  /* 起始场景序号 */
  at?: number;
  stagger?: number;
  className?: string;
  itemClassName?: string;
}

/* 列表依次揭示（要点/卡片），到达后逐个平滑入场并常驻 */
export const StaggerList: React.FC<StaggerListProps> = ({
  items,
  at = 0,
  stagger = 180,
  className = '',
  itemClassName = '',
}) => {
  const { active } = useScene();
  const started = active > at;

  const listVariants: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: stagger / 1000 } },
  };
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 18, scale: 0.97 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease: EASE } },
  };

  return (
    <motion.ul
      className={`space-y-4 ${className}`}
      variants={listVariants}
      initial="hidden"
      animate={started ? 'show' : 'hidden'}
      aria-hidden={!started}
    >
      {items.map((it, i) => (
        <motion.li
          key={i}
          variants={itemVariants}
          className={`flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm px-4 py-3 ${itemClassName}`}
        >
          {it.icon && <span className="mt-0.5 shrink-0 text-indigo-300">{it.icon}</span>}
          <div className="min-w-0">
            <p className="text-sm font-bold text-slate-100">{it.title}</p>
            {it.desc && <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">{it.desc}</p>}
          </div>
        </motion.li>
      ))}
    </motion.ul>
  );
};
