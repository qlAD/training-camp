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
      {/* 左：骨架图（骷髅 → 脊柱 → 肋骨） */}
      <div className="flex items-center justify-center">
        <div className="relative h-40 w-24">
          {/* 头骨 */}
          <motion.div
            className="absolute left-1/2 top-0 h-12 w-12 -translate-x-1/2 rounded-full border-2"
            style={{
              borderColor: step >= 1 ? `${COLORS.amber}aa` : 'rgba(148,163,184,0.25)',
              boxShadow: step >= 1 ? `0 0 18px ${COLORS.amber}44` : 'none',
            }}
            initial={{ scale: 0.4, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: EASE }}
          >
            <span className="absolute left-2.5 top-4 h-1.5 w-1.5 rounded-full bg-current opacity-40" />
            <span className="absolute right-2.5 top-4 h-1.5 w-1.5 rounded-full bg-current opacity-40" />
          </motion.div>
          {/* 脊柱 */}
          <motion.div
            className="absolute left-1/2 top-12 h-24 w-2.5 -translate-x-1/2 rounded-full border"
            style={{
              borderColor: step >= 2 ? `${COLORS.amber}aa` : 'rgba(148,163,184,0.25)',
              backgroundColor: step >= 2 ? 'rgba(251,191,36,0.15)' : 'rgba(148,163,184,0.08)',
            }}
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ scaleY: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: EASE }}
          />
          {/* 肋骨 */}
          {[0, 1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className="absolute left-1/2 h-[3px] w-14 rounded-full"
              style={{
                top: 20 + i * 7,
                backgroundColor: step >= 3 ? `${COLORS.amber}99` : 'rgba(148,163,184,0.15)',
                transform: 'translateX(-50%)',
                boxShadow: step >= 3 ? `0 0 8px ${COLORS.amber}33` : 'none',
              }}
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.4, ease: EASE, delay: i * 0.12 }}
            />
          ))}
        </div>
      </div>

      {/* 右：html/head/body 三层结构 + 代码高亮 */}
      <div className="flex flex-col justify-center">
        <div className={`rounded-2xl border border-white/10 bg-black/40 p-3 ${FONT_MONO} text-[11px]`}>
          {CODE_LINES.map((l, i) => {
            const lit = nodeLit(l.tag);
            const activeTag = step >= 1 && step <= 3 && i === step - 1;
            return (
              <motion.div
                key={i}
                className="py-0.5"
                style={{
                  color: lit ? '#E2F9FF' : 'rgba(148,163,184,0.4)',
                  backgroundColor: activeTag ? 'rgba(34,211,238,0.14)' : 'transparent',
                  borderRadius: 4,
                }}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, ease: EASE, delay: i * 0.1 }}
              >
                {l.text}
                {lit && <span className="ml-2 text-[8px]" style={{ color: COLORS.cyan }}>● {l.tag}</span>}
              </motion.div>
            );
          })}
        </div>
        <motion.p
          className="mt-2 text-center text-[10px] text-slate-500"
          animate={{ opacity: step >= 4 ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        >
          HTML 是骨架 —— 内容先有骨头，才有血肉
        </motion.p>
      </div>
    </div>
  );
};
