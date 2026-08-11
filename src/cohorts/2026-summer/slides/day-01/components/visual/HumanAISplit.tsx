'use client';

import React from 'react';
import { motion } from 'motion/react';
import { useScene } from '../scene/SceneSlide';
import { COLORS, EASE } from '../scene/theme';
import { User, Bot } from 'lucide-react';

interface HumanAISplitProps {
  /* 起始场景序号：step 1 人侧点亮，step 2 AI 侧点亮 */
  at?: number;
  className?: string;
}

/* 人与 AI 分屏：人脑「决策」/ 机械臂「代码」（镜头 4） */
export const HumanAISplit: React.FC<HumanAISplitProps> = ({ at = 0, className = '' }) => {
  const { active } = useScene();
  const step = Math.max(0, active - at);

  return (
    <div className={`grid grid-cols-2 gap-4 ${className}`}>
      {/* 人侧 */}
      <motion.div
        className="rounded-2xl border px-4 py-4 text-center"
        style={{
          borderColor: step >= 1 ? `${COLORS.cyan}77` : 'rgba(148,163,184,0.25)',
          backgroundColor: step >= 1 ? 'rgba(34,211,238,0.1)' : 'rgba(15,23,42,0.5)',
          boxShadow: step >= 1 ? `0 0 26px ${COLORS.cyan}44` : 'none',
        }}
        initial={{ opacity: 0, x: -22 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.55, ease: EASE }}
      >
        <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full" style={{ backgroundColor: 'rgba(34,211,238,0.16)', color: COLORS.cyan }}>
          <User className="h-6 w-6" />
        </div>
        <p className="text-xs font-bold text-slate-200">人（你）</p>
        <motion.p
          className="mt-1.5 inline-block rounded-full px-2.5 py-0.5 text-[11px] font-black"
          style={{ backgroundColor: step >= 1 ? COLORS.cyan : 'transparent', color: step >= 1 ? '#06222b' : 'rgba(148,163,184,0.5)' }}
          animate={{ scale: step >= 1 ? 1 : 0.8 }}
          transition={{ duration: 0.4, ease: EASE }}
        >
          做决策 · 定方向
        </motion.p>
      </motion.div>

      {/* AI 侧 */}
      <motion.div
        className="rounded-2xl border px-4 py-4 text-center"
        style={{
          borderColor: step >= 2 ? `${COLORS.magenta}77` : 'rgba(148,163,184,0.25)',
          backgroundColor: step >= 2 ? 'rgba(232,121,249,0.1)' : 'rgba(15,23,42,0.5)',
          boxShadow: step >= 2 ? `0 0 26px ${COLORS.magenta}44` : 'none',
        }}
        initial={{ opacity: 0, x: 22 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.55, ease: EASE, delay: 0.15 }}
      >
        <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full" style={{ backgroundColor: 'rgba(232,121,249,0.16)', color: COLORS.magenta }}>
          <Bot className="h-6 w-6" />
        </div>
        <p className="text-xs font-bold text-slate-200">AI（工具）</p>
        <motion.p
          className="mt-1.5 inline-block rounded-full px-2.5 py-0.5 text-[11px] font-black font-mono"
          style={{ backgroundColor: step >= 2 ? COLORS.magenta : 'transparent', color: step >= 2 ? '#2a0a33' : 'rgba(148,163,184,0.5)' }}
          animate={{ scale: step >= 2 ? 1 : 0.8 }}
          transition={{ duration: 0.4, ease: EASE }}
        >
          {step >= 2 ? '写代码 ▍' : '写代码'}
        </motion.p>
      </motion.div>
    </div>
  );
};
