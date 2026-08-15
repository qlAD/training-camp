'use client';

import React from 'react';
import { motion } from 'motion/react';
import { useDesignCanvas } from '../scene/useDesignCanvas';
import { EASE } from '../scene/theme';
import { PenTool, Code2, MousePointerClick, Type, Image } from 'lucide-react';

export const TraeWorkIntro: React.FC = () => {
  const { active } = useDesignCanvas();

  const designOps = [
    { icon: MousePointerClick, text: '拖入形状、矩形占位' },
    { icon: Type, text: '输入文字、改字号颜色' },
    { icon: Image, text: '图片占位块、复制对齐' },
  ];

  return (
    <div className="mx-auto grid w-full max-w-4xl grid-cols-1 gap-4 md:grid-cols-2">
      {/* Trae Work */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: active >= 1 ? 1 : 0, x: active >= 1 ? 0 : -30 }}
        transition={{ duration: 0.5, ease: EASE }}
        className="rounded-2xl border border-violet-400/30 bg-violet-950/20 p-5"
      >
        <div className="mb-4 flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/20">
            <PenTool className="h-5 w-5 text-violet-300" />
          </div>
          <div>
            <p className="text-sm font-bold text-violet-200">Trae Work</p>
            <p className="text-[11px] text-slate-400">设计工具 · 画图</p>
          </div>
        </div>
        <p className="mb-3 font-mono text-[11px] text-violet-300/80">
          06-工具资源 / TraeWork_CN-Setup-x64.exe
        </p>
        <div className="mb-3 rounded-lg border border-violet-400/20 bg-slate-950/40 px-3 py-2">
          <p className="text-xs font-bold text-violet-200">Design 模式 · 搭积木式画线框</p>
        </div>
        <div className="space-y-2">
          {designOps.map((op, i) => {
            const Icon = op.icon;
            return (
              <motion.div
                key={op.text}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: active >= 2 + i ? 1 : 0, x: active >= 2 + i ? 0 : -10 }}
                transition={{ duration: 0.3 }}
                className="flex items-center gap-2 rounded-lg bg-slate-900/40 px-3 py-2"
              >
                <Icon className="h-4 w-4 text-violet-300" />
                <span className="text-xs text-slate-300">{op.text}</span>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Trae Code */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: active >= 1 ? 1 : 0, x: active >= 1 ? 0 : 30 }}
        transition={{ duration: 0.5, ease: EASE }}
        className="rounded-2xl border border-cyan-400/30 bg-cyan-950/20 p-5"
      >
        <div className="mb-4 flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/20">
            <Code2 className="h-5 w-5 text-cyan-300" />
          </div>
          <div>
            <p className="text-sm font-bold text-cyan-200">Trae Code</p>
            <p className="text-[11px] text-slate-400">IDE · 敲码</p>
          </div>
        </div>
        <p className="mb-3 font-mono text-[11px] text-cyan-300/80">
          昨天用过的 IDE · 写 Vue3 工程
        </p>
        <div className="mb-3 rounded-lg border border-cyan-400/20 bg-slate-950/40 px-3 py-2">
          <p className="text-xs font-bold text-cyan-200">Code 模式 · 写代码 + AI 辅助</p>
        </div>
        <div className="space-y-2">
          {['编辑器、终端、文件树', 'AI 对话生成代码', 'Day4 已搭建 Vue3 工程'].map((op, i) => (
            <motion.div
              key={op}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: active >= 2 + i ? 1 : 0, x: active >= 2 + i ? 0 : 10 }}
              transition={{ duration: 0.3 }}
              className="flex items-center gap-2 rounded-lg bg-slate-900/40 px-3 py-2"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
              <span className="text-xs text-slate-300">{op}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* 底部避坑 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: active >= 5 ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className="md:col-span-2"
      >
        <div className="flex items-center justify-center gap-2 rounded-xl border border-amber-400/30 bg-amber-500/10 px-4 py-2.5">
          <span className="text-xs text-amber-300">{'>'} 避坑笔记</span>
          <p className="text-xs font-medium text-amber-200">
            原型阶段别钻细节 —— 圆角 4px 还是 8px 不重要，先把「哪块放什么」想清楚，原型是拿来对齐想法的，不是选美
          </p>
        </div>
      </motion.div>
    </div>
  );
};
