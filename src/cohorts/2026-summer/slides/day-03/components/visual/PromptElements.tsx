'use client';

import React from 'react';
import { motion } from 'motion/react';
import { useStage } from '../scene/StageClock';
import { EASE } from '../scene/theme';
import { User, Target, BookOpen, FileCode } from 'lucide-react';

interface PromptElementsProps {
  at: number;
  className?: string;
}

const ELEMENTS = [
  {
    icon: User,
    label: '角色',
    desc: '你是一位资深前端工程师',
    tag: 'Role',
    cls: 'border-orange-400/40 bg-orange-400/10',
    iconCls: 'text-orange-300',
    codeCls: 'text-orange-200',
  },
  {
    icon: Target,
    label: '任务',
    desc: '帮我做一个个人简介页面',
    tag: 'Task',
    cls: 'border-sky-400/40 bg-sky-400/10',
    iconCls: 'text-sky-300',
    codeCls: 'text-sky-200',
  },
  {
    icon: BookOpen,
    label: '上下文',
    desc: '我已经写好了 index.html 和 style.css',
    tag: 'Context',
    cls: 'border-amber-400/40 bg-amber-400/10',
    iconCls: 'text-amber-300',
    codeCls: 'text-amber-200',
  },
  {
    icon: FileCode,
    label: '输出格式',
    desc: '直接输出完整 HTML 文件',
    tag: 'Output',
    cls: 'border-emerald-400/40 bg-emerald-400/10',
    iconCls: 'text-emerald-300',
    codeCls: 'text-emerald-200',
  },
];

export const PromptElements: React.FC<PromptElementsProps> = ({ at, className = '' }) => {
  const { active } = useStage();
  const s = (i: number) => active >= at + i;

  return (
    <div className={`w-full ${className}`}>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {ELEMENTS.map((el, i) => {
          const Icon = el.icon;
          const lit = s(i);
          return (
            <motion.div
              key={el.label}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              animate={lit ? { opacity: 1, x: 0 } : { opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              transition={{ duration: 0.45, ease: EASE }}
              className={`flex items-center gap-3 rounded-2xl border px-4 py-3 ${el.cls}`}
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-950/50">
                <Icon className={`h-5 w-5 ${el.iconCls}`} />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-slate-100">{el.label}</span>
                  <span className="rounded bg-slate-950/40 px-1.5 py-0.5 font-mono text-[10px] text-slate-400">
                    {el.tag}
                  </span>
                </div>
                <code className={`mt-0.5 block truncate font-mono text-[11px] ${el.codeCls}`}>
                  {el.desc}
                </code>
              </div>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={s(ELEMENTS.length) ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
        transition={{ type: 'spring', stiffness: 280, damping: 20 }}
        className="mt-4 rounded-xl border border-white/10 bg-slate-950/50 px-4 py-3"
      >
        <p className="text-center font-mono text-[12px] leading-relaxed text-slate-300">
          <span className="text-orange-300">Role</span> | <span className="text-sky-300">Task</span> |{' '}
          <span className="text-amber-300">Context</span> | <span className="text-emerald-300">Output</span>
        </p>
        <p className="mt-1 text-center text-[11px] text-slate-500">
          四要素齐了，AI 才知道「你是谁 · 要做什么 · 基于什么 · 怎么交」
        </p>
      </motion.div>
    </div>
  );
};