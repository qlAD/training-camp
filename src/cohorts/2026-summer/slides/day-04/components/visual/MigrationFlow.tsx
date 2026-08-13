'use client';

import React from 'react';
import { motion } from 'motion/react';
import { useBlueprint } from '../scene/useBlueprint';
import { EASE } from '../scene/theme';
import { FileCode, Cpu, Wand2, GitMerge, Settings } from 'lucide-react';

export const MigrationFlow: React.FC = () => {
  const { active } = useBlueprint();

  const steps = [
    {
      icon: FileCode,
      title: '提供代码',
      desc: '把 Day3 静态代码（HTML/CSS/JS）原样贴给 AI',
      color: 'amber' as const,
    },
    {
      icon: Wand2,
      title: '明确目标',
      desc: '重构为 Vue3 组件化工程，拆公共组件，路由组织页面',
      color: 'cyan' as const,
    },
    {
      icon: Settings,
      title: '说明约束',
      desc: '命名规范、目录位置、复用策略',
      color: 'cyan' as const,
    },
    {
      icon: Cpu,
      title: 'AI 生成',
      desc: '提示词越具体，方案越可用',
      color: 'emerald' as const,
    },
    {
      icon: GitMerge,
      title: '合并调试',
      desc: '检查 AI 方案，手动调整细节',
      color: 'emerald' as const,
    },
  ];

  const colorMap = {
    amber: { border: 'border-amber-400/30', bg: 'bg-amber-500/10', text: 'text-amber-300', iconBg: 'bg-amber-500/20', numBg: 'bg-amber-500' },
    cyan: { border: 'border-cyan-400/30', bg: 'bg-cyan-500/10', text: 'text-cyan-300', iconBg: 'bg-cyan-500/20', numBg: 'bg-cyan-500' },
    emerald: { border: 'border-emerald-400/30', bg: 'bg-emerald-500/10', text: 'text-emerald-300', iconBg: 'bg-emerald-500/20', numBg: 'bg-emerald-500' },
  };

  return (
    <div className="mx-auto w-full max-w-3xl">
      {/* 流程箭头 */}
      <div className="flex flex-col gap-3">
        {steps.map((s, i) => {
          const Icon = s.icon;
          const c = colorMap[s.color];
          return (
            <React.Fragment key={s.title}>
              <motion.div
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                animate={{ opacity: active >= 1 + i ? 1 : 0, x: active >= 1 + i ? 0 : i % 2 === 0 ? -30 : 30 }}
                transition={{ duration: 0.45, ease: EASE }}
                className={`relative flex items-center gap-4 rounded-xl border ${c.border} ${c.bg} px-4 py-3`}
              >
                <span
                  className={`absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full font-mono text-xs font-black text-slate-950 ${c.numBg}`}
                >
                  {i + 1}
                </span>
                <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${c.iconBg}`}>
                  <Icon className={`h-5 w-5 ${c.text}`} />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-100">{s.title}</p>
                  <p className="text-[11px] text-slate-400">{s.desc}</p>
                </div>
              </motion.div>
              {i < steps.length - 1 && (
                <motion.div
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: active >= 2 + i ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="mx-auto h-3 w-px bg-gradient-to-b from-white/20 to-transparent"
                />
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* 总结 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: active >= 6 ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className="mt-3 text-center"
      >
        <p className="text-xs text-slate-500">
          提示词三要素：<span className="text-amber-300">代码</span> · <span className="text-cyan-300">目标</span> · <span className="text-emerald-300">约束</span>
        </p>
      </motion.div>
    </div>
  );
};