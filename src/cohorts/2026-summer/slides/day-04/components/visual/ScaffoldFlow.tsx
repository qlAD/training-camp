'use client';

import React from 'react';
import { motion } from 'motion/react';
import { useBlueprint } from '../scene/useBlueprint';
import { EASE } from '../scene/theme';
import { Rocket, Settings, FileCode, FolderOpen, Play } from 'lucide-react';

export const ScaffoldFlow: React.FC = () => {
  const { active } = useBlueprint();

  const steps = [
    {
      icon: Rocket,
      title: '创建项目',
      desc: 'npm create vite@latest my-app -- --template vue',
      tag: '脚手架',
      color: 'amber' as const,
    },
    {
      icon: Settings,
      title: '配置选项',
      desc: '选择 JavaScript / 项目名',
      tag: '最简方案',
      color: 'cyan' as const,
    },
    {
      icon: FolderOpen,
      title: '进入目录',
      desc: 'cd my-app && npm install',
      tag: '安装依赖',
      color: 'cyan' as const,
    },
    {
      icon: Play,
      title: '启动开发',
      desc: 'npm run dev → 浏览器打开 localhost:5173',
      tag: '热更新',
      color: 'emerald' as const,
    },
  ];

  const colorClasses = {
    amber: { border: 'border-amber-400/30', bg: 'bg-amber-500/10', text: 'text-amber-300', iconBg: 'bg-amber-500/20', tagBg: 'bg-amber-500/20', tagText: 'text-amber-300' },
    cyan: { border: 'border-cyan-400/30', bg: 'bg-cyan-500/10', text: 'text-cyan-300', iconBg: 'bg-cyan-500/20', tagBg: 'bg-cyan-500/20', tagText: 'text-cyan-300' },
    emerald: { border: 'border-emerald-400/30', bg: 'bg-emerald-500/10', text: 'text-emerald-300', iconBg: 'bg-emerald-500/20', tagBg: 'bg-emerald-500/20', tagText: 'text-emerald-300' },
  };

  return (
    <div className="mx-auto w-full max-w-3xl">
      <div className="relative grid grid-cols-2 gap-3 md:grid-cols-4">
        {steps.map((s, i) => {
          const Icon = s.icon;
          const c = colorClasses[s.color];
          return (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: active >= 1 + i ? 1 : 0, y: active >= 1 + i ? 0 : 30 }}
              transition={{ duration: 0.45, ease: EASE }}
              className={`flex flex-col gap-2 rounded-2xl border ${c.border} ${c.bg} p-4`}
            >
              <div className="flex items-center justify-between">
                <div className={`flex h-9 w-9 items-center justify-center rounded-lg ${c.iconBg}`}>
                  <Icon className={`h-4 w-4 ${c.text}`} />
                </div>
                <span className={`rounded px-1.5 py-0.5 font-mono text-[9px] font-bold ${c.tagBg} ${c.tagText}`}>
                  {s.tag}
                </span>
              </div>
              <p className="text-sm font-bold text-slate-100">Step {i + 1}</p>
              <p className="text-xs text-slate-300">{s.title}</p>
              <code className="block rounded bg-slate-950/60 px-2 py-1 font-mono text-[9px] leading-tight text-slate-400">
                {s.desc}
              </code>
            </motion.div>
          );
        })}
      </div>

      {/* 连线箭头 */}
      <div className="mt-3 flex items-center justify-center">
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: active >= 4 ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          className="h-px w-32 origin-left bg-gradient-to-r from-amber-500 via-cyan-500 to-emerald-500"
        />
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: active >= 4 ? 1 : 0, x: active >= 4 ? 0 : -10 }}
          transition={{ duration: 0.3, delay: 0.4 }}
          className="ml-2 flex items-center gap-2 text-xs font-medium text-emerald-300"
        >
          <Play className="h-3 w-3" />
          <span>项目跑起来了！</span>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: active >= 5 ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className="mt-2 text-center"
      >
        <p className="text-[11px] italic text-slate-500">
          {'>'} 小贴士：脚手架提问时，建议选最简方案 —— JavaScript、不加复杂工具
        </p>
      </motion.div>
    </div>
  );
};