'use client';

import React from 'react';
import { motion } from 'motion/react';
import { useStage } from '../scene/StageClock';
import { EASE } from '../scene/theme';

interface SelectorCardsProps {
  /** 时间轴位置 */
  at: number;
  className?: string;
}

const SELECTORS = [
  {
    code: 'h1 { color: blue }',
    name: '标签选择器',
    desc: '选同类标签：所有 h1 都变蓝',
    cls: 'border-orange-400/40 bg-orange-400/10',
    codeCls: 'text-orange-200',
  },
  {
    code: '.card { padding: 8px }',
    name: '类选择器',
    desc: '点名一批元素：所有 class="card" 生效',
    cls: 'border-sky-400/40 bg-sky-400/10',
    codeCls: 'text-sky-200',
  },
  {
    code: '#header { font-size: 24px }',
    name: 'ID 选择器',
    desc: '点名一个元素：全页唯一的 #header',
    cls: 'border-amber-400/40 bg-amber-400/10',
    codeCls: 'text-amber-200',
  },
];

/** CSS 选择器三兄弟：标签 / 类 / ID 三张代码卡逐张弹入（0-2 卡片 3 总结） */
export const SelectorCards: React.FC<SelectorCardsProps> = ({ at, className = '' }) => {
  const { active } = useStage();
  const s = (i: number) => active >= at + i;

  return (
    <div className={`w-full ${className}`}>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        {SELECTORS.map((sel, i) => {
          const lit = s(i);
          return (
            <motion.div
              key={sel.name}
              initial={{ opacity: 0, scale: 0.7, y: 16 }}
              animate={lit ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.7, y: 16 }}
              transition={{ type: 'spring', stiffness: 280, damping: 20 }}
              className={`flex flex-col gap-2 rounded-2xl border px-4 py-4 ${sel.cls}`}
            >
              <code className={`rounded-lg bg-slate-950/60 px-2.5 py-1.5 font-mono text-xs font-bold ${sel.codeCls}`}>
                {sel.code}
              </code>
              <span className="text-sm font-bold text-slate-100">{sel.name}</span>
              <span className="text-[11px] leading-snug text-slate-400">{sel.desc}</span>
            </motion.div>
          );
        })}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={s(3) ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, ease: EASE }}
        className="mt-4 text-center text-sm text-slate-300"
      >
        CSS 靠「选择器」点名 —— 标签选一群，类选一批，ID 选一个
      </motion.p>
    </div>
  );
};
