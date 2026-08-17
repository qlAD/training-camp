'use client';

import React from 'react';
import { motion } from 'motion/react';
import { useApiContract } from '../scene/useApiContract';
import { EASE } from '../scene/theme';
import { Check, X, Sparkles } from 'lucide-react';

export const RestVsOldStyle: React.FC = () => {
  const { active } = useApiContract();

  const oldExamples = [
    { url: '/deleteComment?id=1', method: 'POST', desc: '删评论' },
    { url: '/addLike?noteId=1', method: 'POST', desc: '点赞' },
    { url: '/listNotes?page=1', method: 'POST', desc: '查列表' },
  ];

  const restExamples = [
    { url: '/comments/1', method: 'DELETE', desc: '删评论', color: 'rose' },
    { url: '/notes/1/likes', method: 'POST', desc: '点赞', color: 'emerald' },
    { url: '/notes?page=1', method: 'GET', desc: '查列表', color: 'blue' },
  ];

  const methodColor: Record<string, string> = {
    rose: 'border-rose-400/40 text-rose-200 bg-rose-950/40',
    emerald: 'border-emerald-400/40 text-emerald-200 bg-emerald-950/40',
    blue: 'border-blue-400/40 text-blue-200 bg-blue-950/40',
  };

  return (
    <div className="mx-auto w-full max-w-4xl">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {/* 老风格 */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: active >= 1 ? 1 : 0, y: active >= 1 ? 0 : 18 }}
          transition={{ duration: 0.45, ease: EASE }}
          className="rounded-2xl border border-slate-500/30 bg-slate-900/50 p-4"
        >
          <div className="mb-3 flex items-center gap-2">
            <X className="h-4 w-4 text-slate-400" />
            <span className="text-sm font-bold text-slate-200">老接口风格</span>
            <span className="ml-auto rounded border border-slate-600/40 bg-slate-800/40 px-1.5 py-0.5 font-mono text-[9px] text-slate-400">
              全用 POST + 动词
            </span>
          </div>
          <div className="space-y-2">
            {oldExamples.map((e, i) => (
              <motion.div
                key={e.url}
                initial={{ opacity: 0, x: -8 }}
                animate={{
                  opacity: active >= 2 + i ? 1 : 0,
                  x: active >= 2 + i ? 0 : -8,
                }}
                transition={{ duration: 0.3 }}
                className="flex items-center gap-2 rounded-lg border border-slate-700/50 bg-slate-950/50 px-3 py-2"
              >
                <span className="rounded border border-slate-600/50 bg-slate-800/50 px-1.5 py-0.5 font-mono text-[9px] font-bold text-slate-400">
                  {e.method}
                </span>
                <span className="font-mono text-[11px] text-slate-300">{e.url}</span>
                <span className="ml-auto text-[10px] text-slate-500">{e.desc}</span>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: active >= 5 ? 1 : 0 }}
            transition={{ duration: 0.35 }}
            className="mt-3 rounded-lg border border-rose-400/20 bg-rose-500/8 px-3 py-1.5"
          >
            <p className="text-[10px] text-rose-200">能用，但不优雅 · URL 里塞动词，动作全靠猜</p>
          </motion.div>
        </motion.div>

        {/* REST 风格 */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: active >= 1 ? 1 : 0, y: active >= 1 ? 0 : 18 }}
          transition={{ duration: 0.45, ease: EASE, delay: 0.1 }}
          className="rounded-2xl border border-cyan-400/30 bg-gradient-to-br from-cyan-950/25 via-slate-900/40 to-slate-900/40 p-4"
        >
          <div className="mb-3 flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-cyan-300" />
            <span className="text-sm font-bold text-cyan-100">RESTful 风格</span>
            <span className="ml-auto rounded border border-cyan-400/30 bg-cyan-500/10 px-1.5 py-0.5 font-mono text-[9px] text-cyan-300">
              动作 + 资源分离
            </span>
          </div>
          <div className="space-y-2">
            {restExamples.map((e, i) => (
              <motion.div
                key={e.url}
                initial={{ opacity: 0, x: 8 }}
                animate={{
                  opacity: active >= 2 + i ? 1 : 0,
                  x: active >= 2 + i ? 0 : 8,
                }}
                transition={{ duration: 0.3 }}
                className="flex items-center gap-2 rounded-lg border border-white/10 bg-slate-950/40 px-3 py-2"
              >
                <span
                  className={`rounded border px-1.5 py-0.5 font-mono text-[9px] font-bold ${methodColor[e.color]}`}
                >
                  {e.method}
                </span>
                <span className="font-mono text-[11px] text-slate-200">{e.url}</span>
                <span className="ml-auto text-[10px] text-slate-400">{e.desc}</span>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: active >= 5 ? 1 : 0 }}
            transition={{ duration: 0.35 }}
            className="mt-3 rounded-lg border border-emerald-400/25 bg-emerald-500/8 px-3 py-1.5"
          >
            <p className="text-[10px] text-emerald-200">
              接口干净一致 · 两者分离，沟通成本低
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* 小贴士 */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: active >= 6 ? 1 : 0, y: active >= 6 ? 0 : 12 }}
        transition={{ duration: 0.45, ease: EASE }}
        className="mt-4 flex items-center gap-2 rounded-2xl border border-amber-400/30 bg-amber-950/10 px-4 py-2.5"
      >
        <Check className="h-4 w-4 shrink-0 text-amber-300" />
        <p className="text-[11px] text-amber-100">
          <span className="font-bold">小贴士：</span>
          REST 的好处是 URL 只描述「资源是什么」，HTTP 方法描述「对资源做什么」，接口看起来干净一致。
        </p>
      </motion.div>
    </div>
  );
};
