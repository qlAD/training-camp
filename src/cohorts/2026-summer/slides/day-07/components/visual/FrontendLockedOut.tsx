'use client';

import React from 'react';
import { motion } from 'motion/react';
import { useApiContract } from '../scene/useApiContract';
import { EASE } from '../scene/theme';
import { Monitor, Database, Lock, DoorOpen, ArrowRight } from 'lucide-react';

export const FrontendLockedOut: React.FC = () => {
  const { active } = useApiContract();

  const mockRows = ['笔记 A', '笔记 B', '笔记 C'];
  const realTables = ['users', 'notes', 'likes', 'comments', 'favorites'];

  return (
    <div className="mx-auto w-full max-w-5xl">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {/* 前端：Mock 列表，门外干瞪眼 */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: active >= 1 ? 1 : 0, y: active >= 1 ? 0 : 18 }}
          transition={{ duration: 0.45, ease: EASE }}
          className="relative rounded-2xl border border-cyan-400/25 bg-cyan-950/10 p-4"
        >
          <div className="mb-3 flex items-center gap-2">
            <Monitor className="h-4 w-4 text-cyan-300" />
            <span className="text-sm font-bold text-cyan-100">前端 · Mock 列表</span>
            <span className="ml-auto rounded border border-cyan-400/30 bg-cyan-500/10 px-1.5 py-0.5 font-mono text-[9px] font-bold text-cyan-300">
              5173
            </span>
          </div>
          <div className="space-y-1.5">
            {mockRows.map((row, i) => (
              <motion.div
                key={row}
                initial={{ opacity: 0, x: -8 }}
                animate={{
                  opacity: active >= 2 + i ? 1 : 0,
                  x: active >= 2 + i ? 0 : -8,
                }}
                transition={{ duration: 0.3 }}
                className="flex items-center gap-2 rounded-lg border border-white/5 bg-slate-950/40 px-3 py-2"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                <span className="text-[11px] text-slate-300">{row}</span>
                <span className="ml-auto font-mono text-[9px] text-slate-500">刷新还一样</span>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: active >= 5 ? 1 : 0 }}
            transition={{ duration: 0.35 }}
            className="mt-3 flex items-center gap-1.5 rounded-lg border border-amber-400/25 bg-amber-500/8 px-3 py-1.5"
          >
            <Lock className="h-3 w-3 text-amber-300" />
            <span className="text-[10px] text-amber-200">点「发布」→ 数据塞不进去，门外干瞪眼</span>
          </motion.div>
        </motion.div>

        {/* 后端：真实表已就位，缺一道对外的门 */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: active >= 1 ? 1 : 0, y: active >= 1 ? 0 : 18 }}
          transition={{ duration: 0.45, ease: EASE, delay: 0.1 }}
          className="relative rounded-2xl border border-emerald-400/25 bg-emerald-950/10 p-4"
        >
          <div className="mb-3 flex items-center gap-2">
            <Database className="h-4 w-4 text-emerald-300" />
            <span className="text-sm font-bold text-emerald-100">后端 · cike 库已建好</span>
            <span className="ml-auto rounded border border-emerald-400/30 bg-emerald-500/10 px-1.5 py-0.5 font-mono text-[9px] font-bold text-emerald-300">
              8080
            </span>
          </div>
          <div className="grid grid-cols-3 gap-1.5">
            {realTables.map((t, i) => (
              <motion.div
                key={t}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{
                  opacity: active >= 2 + i ? 1 : 0,
                  scale: active >= 2 + i ? 1 : 0.9,
                }}
                transition={{ duration: 0.3 }}
                className="rounded border border-emerald-400/20 bg-slate-950/40 px-2 py-1.5 text-center"
              >
                <p className="font-mono text-[10px] font-bold text-emerald-200">{t}</p>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: active >= 5 ? 1 : 0 }}
            transition={{ duration: 0.35 }}
            className="mt-3 flex items-center gap-1.5 rounded-lg border border-emerald-400/25 bg-emerald-500/8 px-3 py-1.5"
          >
            <DoorOpen className="h-3 w-3 text-emerald-300" />
            <span className="text-[10px] text-emerald-200">表躺着等被唤醒 · 就缺一道「对外的门」</span>
          </motion.div>
        </motion.div>
      </div>

      {/* 中间：今天的主角 */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: active >= 6 ? 1 : 0, y: active >= 6 ? 0 : 14 }}
        transition={{ duration: 0.5, ease: EASE }}
        className="mt-5 flex items-center justify-center gap-3 rounded-2xl border border-amber-400/35 bg-gradient-to-r from-cyan-950/25 via-slate-900/40 to-emerald-950/20 px-6 py-4"
      >
        <ArrowRight className="h-5 w-5 text-cyan-300" />
        <div className="text-center">
          <p className="text-lg font-black tracking-wide bg-gradient-to-r from-blue-200 via-emerald-200 to-amber-200 bg-clip-text text-transparent">
            今天开「对外的门」—— RESTful API
          </p>
          <p className="mt-1 text-[11px] text-slate-300">
            规定前端怎么敲门 · 后端怎么应答 · 出错怎么报 · 成功怎么回
          </p>
        </div>
        <ArrowRight className="h-5 w-5 text-emerald-300" />
      </motion.div>
    </div>
  );
};
