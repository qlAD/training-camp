'use client';

import React from 'react';
import { motion } from 'motion/react';
import { useStage } from '../scene/StageClock';
import { EASE } from '../scene/theme';

interface BrowserPreviewProps {
  /** 时间轴位置：active >= at 时视口出现 */
  at: number;
  title?: string;
  className?: string;
  children?: React.ReactNode;
}

/** 浏览器视口：仿浏览器窗口壳（地址栏 + 内容区），内容由调用方提供（实时渲染预览） */
export const BrowserPreview: React.FC<BrowserPreviewProps> = ({
  at,
  title = 'localhost',
  className = '',
  children,
}) => {
  const { active } = useStage();
  const s = (i: number) => active >= at + i;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16, scale: 0.98 }}
      animate={s(0) ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 16, scale: 0.98 }}
      transition={{ duration: 0.5, ease: EASE }}
      className={`overflow-hidden rounded-xl border border-white/10 bg-slate-950/80 shadow-xl ${className}`}
    >
      {/* 浏览器标题栏 + 地址栏 */}
      <div className="border-b border-white/10 bg-white/5 px-3 py-1.5">
        <div className="mx-auto flex max-w-[260px] items-center gap-2 rounded-md bg-slate-950/70 px-3 py-1">
          <span className="h-1.5 w-1.5 rounded-full bg-lime-400" />
          <span className="truncate font-mono text-[10px] text-slate-400">{title}</span>
        </div>
      </div>
      {/* 内容区：高度封顶，可滚 */}
      <div className="max-h-[180px] overflow-y-auto bg-white">{children}</div>
    </motion.div>
  );
};
