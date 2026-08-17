'use client';

import React from 'react';
import { motion } from 'motion/react';
import { useApiContract } from '../scene/useApiContract';
import { EASE } from '../scene/theme';
import { Download, Plus, Pencil, Trash2, AlertTriangle } from 'lucide-react';

interface Verb {
  method: string;
  label: string;
  action: string;
  example: string;
  icon: React.FC<{ className?: string }>;
  color: string;
  border: string;
  text: string;
}

const VERBS: Verb[] = [
  {
    method: 'GET',
    label: '取东西',
    action: '看一眼 / 拉一份列表',
    example: 'GET /notes/1',
    icon: Download,
    color: 'border-blue-400/30 bg-blue-950/15',
    border: 'border-blue-400/40',
    text: 'text-blue-200',
  },
  {
    method: 'POST',
    label: '新增东西',
    action: '发一条笔记 / 注册用户',
    example: 'POST /notes',
    icon: Plus,
    color: 'border-emerald-400/30 bg-emerald-950/15',
    border: 'border-emerald-400/40',
    text: 'text-emerald-200',
  },
  {
    method: 'PUT',
    label: '整体更新',
    action: '标题正文配图全改一遍',
    example: 'PUT /notes/1',
    icon: Pencil,
    color: 'border-amber-400/30 bg-amber-950/15',
    border: 'border-amber-400/40',
    text: 'text-amber-200',
  },
  {
    method: 'DELETE',
    label: '删除',
    action: '删评论 / 取消收藏',
    example: 'DELETE /comments/1',
    icon: Trash2,
    color: 'border-rose-400/30 bg-rose-950/15',
    border: 'border-rose-400/40',
    text: 'text-rose-200',
  },
];

export const HttpVerbs: React.FC = () => {
  const { active } = useApiContract();

  return (
    <div className="mx-auto w-full max-w-5xl">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-4">
        {VERBS.map((v, i) => {
          const Icon = v.icon;
          return (
            <motion.div
              key={v.method}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: active >= 1 + i ? 1 : 0,
                y: active >= 1 + i ? 0 : 20,
              }}
              transition={{ duration: 0.4, ease: EASE, delay: i * 0.05 }}
              className={`rounded-2xl border p-4 ${v.color}`}
            >
              <div className="mb-2 flex items-center justify-between">
                <span
                  className={`rounded border px-2 py-0.5 font-mono text-[11px] font-black ${v.border} ${v.text}`}
                >
                  {v.method}
                </span>
                <Icon className={`h-4 w-4 ${v.text}`} />
              </div>
              <p className={`text-sm font-bold ${v.text}`}>{v.label}</p>
              <p className="mt-1 text-[10.5px] text-slate-400">{v.action}</p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: active >= 5 + i ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className={`mt-2 rounded bg-slate-950/50 px-2 py-1 font-mono text-[10px] ${v.text}`}
              >
                {v.example}
              </motion.p>
            </motion.div>
          );
        })}
      </div>

      {/* 避坑笔记 */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: active >= 9 ? 1 : 0, y: active >= 9 ? 0 : 14 }}
        transition={{ duration: 0.45, ease: EASE }}
        className="mt-4 flex items-start gap-2.5 rounded-2xl border border-rose-400/30 bg-rose-950/15 px-4 py-3"
      >
        <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-rose-300" />
        <div>
          <p className="text-xs font-bold text-rose-100">避坑笔记 · 动作和地址对不上号</p>
          <p className="mt-1 text-[11px] leading-relaxed text-slate-300">
            删评论写成 <span className="font-mono text-rose-300">POST /comment/delete?id=1</span>{' '}
            破坏了 REST 味道。规范写法是{' '}
            <span className="font-mono text-emerald-300">DELETE /comments/1</span>
            ——动作和资源各司其职，URL 只描述「资源是什么」，HTTP 方法描述「做什么」。
          </p>
        </div>
      </motion.div>
    </div>
  );
};
