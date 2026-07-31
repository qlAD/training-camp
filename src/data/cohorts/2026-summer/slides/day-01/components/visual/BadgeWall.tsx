'use client';

import React from 'react';
import { motion, Variants } from 'motion/react';
import { useScene } from '../scene/SceneSlide';
import { SPRING } from '../scene/theme';

export interface BadgeItem {
  name: string;
  icon: React.ReactNode;
  desc: string;
}

interface BadgeWallProps {
  badges: BadgeItem[];
  /** 起始场景序号：到达后全部徽章轻弹簧逐个弹入 */
  at?: number;
  className?: string;
}

/** 徽章墙：徽章轻弹簧逐个弹入（镜头 9） */
export const BadgeWall: React.FC<BadgeWallProps> = ({ badges, at = 0, className = '' }) => {
  const { active } = useScene();
  const started = active > at;

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.14 } },
  };
  const item: Variants = {
    hidden: { opacity: 0, scale: 0.5, y: 12 },
    show: { opacity: 1, scale: 1, y: 0, transition: SPRING },
  };

  return (
    <motion.div
      className={`flex flex-wrap items-start justify-center gap-3 ${className}`}
      variants={container}
      initial="hidden"
      animate={started ? 'show' : 'hidden'}
      aria-hidden={!started}
    >
      {badges.map((b, i) => (
        <motion.div
          key={i}
          variants={item}
          className="w-28 rounded-2xl border border-white/10 bg-white/5 px-3 py-3 text-center backdrop-blur-sm"
          style={{ boxShadow: '0 8px 24px rgba(0,0,0,0.35)' }}
        >
          <div className="mx-auto mb-1.5 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500/40 to-fuchsia-500/40 text-indigo-200">
            {b.icon}
          </div>
          <p className="text-[11px] font-black text-slate-100">{b.name}</p>
          <p className="mt-0.5 text-[9px] leading-snug text-slate-500">{b.desc}</p>
        </motion.div>
      ))}
    </motion.div>
  );
};
