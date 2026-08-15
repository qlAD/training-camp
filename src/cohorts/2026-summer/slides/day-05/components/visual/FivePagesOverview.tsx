'use client';

import React from 'react';
import { motion } from 'motion/react';
import { useDesignCanvas } from '../scene/useDesignCanvas';
import { EASE } from '../scene/theme';

export const FivePagesOverview: React.FC = () => {
  const { active } = useDesignCanvas();

  const pages = [
    {
      name: '首页',
      sub: '瀑布流 / 列表',
      duty: '首图 + 标题 + 作者 + 互动数据',
      color: 'violet' as const,
      wire: (
        <svg viewBox="0 0 80 50" className="h-full w-full">
          <rect x="6" y="6" width="22" height="28" fill="none" stroke="#A78BFA" strokeWidth="1.5" />
          <rect x="32" y="6" width="20" height="18" fill="none" stroke="#A78BFA" strokeWidth="1.5" />
          <rect x="55" y="6" width="19" height="24" fill="none" stroke="#A78BFA" strokeWidth="1.5" />
          <rect x="32" y="28" width="20" height="16" fill="none" stroke="#A78BFA" strokeWidth="1.5" />
          <rect x="55" y="34" width="19" height="10" fill="none" stroke="#A78BFA" strokeWidth="1.5" />
        </svg>
      ),
    },
    {
      name: '发布页',
      sub: '九宫格 + 表单',
      duty: '多图选择预览 + 标题正文 + 发布',
      color: 'pink' as const,
      wire: (
        <svg viewBox="0 0 80 50" className="h-full w-full">
          {[0, 1, 2].map((r) =>
            [0, 1, 2].map((c) => (
              <rect
                key={`${r}-${c}`}
                x={6 + c * 16}
                y={6 + r * 12}
                width="13"
                height="10"
                fill="none"
                stroke="#F472B6"
                strokeWidth="1.2"
              />
            ))
          )}
          <line x1="6" y1="44" x2="74" y2="44" stroke="#F472B6" strokeWidth="1.2" />
        </svg>
      ),
    },
    {
      name: '详情页',
      sub: '大图 + 评论',
      duty: '多图 + 正文 + 互动按钮',
      color: 'cyan' as const,
      wire: (
        <svg viewBox="0 0 80 50" className="h-full w-full">
          <rect x="6" y="6" width="68" height="20" fill="none" stroke="#22D3EE" strokeWidth="1.5" />
          <line x1="6" y1="30" x2="60" y2="30" stroke="#22D3EE" strokeWidth="1" />
          <line x1="6" y1="34" x2="55" y2="34" stroke="#22D3EE" strokeWidth="1" />
          <rect x="6" y="40" width="20" height="6" fill="none" stroke="#22D3EE" strokeWidth="1" />
          <rect x="30" y="40" width="20" height="6" fill="none" stroke="#22D3EE" strokeWidth="1" />
          <rect x="54" y="40" width="20" height="6" fill="none" stroke="#22D3EE" strokeWidth="1" />
        </svg>
      ),
    },
    {
      name: '个人中心',
      sub: '头像 + 三 Tab',
      duty: '我的笔记 / 收藏 / 赞过',
      color: 'amber' as const,
      wire: (
        <svg viewBox="0 0 80 50" className="h-full w-full">
          <circle cx="18" cy="14" r="6" fill="none" stroke="#F59E0B" strokeWidth="1.5" />
          <line x1="30" y1="10" x2="60" y2="10" stroke="#F59E0B" strokeWidth="1" />
          <line x1="30" y1="16" x2="50" y2="16" stroke="#F59E0B" strokeWidth="1" />
          <rect x="6" y="26" width="20" height="6" fill="none" stroke="#F59E0B" strokeWidth="1" />
          <rect x="30" y="26" width="20" height="6" fill="none" stroke="#F59E0B" strokeWidth="1" />
          <rect x="54" y="26" width="20" height="6" fill="none" stroke="#F59E0B" strokeWidth="1" />
          <rect x="6" y="36" width="68" height="8" fill="none" stroke="#F59E0B" strokeWidth="1" />
        </svg>
      ),
    },
    {
      name: '登录注册',
      sub: '两表单切换',
      duty: '账号密码 + 基础校验',
      color: 'emerald' as const,
      wire: (
        <svg viewBox="0 0 80 50" className="h-full w-full">
          <rect x="18" y="6" width="44" height="38" fill="none" stroke="#34D399" strokeWidth="1.5" />
          <line x1="26" y1="16" x2="54" y2="16" stroke="#34D399" strokeWidth="1" />
          <rect x="26" y="22" width="28" height="5" fill="none" stroke="#34D399" strokeWidth="1" />
          <rect x="26" y="30" width="28" height="5" fill="none" stroke="#34D399" strokeWidth="1" />
          <rect x="30" y="38" width="20" height="4" fill="none" stroke="#34D399" strokeWidth="1" />
        </svg>
      ),
    },
  ];

  const colorMap = {
    violet: { border: 'border-violet-400/30', bg: 'bg-violet-500/10', text: 'text-violet-300' },
    pink: { border: 'border-pink-400/30', bg: 'bg-pink-500/10', text: 'text-pink-300' },
    cyan: { border: 'border-cyan-400/30', bg: 'bg-cyan-500/10', text: 'text-cyan-300' },
    amber: { border: 'border-amber-400/30', bg: 'bg-amber-500/10', text: 'text-amber-300' },
    emerald: { border: 'border-emerald-400/30', bg: 'bg-emerald-500/10', text: 'text-emerald-300' },
  } as const;

  return (
    <div className="mx-auto w-full max-w-4xl">
      <div className="grid grid-cols-2 gap-3 md:grid-cols-5">
        {pages.map((p, i) => {
          const c = colorMap[p.color];
          return (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: active >= 1 + i ? 1 : 0, y: active >= 1 + i ? 0 : 20 }}
              transition={{ duration: 0.4, ease: EASE }}
              className={`rounded-xl border ${c.border} ${c.bg} p-3`}
            >
              <div className="mb-2 h-14 rounded-md border border-white/10 bg-slate-950/50 p-1">
                {p.wire}
              </div>
              <p className="text-sm font-bold text-slate-100">{p.name}</p>
              <p className={`mb-1 text-[10px] font-mono ${c.text}`}>{p.sub}</p>
              <p className="text-[10px] leading-relaxed text-slate-400">{p.duty}</p>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: active >= 6 ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className="mt-4 text-center"
      >
        <p className="text-xs text-slate-500">
          五个页面 · 一份数据 —— 今天要把它们的骨架在浏览器里搭起来
        </p>
      </motion.div>
    </div>
  );
};
