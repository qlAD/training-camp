'use client';

import React from 'react';
import { motion } from 'motion/react';
import { useDesignCanvas } from '../scene/useDesignCanvas';
import { EASE } from '../scene/theme';
import { PencilLine, Palette, Code2, CheckCircle2, MinusCircle } from 'lucide-react';

export const ThreeStages: React.FC = () => {
  const { active } = useDesignCanvas();

  const stages = [
    {
      icon: PencilLine,
      name: '产品原型',
      tag: '草图',
      desc: '黑白粗糙，只讲"这里有什么、点了去哪"',
      use: '想清楚 · 对齐想法',
      color: 'violet' as const,
      today: true,
    },
    {
      icon: Palette,
      name: 'UI 视觉稿',
      tag: '高保真',
      desc: '真实配色字号图标，几乎和最终页面一样',
      use: '定标准 · 评审外观',
      color: 'pink' as const,
      today: false,
    },
    {
      icon: Code2,
      name: '可运行代码',
      tag: '交付物',
      desc: 'Vue 工程，浏览器里能点能跳能交互',
      use: '真正能跑的产品',
      color: 'cyan' as const,
      today: true,
    },
  ];

  const colorMap = {
    violet: { border: 'border-violet-400/30', bg: 'bg-violet-500/10', text: 'text-violet-300', iconBg: 'bg-violet-500/20' },
    pink: { border: 'border-pink-400/30', bg: 'bg-pink-500/10', text: 'text-pink-300', iconBg: 'bg-pink-500/20' },
    cyan: { border: 'border-cyan-400/30', bg: 'bg-cyan-500/10', text: 'text-cyan-300', iconBg: 'bg-cyan-500/20' },
  } as const;

  return (
    <div className="mx-auto w-full max-w-4xl">
      <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
        {stages.map((s, i) => {
          const Icon = s.icon;
          const c = colorMap[s.color];
          return (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: active >= 1 + i ? 1 : 0, y: active >= 1 + i ? 0 : 24 }}
              transition={{ duration: 0.45, ease: EASE }}
              className={`relative rounded-xl border ${c.border} ${c.bg} p-4`}
            >
              <div className="mb-3 flex items-center justify-between">
                <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${c.iconBg}`}>
                  <Icon className={`h-5 w-5 ${c.text}`} />
                </div>
                <span className="rounded border border-white/10 bg-slate-950/40 px-2 py-0.5 font-mono text-[10px] text-slate-400">
                  {s.tag}
                </span>
              </div>
              <p className="mb-1 text-sm font-bold text-slate-100">{s.name}</p>
              <p className="mb-2 text-[11px] leading-relaxed text-slate-400">{s.desc}</p>
              <p className="text-[10px] text-slate-500">{s.use}</p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: active >= 4 + i ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="mt-3 flex items-center gap-1.5 border-t border-white/5 pt-2"
              >
                {s.today ? (
                  <>
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                    <span className="text-[10px] font-bold text-emerald-300">今天重点产出</span>
                  </>
                ) : (
                  <>
                    <MinusCircle className="h-3.5 w-3.5 text-slate-500" />
                    <span className="text-[10px] text-slate-500">训练营简化</span>
                  </>
                )}
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      {/* 底部箭头流 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: active >= 7 ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className="mt-4 flex items-center justify-center gap-2 text-xs text-slate-500"
      >
        <span className="text-violet-300">想清楚</span>
        <span>→</span>
        <span className="text-pink-300">定标准</span>
        <span>→</span>
        <span className="text-cyan-300">能跑的交付</span>
        <span className="ml-2 text-slate-600">三层真实存在，将来进团队都要走</span>
      </motion.div>
    </div>
  );
};
