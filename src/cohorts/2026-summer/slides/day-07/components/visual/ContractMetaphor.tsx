'use client';

import React from 'react';
import { motion } from 'motion/react';
import { useApiContract } from '../scene/useApiContract';
import { EASE } from '../scene/theme';
import { UtensilsCrossed, Link2, MousePointerClick, Handshake } from 'lucide-react';

export const ContractMetaphor: React.FC = () => {
  const { active } = useApiContract();

  const resources = [
    { label: '用户', url: '/users', color: 'blue' },
    { label: '笔记', url: '/notes', color: 'emerald' },
    { label: '评论', url: '/comments', color: 'amber' },
    { label: '收藏', url: '/favorites', color: 'rose' },
  ];

  const colorMap: Record<string, string> = {
    blue: 'border-blue-400/30 bg-blue-950/15 text-blue-200',
    emerald: 'border-emerald-400/30 bg-emerald-950/15 text-emerald-200',
    amber: 'border-amber-400/30 bg-amber-950/15 text-amber-200',
    rose: 'border-rose-400/30 bg-rose-950/15 text-rose-200',
  };

  return (
    <div className="mx-auto w-full max-w-4xl">
      {/* 餐厅点单类比 */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: active >= 1 ? 1 : 0, y: active >= 1 ? 0 : 16 }}
        transition={{ duration: 0.45, ease: EASE }}
        className="mb-4 flex items-center justify-center gap-3 rounded-2xl border border-amber-400/25 bg-amber-950/10 px-5 py-3"
      >
        <UtensilsCrossed className="h-5 w-5 text-amber-300" />
        <p className="text-sm font-bold text-amber-100">
          RESTful = 餐厅点单的规矩 · 菜单怎么排 · 单子怎么写 · 上菜顺序怎样
        </p>
      </motion.div>

      {/* 核心思想：一切皆资源 */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: active >= 2 ? 1 : 0, y: active >= 2 ? 0 : 14 }}
        transition={{ duration: 0.45, ease: EASE }}
        className="mb-4 rounded-2xl border border-cyan-400/30 bg-gradient-to-r from-cyan-950/20 via-slate-900/40 to-slate-900/40 px-5 py-3 text-center"
      >
        <p className="text-base font-black bg-gradient-to-r from-blue-200 via-emerald-200 to-amber-200 bg-clip-text text-transparent">
          核心思想：一切皆资源
        </p>
        <p className="mt-1 text-[11px] text-slate-300">
          每个资源在服务器上都有唯一地址（URL），前端对着地址发请求
        </p>
      </motion.div>

      {/* 资源 = URL 地址 */}
      <div className="mb-4 grid grid-cols-2 gap-3 md:grid-cols-4">
        {resources.map((r, i) => (
          <motion.div
            key={r.label}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{
              opacity: active >= 3 + i ? 1 : 0,
              scale: active >= 3 + i ? 1 : 0.9,
            }}
            transition={{ duration: 0.3 }}
            className={`rounded-xl border p-3 text-center ${colorMap[r.color]}`}
          >
            <div className="mb-1 flex items-center justify-center gap-1">
              <Link2 className="h-3 w-3" />
              <span className="text-xs font-bold">{r.label}</span>
            </div>
            <p className="font-mono text-[10px] opacity-80">{r.url}</p>
          </motion.div>
        ))}
      </div>

      {/* 动作 = HTTP 方法 */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: active >= 7 ? 1 : 0, y: active >= 7 ? 0 : 12 }}
        transition={{ duration: 0.45, ease: EASE }}
        className="flex items-center justify-center gap-4 rounded-2xl border border-white/10 bg-slate-900/50 px-5 py-3"
      >
        <div className="flex items-center gap-1.5">
          <MousePointerClick className="h-4 w-4 text-cyan-300" />
          <span className="text-[11px] text-slate-300">
            <span className="font-bold text-cyan-200">URL</span> 描述「资源是什么」
          </span>
        </div>
        <Handshake className="h-4 w-4 text-slate-500" />
        <div className="flex items-center gap-1.5">
          <span className="text-[11px] text-slate-300">
            <span className="font-bold text-emerald-200">HTTP 方法</span> 描述「对资源做什么」
          </span>
        </div>
      </motion.div>
    </div>
  );
};
