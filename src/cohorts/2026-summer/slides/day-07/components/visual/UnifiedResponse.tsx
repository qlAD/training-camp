'use client';

import React from 'react';
import { motion } from 'motion/react';
import { useApiContract } from '../scene/useApiContract';
import { EASE } from '../scene/theme';
import { Braces, AlertTriangle } from 'lucide-react';

interface Field {
  name: string;
  type: string;
  desc: string;
  example: string;
  color: string;
  text: string;
}

const FIELDS: Field[] = [
  {
    name: 'code',
    type: 'number',
    desc: '业务状态码',
    example: '0 成功 · 10001 参数错误',
    color: 'border-blue-400/30 bg-blue-950/15',
    text: 'text-blue-200',
  },
  {
    name: 'message',
    type: 'string',
    desc: '一句话告诉前端发生了啥',
    example: '"用户名已存在"',
    color: 'border-emerald-400/30 bg-emerald-950/15',
    text: 'text-emerald-200',
  },
  {
    name: 'data',
    type: 'object | list | null',
    desc: '真正的数据',
    example: '{ id: 1, title: "..." }',
    color: 'border-amber-400/30 bg-amber-950/15',
    text: 'text-amber-200',
  },
];

export const UnifiedResponse: React.FC = () => {
  const { active } = useApiContract();

  return (
    <div className="mx-auto w-full max-w-4xl">
      {/* 统一壳子可视化 */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: active >= 1 ? 1 : 0, y: active >= 1 ? 0 : 16 }}
        transition={{ duration: 0.45, ease: EASE }}
        className="mb-4 rounded-2xl border border-cyan-400/30 bg-slate-950/50 p-4"
      >
        <div className="mb-3 flex items-center gap-2">
          <Braces className="h-4 w-4 text-cyan-300" />
          <span className="font-mono text-xs font-bold text-cyan-100">Response Body</span>
          <span className="ml-auto rounded border border-cyan-400/30 bg-cyan-500/10 px-1.5 py-0.5 font-mono text-[9px] text-cyan-300">
            每个接口都长这样
          </span>
        </div>
        <div className="space-y-2">
          {FIELDS.map((f, i) => (
            <motion.div
              key={f.name}
              initial={{ opacity: 0, x: -10 }}
              animate={{
                opacity: active >= 2 + i ? 1 : 0,
                x: active >= 2 + i ? 0 : -10,
              }}
              transition={{ duration: 0.3 }}
              className={`flex items-center gap-3 rounded-lg border px-3 py-2 ${f.color}`}
            >
              <span className={`font-mono text-sm font-black ${f.text}`}>{f.name}</span>
              <span className="font-mono text-[10px] text-slate-500">: {f.type}</span>
              <span className="ml-auto text-[11px] text-slate-300">{f.desc}</span>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: active >= 5 ? 1 : 0 }}
          transition={{ duration: 0.35 }}
          className="mt-3 rounded-lg border border-white/10 bg-slate-900/60 p-2.5"
        >
          <p className="font-mono text-[10px] text-slate-400">
            <span className="text-cyan-300">{'{'}</span>{' '}
            <span className="text-blue-300">{'"code"'}</span>: 0,{' '}
            <span className="text-emerald-300">{'"message"'}</span>: {'"ok"'},{' '}
            <span className="text-amber-300">{'"data"'}</span>: {'{'} ... {'}'}{' '}
            <span className="text-cyan-300">{'}'}</span>
          </p>
        </motion.div>
      </motion.div>

      {/* 前端收益 + 避坑 */}
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: active >= 6 ? 1 : 0, y: active >= 6 ? 0 : 12 }}
          transition={{ duration: 0.4, ease: EASE }}
          className="rounded-2xl border border-emerald-400/25 bg-emerald-950/10 px-4 py-3"
        >
          <p className="text-xs font-bold text-emerald-100">前端收益</p>
          <p className="mt-1 text-[11px] leading-relaxed text-slate-300">
            拿到的每一个响应都是这个壳子，解析逻辑写一遍就够。
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: active >= 7 ? 1 : 0, y: active >= 7 ? 0 : 12 }}
          transition={{ duration: 0.4, ease: EASE }}
          className="flex items-start gap-2 rounded-2xl border border-rose-400/30 bg-rose-950/15 px-4 py-3"
        >
          <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-rose-300" />
          <div>
            <p className="text-xs font-bold text-rose-100">避坑笔记</p>
            <p className="mt-1 text-[11px] leading-relaxed text-slate-300">
              统一响应体封装必须在项目最开始就定下来，用一个统一返回工具类包一层。写到一半再回头改，每个接口都得动一遍，痛苦加倍。
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
