'use client';

import React from 'react';
import { motion } from 'motion/react';
import { useScene } from '../scene/SceneSlide';
import { COLORS, EASE, FONT_MONO } from '../scene/theme';
import { Sparkles } from 'lucide-react';

interface AITransformProps {
  /* 起始场景序号：step 1 提示词面板、step 2 AI 脉冲、step 3 页面渲染 */
  at?: number;
  promptLines: string[];
  pageLines: string[];
  className?: string;
}

/* 三段式面板：提示词 → AI 脉冲 → 页面逐行渲染（镜头 11） */
export const AITransform: React.FC<AITransformProps> = ({
  at = 0,
  promptLines,
  pageLines,
  className = '',
}) => {
  const { active } = useScene();
  const step = Math.max(0, active - at);

  return (
    <div className={`grid grid-cols-[1.1fr_auto_1fr] items-stretch gap-3 ${className}`}>
      {/* 左：提示词 */}
      <motion.div
        className="rounded-2xl border border-cyan-500/40 bg-cyan-500/5 p-3"
        initial={{ opacity: 0, x: -18 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: EASE }}
      >
        <p className="mb-2 text-[10px] font-black tracking-wide text-cyan-300">PROMPT · 你的描述</p>
        <pre className={`${FONT_MONO} text-[10px] leading-relaxed text-slate-300`}>{promptLines.join('\n')}</pre>
      </motion.div>

      {/* 中：AI 脉冲 */}
      <div className="flex items-center justify-center">
        <motion.div
          className="flex h-14 w-14 items-center justify-center rounded-2xl"
          style={{
            backgroundColor: 'rgba(232,121,249,0.14)',
            color: COLORS.magenta,
            boxShadow: step >= 2 ? `0 0 30px ${COLORS.magenta}88` : 'none',
            border: `1px solid ${step >= 2 ? COLORS.magenta : 'rgba(232,121,249,0.3)'}`,
          }}
          animate={
            step >= 2
              ? { scale: [1, 1.12, 1] }
              : { scale: 1 }
          }
          transition={{ duration: 1.1, repeat: step >= 2 ? Infinity : 0, ease: 'easeInOut' }}
        >
          <Sparkles className="h-7 w-7" />
        </motion.div>
      </div>

      {/* 右：页面逐行渲染 */}
      <motion.div
        className="rounded-2xl border border-white/15 bg-white/5 p-3"
        initial={{ opacity: 0, x: 18 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: EASE }}
      >
        <p className="mb-2 flex items-center gap-1.5 text-[10px] font-black tracking-wide text-slate-400">
          <span className="flex gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-red-400/70" />
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400/70" />
            <span className="h-1.5 w-1.5 rounded-full bg-green-400/70" />
          </span>
          your-first-page.html
        </p>
        <div className="space-y-1.5">
          {pageLines.map((line, i) => {
            const shown = step >= 3 && i < 4 + Math.min(step - 3, 2) * 2;
            return (
              <motion.div
                key={i}
                className="h-2 rounded-full"
                style={{
                  width: line,
                  background: i % 3 === 0 ? 'rgba(34,211,238,0.55)' : 'rgba(148,163,184,0.35)',
                }}
                animate={{ opacity: shown ? 1 : 0 }}
                transition={{ duration: 0.4 }}
              />
            );
          })}
        </div>
      </motion.div>

      {/* 底部字幕 */}
      <motion.p
        className="col-span-3 text-center text-[11px] text-slate-400"
        animate={{ opacity: step >= 3 ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        你描述，它干活 —— 前后 5 分钟
      </motion.p>
    </div>
  );
};
