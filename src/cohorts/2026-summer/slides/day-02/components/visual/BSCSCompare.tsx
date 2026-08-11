'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Smartphone, Globe, ArrowRight, CheckCircle2, XCircle } from 'lucide-react';
import { useTimeline } from '../scene/TimelineScene';
import { COLORS, EASE } from '../scene/theme';

interface BSCSCompareProps {
  at?: number;
  className?: string;
}

const CS_PROS = ['需要安装客户端软件', '原生性能，流畅体验', '可访问本地硬件资源'];
const CS_CONS = ['更新需要重新安装', '跨平台需各写一套'];
const BS_PROS = ['零安装，浏览器即开即用', '瞬间更新，用户无感', '天然跨平台（浏览器即平台）'];
const BS_CONS = ['性能受浏览器限制', '无法直接访问硬件'];

const easeOut = { duration: 0.45, ease: EASE };

export const BSCSCompare: React.FC<BSCSCompareProps> = ({ at = 0, className = '' }) => {
  const { active } = useTimeline();
  const s = (i: number) => active >= at + i;

  const Card = ({
    title,
    subtitle,
    pros,
    cons,
    icon,
    color,
    step,
  }: {
    title: string;
    subtitle: string;
    pros: string[];
    cons: string[];
    icon: React.ReactNode;
    color: string;
    step: number;
  }) => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: s(step) ? 1 : 0 }}
      transition={easeOut}
      className="flex flex-col rounded-2xl border p-4"
      style={{
        borderColor: s(step) ? `${color}77` : 'rgba(148,163,184,0.25)',
        backgroundColor: s(step) ? `${color}14` : 'rgba(15,23,42,0.5)',
        boxShadow: s(step) ? `0 0 24px ${color}33` : 'none',
      }}
    >
      <div className="mb-2 flex items-center gap-2">
        <span
          className="flex h-8 w-8 items-center justify-center rounded-xl"
          style={{
            backgroundColor: s(step) ? `${color}33` : 'rgba(148,163,184,0.1)',
            color: s(step) ? color : 'rgba(148,163,184,0.5)',
          }}
        >
          {icon}
        </span>
        <div>
          <p className="text-sm font-black" style={{ color: s(step) ? '#F1F5F9' : 'rgba(148,163,184,0.75)' }}>
            {title}
          </p>
          <p className="text-[10px]" style={{ color: s(step) ? color : 'rgba(148,163,184,0.5)' }}>
            {subtitle}
          </p>
        </div>
      </div>
      <ul className="space-y-1">
        {pros.map((text) => (
          <li key={text} className="flex items-center gap-2 text-[11px] text-slate-300">
            <CheckCircle2 className="h-3 w-3 text-lime-400" />
            {text}
          </li>
        ))}
        {cons.map((text) => (
          <li key={text} className="flex items-center gap-2 text-[11px] text-slate-300">
            <XCircle className="h-3 w-3 text-rose-400" />
            {text}
          </li>
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
          pros={CS_PROS}
          cons={CS_CONS}
          icon={<Smartphone className="h-4 w-4" />}
          color={COLORS.sky}
          step={0}
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: s(2) ? 1 : 0 }}
          transition={easeOut}
          className="flex flex-col items-center gap-2 pt-6"
        >
          <ArrowRight className="h-5 w-5" style={{ color: s(2) ? COLORS.amber : 'rgba(148,163,184,0.3)' }} />
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
          pros={BS_PROS}
          cons={BS_CONS}
          icon={<Globe className="h-4 w-4" />}
          color={COLORS.teal}
          step={1}
        />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: s(3) ? 1 : 0 }}
        transition={easeOut}
        className="mt-4 flex items-center justify-center gap-4"
      >
        <div className="rounded-xl border border-sky-400/30 bg-sky-400/10 px-4 py-2 text-center">
          <p className="text-[11px] font-bold text-sky-200">C/S 典型</p>
          <p className="text-[10px] text-slate-400">QQ · 微信 · Figma 桌面端</p>
        </div>
        <div className="rounded-xl border border-teal-400/30 bg-teal-400/10 px-4 py-2 text-center">
          <p className="text-[11px] font-bold text-teal-200">B/S 典型</p>
          <p className="text-[10px] text-slate-400">Gmail · GitHub · 飞书网页版</p>
        </div>
      </motion.div>
    </div>
  );
};
