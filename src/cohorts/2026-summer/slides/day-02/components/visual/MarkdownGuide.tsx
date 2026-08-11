'use client';

import React from 'react';
import { motion } from 'motion/react';
import { useTimeline } from '../scene/TimelineScene';
import { COLORS, EASE, FONT_MONO } from '../scene/theme';

interface MarkdownGuideProps {
  at?: number;
  className?: string;
}

const EXAMPLES = [
  { raw: '# 一级标题', rendered: <h1 className="text-lg font-black text-slate-100">一级标题</h1>, label: 'Heading' },
  { raw: '**加粗文字**', rendered: <strong className="font-bold text-slate-100">加粗文字</strong>, label: 'Bold' },
  { raw: '- 列表项 A', rendered: <span className="text-slate-100">• 列表项 A</span>, label: 'List' },
  { raw: '> 引用文字', rendered: <blockquote className="border-l-4 border-sky-400 pl-3 italic text-slate-200">引用文字</blockquote>, label: 'Quote' },
  { raw: '`const x = 42`', rendered: <code className="rounded bg-slate-800 px-1.5 py-0.5 font-mono text-xs text-lime-300">const x = 42</code>, label: 'Code' },
  { raw: '[点击链接](url)', rendered: <a className="text-sky-400 underline underline-offset-2">点击链接</a>, label: 'Link' },
];

export const MarkdownGuide: React.FC<MarkdownGuideProps> = ({ at = 0, className = '' }) => {
  const { active } = useTimeline();
  const s = (i: number) => active >= at + i;

  return (
    <div className={`w-full ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={s(0) ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
        transition={{ duration: 0.5, ease: EASE }}
        className="mb-3 text-center"
      >
        <p className="text-sm font-bold text-slate-200">
          The universal language for tech people
        </p>
      </motion.div>

      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
        {EXAMPLES.map((ex, i) => {
          const lit = s(i + 1);
          return (
            <motion.div
              key={ex.label}
              initial={{ opacity: 0, y: 14 }}
              animate={lit ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
              transition={{ duration: 0.45, ease: EASE }}
              className="rounded-xl border border-white/10 bg-slate-950/50 p-3"
              style={{
                boxShadow: lit ? `0 0 14px ${COLORS.sky}33` : 'none',
                borderColor: lit ? `${COLORS.sky}44` : 'rgba(255,255,255,0.1)',
              }}
            >
              <p className="mb-1.5 text-[10px] font-black uppercase tracking-wider text-sky-400/80">
                {ex.label}
              </p>

              <div className="mb-2 rounded-lg bg-black/40 px-2 py-1.5">
                <p className={`text-[11px] leading-relaxed text-slate-400 ${FONT_MONO}`}>
                  {ex.raw}
                </p>
              </div>

              <div className="flex min-h-[28px] items-center rounded-lg bg-white/5 px-2 py-1.5">
                {ex.rendered}
              </div>
            </motion.div>
          );
        })}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={s(EXAMPLES.length + 1) ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, ease: EASE }}
        className="mt-3 text-center text-xs text-slate-400"
      >
        纯文本 + 标记语法 → 任何平台一致渲染
      </motion.p>
    </div>
  );
};