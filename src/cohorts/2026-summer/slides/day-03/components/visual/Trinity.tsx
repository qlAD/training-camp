'use client';

import React from 'react';
import { Bone, Palette, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { useStage } from '../scene/StageClock';

interface TrinityProps {
  /* 时间轴位置 */
  at: number;
  className?: string;
}

const CARDS = [
  {
    icon: Bone,
    title: 'HTML',
    role: '骨架 · 结构',
    desc: '一块一块搭出页面内容',
    cls: 'border-orange-400/40 bg-orange-400/10',
    iconCls: 'text-orange-300',
    titleCls: 'text-orange-100',
  },
  {
    icon: Palette,
    title: 'CSS',
    role: '妆容 · 样式',
    desc: '颜色、大小、布局，全交给它',
    cls: 'border-sky-400/40 bg-sky-400/10',
    iconCls: 'text-sky-300',
    titleCls: 'text-sky-100',
  },
  {
    icon: Sparkles,
    title: 'JS',
    role: '表情 · 行为',
    desc: '点击、跳动、响应，页面活过来',
    cls: 'border-amber-400/40 bg-amber-400/10',
    iconCls: 'text-amber-300',
    titleCls: 'text-amber-100',
  },
];

/* 网页三位一体：HTML/CSS/JS 三张卡逐张弹入（0-2 卡片 3 总结） */
export const Trinity: React.FC<TrinityProps> = ({ at, className = '' }) => {
  const { active } = useStage();
  const s = (i: number) => active >= at + i;

  return (
    <div className={`w-full ${className}`}>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        {CARDS.map((c, i) => {
          const Icon = c.icon;
          const lit = s(i);
          return (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, scale: 0.7, y: 16 }}
              animate={lit ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.7, y: 16 }}
              transition={{ type: 'spring', stiffness: 280, damping: 20 }}
              className={`flex flex-col items-center gap-2 rounded-2xl border px-4 py-4 ${c.cls}`}
            >
              <Icon className={`h-7 w-7 ${c.iconCls}`} />
              <span className={`font-mono text-lg font-black ${c.titleCls}`}>{c.title}</span>
              <span className="text-xs font-bold text-slate-200">{c.role}</span>
              <span className="text-center text-[11px] leading-snug text-slate-400">{c.desc}</span>
            </motion.div>
          );
        })}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={s(3) ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="mt-4 text-center text-sm text-slate-300"
      >
        一个网页 = 骨架 + 妆容 + 表情 —— 三者缺一不可
      </motion.p>
    </div>
  );
};
