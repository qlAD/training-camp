'use client';

import React from 'react';
import { motion } from 'motion/react';
import { useServerRoom } from '../scene/useServerRoom';
import { EASE } from '../scene/theme';
import { Snail, Train, Settings, CheckCircle2 } from 'lucide-react';

export const MavenMirrorFix: React.FC = () => {
  const { active } = useServerRoom();

  const steps = [
    { k: '1', text: '找到 Maven 安装目录下 conf/settings.xml' },
    { k: '2', text: '在 mirrors 标签里加阿里云镜像地址' },
    { k: '3', text: '重开 IDEA / 命令行，重新拉依赖' },
  ];

  return (
    <div className="mx-auto w-full max-w-4xl">
      {/* 速度对比 */}
      <div className="mb-4 grid grid-cols-2 gap-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: active >= 1 ? 1 : 0, x: active >= 1 ? 0 : -20 }}
          transition={{ duration: 0.45, ease: EASE }}
          className="rounded-2xl border border-rose-400/25 bg-rose-950/15 p-4"
        >
          <div className="mb-3 flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-500/20">
              <Snail className="h-5 w-5 text-rose-300" />
            </div>
            <div>
              <p className="text-sm font-bold text-rose-100">默认中央仓库</p>
              <p className="text-[11px] text-slate-400">从国外服务器拉</p>
            </div>
          </div>
          <div className="rounded-lg border border-white/5 bg-slate-950/50 px-3 py-3">
            <div className="relative h-2 overflow-hidden rounded-full bg-slate-800">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: active >= 2 ? '22%' : 0 }}
                transition={{ duration: 2, ease: 'linear' }}
                className="h-full rounded-full bg-rose-400/70"
              />
            </div>
            <div className="mt-2 flex items-center justify-between">
              <span className="font-mono text-[10px] text-rose-300">下载进度</span>
              <span className="font-mono text-[10px] text-rose-200">🐢 20 KB/s · 预估 35 min</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: active >= 1 ? 1 : 0, x: active >= 1 ? 0 : 20 }}
          transition={{ duration: 0.45, ease: EASE }}
          className="rounded-2xl border border-emerald-400/30 bg-emerald-950/15 p-4"
        >
          <div className="mb-3 flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/20">
              <Train className="h-5 w-5 text-emerald-300" />
            </div>
            <div>
              <p className="text-sm font-bold text-emerald-100">阿里云 Maven 镜像</p>
              <p className="text-[11px] text-slate-400">国内高速节点</p>
            </div>
          </div>
          <div className="rounded-lg border border-white/5 bg-slate-950/50 px-3 py-3">
            <div className="relative h-2 overflow-hidden rounded-full bg-slate-800">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: active >= 2 ? '100%' : 0 }}
                transition={{ duration: 0.9, ease: 'easeOut' }}
                className="h-full rounded-full bg-emerald-400/80"
              />
            </div>
            <div className="mt-2 flex items-center justify-between">
              <span className="font-mono text-[10px] text-emerald-300">下载进度</span>
              <span className="font-mono text-[10px] text-emerald-200">🚄 5 MB/s · 预估 2 min</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* 操作步骤 */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: active >= 3 ? 1 : 0, y: active >= 3 ? 0 : 14 }}
        transition={{ duration: 0.45, ease: EASE }}
        className="rounded-2xl border border-amber-400/30 bg-amber-950/10 p-4"
      >
        <div className="mb-3 flex items-center gap-2">
          <Settings className="h-4 w-4 text-amber-300" />
          <p className="text-sm font-bold text-amber-100">操作三步</p>
          <p className="text-[11px] text-slate-400">装完 Maven 第一件事就做这个</p>
        </div>
        <div className="space-y-2">
          {steps.map((s, i) => (
            <motion.div
              key={s.k}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: active >= 4 + i ? 1 : 0, x: active >= 4 + i ? 0 : -8 }}
              transition={{ duration: 0.3 }}
              className="flex items-start gap-3 rounded-lg border border-white/5 bg-slate-950/40 px-3 py-2"
            >
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-amber-400/40 bg-amber-500/10 font-mono text-[10px] font-bold text-amber-200">
                {s.k}
              </span>
              <p className="text-[11px] leading-relaxed text-slate-200">{s.text}</p>
              {active >= 4 + i + 1 && (
                <CheckCircle2 className="ml-auto h-3.5 w-3.5 shrink-0 text-emerald-400" />
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* 避坑提醒 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: active >= 7 ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        className="mt-4 rounded-xl border border-rose-400/25 bg-rose-500/8 px-4 py-2.5"
      >
        <p className="text-[11px] font-medium text-rose-200">
          ⚠️ 不做这步的后果：初始化 SpringBoot 项目卡你半小时，依赖下载到一半失败，反复重试怀疑人生
        </p>
      </motion.div>
    </div>
  );
};
