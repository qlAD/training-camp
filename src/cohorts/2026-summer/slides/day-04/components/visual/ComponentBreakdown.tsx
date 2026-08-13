'use client';

import React from 'react';
import { motion } from 'motion/react';
import { useBlueprint } from '../scene/useBlueprint';
import { EASE } from '../scene/theme';
import { FileCode, Component, LayoutDashboard, Share2 } from 'lucide-react';

export const ComponentBreakdown: React.FC = () => {
  const { active } = useBlueprint();

  const components = [
    {
      icon: FileCode,
      name: 'App.vue',
      type: '根组件',
      color: 'emerald' as const,
    },
    {
      icon: Share2,
      name: 'NavBar.vue',
      type: '公共组件',
      color: 'amber' as const,
    },
    {
      icon: Share2,
      name: 'Footer.vue',
      type: '公共组件',
      color: 'amber' as const,
    },
    {
      icon: Component,
      name: 'Home.vue',
      type: '页面视图',
      color: 'cyan' as const,
    },
    {
      icon: Component,
      name: 'Works.vue',
      type: '页面视图',
      color: 'cyan' as const,
    },
    {
      icon: Component,
      name: 'About.vue',
      type: '页面视图',
      color: 'cyan' as const,
    },
  ];

  const colorMap = {
    emerald: { border: 'border-emerald-400/30', bg: 'bg-emerald-500/10', text: 'text-emerald-300', iconBg: 'bg-emerald-500/20' },
    amber: { border: 'border-amber-400/30', bg: 'bg-amber-500/10', text: 'text-amber-300', iconBg: 'bg-amber-500/20' },
    cyan: { border: 'border-cyan-400/30', bg: 'bg-cyan-500/10', text: 'text-cyan-300', iconBg: 'bg-cyan-500/20' },
  };

  return (
    <div className="mx-auto w-full max-w-3xl">
      <div className="flex flex-col items-center gap-4">
        {/* 迁移前 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: active >= 1 ? 1 : 0, y: active >= 1 ? 0 : 20 }}
          transition={{ duration: 0.45, ease: EASE }}
          className="flex items-center gap-2"
        >
          <span className="rounded bg-rose-500/20 px-2 py-0.5 font-mono text-[10px] text-rose-300">迁移前</span>
          <div className="flex gap-1">
            <div className="h-12 w-12 rounded border border-rose-400/30 bg-rose-500/10" />
            <div className="h-12 w-12 rounded border border-rose-400/30 bg-rose-500/10" />
            <div className="h-12 w-12 rounded border border-rose-400/30 bg-rose-500/10" />
          </div>
          <span className="text-xs text-slate-500">三个独立 HTML，重复导航/页脚</span>
        </motion.div>

        {/* 箭头 */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: active >= 2 ? 1 : 0, scaleX: active >= 2 ? 1 : 0 }}
          transition={{ duration: 0.4 }}
          className="h-px w-16 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
        />

        {/* 迁移后 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: active >= 2 ? 1 : 0, y: active >= 2 ? 0 : 20 }}
          transition={{ duration: 0.45, ease: EASE }}
          className="w-full"
        >
          <div className="mb-3 text-center">
            <span className="rounded bg-cyan-500/20 px-2 py-0.5 font-mono text-[10px] text-cyan-300">迁移后</span>
            <span className="ml-2 text-xs text-slate-500">组件复用 + 路由组织</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {components.map((comp, i) => {
              const Icon = comp.icon;
              const c = colorMap[comp.color];
              return (
                <motion.div
                  key={comp.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: active >= 3 + i ? 1 : 0, scale: active >= 3 + i ? 1 : 0.8 }}
                  transition={{ duration: 0.35, ease: EASE }}
                  className={`flex flex-col items-center gap-1 rounded-xl border ${c.border} ${c.bg} px-3 py-2`}
                >
                  <div className={`flex h-8 w-8 items-center justify-center rounded-lg ${c.iconBg}`}>
                    <Icon className={`h-4 w-4 ${c.text}`} />
                  </div>
                  <code className="font-mono text-[10px] font-bold text-slate-100">{comp.name}</code>
                  <span className="text-[9px] text-slate-500">{comp.type}</span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* 优势说明 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: active >= 9 ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          className="mt-2 grid w-full grid-cols-3 gap-2"
        >
          <div className="rounded-lg border border-white/10 bg-slate-900/50 p-2 text-center">
            <p className="text-xs font-bold text-cyan-300">改一处</p>
            <p className="text-[10px] text-slate-500">全站生效</p>
          </div>
          <div className="rounded-lg border border-white/10 bg-slate-900/50 p-2 text-center">
            <p className="text-xs font-bold text-amber-300">按需加载</p>
            <p className="text-[10px] text-slate-500">性能更好</p>
          </div>
          <div className="rounded-lg border border-white/10 bg-slate-900/50 p-2 text-center">
            <p className="text-xs font-bold text-emerald-300">易于扩展</p>
            <p className="text-[10px] text-slate-500">加页面不难</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};