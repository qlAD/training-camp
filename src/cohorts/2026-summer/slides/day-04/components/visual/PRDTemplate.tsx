'use client';

import React from 'react';
import { motion } from 'motion/react';
import { useBlueprint } from '../scene/useBlueprint';
import { EASE } from '../scene/theme';
import { FileText, Users, ListChecks, Layout, Shield } from 'lucide-react';

export const PRDTemplate: React.FC = () => {
  const { active } = useBlueprint();

  const sections = [
    {
      icon: FileText,
      title: '项目背景与目标',
      desc: '为什么做这个？做完想达成什么？',
      detail: '决定所有功能的取舍标准',
      color: 'amber' as const,
    },
    {
      icon: Users,
      title: '目标用户',
      desc: '给谁用？使用场景是什么？',
      detail: '决定交互方式',
      color: 'cyan' as const,
    },
    {
      icon: ListChecks,
      title: '功能清单与优先级',
      desc: 'P0 必须 · P1 锦上添花 · P2 以后再说',
      detail: '避免什么都想做',
      color: 'emerald' as const,
    },
    {
      icon: Layout,
      title: '页面与交互说明',
      desc: '每个页面长什么样，点了跳哪',
      detail: '文字描述 + 原型图',
      color: 'amber' as const,
    },
    {
      icon: Shield,
      title: '非功能需求',
      desc: '性能、兼容性、安全性',
      detail: '首屏加载时间、浏览器兼容',
      color: 'cyan' as const,
    },
  ];

  const colorClasses = {
    amber: { border: 'border-amber-400/30', bg: 'bg-amber-500/10', text: 'text-amber-300', iconBg: 'bg-amber-500/20' },
    cyan: { border: 'border-cyan-400/30', bg: 'bg-cyan-500/10', text: 'text-cyan-300', iconBg: 'bg-cyan-500/20' },
    emerald: { border: 'border-emerald-400/30', bg: 'bg-emerald-500/10', text: 'text-emerald-300', iconBg: 'bg-emerald-500/20' },
  };

  return (
    <div className="mx-auto w-full max-w-3xl">
      {/* PRD 文档外观 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: active >= 1 ? 1 : 0, y: active >= 1 ? 0 : 20 }}
        transition={{ duration: 0.5, ease: EASE }}
        className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900/70"
      >
        {/* 文档头 */}
        <div className="flex items-center gap-3 border-b border-white/10 bg-slate-800/60 px-5 py-3">
          <FileText className="h-4 w-4 text-amber-400" />
          <span className="font-mono text-sm font-bold text-slate-100">PRD · Portfolio 作品集</span>
          <span className="ml-auto rounded bg-amber-500/20 px-2 py-0.5 font-mono text-[10px] text-amber-300">DRAFT</span>
        </div>

        {/* 内容区 */}
        <div className="space-y-2 p-4">
          {sections.map((sec, i) => {
            const Icon = sec.icon;
            const c = colorClasses[sec.color];
            return (
              <motion.div
                key={sec.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: active >= 2 + i ? 1 : 0, x: active >= 2 + i ? 0 : -20 }}
                transition={{ duration: 0.4, ease: EASE }}
                className={`flex items-start gap-3 rounded-lg border ${c.border} ${c.bg} px-3 py-2.5`}
              >
                <div className={`flex h-7 w-7 shrink-0 items-center justify-center rounded ${c.iconBg}`}>
                  <Icon className={`h-3.5 w-3.5 ${c.text}`} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[10px] text-slate-500">§{i + 1}</span>
                    <span className="text-sm font-bold text-slate-100">{sec.title}</span>
                  </div>
                  <p className="mt-0.5 text-[11px] text-slate-300">{sec.desc}</p>
                  <p className="mt-0.5 text-[10px] text-slate-500">{sec.detail}</p>
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
            {'>'} 避坑笔记：新手常犯 —— 只写「有什么功能」，不写「边界条件」
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};