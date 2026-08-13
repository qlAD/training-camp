'use client';

import React from 'react';
import { motion } from 'motion/react';
import { useBlueprint } from '../scene/useBlueprint';
import { EASE } from '../scene/theme';
import { FileText, Download, Folder, BookOpen, Shield } from 'lucide-react';

export const ReadmeGuide: React.FC = () => {
  const { active } = useBlueprint();

  const sections = [
    {
      icon: FileText,
      title: '项目名称与简介',
      desc: '一句话说清项目是什么',
      color: 'amber' as const,
    },
    {
      icon: BookOpen,
      title: '技术栈说明',
      desc: 'Vue 3 + Vite · 前端工程化',
      color: 'amber' as const,
    },
    {
      icon: Download,
      title: '本地启动步骤',
      desc: 'npm install → npm run dev',
      color: 'cyan' as const,
    },
    {
      icon: Folder,
      title: '目录结构说明',
      desc: 'src/components · src/views · src/router',
      color: 'cyan' as const,
    },
    {
      icon: Shield,
      title: '部署与版权',
      desc: '可选的部署说明 · MIT License',
      color: 'emerald' as const,
    },
  ];

  const colorMap = {
    amber: { border: 'border-amber-400/30', bg: 'bg-amber-500/10', text: 'text-amber-300', iconBg: 'bg-amber-500/20' },
    cyan: { border: 'border-cyan-400/30', bg: 'bg-cyan-500/10', text: 'text-cyan-300', iconBg: 'bg-cyan-500/20' },
    emerald: { border: 'border-emerald-400/30', bg: 'bg-emerald-500/10', text: 'text-emerald-300', iconBg: 'bg-emerald-500/20' },
  };

  return (
    <div className="mx-auto w-full max-w-3xl">
      {/* README 文档外观 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: active >= 1 ? 1 : 0, y: active >= 1 ? 0 : 20 }}
        transition={{ duration: 0.45, ease: EASE }}
        className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900/70"
      >
        {/* 头部 */}
        <div className="flex items-center gap-3 border-b border-white/10 bg-slate-800/60 px-5 py-3">
          <FileText className="h-4 w-4 text-sky-400" />
          <span className="font-mono text-sm font-bold text-slate-100">README.md</span>
          <span className="ml-auto rounded bg-emerald-500/20 px-2 py-0.5 font-mono text-[10px] text-emerald-300">
            工业级
          </span>
        </div>

        {/* 内容 */}
        <div className="space-y-2 p-4">
          {sections.map((sec, i) => {
            const Icon = sec.icon;
            const c = colorMap[sec.color];
            return (
              <motion.div
                key={sec.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: active >= 2 + i ? 1 : 0, x: active >= 2 + i ? 0 : -20 }}
                transition={{ duration: 0.4 }}
                className={`flex items-start gap-3 rounded-lg border ${c.border} ${c.bg} px-3 py-2.5`}
              >
                <div className={`flex h-7 w-7 shrink-0 items-center justify-center rounded ${c.iconBg}`}>
                  <Icon className={`h-3.5 w-3.5 ${c.text}`} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[10px] text-slate-500">#{i + 1}</span>
                    <span className="text-sm font-bold text-slate-100">{sec.title}</span>
                  </div>
                  <p className="mt-0.5 text-[11px] text-slate-400">{sec.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* 底部提示 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: active >= 7 ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          className="border-t border-white/10 bg-slate-800/40 px-4 py-2"
        >
          <p className="text-[11px] italic text-slate-400">
            {'>'} 避坑：别人照 README 操作，能一键启动才算合格
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};