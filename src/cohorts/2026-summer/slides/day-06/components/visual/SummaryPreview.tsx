'use client';

import React from 'react';
import { motion } from 'motion/react';
import { useServerRoom } from '../scene/useServerRoom';
import { EASE } from '../scene/theme';
import { ArrowRight, Lightbulb } from 'lucide-react';

const CHIP_WORDS = [
  '后端 = 后厨',
  'IDEA + Maven',
  'SpringBoot',
  'MySQL + DataGrid',
  '三大范式',
  'AI 设计 SQL',
  '数据长出「根」',
];

export const SummaryPreview: React.FC = () => {
  const { active } = useServerRoom();

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
        <p className="text-xl font-black bg-gradient-to-r from-emerald-200 via-cyan-200 to-amber-200 bg-clip-text text-transparent">
          今日收获
        </p>
      </motion.div>

      <div className="mb-6 flex flex-wrap justify-center gap-2">
        {CHIP_WORDS.map((word, i) => (
          <motion.div
            key={word}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.35, delay: 0.4 + i * 0.12, ease: EASE }}
            className="rounded-lg border px-3 py-1.5"
            style={{
              borderColor:
                i % 3 === 0
                  ? 'rgba(16,185,129,0.3)'
                  : i % 3 === 1
                    ? 'rgba(34,211,238,0.3)'
                    : 'rgba(245,158,11,0.3)',
              backgroundColor:
                i % 3 === 0
                  ? 'rgba(16,185,129,0.08)'
                  : i % 3 === 1
                    ? 'rgba(34,211,238,0.08)'
                    : 'rgba(245,158,11,0.08)',
            }}
          >
            <span
              className="text-xs font-bold"
              style={{
                color:
                  i % 3 === 0
                    ? 'rgba(110,231,183,1)'
                    : i % 3 === 1
                      ? 'rgba(103,232,249,1)'
                      : 'rgba(252,211,77,1)',
              }}
            >
              {word}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Day7 预告卡 */}
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.97 }}
        animate={{
          opacity: active >= 8 ? 1 : 0,
          y: active >= 8 ? 0 : 20,
          scale: active >= 8 ? 1 : 0.97,
        }}
        transition={{ duration: 0.5, ease: EASE }}
        className="mx-auto mb-6 flex w-full max-w-lg items-center gap-4 rounded-2xl border border-cyan-400/30 bg-gradient-to-r from-cyan-950/25 via-slate-900/50 to-emerald-950/20 px-5 py-4"
      >
        <span className="font-mono text-2xl font-black text-cyan-300">DAY 7</span>
        <div className="flex-1 text-left">
          <div className="flex items-center gap-1.5">
            <Lightbulb className="h-3.5 w-3.5 text-amber-300" />
            <p className="font-bold text-cyan-100">写真正的接口</p>
          </div>
          <p className="mt-0.5 text-[11px] text-cyan-200/80">
            RESTful 规范标准化接口 · 实体类 · 完整 CRUD
          </p>
        </div>
        <ArrowRight className="h-5 w-5 text-cyan-300" />
      </motion.div>

      {/* 收尾 slogan */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: active >= 9 ? 1 : 0, y: active >= 9 ? 0 : 10 }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-xl bg-gradient-to-r from-emerald-200 via-cyan-200 to-amber-200 bg-clip-text text-center text-lg font-black text-transparent"
      >
        今天不追求精妙，追求「跑通一次完整后端链路」
      </motion.p>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: active >= 10 ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className="mx-auto mt-1 max-w-xl text-center text-[11px] text-slate-400"
      >
        从代码到数据库 · 从启动到响应
      </motion.p>
    </div>
  );
};
