'use client';

import React from 'react';
import { Cloud, Rocket } from 'lucide-react';
import { motion } from 'motion/react';
import { useStage } from '../scene/StageClock';
import { EASE } from '../scene/theme';

interface PublishBtnProps {
  /* 时间轴位置 */
  at: number;
  repo?: string;
  className?: string;
}

/* 发布按钮：大按钮按下 → 上传进度 → 云端仓库点亮（0 按钮 1 上传中 2 仓库卡 3 总结） */
export const PublishBtn: React.FC<PublishBtnProps> = ({
  at,
  repo = 'gitee.com/you/profile',
  className = '',
}) => {
  const { active } = useStage();
  const s = (i: number) => active >= at + i;

  return (
    <div className={`w-full flex flex-col items-center ${className}`}>
      {/* 发布按钮 */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={s(0) ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.7 }}
        transition={{ type: 'spring', stiffness: 260, damping: 18 }}
        className={`flex items-center gap-3 rounded-2xl border px-8 py-4 transition-all ${
          s(1)
            ? 'border-amber-400/50 bg-amber-400/15'
            : 'border-sky-400/40 bg-sky-400/10 shadow-[0_0_28px_rgba(56,189,248,0.25)]'
        }`}
      >
        <Rocket className={`h-7 w-7 ${s(1) ? 'text-amber-300' : 'text-sky-300'}`} />
        <span className={`text-lg font-black ${s(1) ? 'text-amber-100' : 'text-sky-100'}`}>
          {s(1) ? '正在发布…' : '发布到 Gitee'}
        </span>
      </motion.div>

      {/* 上传进度条 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={s(1) ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.4, ease: EASE }}
        className="mt-3 h-1.5 w-56 overflow-hidden rounded-full bg-white/10"
      >
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-sky-400 via-amber-300 to-lime-400"
          initial={{ width: '0%' }}
          animate={s(1) ? { width: '100%' } : { width: '0%' }}
          transition={{ duration: 1.6, ease: 'easeInOut' }}
        />
      </motion.div>

      {/* 云端仓库 */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={s(2) ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.85 }}
        transition={{ type: 'spring', stiffness: 280, damping: 20 }}
        className="mt-4 flex items-center gap-2 rounded-full border border-lime-400/40 bg-lime-400/10 px-4 py-1.5"
      >
        <Cloud className="h-4 w-4 text-lime-300" />
        <span className="font-mono text-xs font-bold text-lime-200">{repo}</span>
        <span className="text-xs text-lime-300">✓ 已发布</span>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={s(3) ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, ease: EASE }}
        className="mt-3 text-sm text-slate-300"
      >
        今天的成果，一键进仓库 —— 明天接着从这里出发
      </motion.p>
    </div>
  );
};
