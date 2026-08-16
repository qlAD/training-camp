'use client';

import React from 'react';
import { motion } from 'motion/react';
import { useServerRoom } from '../scene/useServerRoom';
import { EASE } from '../scene/theme';
import { RefreshCw, Database, AlertTriangle, CheckCircle2 } from 'lucide-react';

export const FakeVsRealData: React.FC = () => {
  const { active } = useServerRoom();

  const mockList = [
    { title: '今天的晚霞真美', author: '@Mock_Alice', likes: 128 },
    { title: '周末咖啡馆打卡', author: '@Mock_Bob', likes: 56 },
    { title: '学习笔记 Day5', author: '@Mock_Cindy', likes: 89 },
  ];

  const realList = [
    { title: '我的第一篇真实笔记！', author: '@你自己', likes: 3 },
    { title: '今天的晚霞真美', author: '@Alice', likes: 128 },
    { title: '刚才发布的咖啡', author: '@你自己', likes: 1 },
  ];

  return (
    <div className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-4 md:grid-cols-2">
      {/* 左：假数据 */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: active >= 1 ? 1 : 0, x: active >= 1 ? 0 : -30 }}
        transition={{ duration: 0.5, ease: EASE }}
        className="rounded-2xl border border-rose-400/20 bg-rose-950/10 p-5"
      >
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-500/20">
              <AlertTriangle className="h-5 w-5 text-rose-300" />
            </div>
            <div>
              <p className="text-sm font-bold text-rose-200">Day5 · 假数据（Mock）</p>
              <p className="text-[11px] text-slate-400">演得很像，但其实是排练</p>
            </div>
          </div>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            className="rounded-lg bg-slate-900/60 p-1.5"
          >
            <RefreshCw className="h-4 w-4 text-rose-400/70" />
          </motion.div>
        </div>
        <div className="space-y-2">
          {mockList.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: active >= 2 + i ? 1 : 0, x: active >= 2 + i ? 0 : -10 }}
              transition={{ duration: 0.3 }}
              className="flex items-center justify-between rounded-lg border border-rose-400/10 bg-slate-900/40 px-3 py-2"
            >
              <div>
                <p className="text-xs font-medium text-slate-200">{item.title}</p>
                <p className="text-[10px] text-slate-500">{item.author}</p>
              </div>
              <span className="rounded bg-rose-500/10 px-1.5 py-0.5 font-mono text-[10px] text-rose-300">
                ❤ {item.likes}
              </span>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: active >= 5 ? 1 : 0 }}
          transition={{ duration: 0.4 }}
          className="mt-3 rounded-lg border border-rose-400/20 bg-rose-500/5 px-3 py-2"
        >
          <p className="text-[11px] text-rose-300">
            🔄 刷新 100 次 → 永远是这三条 + 这几个数字
          </p>
        </motion.div>
      </motion.div>

      {/* 右：真数据 */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: active >= 1 ? 1 : 0, x: active >= 1 ? 0 : 30 }}
        transition={{ duration: 0.5, ease: EASE }}
        className="rounded-2xl border border-emerald-400/30 bg-emerald-950/15 p-5"
      >
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/20">
              <Database className="h-5 w-5 text-emerald-300" />
            </div>
            <div>
              <p className="text-sm font-bold text-emerald-200">Day6 · 真数据（后端+DB）</p>
              <p className="text-[11px] text-slate-400">发一条存一条，真正的舞台</p>
            </div>
          </div>
          <div className="rounded-lg bg-emerald-500/15 p-1.5">
            <CheckCircle2 className="h-4 w-4 text-emerald-300" />
          </div>
        </div>
        <div className="space-y-2">
          {realList.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: active >= 6 + i ? 1 : 0, x: active >= 6 + i ? 0 : 10 }}
              transition={{ duration: 0.3 }}
              className="flex items-center justify-between rounded-lg border border-emerald-400/15 bg-slate-900/40 px-3 py-2"
            >
              <div>
                <p className="text-xs font-medium text-slate-200">{item.title}</p>
                <p className="text-[10px] text-slate-500">{item.author}</p>
              </div>
              <span className="rounded bg-emerald-500/10 px-1.5 py-0.5 font-mono text-[10px] text-emerald-300">
                ❤ {item.likes}
              </span>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: active >= 9 ? 1 : 0 }}
          transition={{ duration: 0.4 }}
          className="mt-3 rounded-lg border border-emerald-400/25 bg-emerald-500/5 px-3 py-2"
        >
          <p className="text-[11px] text-emerald-300">
            ✅ 你发的内容，刷新后真的会出现
          </p>
        </motion.div>
      </motion.div>

      {/* 底部总结 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: active >= 10 ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className="md:col-span-2"
      >
        <div className="flex items-center justify-center gap-2 rounded-xl border border-cyan-400/25 bg-cyan-500/8 px-4 py-2.5">
          <span className="font-mono text-xs font-bold text-cyan-300">Day 6 任务</span>
          <p className="text-xs font-medium text-cyan-100">
            给「此刻」社区挖一口真正的井 —— 后端服务 + 数据库，让数据长出「根」
          </p>
        </div>
      </motion.div>
    </div>
  );
};
