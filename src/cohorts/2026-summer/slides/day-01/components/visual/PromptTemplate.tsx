'use client';

import React from 'react';
import { motion } from 'motion/react';
import { useScene } from '../scene/SceneSlide';
import { COLORS, EASE, FONT_MONO } from '../scene/theme';
import { Typewriter } from '../kinetic/Typewriter';
import { User, FileCode, Layers, Sliders, FileOutput } from 'lucide-react';

interface PromptTemplateProps {
  /* 起始场景序号：step 1..5 五要素依次点亮，step 6 正文打字 */
  at?: number;
  promptLines?: string[];
  className?: string;
}

/* 结构化提示词五要素卡依次揭示 + 正文打字（镜头 10 扩展版） */
export const PromptTemplate: React.FC<PromptTemplateProps> = ({
  at = 0,
  promptLines,
  className = '',
}) => {
  const { active } = useScene();
  const step = Math.max(0, active - at);

  const elements = [
    { label: '角色', en: 'Role', value: '资深前端工程师', icon: <User className="h-3.5 w-3.5" />, accent: COLORS.indigo },
    { label: '任务', en: 'Task', value: '个人简介页', icon: <FileCode className="h-3.5 w-3.5" />, accent: COLORS.cyan },
    { label: '栈', en: 'Stack', value: 'HTML + CSS', icon: <Layers className="h-3.5 w-3.5" />, accent: COLORS.amber },
    { label: '约束', en: 'Constraint', value: '深色简洁', icon: <Sliders className="h-3.5 w-3.5" />, accent: COLORS.magenta },
    { label: '输出', en: 'Output', value: '完整代码', icon: <FileOutput className="h-3.5 w-3.5" />, accent: COLORS.green },
  ];

  const defaultPrompt = [
    '// 角色',
    '你是一名资深前端工程师，精通 HTML 与 CSS。',
    '',
    '// 任务',
    '请帮我写一个个人简介页面。',
    '',
    '// 技术栈',
    '仅使用纯 HTML + CSS，不使用任何框架。',
    '',
    '// 约束',
    '深色主题，布局简洁，注重留白。',
    '',
    '// 输出',
    '请输出完整的可运行代码。',
  ];

  const lines = promptLines ?? defaultPrompt;

  return (
    <div className={`w-full ${className}`}>
      <div className="grid grid-cols-5 gap-2">
        {elements.map((e, i) => {
          const lit = step >= i + 1;
          return (
            <motion.div
              key={i}
              className="rounded-xl border px-2.5 py-3 text-center"
              style={{
                borderColor: lit ? `${e.accent}88` : 'rgba(148,163,184,0.22)',
                backgroundColor: lit ? `${e.accent}14` : 'rgba(15,23,42,0.5)',
                boxShadow: lit ? `0 0 14px ${e.accent}44` : 'none',
              }}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: EASE, delay: i * 0.06 }}
            >
              <div className="flex items-center justify-center gap-1" style={{ color: lit ? e.accent : 'rgba(148,163,184,0.55)' }}>
                {e.icon}
              </div>
              <p className="mt-1 text-[10px] font-black" style={{ color: lit ? e.accent : 'rgba(148,163,184,0.55)' }}>
                {e.label}
              </p>
              <p className="text-[9px] font-medium tracking-wider" style={{ color: lit ? 'rgba(226,232,240,0.6)' : 'rgba(148,163,184,0.35)' }}>
                {e.en}
              </p>
              <p className={`mt-1 text-[10px] leading-snug ${FONT_MONO}`} style={{ color: lit ? '#E2F9FF' : 'rgba(148,163,184,0.4)' }}>
                {e.value}
              </p>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-3 rounded-2xl border border-white/10 bg-black/40 p-3">
        <div className="mb-2 flex items-center gap-1.5 text-[10px] font-black tracking-wide text-slate-400">
          <span className="flex gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-red-400/70" />
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400/70" />
            <span className="h-1.5 w-1.5 rounded-full bg-green-400/70" />
          </span>
          prompt.txt
        </div>
        <Typewriter
          lines={lines}
          at={at + elements.length}
          speed={35}
          minLines={lines.length}
          className="text-[11px]"
        />
      </div>
    </div>
  );
};