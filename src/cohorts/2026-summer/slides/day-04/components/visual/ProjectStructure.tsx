'use client';

import React from 'react';
import { motion } from 'motion/react';
import { useBlueprint } from '../scene/useBlueprint';
import { EASE } from '../scene/theme';
import { Folder, FileText, File, Component, LayoutDashboard, Settings } from 'lucide-react';

export const ProjectStructure: React.FC = () => {
  const { active } = useBlueprint();

  const treeItems = [
    {
      name: 'my-app/',
      type: 'folder',
      icon: Folder,
      level: 0,
      color: 'text-amber-300',
      desc: '项目根目录',
    },
    {
      name: 'src/',
      type: 'folder',
      icon: Folder,
      level: 1,
      color: 'text-amber-300',
      desc: '源代码目录',
    },
    {
      name: 'components/',
      type: 'folder',
      icon: Component,
      level: 2,
      color: 'text-cyan-300',
      desc: '公共组件',
    },
    {
      name: 'views/',
      type: 'folder',
      icon: LayoutDashboard,
      level: 2,
      color: 'text-cyan-300',
      desc: '页面视图',
    },
    {
      name: 'App.vue',
      type: 'file',
      icon: File,
      level: 2,
      color: 'text-emerald-300',
      desc: '根组件',
    },
    {
      name: 'main.js',
      type: 'file',
      icon: File,
      level: 2,
      color: 'text-emerald-300',
      desc: '入口文件',
    },
    {
      name: 'router/',
      type: 'folder',
      icon: LayoutDashboard,
      level: 1,
      color: 'text-cyan-300',
      desc: '路由配置',
    },
    {
      name: 'package.json',
      type: 'file',
      icon: FileText,
      level: 1,
      color: 'text-slate-300',
      desc: '依赖清单',
    },
    {
      name: 'vite.config.js',
      type: 'file',
      icon: Settings,
      level: 1,
      color: 'text-slate-300',
      desc: 'Vite 配置',
    },
  ];

  return (
    <div className="mx-auto w-full max-w-3xl">
      {/* 文件树 */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: active >= 1 ? 1 : 0, scale: active >= 1 ? 1 : 0.95 }}
        transition={{ duration: 0.45, ease: EASE }}
        className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900/70"
      >
        {/* 标题栏 */}
        <div className="flex items-center gap-2 border-b border-white/10 bg-slate-800/60 px-4 py-2">
          <span className="h-3 w-3 rounded-full bg-rose-500/80" />
          <span className="h-3 w-3 rounded-full bg-amber-500/80" />
          <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
          <span className="ml-2 font-mono text-xs text-slate-400">my-app</span>
        </div>

        {/* 文件列表 */}
        <div className="p-3">
          {treeItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: active >= 2 + i ? 1 : 0, x: active >= 2 + i ? 0 : -10 }}
                transition={{ duration: 0.3 }}
                className="group flex items-center gap-2 rounded px-2 py-1.5 hover:bg-white/5"
                style={{ paddingLeft: `${item.level * 20 + 8}px` }}
              >
                <Icon className={`h-4 w-4 ${item.color}`} />
                <span className="font-mono text-xs text-slate-200">{item.name}</span>
                <span className="ml-auto text-[10px] text-slate-500">{item.desc}</span>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* 底部说明 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: active >= 11 ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className="mt-4 grid grid-cols-3 gap-3 text-center"
      >
        <div className="rounded-xl border border-white/10 bg-slate-900/50 p-3">
          <p className="font-mono text-lg font-black text-cyan-300">src/</p>
          <p className="mt-0.5 text-[10px] text-slate-400">源代码主目录</p>
        </div>
        <div className="rounded-xl border border-white/10 bg-slate-900/50 p-3">
          <p className="font-mono text-lg font-black text-amber-300">router/</p>
          <p className="mt-0.5 text-[10px] text-slate-400">页面路由</p>
        </div>
        <div className="rounded-xl border border-white/10 bg-slate-900/50 p-3">
          <p className="font-mono text-lg font-black text-emerald-300">package.json</p>
          <p className="mt-0.5 text-[10px] text-slate-400">依赖清单</p>
        </div>
      </motion.div>
    </div>
  );
};