'use client';

import React from 'react';
import { motion } from 'motion/react';
import { useStage } from '../scene/StageClock';
import { EASE } from '../scene/theme';

interface BoxModelViewProps {
  /* 时间轴位置 */
  at: number;
  className?: string;
}

const LAYERS = [
  { key: 'margin', label: 'margin 外边距', cls: 'border-sky-400/50 bg-sky-400/10' },
  { key: 'border', label: 'border 边框', cls: 'border-amber-400/50 bg-amber-400/10' },
  { key: 'padding', label: 'padding 内边距', cls: 'border-orange-400/50 bg-orange-400/10' },
  { key: 'content', label: 'content 内容', cls: 'border-lime-400/50 bg-lime-400/10' },
];

/* 盒模型：margin > border > padding > content 嵌套盒从外到内逐层点亮（0-3 层 4 总结） */
export const BoxModelView: React.FC<BoxModelViewProps> = ({ at, className = '' }) => {
  const { active } = useStage();
  const s = (i: number) => active >= at + i;

  // 从外到内逐层点亮：margin(i=0) → border → padding → content(i=3)
  const box = (i: number) => {
    const layer = LAYERS[i];
    return (
      <motion.div
        key={layer.key}
        initial={{ opacity: 0, scale: 0.92 }}
        animate={s(i) ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.92 }}
        transition={{ duration: 0.4, ease: EASE }}
        className="w-full rounded-lg border-2 p-2.5"
        style={{
          borderColor: s(i) ? undefined : 'rgba(100,116,139,0.3)',
        }}
      >
        <div className={`rounded-md ${layer.cls} p-2`}>
          <p className="text-center font-mono text-[10px] font-bold text-slate-200">{layer.label}</p>
          {i < LAYERS.length - 1 && <div className="mt-1.5">{box(i + 1)}</div>}
        </div>
      </motion.div>
    );
  };

  return (
    <div className={`w-full ${className}`}>
      <div className="mx-auto w-full max-w-sm">{box(0)}</div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={s(4) ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, ease: EASE }}
        className="mt-4 text-center text-sm text-slate-300"
      >
        网页里每个元素都是一个盒子 —— 从外到内：外边距 / 边框 / 内边距 / 内容
      </motion.p>
    </div>
  );
};
