'use client';

import React from 'react';
import { motion } from 'motion/react';
import { useApiContract } from '../scene/useApiContract';
import { EASE } from '../scene/theme';
import { FileText, Sparkles, Layers, ShieldCheck, CheckCircle2, Play } from 'lucide-react';

interface Step {
  no: string;
  title: string;
  sub: string;
  steps: string[];
  icon: React.FC<{ className?: string }>;
  color: string;
  text: string;
  done: string;
}

const STEPS: Step[] = [
  {
    no: '01',
    title: '定规范',
    sub: '白纸黑字落下来',
    steps: ['统一响应体格式', '业务错误码表', 'URL 命名风格'],
    icon: FileText,
    color: 'border-blue-400/30 bg-blue-950/15',
    text: 'text-blue-200',
    done: '三件规范定稿',
  },
  {
    no: '02',
    title: 'AI 生成接口文档',
    sub: '审稿 · 修订 · 定稿',
    steps: ['喂 DB 设计 + 需求', 'AI 批量生成全套', '对照表审稿,存 day07'],
    icon: Sparkles,
    color: 'border-emerald-400/30 bg-emerald-950/15',
    text: 'text-emerald-200',
    done: '全套接口文档归档',
  },
  {
    no: '03',
    title: '逐模块开发',
    sub: '用户 → 笔记 → 文件 → 互动',
    steps: ['每写完一个模块用 Apifox 调', '每写完一个接口立刻测', '别堆一晚上一起测'],
    icon: Layers,
    color: 'border-amber-400/30 bg-amber-950/15',
    text: 'text-amber-200',
    done: '四模块接口全跑通',
  },
  {
    no: '04',
    title: '跨域 + 异常',
    sub: '统一兜住',
    steps: ['配全局跨域', '写全局异常处理器', '异常转统一响应体'],
    icon: ShieldCheck,
    color: 'border-rose-400/30 bg-rose-950/15',
    text: 'text-rose-200',
    done: 'Apifox 不报 CORS',
  },
  {
    no: '05',
    title: '逐接口验收',
    sub: 'Apifox 全过一遍',
    steps: ['每个接口独立调用正常', '错误场景也返回规整错误码', '后端开发阶段封顶'],
    icon: CheckCircle2,
    color: 'border-cyan-400/30 bg-cyan-950/15',
    text: 'text-cyan-200',
    done: '后端阶段真正完工',
  },
];

export const HandsOnFiveSteps: React.FC = () => {
  const { active } = useApiContract();

  return (
    <div className="mx-auto w-full max-w-5xl">
      <div className="grid grid-cols-1 gap-3 md:grid-cols-5">
        {STEPS.map((s, i) => {
          const Icon = s.icon;
          const baseIdx = 1 + i * 4;
          return (
            <motion.div
              key={s.no}
              initial={{ opacity: 0, y: 22 }}
              animate={{
                opacity: active >= baseIdx ? 1 : 0,
                y: active >= baseIdx ? 0 : 22,
              }}
              transition={{ duration: 0.45, ease: EASE, delay: i * 0.06 }}
              className={`relative rounded-2xl border p-3 ${s.color}`}
            >
              <div className="mb-2 flex items-center justify-between">
                <span className="flex h-7 w-7 items-center justify-center rounded-xl border border-white/10 bg-slate-950/40 font-mono text-[10px] font-black text-white/80">
                  {s.no}
                </span>
                <Icon className={`h-3.5 w-3.5 ${s.text}`} />
              </div>
              <p className={`text-[12px] font-black ${s.text}`}>{s.title}</p>
              <p className="mb-2 text-[10px] text-slate-400">{s.sub}</p>
              <div className="space-y-1">
                {s.steps.map((st, si) => (
                  <motion.div
                    key={st}
                    initial={{ opacity: 0, x: -6 }}
                    animate={{
                      opacity: active >= baseIdx + 1 + si ? 1 : 0,
                      x: active >= baseIdx + 1 + si ? 0 : -6,
                    }}
                    transition={{ duration: 0.25 }}
                    className="rounded border border-white/5 bg-slate-950/40 px-2 py-1"
                  >
                    <span className="text-[9.5px] leading-snug text-slate-200">{st}</span>
                  </motion.div>
                ))}
              </div>
              {active >= baseIdx + 3 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="mt-2 flex items-center gap-1 rounded border border-emerald-400/25 bg-emerald-500/8 px-1.5 py-0.5"
                >
                  <Play className="h-2 w-2 text-emerald-300" />
                  <span className="text-[8.5px] font-bold text-emerald-200">{s.done}</span>
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: active >= 21 ? 1 : 0, y: active >= 21 ? 0 : 12 }}
        transition={{ duration: 0.45, ease: EASE }}
        className="mt-4 flex items-center justify-center gap-3 rounded-2xl border border-cyan-400/35 bg-gradient-to-r from-blue-950/20 via-slate-900/40 to-emerald-950/20 px-6 py-3 text-center"
      >
        <p className="text-sm font-black bg-gradient-to-r from-blue-200 via-emerald-200 to-amber-200 bg-clip-text text-transparent">
          思路清晰就不慌 · 后端从「能跑」变成「能用」
        </p>
      </motion.div>
    </div>
  );
};
