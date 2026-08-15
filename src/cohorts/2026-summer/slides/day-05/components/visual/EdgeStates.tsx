'use client';

import React from 'react';
import { motion } from 'motion/react';
import { useDesignCanvas } from '../scene/useDesignCanvas';
import { EASE } from '../scene/theme';
import { Inbox, Lock, AlertCircle, Loader } from 'lucide-react';

export const EdgeStates: React.FC = () => {
  const { active } = useDesignCanvas();

  const states = [
    {
      icon: Inbox,
      name: '空列表',
      question: '列表没数据时展示什么？',
      answer: '空状态插画 + "去发布第一条"引导',
      color: 'violet' as const,
    },
    {
      icon: Lock,
      name: '未登录',
      question: '点发布 / 点赞时怎样？',
      answer: '弹去登录页，登录后回原页面',
      color: 'amber' as const,
    },
    {
      icon: AlertCircle,
      name: '上传失败',
      question: '图片上传失败显示什么？',
      answer: '错误提示 + 重试按钮，别让用户对着死页面',
      color: 'pink' as const,
    },
    {
      icon: Loader,
      name: '加载中',
      question: '数据还没回来呢？',
      answer: '骨架屏 / 转圈，告诉用户"在加载"',
      color: 'cyan' as const,
    },
  ];

  const colorMap = {
    violet: { border: 'border-violet-400/30', bg: 'bg-violet-500/10', text: 'text-violet-300', iconBg: 'bg-violet-500/20' },
    amber: { border: 'border-amber-400/30', bg: 'bg-amber-500/10', text: 'text-amber-300', iconBg: 'bg-amber-500/20' },
    pink: { border: 'border-pink-400/30', bg: 'bg-pink-500/10', text: 'text-pink-300', iconBg: 'bg-pink-500/20' },
    cyan: { border: 'border-cyan-400/30', bg: 'bg-cyan-500/10', text: 'text-cyan-300', iconBg: 'bg-cyan-500/20' },
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
          画原型别只画"正常流程" —— 补上边角状态，后面少踩一半坑
        </p>
      </motion.div>

      <div className="grid w-full grid-cols-1 gap-3 md:grid-cols-2">
        {states.map((s, i) => {
          const Icon = s.icon;
          const c = colorMap[s.color];
          return (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: active >= 2 + i ? 1 : 0, y: active >= 2 + i ? 0 : 20 }}
              transition={{ duration: 0.4, ease: EASE }}
              className={`rounded-xl border ${c.border} ${c.bg} p-4`}
            >
              <div className="flex items-start gap-3">
                <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${c.iconBg}`}>
                  <Icon className={`h-5 w-5 ${c.text}`} />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-bold text-slate-100">{s.name}</p>
                  <p className="mt-0.5 text-[11px] text-slate-400">{s.question}</p>
                  <p className={`mt-1 text-[11px] font-medium ${c.text}`}>{s.answer}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
