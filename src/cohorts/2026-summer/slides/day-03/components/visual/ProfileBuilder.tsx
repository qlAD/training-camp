'use client';

import React from 'react';
import { motion } from 'motion/react';
import { useStage } from '../scene/StageClock';
import { EASE } from '../scene/theme';

interface ProfileBuilderProps {
  /** 时间轴位置 */
  at: number;
  className?: string;
}

const PARTS = [
  {
    name: 'index.html',
    tone: 'text-orange-300',
    border: 'border-orange-400/30',
    bg: 'bg-orange-400/5',
    badge: 'HTML',
    badgeCls: 'bg-orange-400/15 text-orange-300',
    lines: ['<h1>李明</h1>', '<p>全栈学员 · 软件学院</p>', '<ul><li>写代码</li></ul>'],
  },
  {
    name: 'style.css',
    tone: 'text-sky-300',
    border: 'border-sky-400/30',
    bg: 'bg-sky-400/5',
    badge: 'CSS',
    badgeCls: 'bg-sky-400/15 text-sky-300',
    lines: ['h1 { color: #38bdf8; }', '.card { padding: 16px; }', 'body { text-align: center; }'],
  },
  {
    name: 'script.js',
    tone: 'text-amber-300',
    border: 'border-amber-400/30',
    bg: 'bg-amber-400/5',
    badge: 'JS',
    badgeCls: 'bg-amber-400/15 text-amber-300',
    lines: ["const btn = document.querySelector('button');", "btn.onclick = () => alert('你好！');", '// 交互完成 ✨'],
  },
];

/** 合体：HTML/CSS/JS 三块代码依次并入 → 右侧预览卡渲染出完整个人简介（0-2 代码 3 预览 4 完成） */
export const ProfileBuilder: React.FC<ProfileBuilderProps> = ({ at, className = '' }) => {
  const { active } = useStage();
  const s = (i: number) => active >= at + i;

  return (
    <div className={`w-full ${className}`}>
      <div className="flex flex-col gap-3 lg:flex-row lg:items-stretch">
        {/* 三块代码 */}
        <div className="flex min-w-0 flex-1 flex-col justify-center gap-2">
          {PARTS.map((p, i) => {
            const lit = s(i);
            return (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, x: -16 }}
                animate={lit ? { opacity: 1, x: 0 } : { opacity: 0, x: -16 }}
                transition={{ duration: 0.45, ease: EASE }}
                className={`rounded-xl border ${p.border} ${p.bg} px-4 py-2.5`}
              >
                <div className="flex items-center gap-2">
                  <span className={`font-mono text-xs font-bold ${p.tone}`}>{p.name}</span>
                  <span className={`ml-auto rounded px-1.5 py-0.5 font-mono text-[10px] font-bold ${p.badgeCls}`}>
                    {p.badge}
                  </span>
                </div>
                <div className="mt-1.5 space-y-0.5 font-mono text-[11px] text-slate-300">
                  {p.lines.map((l) => (
                    <p key={l}>{l}</p>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* 预览个人简介 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={s(3) ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.92 }}
          transition={{ type: 'spring', stiffness: 260, damping: 22 }}
          className="flex min-w-0 w-full shrink-0 flex-col items-center justify-center rounded-2xl border border-white/10 bg-white px-6 py-5 shadow-xl lg:w-64"
        >
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-sky-400 to-indigo-500 text-xl font-black text-white">
            李
          </span>
          <p className="mt-2 text-lg font-black text-slate-800">李明</p>
          <p className="text-[11px] font-medium text-slate-500">全栈学员 · 软件学院</p>
          <div className="mt-2 flex flex-wrap justify-center gap-1">
            {['写代码', '摄影', '羽毛球'].map((h) => (
              <span key={h} className="rounded-full bg-sky-100 px-2 py-0.5 text-[10px] font-bold text-sky-700">
                {h}
              </span>
            ))}
          </div>
          <button className="mt-3 rounded-lg bg-gradient-to-r from-sky-500 to-indigo-500 px-4 py-1.5 text-xs font-bold text-white">
            联系我
          </button>
        </motion.div>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={s(4) ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, ease: EASE }}
        className="mt-3 text-center text-sm text-slate-300"
      >
        一份结构 + 一套样式 + 一点交互 = 你的美化版个人简介
      </motion.p>
    </div>
  );
};
