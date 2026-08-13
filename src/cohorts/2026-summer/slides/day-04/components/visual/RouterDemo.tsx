'use client';

import React from 'react';
import { motion } from 'motion/react';
import { useBlueprint } from '../scene/useBlueprint';
import { EASE } from '../scene/theme';
import { Globe, Home, FileText, User, ArrowRight } from 'lucide-react';

export const RouterDemo: React.FC = () => {
  const { active } = useBlueprint();

  const routes = [
    { path: '/', name: '首页', icon: Home, color: 'amber' },
    { path: '/works', name: '作品列表', icon: FileText, color: 'cyan' },
    { path: '/about', name: '关于我', icon: User, color: 'emerald' },
  ];

  const colorMap = {
    amber: { bg: 'bg-amber-500/20', text: 'text-amber-300', border: 'border-amber-400/30' },
    cyan: { bg: 'bg-cyan-500/20', text: 'text-cyan-300', border: 'border-cyan-400/30' },
    emerald: { bg: 'bg-emerald-500/20', text: 'text-emerald-300', border: 'border-emerald-400/30' },
  };

  return (
    <div className="mx-auto w-full max-w-3xl">
      <div className="flex flex-col gap-5 md:flex-row">
        {/* 左侧：路由表 */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: active >= 1 ? 1 : 0, x: active >= 1 ? 0 : -20 }}
          transition={{ duration: 0.45, ease: EASE }}
          className="flex-1"
        >
          <div className="mb-2 flex items-center gap-2">
            <Globe className="h-4 w-4 text-cyan-400" />
            <span className="text-xs font-bold text-slate-300">路由配置表</span>
          </div>
          <div className="space-y-2">
            {routes.map((r, i) => {
              const Icon = r.icon;
              const c = colorMap[r.color as keyof typeof colorMap];
              return (
                <motion.div
                  key={r.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: active >= 2 + i ? 1 : 0, x: active >= 2 + i ? 0 : -20 }}
                  transition={{ duration: 0.35 }}
                  className={`flex items-center gap-3 rounded-lg border ${c.border} ${c.bg} px-3 py-2`}
                >
                  <Icon className={`h-4 w-4 ${c.text}`} />
                  <code className="font-mono text-xs text-slate-200">{r.path}</code>
                  <ArrowRight className="h-3 w-3 text-slate-500" />
                  <span className="text-xs text-slate-300">{r.name}</span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* 右侧：URL 栏演示 */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: active >= 1 ? 1 : 0, x: active >= 1 ? 0 : 20 }}
          transition={{ duration: 0.45, ease: EASE }}
          className="flex-1"
        >
          <div className="mb-2 text-xs font-bold text-slate-300">浏览器地址栏</div>
          <div className="rounded-xl border border-white/10 bg-slate-900/70 p-3">
            {/* URL 栏 */}
            <motion.div
              animate={{ opacity: active >= 3 ? 1 : 0 }}
              transition={{ duration: 0.4 }}
              className="mb-3 flex items-center gap-2 rounded-lg bg-slate-800/60 px-3 py-2"
            >
              <Globe className="h-3.5 w-3.5 text-emerald-400" />
              <motion.code
                animate={{ opacity: active >= 4 ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="font-mono text-xs text-slate-300"
              >
                localhost:5173/works
              </motion.code>
            </motion.div>

            {/* 页面预览 */}
            <motion.div
              animate={{ opacity: active >= 4 ? 1 : 0 }}
              transition={{ duration: 0.4 }}
              className="rounded-lg bg-white/95 p-3"
            >
              <p className="text-center text-sm font-bold text-slate-800">作品列表页</p>
              <div className="mt-2 grid grid-cols-2 gap-2">
                <div className="h-10 rounded bg-slate-200" />
                <div className="h-10 rounded bg-slate-200" />
                <div className="h-10 rounded bg-slate-200" />
                <div className="h-10 rounded bg-slate-200" />
              </div>
            </motion.div>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: active >= 5 ? 1 : 0 }}
            transition={{ duration: 0.4 }}
            className="mt-2 text-[11px] text-slate-400"
          >
            不同 URL → 不同页面，点导航不再是"假跳转"
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};