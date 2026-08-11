'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Smartphone, Globe, ArrowRight, CheckCircle2, XCircle } from 'lucide-react';
import { useTimeline } from '../scene/TimelineScene';
import { COLORS, EASE, SPRING } from '../scene/theme';

interface BSCSCompareProps {
  at?: number;
  className?: string;
}

const CS_ITEMS = [
  { text: '需要安装客户端软件', icon: <CheckCircle2 className="h-3 w-3 text-lime-400" /> },
  { text: '原生性能，流畅体验', icon: <CheckCircle2 className="h-3 w-3 text-lime-400" /> },
  { text: '可访问本地硬件资源', icon: <CheckCircle2 className="h-3 w-3 text-lime-400" /> },
  { text: '更新需要重新安装', icon: <XCircle className="h-3 w-3 text-rose-400" /> },
  { text: '跨平台需各写一套', icon: <XCircle className="h-3 w-3 text-rose-400" /> },
];

const BS_ITEMS = [
  { text: '零安装，浏览器即开即用', icon: <CheckCircle2 className="h-3 w-3 text-lime-400" /> },
  { text: '瞬间更新，用户无感', icon: <CheckCircle2 className="h-3 w-3 text-lime-400" /> },
  { text: '天然跨平台（浏览器即平台）', icon: <CheckCircle2 className="h-3 w-3 text-lime-400" /> },
  { text: '性能受浏览器限制', icon: <XCircle className="h-3 w-3 text-rose-400" /> },
  { text: '无法直接访问硬件', icon: <XCircle className="h-3 w-3 text-rose-400" /> },
];

export const BSCSCompare: React.FC<BSCSCompareProps> = ({ at = 0, className = '' }) => {
  const { active } = useTimeline();
  const s = (i: number) => active >= at + i;

  const Card = ({
    title,
    subtitle,
    items,
    icon,
    lit,
    accent,
    direction,
  }: {
    title: string;
    subtitle: string;
    items: { text: string; icon: React.ReactNode }[];
    icon: React.ReactNode;
    lit: boolean;
    accent: string;
    direction: 'left' | 'right';
  }) => (
    <motion.div
      initial={{ opacity: 0, x: direction === 'left' ? -24 : 24 }}
      animate={lit ? { opacity: 1, x: 0 } : { opacity: 0, x: direction === 'left' ? -24 : 24 }}
      transition={{ duration: 0.55, ease: EASE }}
      className="flex flex-col rounded-2xl border p-4"
      style={{
        borderColor: lit ? `${accent}77` : 'rgba(148,163,184,0.25)',
        backgroundColor: lit ? `${accent}14` : 'rgba(15,23,42,0.5)',
        boxShadow: lit ? `0 0 24px ${accent}33` : 'none',
      }}
    >
      <div className="mb-3 flex items-center gap-2">
        <span
          className="flex h-8 w-8 items-center justify-center rounded-xl"
          style={{
            backgroundColor: lit ? `${accent}33` : 'rgba(148,163,184,0.1)',
            color: lit ? accent : 'rgba(148,163,184,0.5)',
          }}
        >
          {icon}
        </span>
        <div>
          <p
            className="text-sm font-black"
            style={{ color: lit ? '#F1F5F9' : 'rgba(148,163,184,0.75)' }}
          >
            {title}
          </p>
          <p className="text-[10px]" style={{ color: lit ? accent : 'rgba(148,163,184,0.5)' }}>
            {subtitle}
          </p>
        </div>
      </div>
      <ul className="space-y-1.5">
        {items.map((it, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: direction === 'left' ? -8 : 8 }}
            animate={lit ? { opacity: 1, x: 0 } : { opacity: 0, x: direction === 'left' ? -8 : 8 }}
            transition={{ duration: 0.35, ease: EASE, delay: lit ? i * 0.08 : 0 }}
            className="flex items-center gap-2 text-[11px] text-slate-300"
          >
            {it.icon}
            {it.text}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );

  return (
    <div className={`w-full ${className}`}>
      <div className="grid grid-cols-[1fr_auto_1fr] gap-3 items-start">
        <Card
          title="C/S 架构"
          subtitle="Client / Server"
          items={CS_ITEMS}
          icon={<Smartphone className="h-4 w-4" />}
          lit={s(0)}
          accent={COLORS.sky}
          direction="left"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={s(2) ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
          transition={SPRING}
          className="flex flex-col items-center gap-2 pt-6"
        >
          <motion.div
            animate={{ y: s(2) ? [0, -4, 0] : 0 }}
            transition={{ duration: 1.2, repeat: s(2) ? Infinity : 0, ease: 'easeInOut' }}
          >
            <ArrowRight className="h-5 w-5" style={{ color: s(2) ? COLORS.amber : 'rgba(148,163,184,0.3)' }} />
          </motion.div>
          <span
            className="rounded-lg px-2 py-1 text-[9px] font-bold text-center"
            style={{
              backgroundColor: s(2) ? 'rgba(251,191,36,0.14)' : 'rgba(15,23,42,0.5)',
              color: s(2) ? COLORS.amber : 'rgba(148,163,184,0.4)',
              border: `1px solid ${s(2) ? COLORS.amber + '66' : 'rgba(148,163,184,0.2)'}`,
            }}
          >
            各有所长
          </span>
        </motion.div>

        <Card
          title="B/S 架构"
          subtitle="Browser / Server"
          items={BS_ITEMS}
          icon={<Globe className="h-4 w-4" />}
          lit={s(1)}
          accent={COLORS.teal}
          direction="right"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={s(3) ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ duration: 0.5, ease: EASE }}
        className="mt-4 flex items-center justify-center gap-4"
      >
        <div
          className="rounded-xl border border-sky-400/30 bg-sky-400/10 px-4 py-2 text-center"
        >
          <p className="text-[11px] font-bold text-sky-200">典型代表</p>
          <p className="text-[10px] text-slate-400">QQ · 微信 · Figma 桌面端</p>
        </div>
        <div
          className="rounded-xl border border-teal-400/30 bg-teal-400/10 px-4 py-2 text-center"
        >
          <p className="text-[11px] font-bold text-teal-200">典型代表</p>
          <p className="text-[10px] text-slate-400">Gmail · GitHub · 飞书网页版</p>
        </div>
      </motion.div>
    </div>
  );
};