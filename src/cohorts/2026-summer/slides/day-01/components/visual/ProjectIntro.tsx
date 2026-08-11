'use client';

import React from 'react';
import { motion } from 'motion/react';
import { useScene } from '../scene/SceneSlide';
import { COLORS, EASE } from '../scene/theme';
import { Globe, MessageCircle, Calendar, Layers } from 'lucide-react';

interface ProjectIntroProps {
  /* 起始场景序号：step1 左卡点亮、step2 右卡点亮 */
  at?: number;
  className?: string;
}

export const ProjectIntro: React.FC<ProjectIntroProps> = ({ at = 0, className = '' }) => {
  const { active } = useScene();
  const step = Math.max(0, active - at);

  const techTags1 = ['HTML/CSS/JS', 'Vue3'];
  const techTags2 = ['Vue3', 'SpringBoot', 'MySQL'];

  const card = (
    title: string,
    subtitle: string,
    icon: React.ReactNode,
    dayRange: string,
    tags: string[],
    lit: boolean,
    accent: string,
    sideClass: string,
  ) => (
    <motion.div
      className={`rounded-2xl border px-4 py-4 ${sideClass}`}
      style={{
        borderColor: lit ? `${accent}77` : 'rgba(148,163,184,0.25)',
        backgroundColor: lit ? `${accent}12` : 'rgba(15,23,42,0.5)',
        boxShadow: lit ? `0 0 24px ${accent}33` : 'none',
      }}
      initial={{ opacity: 0, x: sideClass.includes('left') ? -24 : 24 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.55, ease: EASE }}
    >
      <div className="mb-2 flex items-center gap-2" style={{ color: lit ? accent : 'rgba(148,163,184,0.6)' }}>
        <span
          className="flex h-9 w-9 items-center justify-center rounded-lg"
          style={{ backgroundColor: lit ? `${accent}22` : 'rgba(148,163,184,0.1)' }}
        >
          {icon}
        </span>
        <div>
          <p className="text-sm font-black" style={{ color: lit ? '#F1F5F9' : 'rgba(148,163,184,0.75)' }}>
            {title}
          </p>
          <p className="text-[10px]" style={{ color: lit ? 'rgba(226,232,240,0.7)' : 'rgba(148,163,184,0.5)' }}>
            {subtitle}
          </p>
        </div>
      </div>

      <div className="mb-2 flex items-center gap-1 text-[10px]" style={{ color: lit ? 'rgba(226,232,240,0.7)' : 'rgba(148,163,184,0.5)' }}>
        <Calendar className="h-3 w-3" style={{ color: lit ? accent : 'rgba(148,163,184,0.4)' }} />
        {dayRange}
      </div>

      <div className="mb-2 flex items-start gap-1 text-[11px] leading-relaxed" style={{ color: lit ? 'rgba(226,232,240,0.75)' : 'rgba(148,163,184,0.5)' }}>
        <Layers className="h-3 w-3 mt-0.5 shrink-0" style={{ color: lit ? accent : 'rgba(148,163,184,0.4)' }} />
        <span>
          {sideClass.includes('left')
            ? 'Small but complete — 个人作品集网站，从零到上线'
            : 'Full social product — 图文兴趣社区，完整社交闭环'}
        </span>
      </div>

      <div className="flex flex-wrap gap-1">
        {tags.map((tag, i) => (
          <motion.span
            key={i}
            className="rounded-full border px-2 py-0.5 text-[10px] font-bold"
            style={{
              borderColor: lit ? `${accent}66` : 'rgba(148,163,184,0.25)',
              backgroundColor: lit ? `${accent}18` : 'rgba(148,163,184,0.08)',
              color: lit ? accent : 'rgba(148,163,184,0.5)',
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.1 + i * 0.05 }}
          >
            {tag}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );

  return (
    <div className={`grid grid-cols-2 gap-3 ${className}`}>
      {card(
        '个人作品集网站',
        'Day1 → Day4 → Day11',
        <Globe className="h-4 w-4" />,
        'Day 1 → Day 11',
        techTags1,
        step >= 1,
        COLORS.cyan,
        'left',
      )}
      {card(
        '「此刻」图文兴趣社区',
        'Day5 → Day12',
        <MessageCircle className="h-4 w-4" />,
        'Day 5 → Day 12',
        techTags2,
        step >= 2,
        COLORS.magenta,
        'right',
      )}
    </div>
  );
};