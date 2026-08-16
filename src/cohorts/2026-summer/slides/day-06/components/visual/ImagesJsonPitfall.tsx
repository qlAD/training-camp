'use client';

import React from 'react';
import { motion } from 'motion/react';
import { useServerRoom } from '../scene/useServerRoom';
import { EASE } from '../scene/theme';
import { Check, X, AlertTriangle, FileJson, Database as DBIcon, Link2 } from 'lucide-react';

export const ImagesJsonPitfall: React.FC = () => {
  const { active } = useServerRoom();

  return (
    <div className="mx-auto w-full max-w-4xl">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {/* ✅ 方案 A：JSON 数组 */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: active >= 1 ? 1 : 0, y: active >= 1 ? 0 : 16 }}
          transition={{ duration: 0.45, ease: EASE }}
          className="relative rounded-2xl border border-emerald-400/30 bg-gradient-to-br from-emerald-950/25 via-slate-900/40 to-slate-900/40 p-5"
        >
          <span className="absolute right-3 top-3 flex items-center gap-1 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-2 py-0.5 font-mono text-[9px] font-bold text-emerald-300">
            <Check className="h-2.5 w-2.5" /> 推荐方案
          </span>

          <div className="mb-4 flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/20">
              <FileJson className="h-5 w-5 text-emerald-300" />
            </div>
            <div>
              <p className="text-sm font-black text-emerald-100">images 字段用 JSON 数组</p>
              <p className="text-[11px] text-slate-400">直接塞笔记表里，不用多建图片表</p>
            </div>
          </div>

          {/* JSON 示例 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: active >= 2 ? 1 : 0 }}
            transition={{ duration: 0.4 }}
            className="rounded-lg border border-white/10 bg-slate-950/60 p-3 font-mono text-[10.5px]"
          >
            <div className="mb-1 text-[9px] text-slate-500">-- 笔记表 post</div>
            <div>
              <span className="text-blue-300">CREATE TABLE</span> post (
            </div>
            <div className="pl-3">
              id <span className="text-amber-300">BIGINT</span> PRIMARY KEY,
            </div>
            <div className="pl-3">
              author_id <span className="text-amber-300">BIGINT</span>,
            </div>
            <div className="pl-3">
              content <span className="text-amber-300">TEXT</span>,
            </div>
            <div className="pl-3">
              <span className="text-emerald-300">images</span>{' '}
              <span className="text-amber-300">JSON</span>
              <span className="text-slate-500"> -- 存 URL 数组</span>
            </div>
            <div>);</div>
            <div className="mt-2 text-[9px] text-slate-500">-- images 字段内容</div>
            <div className="text-emerald-200">
              ["https://...a.jpg","https://...b.jpg","https://...c.jpg"]
            </div>
          </motion.div>

          {/* 好处 */}
          <div className="mt-3 space-y-1.5">
            {[
              '一条笔记几张图都灵活，数量无上限',
              '不用 JOIN，查一次笔记直接拿完图片',
              '写入简单，插入一行搞定',
              '社区这个量级完全够用',
            ].map((t, i) => (
              <motion.div
                key={t}
                initial={{ opacity: 0, x: -8 }}
                animate={{
                  opacity: active >= 3 + i ? 1 : 0,
                  x: active >= 3 + i ? 0 : -8,
                }}
                transition={{ duration: 0.28 }}
                className="flex items-start gap-2 rounded-lg border border-emerald-400/15 bg-emerald-500/5 px-2.5 py-1.5"
              >
                <Check className="mt-0.5 h-3 w-3 shrink-0 text-emerald-400" />
                <span className="text-[10.5px] text-slate-200">{t}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ❌ 方案 B：独立图片表 */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: active >= 1 ? 1 : 0, y: active >= 1 ? 0 : 16 }}
          transition={{ duration: 0.45, ease: EASE, delay: 0.08 }}
          className="relative rounded-2xl border border-rose-400/25 bg-slate-900/50 p-5"
        >
          <span className="absolute right-3 top-3 flex items-center gap-1 rounded-full border border-rose-400/30 bg-rose-500/10 px-2 py-0.5 font-mono text-[9px] font-bold text-rose-300">
            <X className="h-2.5 w-2.5" /> 不推荐 · 过度设计
          </span>

          <div className="mb-4 flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-500/15">
              <DBIcon className="h-5 w-5 text-rose-300" />
            </div>
            <div>
              <p className="text-sm font-black text-rose-100">新建一张 post_image 表</p>
              <p className="text-[11px] text-slate-400">一对一关联笔记表</p>
            </div>
          </div>

          {/* JOIN 示意 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: active >= 2 ? 1 : 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-1.5 rounded-lg border border-white/10 bg-slate-950/60 p-3"
          >
            <div className="flex items-center justify-between rounded border border-slate-700/60 bg-slate-900/60 px-2 py-1.5">
              <div>
                <span className="font-mono text-[10px] font-bold text-slate-300">post</span>
                <span className="ml-1 text-[9px] text-slate-500">笔记表</span>
              </div>
              <span className="text-[9px] text-slate-500">id · author_id · content</span>
            </div>
            <div className="flex justify-center">
              <Link2 className="h-3 w-3 rotate-90 text-slate-600" />
            </div>
            <div className="flex items-center justify-between rounded border border-slate-700/60 bg-slate-900/60 px-2 py-1.5">
              <div>
                <span className="font-mono text-[10px] font-bold text-slate-300">post_image</span>
                <span className="ml-1 text-[9px] text-slate-500">图片表</span>
              </div>
              <span className="text-[9px] text-slate-500">id · post_id · url · order</span>
            </div>
            <div className="mt-1 text-center font-mono text-[9px] text-rose-300">
              查笔记 → post LEFT JOIN post_image
            </div>
          </motion.div>

          {/* 坏处 */}
          <div className="mt-3 space-y-1.5">
            {[
              '多一张表 = 多一份 JOIN 查询开销',
              '写入要开事务同时插两张表',
              '维护成本上去（同步删/改）',
              '社区不是电商 SKU，图片只是附属',
            ].map((t, i) => (
              <motion.div
                key={t}
                initial={{ opacity: 0, x: 8 }}
                animate={{
                  opacity: active >= 3 + i ? 1 : 0,
                  x: active >= 3 + i ? 0 : 8,
                }}
                transition={{ duration: 0.28 }}
                className="flex items-start gap-2 rounded-lg border border-rose-400/15 bg-rose-500/5 px-2.5 py-1.5"
              >
                <X className="mt-0.5 h-3 w-3 shrink-0 text-rose-400" />
                <span className="text-[10.5px] text-slate-200">{t}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* 底部避坑 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: active >= 7 ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        className="mt-4 flex items-start gap-2 rounded-xl border border-amber-400/30 bg-amber-500/8 px-4 py-3"
      >
        <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-amber-300" />
        <div className="text-[11px] text-amber-100">
          <p className="font-bold">避坑笔记</p>
          <p>
            多图 URL 直接存笔记表的 images 字段（JSON 数组），别新建图片表去搞一对一关联 ——
            社区不是电商 SKU，多图只是笔记的附属信息，加表只会增加 join 复杂度和写入开销，得不偿失。
          </p>
        </div>
      </motion.div>
    </div>
  );
};
