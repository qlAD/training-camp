'use client';

import React from 'react';
import { motion } from 'motion/react';
import { useBlueprint } from '../scene/useBlueprint';
import { EASE } from '../scene/theme';
import { Hammer, Factory, CheckCircle2, XCircle } from 'lucide-react';

export const WorkshopVsFactory: React.FC = () => {
  const { active } = useBlueprint();

  const manualPoints = [
    { icon: XCircle, text: '亲手写每个 HTML', ok: false },
    { icon: XCircle, text: '复制粘贴改导航', ok: false },
    { icon: XCircle, text: '第三方库无法引入', ok: false },
    { icon: CheckCircle2, text: '简单直观，双击即跑', ok: true },
  ];

  const factoryPoints = [
    { icon: CheckCircle2, text: '标准化项目结构', ok: true },
    { icon: CheckCircle2, text: '组件化复用', ok: true },
    { icon: CheckCircle2, text: '包管理器安装', ok: true },
    { icon: CheckCircle2, text: '配置统一管理', ok: true },
  ];

  return (
    <div className="mx-auto grid w-full max-w-4xl grid-cols-1 gap-4 md:grid-cols-2">
      {/* 手工作坊 */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: active >= 1 ? 1 : 0, x: active >= 1 ? 0 : -30 }}
        transition={{ duration: 0.5, ease: EASE }}
        className="rounded-2xl border border-rose-400/30 bg-rose-950/20 p-5"
      >
        <div className="mb-4 flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-500/20">
            <Hammer className="h-5 w-5 text-rose-300" />
          </div>
          <div>
            <p className="text-sm font-bold text-rose-200">手工作坊</p>
            <p className="text-[11px] text-slate-400">原生静态页面</p>
          </div>
        </div>
        <div className="space-y-2">
          {manualPoints.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: active >= 2 + i ? 1 : 0, x: active >= 2 + i ? 0 : -10 }}
                transition={{ duration: 0.3 }}
                className="flex items-center gap-2 rounded-lg bg-slate-900/40 px-3 py-2"
              >
                <Icon className={`h-4 w-4 ${p.ok ? 'text-emerald-400' : 'text-rose-400'}`} />
                <span className={`text-xs ${p.ok ? 'text-slate-300' : 'text-slate-400'}`}>{p.text}</span>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* 现代工厂 */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: active >= 1 ? 1 : 0, x: active >= 1 ? 0 : 30 }}
        transition={{ duration: 0.5, ease: EASE }}
        className="rounded-2xl border border-cyan-400/30 bg-cyan-950/20 p-5"
      >
        <div className="mb-4 flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/20">
            <Factory className="h-5 w-5 text-cyan-300" />
          </div>
          <div>
            <p className="text-sm font-bold text-cyan-200">现代工厂</p>
            <p className="text-[11px] text-slate-400">Vue3 + Vite 工程</p>
          </div>
        </div>
        <div className="space-y-2">
          {factoryPoints.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: active >= 2 + i ? 1 : 0, x: active >= 2 + i ? 0 : 10 }}
                transition={{ duration: 0.3 }}
                className="flex items-center gap-2 rounded-lg bg-slate-900/40 px-3 py-2"
              >
                <Icon className="h-4 w-4 text-emerald-400" />
                <span className="text-xs text-slate-300">{p.text}</span>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* 底部总结 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: active >= 6 ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className="md:col-span-2"
      >
        <div className="flex items-center justify-center gap-2 rounded-xl border border-amber-400/30 bg-amber-500/10 px-4 py-2.5">
          <span className="text-xs text-amber-300">💡</span>
          <p className="text-xs font-medium text-amber-200">
            工程化解决的是「项目变大、变复杂之后」的问题 —— 你的作品集迟早要扩展，现在升级正合适
          </p>
        </div>
      </motion.div>
    </div>
  );
};