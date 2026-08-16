'use client';

import React from 'react';
import { motion } from 'motion/react';
import { useServerRoom } from '../scene/useServerRoom';
import { EASE } from '../scene/theme';
import { Monitor, Server, Database, ArrowRight, Handshake } from 'lucide-react';

export const FrontendBackendSplit: React.FC = () => {
  const { active } = useServerRoom();

  const steps = [
    { idx: 1, label: '前端发请求', sub: '点「发布」→ 调接口', color: 'cyan', icon: Monitor },
    { idx: 2, label: '后端处理', sub: '业务逻辑：参数校验', color: 'emerald', icon: Server },
    { idx: 3, label: '数据库读写', sub: 'INSERT / SELECT', color: 'blue', icon: Database },
    { idx: 4, label: '后端返回结果', sub: 'JSON：「存好了」', color: 'emerald', icon: Server },
    { idx: 5, label: '前端渲染', sub: '列表里出现新内容', color: 'cyan', icon: Monitor },
  ];

  const colorMap: Record<string, string> = {
    cyan: 'border-cyan-400/30 bg-cyan-950/15',
    emerald: 'border-emerald-400/30 bg-emerald-950/15',
    blue: 'border-blue-400/30 bg-blue-950/15',
  };
  const textColorMap: Record<string, string> = {
    cyan: 'text-cyan',
    emerald: 'text-emerald',
    blue: 'text-blue',
  };

  return (
    <div className="mx-auto w-full max-w-5xl">
      {/* 上：前端 vs 后端职责双栏 */}
      <div className="mb-5 grid grid-cols-1 gap-4 md:grid-cols-3">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: active >= 1 ? 1 : 0, y: active >= 1 ? 0 : 16 }}
          transition={{ duration: 0.4, ease: EASE }}
          className="rounded-2xl border border-cyan-400/25 bg-cyan-950/10 p-4"
        >
          <div className="mb-3 flex items-center gap-2">
            <Monitor className="h-4 w-4 text-cyan-300" />
            <span className="text-sm font-bold text-cyan-100">前端负责</span>
          </div>
          <ul className="space-y-1.5">
            {['页面长什么样（样式）', '点了按钮怎么办（交互）', '数据怎么展示才好看'].map(
              (t, i) => (
                <motion.li
                  key={t}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{
                    opacity: active >= 2 + i ? 1 : 0,
                    x: active >= 2 + i ? 0 : -8,
                  }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center gap-2 rounded-lg bg-slate-900/40 px-2.5 py-1.5"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                  <span className="text-[11px] text-slate-200">{t}</span>
                </motion.li>
              ),
            )}
          </ul>
        </motion.div>

        {/* 中间：契约 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: active >= 5 ? 1 : 0, scale: active >= 5 ? 1 : 0.9 }}
          transition={{ duration: 0.4, ease: EASE }}
          className="flex flex-col items-center justify-center rounded-2xl border border-amber-400/30 bg-amber-950/10 p-4"
        >
          <Handshake className="mb-2 h-8 w-8 text-amber-300" />
          <span className="text-sm font-bold text-amber-100">中间的契约</span>
          <p className="mt-1 text-center text-[11px] text-amber-200/80">
            接口（API）<br />
            <span className="text-slate-400">请求格式 · 响应格式</span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: active >= 1 ? 1 : 0, y: active >= 1 ? 0 : 16 }}
          transition={{ duration: 0.4, ease: EASE }}
          className="rounded-2xl border border-emerald-400/25 bg-emerald-950/10 p-4"
        >
          <div className="mb-3 flex items-center gap-2">
            <Server className="h-4 w-4 text-emerald-300" />
            <span className="text-sm font-bold text-emerald-100">后端负责</span>
          </div>
          <ul className="space-y-1.5">
            {['数据怎么存才不会丢', '怎么查才够快', '复杂的业务规则（登录/点赞）'].map(
              (t, i) => (
                <motion.li
                  key={t}
                  initial={{ opacity: 0, x: 8 }}
                  animate={{
                    opacity: active >= 2 + i ? 1 : 0,
                    x: active >= 2 + i ? 0 : 8,
                  }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center gap-2 rounded-lg bg-slate-900/40 px-2.5 py-1.5"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span className="text-[11px] text-slate-200">{t}</span>
                </motion.li>
              ),
            )}
          </ul>
        </motion.div>
      </div>

      {/* 下：完整链路 5 步 */}
      <div className="flex flex-wrap items-stretch justify-center gap-2">
        {steps.map((step, i) => {
          const Icon = step.icon;
          const last = i === steps.length - 1;
          return (
            <React.Fragment key={step.idx}>
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{
                  opacity: active >= 6 + i ? 1 : 0,
                  y: active >= 6 + i ? 0 : 14,
                }}
                transition={{ duration: 0.35, ease: EASE }}
                className={`relative flex min-w-[120px] flex-1 flex-col items-center justify-center gap-1.5 rounded-xl border p-3 ${colorMap[step.color]}`}
              >
                <span className="absolute -top-2 left-2 rounded border border-white/10 bg-slate-950 px-1.5 py-0.5 font-mono text-[9px] font-bold text-slate-400">
                  STEP {step.idx}
                </span>
                <Icon className={`h-4 w-4 ${textColorMap[step.color]}-300`} />
                <p className={`text-[11px] font-bold ${textColorMap[step.color]}-100`}>
                  {step.label}
                </p>
                <p className="text-center text-[10px] text-slate-400">{step.sub}</p>
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
    </div>
  );
};
