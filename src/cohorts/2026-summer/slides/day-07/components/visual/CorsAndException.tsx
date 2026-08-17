'use client';

import React from 'react';
import { motion } from 'motion/react';
import { useApiContract } from '../scene/useApiContract';
import { EASE } from '../scene/theme';
import { Globe, ShieldAlert, Filter, Database, ArrowRight, Code2 } from 'lucide-react';

export const CorsAndException: React.FC = () => {
  const { active } = useApiContract();

  return (
    <div className="mx-auto w-full max-w-5xl">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {/* 跨域配置 */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: active >= 1 ? 1 : 0, y: active >= 1 ? 0 : 18 }}
          transition={{ duration: 0.45, ease: EASE }}
          className="rounded-2xl border border-rose-400/30 bg-rose-950/10 p-4"
        >
          <div className="mb-3 flex items-center gap-2">
            <Globe className="h-4 w-4 text-rose-300" />
            <span className="text-sm font-bold text-rose-100">跨域拦路虎 · 全局 CORS</span>
          </div>

          {/* 跨域示意 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: active >= 2 ? 1 : 0 }}
            transition={{ duration: 0.4 }}
            className="mb-3 flex items-center justify-center gap-2 rounded-lg border border-white/10 bg-slate-950/40 px-3 py-2"
          >
            <span className="font-mono text-[10px] text-cyan-300">前端 5173</span>
            <ArrowRight className="h-3 w-3 text-slate-500" />
            <span className="font-mono text-[10px] text-emerald-300">后端 8080</span>
            <span className="ml-auto rounded border border-rose-400/40 bg-rose-950/40 px-1.5 py-0.5 font-mono text-[9px] font-bold text-rose-300">
              浏览器拦截
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: active >= 3 ? 1 : 0, x: active >= 3 ? 0 : -8 }}
            transition={{ duration: 0.35 }}
            className="rounded-lg border border-emerald-400/25 bg-emerald-950/15 px-3 py-2"
          >
            <p className="text-[11px] font-bold text-emerald-100">解决思路</p>
            <p className="mt-1 text-[10.5px] leading-relaxed text-slate-300">
              后端写一个配置类，放开跨域 —— 告诉浏览器「我这边 8080 愿意接待来自 5173 的请求」。
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: active >= 5 ? 1 : 0 }}
            transition={{ duration: 0.35 }}
            className="mt-2 flex items-center gap-1.5 rounded-lg border border-rose-400/25 bg-rose-500/8 px-3 py-1.5"
          >
            <ShieldAlert className="h-3 w-3 text-rose-300" />
            <span className="text-[10px] text-rose-200">不解决，Day8 联调第一秒就翻车</span>
          </motion.div>
        </motion.div>

        {/* 全局异常处理器 */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: active >= 1 ? 1 : 0, y: active >= 1 ? 0 : 18 }}
          transition={{ duration: 0.45, ease: EASE, delay: 0.1 }}
          className="rounded-2xl border border-emerald-400/30 bg-emerald-950/10 p-4"
        >
          <div className="mb-3 flex items-center gap-2">
            <Code2 className="h-4 w-4 text-emerald-300" />
            <span className="text-sm font-bold text-emerald-100">全局异常处理器</span>
          </div>

          <div className="space-y-2">
            <motion.div
              initial={{ opacity: 0, x: 8 }}
              animate={{ opacity: active >= 2 ? 1 : 0, x: active >= 2 ? 0 : 8 }}
              transition={{ duration: 0.3 }}
              className="flex items-center gap-2 rounded-lg border border-amber-400/20 bg-amber-950/15 px-3 py-2"
            >
              <Filter className="h-3.5 w-3.5 text-amber-300" />
              <span className="text-[11px] font-bold text-amber-100">参数校验异常</span>
              <span className="ml-auto text-[10px] text-slate-400">前端传错参</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 8 }}
              animate={{ opacity: active >= 3 ? 1 : 0, x: active >= 3 ? 0 : 8 }}
              transition={{ duration: 0.3 }}
              className="flex items-center gap-2 rounded-lg border border-blue-400/20 bg-blue-950/15 px-3 py-2"
            >
              <Database className="h-3.5 w-3.5 text-blue-300" />
              <span className="text-[11px] font-bold text-blue-100">数据库访问异常</span>
              <span className="ml-auto text-[10px] text-slate-400">SQL 错 / 连接断</span>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: active >= 4 ? 1 : 0, y: active >= 4 ? 0 : 8 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="mt-3 rounded-lg border border-emerald-400/25 bg-slate-950/50 px-3 py-2 text-center"
          >
            <p className="font-mono text-[10px] text-slate-400">
              <span className="text-rose-300">原始异常堆栈</span>{' '}
              <ArrowRight className="inline h-2.5 w-2.5" />{' '}
              <span className="text-emerald-300">统一 code-message 响应体</span>
            </p>
            <p className="mt-1 text-[10px] text-slate-300">
              前端拿到的永远是规整结果，既安全又友好
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* 底部总结 */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: active >= 6 ? 1 : 0, y: active >= 6 ? 0 : 12 }}
        transition={{ duration: 0.45, ease: EASE }}
        className="mt-4 flex items-center justify-center gap-3 rounded-2xl border border-cyan-400/35 bg-gradient-to-r from-rose-950/15 via-slate-900/40 to-emerald-950/15 px-6 py-3 text-center"
      >
        <p className="text-sm font-black bg-gradient-to-r from-blue-200 via-emerald-200 to-amber-200 bg-clip-text text-transparent">
          跨域放开 + 异常兜底 · 前端怎么调你都稳稳接住
        </p>
      </motion.div>
    </div>
  );
};
