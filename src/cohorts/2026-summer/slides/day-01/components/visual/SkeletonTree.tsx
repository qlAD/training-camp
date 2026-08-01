'use client';

import React from 'react';
import { motion } from 'motion/react';
import { useScene } from '../scene/SceneSlide';
import { COLORS, EASE, FONT_MONO } from '../scene/theme';

interface SkeletonTreeProps {
  /** 起始场景序号：step1 头骨+html 节点，step2 脊柱+head，step3 肋骨+body，step4 全部点亮 */
  at?: number;
  className?: string;
}

const CODE_LINES = [
  { text: '<html>', tag: 'html' },
  { text: '  <head>', tag: 'head' },
  { text: '  <body>', tag: 'body' },
  { text: '</html>', tag: 'html' },
];

/** 骨架隐喻：html/head/body 三层结构逐节拼出 + 代码行联动高亮（镜头 12） */
export const SkeletonTree: React.FC<SkeletonTreeProps> = ({ at = 0, className = '' }) => {
  const { active } = useScene();
  const step = Math.max(0, active - at);

  // 每层对应的 step 阈值
  const htmlStep = 1;
  const headStep = 2;
  const bodyStep = 3;

  const nodeLit = (tag: string) => (tag === 'html' ? step >= htmlStep : tag === 'head' ? step >= headStep : step >= bodyStep);

  return (
    <div className={`grid grid-cols-2 gap-4 ${className}`}>
      {/* 左：树状结构示意图（html → head / body）——替代原骷髅骨架的"骨架隐喻"，无恐怖元素，结构与代码一一对应
          step1 亮 html 根节点  step2 亮 head 子节点  step3 亮 body 子节点
      */}
      <div className="flex items-center justify-center">
        <div className="relative h-40 w-52">
          {/* 根节点 <html>（顶部居中）*/}
          <motion.div
            className="absolute left-1/2 top-0 -translate-x-1/2 flex items-center gap-2 rounded-lg border-2 px-3 py-1 text-[11px] font-black"
            style={{
              borderColor: step >= 1 ? `${COLORS.cyan}cc` : 'rgba(148,163,184,0.25)',
              backgroundColor: step >= 1 ? 'rgba(34,211,238,0.12)' : 'rgba(15,23,42,0.4)',
              color: step >= 1 ? '#7DF3FF' : 'rgba(148,163,184,0.5)',
              boxShadow: step >= 1 ? `0 0 14px ${COLORS.cyan}44` : 'none',
            }}
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.45, ease: EASE }}
          >
            <span className="h-2 w-2 rounded-full" style={{ backgroundColor: step >= 1 ? COLORS.cyan : 'rgba(148,163,184,0.35)' }} />
            {'<html>'}
          </motion.div>

          {/* 根节点向下分叉主线（step1 之后亮）*/}
          <motion.div
            className="absolute left-1/2 top-[30px] h-5 w-[2px] -translate-x-1/2"
            style={{ backgroundColor: step >= 1 ? `${COLORS.cyan}88` : 'rgba(148,163,184,0.18)' }}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.3, ease: EASE, delay: 0.1 }}
          />
          {/* 分叉横线  */}
          <motion.div
            className="absolute left-[30px] right-[30px] top-[50px] h-[2px]"
            style={{ backgroundColor: step >= 2 ? `${COLORS.cyan}88` : 'rgba(148,163,184,0.18)' }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.35, ease: EASE, delay: 0.15 }}
          />
          {/* 左竖线 → head */}
          <motion.div
            className="absolute left-[30px] top-[50px] h-5 w-[2px]"
            style={{ backgroundColor: step >= 2 ? `${COLORS.magenta}cc` : 'rgba(148,163,184,0.18)' }}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.3, ease: EASE, delay: 0.2 }}
          />
          {/* 右竖线 → body */}
          <motion.div
            className="absolute right-[30px] top-[50px] h-5 w-[2px]"
            style={{ backgroundColor: step >= 3 ? `${COLORS.amber}cc` : 'rgba(148,163,184,0.18)' }}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.3, ease: EASE, delay: 0.25 }}
          />

          {/* 左叶子节点 <head> */}
          <motion.div
            className="absolute left-0 top-[70px] flex items-center gap-1.5 rounded-lg border-2 px-2.5 py-1 text-[10px] font-bold"
            style={{
              borderColor: step >= 2 ? `${COLORS.magenta}cc` : 'rgba(148,163,184,0.25)',
              backgroundColor: step >= 2 ? 'rgba(217,70,239,0.12)' : 'rgba(15,23,42,0.4)',
              color: step >= 2 ? '#F5D0FE' : 'rgba(148,163,184,0.5)',
              boxShadow: step >= 2 ? `0 0 14px ${COLORS.magenta}44` : 'none',
            }}
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.45, ease: EASE, delay: 0.15 }}
          >
            <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: step >= 2 ? COLORS.magenta : 'rgba(148,163,184,0.35)' }} />
            {'<head>'}
          </motion.div>

          {/* 右叶子节点 <body>  */}
          <motion.div
            className="absolute right-0 top-[70px] flex items-center gap-1.5 rounded-lg border-2 px-2.5 py-1 text-[10px] font-bold"
            style={{
              borderColor: step >= 3 ? `${COLORS.amber}cc` : 'rgba(148,163,184,0.25)',
              backgroundColor: step >= 3 ? 'rgba(251,191,36,0.12)' : 'rgba(15,23,42,0.4)',
              color: step >= 3 ? '#FEF3C7' : 'rgba(148,163,184,0.5)',
              boxShadow: step >= 3 ? `0 0 14px ${COLORS.amber}44` : 'none',
            }}
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.45, ease: EASE, delay: 0.25 }}
          >
            <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: step >= 3 ? COLORS.amber : 'rgba(148,163,184,0.35)' }} />
            {'<body>'}
          </motion.div>

          {/* 底部小标语：step4 才出现 */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 text-center"
            animate={{ opacity: step >= 4 ? 1 : 0, y: step >= 4 ? 0 : 4 }}
            transition={{ duration: 0.4 }}
          >
            <span className="text-[10px] text-slate-500">1 个根节点 · 2 个子节点</span>
          </motion.div>
        </div>
      </div>

      {/* 右：html/head/body 三层结构 + 代码高亮 — whitespace-pre 保留前导空格，确保 head/body 缩进正确显示 */}
      <div className="flex flex-col justify-center">
        <div className={`whitespace-pre rounded-2xl border border-white/10 bg-black/40 p-3 ${FONT_MONO} text-[11px]`}>
          {CODE_LINES.map((l, i) => {
            const lit = nodeLit(l.tag);
            const activeTag = step >= 1 && step <= 3 && i === step - 1;
            return (
              <motion.div
                key={i}
                className="py-0.5"
                style={{
                  color: lit ? '#E2F9FF' : 'rgba(148,163,184,0.4)',
                  backgroundColor: activeTag
                    ? l.tag === 'head'
                      ? 'rgba(217,70,239,0.14)'
                      : l.tag === 'body'
                      ? 'rgba(251,191,36,0.14)'
                      : 'rgba(34,211,238,0.14)'
                    : 'transparent',
                  borderRadius: 4,
                }}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, ease: EASE, delay: i * 0.1 }}
              >
                {l.text}
                {lit && (
                  <span
                    className="ml-2 text-[8px]"
                    style={{
                      color:
                        l.tag === 'head' ? COLORS.magenta : l.tag === 'body' ? COLORS.amber : COLORS.cyan,
                    }}
                  >
                    ● {l.tag}
                  </span>
                )}
              </motion.div>
            );
          })}
        </div>
        <motion.p
          className="mt-2 text-center text-[10px] text-slate-500"
          animate={{ opacity: step >= 4 ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        >
          HTML 三层结构 — 先有根标签，再放 head/body
        </motion.p>
      </div>
    </div>
  );
};
