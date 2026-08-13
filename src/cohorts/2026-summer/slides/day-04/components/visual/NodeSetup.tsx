'use client';

import React from 'react';
import { motion } from 'motion/react';
import { useBlueprint } from '../scene/useBlueprint';
import { EASE } from '../scene/theme';
import { Download, CheckCircle2, Globe, Server } from 'lucide-react';

export const NodeSetup: React.FC = () => {
  const { active } = useBlueprint();

  const steps = [
    {
      step: 1,
      icon: Download,
      title: '安装 Node.js',
      desc: '双击 node-v24.19.0-x64.msi，一路下一步',
      detail: '让 JavaScript 在电脑上直接运行',
      color: 'amber' as const,
    },
    {
      step: 2,
      icon: Globe,
      title: '配置国内镜像源',
      desc: 'npm config set registry https://registry.npmmirror.com',
      detail: '解决国内下载慢的问题',
      color: 'cyan' as const,
    },
    {
      step: 3,
      icon: Server,
      title: '验证安装',
      desc: 'node -v → v24.19.0',
      detail: 'npm config get registry → npmmirror.com',
      color: 'emerald' as const,
    },
  ];

  const colorMap = {
    amber: {
      border: 'border-amber-400/30',
      bg: 'bg-amber-500/10',
      text: 'text-amber-300',
      iconBg: 'bg-amber-500/20',
      numBg: 'bg-amber-500',
    },
    cyan: {
      border: 'border-cyan-400/30',
      bg: 'bg-cyan-500/10',
      text: 'text-cyan-300',
      iconBg: 'bg-cyan-500/20',
      numBg: 'bg-cyan-500',
    },
    emerald: {
      border: 'border-emerald-400/30',
      bg: 'bg-emerald-500/10',
      text: 'text-emerald-300',
      iconBg: 'bg-emerald-500/20',
      numBg: 'bg-emerald-500',
    },
  };

  return (
    <div className="mx-auto w-full max-w-3xl">
      <div className="space-y-4">
        {steps.map((s, i) => {
          const Icon = s.icon;
          const c = colorMap[s.color];
          return (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: active >= 1 + i ? 1 : 0, x: active >= 1 + i ? 0 : -30 }}
              transition={{ duration: 0.45, ease: EASE }}
              className="relative flex items-center gap-4 rounded-xl border border-white/10 bg-slate-900/50 px-5 py-4"
            >
              <span
                className={`absolute -left-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full font-mono text-xs font-black text-slate-950 ${c.numBg}`}
              >
                {s.step}
              </span>
              <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${c.iconBg}`}>
                <Icon className={`h-5 w-5 ${c.text}`} />
              </div>
              <div className="flex-1">
                <p className="text-sm font-bold text-slate-100">{s.title}</p>
                <p className="mt-0.5 font-mono text-[11px] text-slate-400">{s.desc}</p>
                <p className="mt-0.5 text-[10px] text-slate-500">{s.detail}</p>
              </div>
              {active >= 3 + i && (
                <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-400" />
              )}
            </motion.div>
          );
        })}
      </div>

      {/* 进度连线 */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: active >= 4 ? 1 : 0 }}
        transition={{ duration: 0.6 }}
        className="mx-auto mt-4 h-0.5 w-full origin-left rounded bg-gradient-to-r from-amber-500 via-cyan-500 to-emerald-500"
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: active >= 5 ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className="mt-3 text-center"
      >
        <p className="text-xs text-slate-500">
          装好引擎，换好镜像源 —— 工程化的第一步就迈稳了
        </p>
      </motion.div>
    </div>
  );
};