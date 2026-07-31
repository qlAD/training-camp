'use client';

import React from 'react';
import { motion } from 'motion/react';
import { useStage } from '../scene/StageClock';
import { EASE } from '../scene/theme';

export interface CodeLine {
  text: string;
  /** 行级颜色：HTML 橙 / CSS 蓝 / JS 黄 / 注释灰，缺省用窗口默认色 */
  color?: string;
}

interface CodeWindowProps {
  /** 时间轴位置：active >= at 后逐行揭示 */
  at: number;
  lines: CodeLine[];
  /** 窗口标题（文件标签名） */
  title?: string;
  /** 右上角语言徽章 */
  badge?: string;
  badgeTone?: 'html' | 'css' | 'js';
  className?: string;
}

const BADGE_TONE = {
  html: 'text-orange-300 bg-orange-400/15 border-orange-400/30',
  css: 'text-sky-300 bg-sky-400/15 border-sky-400/30',
  js: 'text-amber-300 bg-amber-400/15 border-amber-400/30',
} as const;

/** 代码窗口：标题栏 + 行号 + 语法高亮，逐行揭示（编辑器主题核心组件） */
export const CodeWindow: React.FC<CodeWindowProps> = ({
  at,
  lines,
  title = 'code.txt',
  badge,
  badgeTone = 'html',
  className = '',
}) => {
  const { active } = useStage();
  const s = (i: number) => active >= at + i;

  return (
    <div className={`w-full ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={s(0) ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
        transition={{ duration: 0.5, ease: EASE }}
        className="overflow-hidden rounded-xl border border-white/10 bg-[#1E1E2E]/90 shadow-xl"
      >
        {/* 标题栏 */}
        <div className="flex items-center gap-2 border-b border-white/10 px-3 py-2">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-lime-400/80" />
          <span className="ml-2 truncate font-mono text-[11px] text-slate-400">{title}</span>
          {badge && (
            <span className={`ml-auto shrink-0 rounded-md border px-1.5 py-0.5 font-mono text-[10px] font-bold ${BADGE_TONE[badgeTone]}`}>
              {badge}
            </span>
          )}
        </div>
        {/* 代码区：高度封顶，超长可滚 */}
        <div className="max-h-[190px] overflow-y-auto px-3 py-2.5">
          {lines.map((line, i) => {
            const lit = s(i);
            return (
              <div key={i} className="flex gap-3 font-mono text-[12px] leading-6">
                <span className="w-6 shrink-0 select-none text-right text-slate-600">{i + 1}</span>
                <motion.span
                  initial={{ opacity: 0, x: -6 }}
                  animate={lit ? { opacity: 1, x: 0 } : { opacity: 0, x: -6 }}
                  transition={{ duration: 0.35, ease: EASE }}
                  className="whitespace-pre-wrap"
                  style={{ color: line.color ?? '#E2E8F0' }}
                >
                  {line.text}
                </motion.span>
              </div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};
