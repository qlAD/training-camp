'use client';

import React from 'react';
import { motion } from 'motion/react';
import { useDesignCanvas } from '../scene/useDesignCanvas';
import { EASE } from '../scene/theme';
import { Copy, Bell, Layers, Square, Smartphone } from 'lucide-react';

export const DesignPrinciples: React.FC = () => {
  const { active } = useDesignCanvas();

  const principles = [
    {
      icon: Copy,
      name: '一致',
      desc: '同类按钮长得一样，同样操作放在同样位置',
      color: 'pink' as const,
    },
    {
      icon: Bell,
      name: '反馈',
      desc: '点了按钮得有反应：转圈、变色、弹提示都行',
      color: 'violet' as const,
    },
    {
      icon: Layers,
      name: '层次',
      desc: '重要内容大、显眼、靠前，次要的缩小或折叠',
      color: 'cyan' as const,
    },
    {
      icon: Square,
      name: '留白',
      desc: '别把页面塞满，呼吸感能让信息更清晰',
      color: 'emerald' as const,
    },
    {
      icon: Smartphone,
      name: '可达',
      desc: '照顾不同屏幕尺寸，别让手机只看到半个按钮',
      color: 'amber' as const,
    },
  ];

  const colorMap = {
    pink: { border: 'border-pink-400/30', bg: 'bg-pink-500/10', text: 'text-pink-300', iconBg: 'bg-pink-500/20' },
    violet: { border: 'border-violet-400/30', bg: 'bg-violet-500/10', text: 'text-violet-300', iconBg: 'bg-violet-500/20' },
    cyan: { border: 'border-cyan-400/30', bg: 'bg-cyan-500/10', text: 'text-cyan-300', iconBg: 'bg-cyan-500/20' },
    emerald: { border: 'border-emerald-400/30', bg: 'bg-emerald-500/10', text: 'text-emerald-300', iconBg: 'bg-emerald-500/20' },
    amber: { border: 'border-amber-400/30', bg: 'bg-amber-500/10', text: 'text-amber-300', iconBg: 'bg-amber-500/20' },
  } as const;

  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col items-center gap-4">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: active >= 1 ? 1 : 0, y: active >= 1 ? 0 : -10 }}
        transition={{ duration: 0.5, ease: EASE }}
        className="rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-center"
      >
        <p className="text-sm font-bold text-slate-200">
          画完原型回头自查，挨个问一遍 —— 效果立竿见影
        </p>
      </motion.div>

      <div className="grid w-full grid-cols-2 gap-3 md:grid-cols-5">
        {principles.map((p, i) => {
          const Icon = p.icon;
          const c = colorMap[p.color];
          return (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: active >= 2 + i ? 1 : 0, y: active >= 2 + i ? 0 : 20 }}
              transition={{ duration: 0.4, ease: EASE }}
              className={`rounded-xl border ${c.border} ${c.bg} p-3`}
            >
              <div className={`mb-2 flex h-9 w-9 items-center justify-center rounded-lg ${c.iconBg}`}>
                <Icon className={`h-5 w-5 ${c.text}`} />
              </div>
              <p className="mb-1 text-sm font-bold text-slate-100">{p.name}</p>
              <p className="text-[10px] leading-relaxed text-slate-400">{p.desc}</p>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: active >= 7 ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className="rounded-lg border border-slate-600/50 bg-slate-800/40 px-3 py-2 text-center"
      >
        <p className="text-xs italic text-slate-400">
          {'>'} 小贴士：这五条不用背，画原型时默念一遍就行
        </p>
      </motion.div>
    </div>
  );
};
