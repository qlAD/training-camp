'use client';

import React from 'react';
import { motion } from 'motion/react';
import { useApiContract } from '../scene/useApiContract';
import { EASE } from '../scene/theme';
import { ArrowRight, Lightbulb, KeyRound } from 'lucide-react';

const CHIP_WORDS = [
  'REST = 契约',
  'HTTP 四动作',
  '三件套',
  'code/message/data',
  'AI 写文档',
  '全业务 CRUD',
  'my-liked-notes 复用',
  'Apifox + CORS',
  '全局异常兜底',
];

export const SummaryPreview: React.FC = () => {
  const { active } = useApiContract();

  return (
    <div className="mx-auto w-full max-w-3xl text-center">
      {/* 今日收获 chips */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: active >= 1 ? 1 : 0, y: active >= 1 ? 0 : 14 }}
        transition={{ duration: 0.45, ease: EASE }}
        className="mb-4"
      >
        <p className="mb-1 font-mono text-xs uppercase tracking-widest text-slate-500">
          Today · Takeaway
        </p>
        <p className="text-xl font-black bg-gradient-to-r from-blue-200 via-emerald-200 to-amber-200 bg-clip-text text-transparent">
          今日收获
        </p>
      </motion.div>

      <div className="mb-6 flex flex-wrap justify-center gap-2">
        {CHIP_WORDS.map((word, i) => {
          const palette = [
            { border: 'rgba(59,130,246,0.3)', bg: 'rgba(59,130,246,0.08)', color: 'rgba(147,197,253,1)' },
            { border: 'rgba(16,185,129,0.3)', bg: 'rgba(16,185,129,0.08)', color: 'rgba(110,231,183,1)' },
            { border: 'rgba(245,158,11,0.3)', bg: 'rgba(245,158,11,0.08)', color: 'rgba(252,211,77,1)' },
            { border: 'rgba(34,211,238,0.3)', bg: 'rgba(34,211,238,0.08)', color: 'rgba(103,232,249,1)' },
          ];
          const p = palette[i % palette.length];
          return (
            <motion.div
              key={word}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35, delay: 0.4 + i * 0.1, ease: EASE }}
              className="rounded-lg border px-3 py-1.5"
              style={{ borderColor: p.border, backgroundColor: p.bg }}
            >
              <span className="text-xs font-bold" style={{ color: p.color }}>
                {word}
              </span>
            </motion.div>
          );
        })}
      </div>

      {/* Day8 预告卡 */}
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.97 }}
        animate={{
          opacity: active >= 8 ? 1 : 0,
          y: active >= 8 ? 0 : 20,
          scale: active >= 8 ? 1 : 0.97,
        }}
        transition={{ duration: 0.5, ease: EASE }}
        className="mx-auto mb-6 flex w-full max-w-lg items-center gap-4 rounded-2xl border border-cyan-400/30 bg-gradient-to-r from-blue-950/25 via-slate-900/50 to-emerald-950/20 px-5 py-4"
      >
        <span className="font-mono text-2xl font-black text-cyan-300">DAY 8</span>
        <div className="flex-1 text-left">
          <div className="flex items-center gap-1.5">
            <Lightbulb className="h-3.5 w-3.5 text-amber-300" />
            <p className="font-bold text-cyan-100">第一轮联调 · JWT 鉴权全链路</p>
          </div>
          <p className="mt-0.5 text-[11px] text-cyan-200/80">
            前端登录页真调今天的注册/登录接口 · 签发令牌 · 存令牌 · 带令牌 · 校验令牌
          </p>
        </div>
        <KeyRound className="h-5 w-5 text-cyan-300" />
      </motion.div>

      {/* 收尾 slogan */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: active >= 9 ? 1 : 0, y: active >= 9 ? 0 : 10 }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-xl bg-gradient-to-r from-blue-200 via-emerald-200 to-amber-200 bg-clip-text text-center text-lg font-black text-transparent"
      >
        后端从「一张白纸」变成「接口齐全」· 文档先行 · 规范统一 · 逐接口验收
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: active >= 10 ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className="mt-2 flex items-center justify-center gap-1.5 text-[11px] text-slate-400"
      >
        <ArrowRight className="h-3 w-3 text-cyan-400" />
        <span>这套节奏以后做任何正经项目，开头都得这么干</span>
      </motion.div>
    </div>
  );
};
