'use client';

import React from 'react';
import { motion } from 'motion/react';
import { useServerRoom } from '../scene/useServerRoom';
import { EASE } from '../scene/theme';
import { Construction, Sparkles, FileCode, Box } from 'lucide-react';

export const SpringBootWhy: React.FC = () => {
  const { active } = useServerRoom();

  const before = [
    { label: 'XML 配置', detail: '几十行 Spring XML 写到吐' },
    { label: '装 Tomcat', detail: '单独下载、配环境、部署 war' },
    { label: '挑依赖', detail: '一个功能要自己凑 5 个 jar 包' },
  ];

  const after = [
    { label: '约定大于配置', detail: '默认配置直接用，要改才写' },
    { label: '内嵌 Tomcat', detail: '跑 main 方法就启动，不用单独装' },
    { label: '起步依赖', detail: '勾一下 spring-web，全家桶到齐' },
  ];

  return (
    <div className="mx-auto w-full max-w-4xl">
      {/* 对比 */}
      <div className="grid grid-cols-2 gap-4">
        {/* Before: 传统 Java Web */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: active >= 1 ? 1 : 0, y: active >= 1 ? 0 : 18 }}
          transition={{ duration: 0.45, ease: EASE }}
          className="rounded-2xl border border-slate-500/30 bg-slate-900/50 p-4"
        >
          <div className="mb-3 flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-700/40">
              <Construction className="h-5 w-5 text-slate-400" />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-200">传统 Java Web</p>
              <p className="text-[11px] text-slate-500">从打地基开始盖餐厅</p>
            </div>
          </div>
          <div className="space-y-2">
            {before.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: active >= 2 + i ? 1 : 0, x: active >= 2 + i ? 0 : -10 }}
                transition={{ duration: 0.3 }}
                className="rounded-lg border border-slate-700/50 bg-slate-950/50 px-3 py-2"
              >
                <p className="text-xs font-bold text-slate-300">{item.label}</p>
                <p className="text-[10px] text-slate-500">{item.detail}</p>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: active >= 5 ? 1 : 0 }}
            transition={{ duration: 0.35 }}
            className="mt-3 rounded-lg border border-rose-400/20 bg-rose-500/8 px-3 py-1.5"
          >
            <p className="text-[10px] text-rose-200">光让项目「跑起来」就能折腾半天</p>
          </motion.div>
        </motion.div>

        {/* After: SpringBoot */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: active >= 1 ? 1 : 0, y: active >= 1 ? 0 : 18 }}
          transition={{ duration: 0.45, ease: EASE, delay: 0.1 }}
          className="rounded-2xl border border-emerald-400/30 bg-gradient-to-br from-emerald-950/30 via-slate-900/40 to-slate-900/40 p-4"
        >
          <div className="mb-3 flex items-center gap-2">
            <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/20">
              <Sparkles className="h-5 w-5 text-emerald-300" />
            </div>
            <div>
              <p className="text-sm font-black text-emerald-100">Spring Boot 3</p>
              <p className="text-[11px] text-slate-400">约好的配置全包了</p>
            </div>
          </div>
          <div className="space-y-2">
            {after.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: active >= 2 + i ? 1 : 0, x: active >= 2 + i ? 0 : 10 }}
                transition={{ duration: 0.3 }}
                className="rounded-lg border border-emerald-400/15 bg-slate-950/40 px-3 py-2"
              >
                <p className="text-xs font-bold text-emerald-100">{item.label}</p>
                <p className="text-[10px] text-slate-400">{item.detail}</p>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: active >= 5 ? 1 : 0 }}
            transition={{ duration: 0.35 }}
            className="mt-3 rounded-lg border border-emerald-400/25 bg-emerald-500/8 px-3 py-1.5"
          >
            <p className="text-[10px] text-emerald-200">写最核心的业务代码，剩下的它兜着</p>
          </motion.div>
        </motion.div>
      </div>

      {/* 核心 slogan */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: active >= 6 ? 1 : 0, y: active >= 6 ? 0 : 12 }}
        transition={{ duration: 0.45, ease: EASE }}
        className="mt-5 flex items-center justify-center gap-3 rounded-2xl border border-amber-400/35 bg-gradient-to-r from-amber-950/25 via-emerald-950/20 to-cyan-950/20 px-6 py-4"
      >
        <FileCode className="h-6 w-6 text-amber-300" />
        <div className="text-center">
          <p className="text-lg font-black tracking-wide bg-gradient-to-r from-emerald-200 via-cyan-200 to-amber-200 bg-clip-text text-transparent">
            约定大于配置 · 开箱即用
          </p>
          <p className="mt-1 text-[11px] text-slate-300">
            SpringBoot 初始化向导 → 勾依赖 → 下载 → IDEA 打开 → 跑 main → 控制台弹启动日志 → 项目活了
          </p>
        </div>
        <Box className="h-6 w-6 text-emerald-300" />
      </motion.div>
    </div>
  );
};
