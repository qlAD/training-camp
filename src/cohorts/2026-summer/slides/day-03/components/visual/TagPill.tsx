'use client';

import React from 'react';
import { motion } from 'motion/react';
import { useStage } from '../scene/StageClock';
import { EASE } from '../scene/theme';

interface TagPillProps {
  /* 时间轴位置 */
  at: number;
  tags: { tag: string; example: string; cls?: string }[];
  className?: string;
}

/* 标签墙：HTML 标签逐个点亮，预览区对应出现示例内容（代码与预览联动） */
export const TagPill: React.FC<TagPillProps> = ({ at, tags, className = '' }) => {
  const { active } = useStage();
  const s = (i: number) => active >= at + i;

  return (
    <div className={`w-full ${className}`}>
      {/* 标签 pill 墙 */}
      <div className="flex flex-wrap justify-center gap-2">
        {tags.map((t, i) => {
          const lit = s(i);
          return (
            <motion.span
              key={t.tag}
              initial={{ opacity: 0, scale: 0.6 }}
              animate={lit ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.6 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className={`rounded-xl border px-4 py-1.5 font-mono text-sm font-bold ${
                lit
                  ? 'border-orange-400/40 bg-orange-400/15 text-orange-100 shadow-[0_0_16px_rgba(249,115,22,0.2)]'
                  : 'border-white/10 bg-slate-950/50 text-slate-500'
              }`}
            >
              {t.tag}
            </motion.span>
          );
        })}
      </div>

      {/* 联动预览 */}
      <div className="mx-auto mt-4 max-w-md overflow-hidden rounded-xl border border-white/10 bg-white shadow-lg">
        <div className="flex items-center gap-1.5 border-b border-slate-200 px-3 py-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-rose-400" />
          <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
          <span className="h-1.5 w-1.5 rounded-full bg-lime-400" />
          <span className="ml-2 font-mono text-[10px] text-slate-400">预览</span>
        </div>
        <div className="space-y-2 px-4 py-3">
          {tags.map((t, i) => (
            <motion.div
              key={t.tag}
              initial={{ opacity: 0 }}
              animate={s(i) ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.4, ease: EASE }}
            >
              <span className={t.cls ?? 'text-slate-800'}>{t.example}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
