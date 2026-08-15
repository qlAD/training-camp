'use client';

import React from 'react';
import { motion } from 'motion/react';
import { useDesignCanvas } from '../scene/useDesignCanvas';
import { EASE } from '../scene/theme';
import { Database, ArrowRight, Server, FileJson } from 'lucide-react';

export const MockData: React.FC = () => {
  const { active } = useDesignCanvas();

  const mockFields = [
    { k: 'title', v: '"秋日骑行笔记"' },
    { k: 'content', v: '"今天沿着江边..."' },
    { k: 'images', v: '["url1","url2"]' },
    { k: 'author', v: '"小策"' },
    { k: 'likes', v: '128' },
  ];

  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col items-center gap-4">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: active >= 1 ? 1 : 0, y: active >= 1 ? 0 : -10 }}
        transition={{ duration: 0.5, ease: EASE }}
        className="rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-center"
      >
        <p className="text-sm font-bold text-slate-200">
          后端 Day6 才写、Day8 联调 —— 今天前端拿什么渲染？答案：Mock 假数据
        </p>
      </motion.div>

      <div className="grid w-full grid-cols-1 items-center gap-3 md:grid-cols-[1fr_auto_1fr]">
        {/* Mock 数据 */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: active >= 2 ? 1 : 0, x: active >= 2 ? 0 : -30 }}
          transition={{ duration: 0.5, ease: EASE }}
          className="overflow-hidden rounded-xl border border-violet-400/30 bg-slate-950/80"
        >
          <div className="flex items-center gap-2 border-b border-white/10 bg-slate-900/60 px-4 py-1.5">
            <FileJson className="h-3 w-3 text-violet-400" />
            <span className="font-mono text-[10px] text-slate-400">mock/posts.js</span>
          </div>
          <div className="p-3 font-mono text-[10px] leading-relaxed">
            <div className="text-violet-300">export const posts = [{'{'} ... {'}'}]</div>
            {mockFields.map((f) => (
              <motion.div
                key={f.k}
                initial={{ opacity: 0 }}
                animate={{ opacity: active >= 3 ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="pl-3"
              >
                <span className="text-pink-300">{f.k}</span>
                <span className="text-slate-500">: </span>
                <span className="text-emerald-300">{f.v}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 换接口箭头 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: active >= 4 ? 1 : 0, scale: active >= 4 ? 1 : 0.8 }}
          transition={{ duration: 0.4, ease: EASE }}
          className="flex flex-col items-center gap-1"
        >
          <ArrowRight className="h-6 w-6 text-amber-300" />
          <span className="font-mono text-[9px] text-amber-300">换接口</span>
        </motion.div>

        {/* 真实 API */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: active >= 5 ? 1 : 0, x: active >= 5 ? 0 : 30 }}
          transition={{ duration: 0.5, ease: EASE }}
          className="overflow-hidden rounded-xl border border-cyan-400/30 bg-slate-950/80"
        >
          <div className="flex items-center gap-2 border-b border-white/10 bg-slate-900/60 px-4 py-1.5">
            <Server className="h-3 w-3 text-cyan-400" />
            <span className="font-mono text-[10px] text-slate-400">api/posts (Day8)</span>
          </div>
          <div className="p-3 font-mono text-[10px] leading-relaxed text-slate-400">
            <div className="text-cyan-300">GET /api/posts</div>
            <div className="pl-3 text-slate-500">{'{'} 同样字段结构 {'}'}</div>
            <div className="pl-3 text-slate-600 mt-2">// 页面逻辑一行不用改</div>
          </div>
        </motion.div>
      </div>

      {/* 单一数据源 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: active >= 6 ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className="flex w-full max-w-lg items-center gap-2 rounded-xl border border-amber-400/30 bg-amber-500/10 px-4 py-2.5"
      >
        <Database className="h-4 w-4 shrink-0 text-amber-300" />
        <p className="text-xs font-medium text-amber-200">
          {'>'} 避坑：Mock 别写死在组件里。单独拎出来放一个文件 —— 这叫「单一数据源」，换接口时只动一个地方
        </p>
      </motion.div>
    </div>
  );
};
