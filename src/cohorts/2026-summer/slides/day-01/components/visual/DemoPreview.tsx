'use client';

import React from 'react';
import { motion } from 'motion/react';
import { useScene } from '../scene/SceneSlide';
import { COLORS, EASE, FONT_MONO } from '../scene/theme';
import { Typewriter } from '../kinetic/Typewriter';
import { Sparkles } from 'lucide-react';

interface DemoPreviewProps {
  /* 起始场景序号：step 1 提示词面板，step 2 AI 脉冲，step 3 页面渲染 */
  at?: number;
  promptLines?: string[];
  pageLines?: string[];
  className?: string;
}

/* 三段式面板：提示词 → AI 脉冲 → 页面逐行渲染（镜头 11 扩展版） */
export const DemoPreview: React.FC<DemoPreviewProps> = ({
  at = 0,
  promptLines,
  pageLines,
  className = '',
}) => {
  const { active } = useScene();
  const step = Math.max(0, active - at);

  const defaultPrompt = [
    '你是一名资深前端工程师。',
    '请帮我写一个个人简介页面。',
    '使用 HTML + CSS，深色主题，布局简洁。',
    '输出完整的可运行代码。',
  ];

  const defaultPageLines = [
    '<!DOCTYPE html>',
    '<html lang="zh">',
    '<head><style>',
    '  body { background: #0f172a; color: #e2e8f0; }',
    '  .card { padding: 2rem; border-radius: 16px; }',
    '  h1 { font-size: 1.5rem; font-weight: 700; }',
    '  p { opacity: 0.8; line-height: 1.6; }',
    '</style></head>',
    '<body>',
    '  <div class="card">',
    '    <h1>你好，我是 Alex</h1>',
    '    <p>全栈工程师 · 开源爱好者</p>',
    '  </div>',
    '</body>',
    '</html>',
  ];

  const pLines = promptLines ?? defaultPrompt;
  const pgLines = pageLines ?? defaultPageLines;

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
        <div className={`${FONT_MONO} text-[10px] leading-relaxed text-slate-300`}>
          <Typewriter
            lines={pLines}
            at={at}
            speed={45}
            minLines={pLines.length}
            className="text-[10px]"
          />
        </div>
      </motion.div>

      {/* 中：AI 脉冲 */}
      <div className="flex flex-col items-center justify-center gap-3">
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

        {step >= 2 && (
          <div className="flex gap-1.5">
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                className="h-1.5 w-1.5 rounded-full"
                style={{ backgroundColor: COLORS.magenta }}
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 0.9, repeat: Infinity, delay: i * 0.2 }}
              />
            ))}
          </div>
        )}

        {/* 数据流线 */}
        <motion.div
          className="h-px w-12"
          style={{
            background: step >= 2
              ? `linear-gradient(to right, ${COLORS.cyan}, ${COLORS.magenta})`
              : 'rgba(148,163,184,0.2)',
          }}
          animate={step >= 2 ? { opacity: [0.4, 1, 0.4] } : { opacity: 0.3 }}
          transition={{ duration: 1.2, repeat: Infinity }}
        />
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
        <div className="space-y-1">
          {pgLines.map((line, i) => {
            const shown = step >= 3 && i < Math.min((step - 2) * 2, pgLines.length);
            return (
              <motion.div
                key={i}
                className="rounded px-1.5 py-0.5"
                style={{
                  backgroundColor: shown ? (i % 3 === 0 ? 'rgba(34,211,238,0.15)' : 'rgba(148,163,184,0.1)') : 'transparent',
                }}
                animate={{ opacity: shown ? 1 : 0, x: shown ? 0 : 8 }}
                transition={{ duration: 0.35, ease: EASE }}
              >
                <span
                  className={`${FONT_MONO} text-[9px] leading-tight`}
                  style={{ color: shown ? '#CBD5E1' : 'rgba(148,163,184,0.25)' }}
                >
                  {line}
                </span>
              </motion.div>
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