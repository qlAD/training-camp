'use client';

import React from 'react';
import { motion } from 'motion/react';
import { useServerRoom } from '../scene/useServerRoom';
import { EASE } from '../scene/theme';
import { Sparkles, FileText, CheckSquare, ArrowRight, Database, Shield, Hash } from 'lucide-react';

export const AIDesignFlow: React.FC = () => {
  const { active } = useServerRoom();

  const gates = [
    {
      icon: Database,
      title: '字段类型对不对',
      color: 'text-blue-300',
      bg: 'border-blue-400/30 bg-blue-950/15',
      items: ['手机号用字符串（不是数字）', '密码字段长度够不够', '时间用 datetime 还是 timestamp'],
    },
    {
      icon: Shield,
      title: '约束到不到位',
      color: 'text-amber-300',
      bg: 'border-amber-400/30 bg-amber-950/15',
      items: ['手机号加唯一索引（防重复注册）', '密码字段单独建/隔离', '外键关系有没有标对'],
    },
    {
      icon: Hash,
      title: '索引合不合理',
      color: 'text-emerald-300',
      bg: 'border-emerald-400/30 bg-emerald-950/15',
      items: ['用户编号、笔记编号建索引', '笔记表：作者+创建时间联合索引', '别滥用 — 索引多了写入变慢'],
    },
  ];

  return (
    <div className="mx-auto w-full max-w-5xl">
      {/* 流程 3 步：喂 AI → 出文档+SQL → 人工校验 */}
      <div className="mb-4 grid grid-cols-1 items-stretch gap-1 md:grid-cols-5">
        {/* Step 1: 喂 AI */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: active >= 1 ? 1 : 0, y: active >= 1 ? 0 : 14 }}
          transition={{ duration: 0.4, ease: EASE }}
          className="flex flex-col items-center justify-center gap-1.5 rounded-xl border border-violet-400/30 bg-violet-950/20 p-3"
        >
          <Sparkles className="h-5 w-5 text-violet-300" />
          <span className="rounded border border-violet-400/30 bg-violet-500/10 px-1.5 py-0.5 font-mono text-[9px] font-bold text-violet-300">
            STEP 1
          </span>
          <p className="text-center text-xs font-bold text-violet-100">把需求喂给 AI</p>
          <p className="text-center text-[10px] text-slate-400">
            图文社区 · 注册/登录/发笔记/点赞/评论/收藏
          </p>
        </motion.div>

        <div className="hidden items-center justify-center md:flex">
          <ArrowRight className="h-4 w-4 text-slate-500" />
        </div>

        {/* Step 2: 出文档+SQL */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: active >= 2 ? 1 : 0, y: active >= 2 ? 0 : 14 }}
          transition={{ duration: 0.4, ease: EASE }}
          className="flex flex-col items-center justify-center gap-1.5 rounded-xl border border-cyan-400/30 bg-cyan-950/20 p-3"
        >
          <FileText className="h-5 w-5 text-cyan-300" />
          <span className="rounded border border-cyan-400/30 bg-cyan-500/10 px-1.5 py-0.5 font-mono text-[9px] font-bold text-cyan-300">
            STEP 2
          </span>
          <p className="text-center text-xs font-bold text-cyan-100">出 2 份产物</p>
          <p className="text-center text-[10px] text-slate-400">
            数据库设计文档 + 建表 SQL
          </p>
        </motion.div>

        <div className="hidden items-center justify-center md:flex">
          <ArrowRight className="h-4 w-4 text-slate-500" />
        </div>

        {/* Step 3: 人工校验 */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: active >= 3 ? 1 : 0, y: active >= 3 ? 0 : 14 }}
          transition={{ duration: 0.4, ease: EASE }}
          className="flex flex-col items-center justify-center gap-1.5 rounded-xl border border-emerald-400/30 bg-emerald-950/20 p-3"
        >
          <CheckSquare className="h-5 w-5 text-emerald-300" />
          <span className="rounded border border-emerald-400/30 bg-emerald-500/10 px-1.5 py-0.5 font-mono text-[9px] font-bold text-emerald-300">
            STEP 3
          </span>
          <p className="text-center text-xs font-bold text-emerald-100">人工校验</p>
          <p className="text-center text-[10px] text-slate-400">
            三道关 — 千万别无脑照搬
          </p>
        </motion.div>
      </div>

      {/* 提示词提示 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: active >= 4 ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        className="mb-4 rounded-xl border border-violet-400/25 bg-violet-500/8 px-4 py-2.5"
      >
        <p className="text-[11px] text-violet-100">
          <span className="font-bold text-violet-200">💡 提示词要强调：</span>
          遵循三大范式 + 给出字段注释 + 包含主外键关系 + 索引设计建议，不然 AI 产出是一坨冷字母
        </p>
      </motion.div>

      {/* 三道关 */}
      <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
        {gates.map((g, i) => {
          const Icon = g.icon;
          const baseIdx = 5 + i * 4;
          return (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 14 }}
              animate={{
                opacity: active >= baseIdx ? 1 : 0,
                y: active >= baseIdx ? 0 : 14,
              }}
              transition={{ duration: 0.4, ease: EASE, delay: i * 0.08 }}
              className={`rounded-2xl border p-4 ${g.bg}`}
            >
              <div className="mb-3 flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-950/50">
                  <Icon className={`h-4 w-4 ${g.color}`} />
                </div>
                <p className={`text-sm font-bold ${g.color}`}>{g.title}</p>
              </div>
              <div className="space-y-1.5">
                {g.items.map((item, j) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -6 }}
                    animate={{
                      opacity: active >= baseIdx + 1 + j ? 1 : 0,
                      x: active >= baseIdx + 1 + j ? 0 : -6,
                    }}
                    transition={{ duration: 0.28 }}
                    className="flex items-start gap-1.5 rounded-lg border border-white/5 bg-slate-950/40 px-2.5 py-1.5"
                  >
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400/60" />
                    <span className="text-[10.5px] text-slate-200">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
