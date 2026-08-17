'use client';

import React from 'react';
import { motion } from 'motion/react';
import { useApiContract } from '../scene/useApiContract';
import { EASE } from '../scene/theme';
import {
  Database,
  Sparkles,
  FileSearch,
  FileCheck2,
  ArrowRight,
  Lightbulb,
} from 'lucide-react';

interface Stage {
  idx: number;
  title: string;
  sub: string;
  detail: string;
  icon: React.FC<{ className?: string }>;
  color: string;
  text: string;
}

const STAGES: Stage[] = [
  {
    idx: 1,
    title: '喂文档',
    sub: 'DB 设计 + 需求描述',
    detail: '把 Day6 的数据库设计文档、社区需求描述喂给 AI',
    icon: Database,
    color: 'border-blue-400/30 bg-blue-950/15',
    text: 'text-blue-200',
  },
  {
    idx: 2,
    title: '批量生成',
    sub: '全套标准化接口文档',
    detail: '用户 / 笔记 / 评论 / 点赞 / 收藏 / 文件上传 全套接口',
    icon: Sparkles,
    color: 'border-emerald-400/30 bg-emerald-950/15',
    text: 'text-emerald-200',
  },
  {
    idx: 3,
    title: '审稿',
    sub: '当「审稿人」别直接用',
    detail: '字段对不对表 · 有没有漏关键业务 · 权限标得对不对',
    icon: FileSearch,
    color: 'border-amber-400/30 bg-amber-950/15',
    text: 'text-amber-200',
  },
  {
    idx: 4,
    title: '定稿',
    sub: '前后端联调唯一标准',
    detail: 'Day8 联调时谁对不上文档谁就是谁的锅',
    icon: FileCheck2,
    color: 'border-cyan-400/30 bg-cyan-950/15',
    text: 'text-cyan-200',
  },
];

const DOC_FIELDS = ['接口地址', '请求方式', '入参(名/类型/必填/含义)', '返回体结构', '权限要求', '异常场景'];

export const AIDocWriter: React.FC = () => {
  const { active } = useApiContract();

  return (
    <div className="mx-auto w-full max-w-5xl">
      {/* 四阶段流程 */}
      <div className="flex flex-wrap items-stretch justify-center gap-2">
        {STAGES.map((s, i) => {
          const Icon = s.icon;
          const last = i === STAGES.length - 1;
          return (
            <React.Fragment key={s.idx}>
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{
                  opacity: active >= 1 + i ? 1 : 0,
                  y: active >= 1 + i ? 0 : 14,
                }}
                transition={{ duration: 0.4, ease: EASE }}
                className={`relative flex min-w-[150px] flex-1 flex-col items-center justify-center gap-1.5 rounded-xl border p-3 ${s.color}`}
              >
                <span className="absolute -top-2 left-2 rounded border border-white/10 bg-slate-950 px-1.5 py-0.5 font-mono text-[9px] font-bold text-slate-400">
                  STEP {s.idx}
                </span>
                <Icon className={`h-4 w-4 ${s.text}`} />
                <p className={`text-[11px] font-bold ${s.text}`}>{s.title}</p>
                <p className="text-center text-[9.5px] text-slate-400">{s.sub}</p>
              </motion.div>
              {!last && (
                <div className="hidden items-center md:flex">
                  <ArrowRight className="h-4 w-4 text-slate-500" />
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* 每个接口文档要包含的字段 */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: active >= 5 ? 1 : 0, y: active >= 5 ? 0 : 14 }}
        transition={{ duration: 0.45, ease: EASE }}
        className="mt-4 rounded-2xl border border-white/10 bg-slate-900/50 p-4"
      >
        <p className="mb-2 text-xs font-bold text-slate-200">每个接口的文档至少包含</p>
        <div className="flex flex-wrap gap-1.5">
          {DOC_FIELDS.map((f, i) => (
            <motion.span
              key={f}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{
                opacity: active >= 6 + i ? 1 : 0,
                scale: active >= 6 + i ? 1 : 0.9,
              }}
              transition={{ duration: 0.25 }}
              className="rounded-lg border border-cyan-400/20 bg-cyan-500/8 px-2.5 py-1 font-mono text-[10px] text-cyan-100"
            >
              {f}
            </motion.span>
          ))}
        </div>
      </motion.div>

      {/* 提示词小贴士 */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: active >= 12 ? 1 : 0, y: active >= 12 ? 0 : 12 }}
        transition={{ duration: 0.45, ease: EASE }}
        className="mt-3 flex items-start gap-2.5 rounded-2xl border border-amber-400/30 bg-amber-950/15 px-4 py-3"
      >
        <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-amber-300" />
        <div>
          <p className="text-xs font-bold text-amber-100">小贴士 · 提示词里强调一句</p>
          <p className="mt-1 text-[11px] leading-relaxed text-slate-300">
            「返回体遵循统一格式，code、message、data 三字段」。否则 AI 容易自作主张给每个接口设计不同的返回结构，联调时一团乱麻。
          </p>
        </div>
      </motion.div>
    </div>
  );
};
