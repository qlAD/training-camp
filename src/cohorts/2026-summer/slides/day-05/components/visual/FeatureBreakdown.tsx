'use client';

import React from 'react';
import { motion } from 'motion/react';
import { useDesignCanvas } from '../scene/useDesignCanvas';
import { EASE } from '../scene/theme';
import { PenLine, Eye, MessageSquare, LogIn, LayoutGrid, Heart, Bookmark, User } from 'lucide-react';

export const FeatureBreakdown: React.FC = () => {
  const { active } = useDesignCanvas();

  const cores = [
    { icon: PenLine, name: '让人发内容', color: 'violet' as const },
    { icon: Eye, name: '让人看内容、聊内容', color: 'cyan' as const },
  ];

  const features = [
    { icon: LogIn, name: '注册登录', desc: '分清谁发的', color: 'amber' as const },
    { icon: LayoutGrid, name: '发布带图笔记', desc: '内容源头', color: 'violet' as const },
    { icon: Eye, name: '首页刷笔记', desc: '看内容', color: 'cyan' as const },
    { icon: MessageSquare, name: '详情点赞评论收藏', desc: '聊内容', color: 'pink' as const },
    { icon: User, name: '个人中心', desc: '我发过/收藏/赞过', color: 'emerald' as const },
  ];

  const colorMap = {
    violet: { border: 'border-violet-400/30', bg: 'bg-violet-500/10', text: 'text-violet-300', iconBg: 'bg-violet-500/20' },
    cyan: { border: 'border-cyan-400/30', bg: 'bg-cyan-500/10', text: 'text-cyan-300', iconBg: 'bg-cyan-500/20' },
    pink: { border: 'border-pink-400/30', bg: 'bg-pink-500/10', text: 'text-pink-300', iconBg: 'bg-pink-500/20' },
    amber: { border: 'border-amber-400/30', bg: 'bg-amber-500/10', text: 'text-amber-300', iconBg: 'bg-amber-500/20' },
    emerald: { border: 'border-emerald-400/30', bg: 'bg-emerald-500/10', text: 'text-emerald-300', iconBg: 'bg-emerald-500/20' },
  } as const;

  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col items-center gap-4">
      {/* 顶部两个核心 */}
      <div className="flex flex-wrap items-center justify-center gap-3">
        {cores.map((c, i) => {
          const Icon = c.icon;
          const cm = colorMap[c.color];
          return (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: active >= 1 + i ? 1 : 0, y: active >= 1 + i ? 0 : -16 }}
              transition={{ duration: 0.4, ease: EASE }}
              className={`flex items-center gap-2 rounded-xl border ${cm.border} ${cm.bg} px-4 py-2.5`}
            >
              <Icon className={`h-4 w-4 ${cm.text}`} />
              <span className="text-sm font-bold text-slate-100">{c.name}</span>
            </motion.div>
          );
        })}
      </div>

      {/* 分叉连线 */}
      <motion.svg
        initial={{ opacity: 0 }}
        animate={{ opacity: active >= 3 ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        viewBox="0 0 400 30"
        className="h-6 w-full max-w-md"
      >
        <line x1="120" y1="0" x2="60" y2="30" stroke="#475569" strokeWidth="1" strokeDasharray="3 3" />
        <line x1="140" y1="0" x2="140" y2="30" stroke="#475569" strokeWidth="1" strokeDasharray="3 3" />
        <line x1="200" y1="0" x2="220" y2="30" stroke="#475569" strokeWidth="1" strokeDasharray="3 3" />
        <line x1="260" y1="0" x2="300" y2="30" stroke="#475569" strokeWidth="1" strokeDasharray="3 3" />
        <line x1="280" y1="0" x2="360" y2="30" stroke="#475569" strokeWidth="1" strokeDasharray="3 3" />
      </motion.svg>

      {/* 五个功能 */}
      <div className="grid w-full grid-cols-2 gap-3 md:grid-cols-5">
        {features.map((f, i) => {
          const Icon = f.icon;
          const c = colorMap[f.color];
          return (
            <motion.div
              key={f.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: active >= 3 + i ? 1 : 0, y: active >= 3 + i ? 0 : 20 }}
              transition={{ duration: 0.4, ease: EASE }}
              className={`rounded-xl border ${c.border} ${c.bg} p-3 text-center`}
            >
              <div className={`mx-auto mb-2 flex h-9 w-9 items-center justify-center rounded-lg ${c.iconBg}`}>
                <Icon className={`h-4 w-4 ${c.text}`} />
              </div>
              <p className="mb-0.5 text-xs font-bold text-slate-100">{f.name}</p>
              <p className="text-[10px] text-slate-500">{f.desc}</p>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: active >= 8 ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className="rounded-lg border border-slate-600/50 bg-slate-800/40 px-3 py-2 text-center"
      >
        <p className="text-xs italic text-slate-400">
          {'>'} 顺着「发内容 / 看内容聊内容」两条线，功能自然就拆出来了
        </p>
      </motion.div>
    </div>
  );
};
