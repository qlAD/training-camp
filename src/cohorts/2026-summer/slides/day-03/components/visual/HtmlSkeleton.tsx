'use client';

import React from 'react';
import { motion } from 'motion/react';
import { useStage } from '../scene/StageClock';
import { EASE } from '../scene/theme';

interface HtmlSkeletonProps {
  /** 时间轴位置 */
  at: number;
  className?: string;
}

const TREE = [
  { level: 0, text: '<html>', tag: 'html' as const },
  { level: 1, text: '<head>', tag: 'html' as const },
  { level: 2, text: '<title>我的页面</title>', tag: 'html' as const },
  { level: 1, text: '</head>', tag: 'html' as const },
  { level: 1, text: '<body>', tag: 'html' as const },
  { level: 2, text: '<h1>你好</h1>', tag: 'html' as const },
  { level: 2, text: '<p>我的简介…</p>', tag: 'html' as const },
  { level: 1, text: '</body>', tag: 'html' as const },
  { level: 0, text: '</html>', tag: 'html' as const },
];

/** HTML 骨架：结构树逐节点点亮（html/head/body 三层拆解） */
export const HtmlSkeleton: React.FC<HtmlSkeletonProps> = ({ at, className = '' }) => {
  const { active } = useStage();
  const s = (i: number) => active >= at + i;

  return (
    <div className={`w-full ${className}`}>
      <div className="mx-auto w-full max-w-md">
        {TREE.map((node, i) => {
          const lit = s(i);
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -12 }}
              animate={lit ? { opacity: 1, x: 0 } : { opacity: 0, x: -12 }}
              transition={{ duration: 0.35, ease: EASE }}
              className="py-0.5 font-mono text-[13px] leading-relaxed"
              style={{ paddingLeft: node.level * 20 + 4 }}
            >
              <span
                className={
                  lit
                    ? node.level === 0
                      ? 'font-bold text-sky-300'
                      : node.text.includes('body')
                      ? 'text-orange-300'
                      : 'text-slate-300'
                    : 'text-slate-600'
                }
              >
                {node.text}
              </span>
            </motion.div>
          );
        })}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={s(TREE.length) ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, ease: EASE }}
        className="mt-3 text-center text-sm text-slate-300"
      >
        html 是外壳，head 放说明，body 放内容 —— 三层，一个页面
      </motion.p>
    </div>
  );
};
