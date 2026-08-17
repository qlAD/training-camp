'use client';

import React from 'react';
import { motion } from 'motion/react';
import { useApiContract } from '../scene/useApiContract';
import { EASE } from '../scene/theme';
import { Activity, FileJson, Hash } from 'lucide-react';

interface Piece {
  idx: number;
  title: string;
  sub: string;
  detail: string;
  icon: React.FC<{ className?: string }>;
  color: string;
  border: string;
  text: string;
}

const PIECES: Piece[] = [
  {
    idx: 1,
    title: 'HTTP 状态码',
    sub: '协议层「第一句话」',
    detail: '2xx 成功 · 4xx 前端错(404/400/401/403) · 5xx 后端炸(500)',
    icon: Activity,
    color: 'border-blue-400/30 bg-blue-950/15',
    border: 'border-blue-400/40',
    text: 'text-blue-200',
  },
  {
    idx: 2,
    title: '统一响应体',
    sub: '返回 JSON 都一个样',
    detail: 'code(业务码) · message(一句话) · data(真实数据)',
    icon: FileJson,
    color: 'border-emerald-400/30 bg-emerald-950/15',
    border: 'border-emerald-400/40',
    text: 'text-emerald-200',
  },
  {
    idx: 3,
    title: '业务错误码',
    sub: '通了的请求内部可能也失败',
    detail: '前缀分类：1xxxx 用户 · 2xxxx 内容 · 3xxxx 文件',
    icon: Hash,
    color: 'border-amber-400/30 bg-amber-950/15',
    border: 'border-amber-400/40',
    text: 'text-amber-200',
  },
];

export const ThreePiecesTrio: React.FC = () => {
  const { active } = useApiContract();

  return (
    <div className="mx-auto w-full max-w-5xl">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {PIECES.map((p, i) => {
          const Icon = p.icon;
          return (
            <motion.div
              key={p.idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: active >= 1 + i ? 1 : 0,
                y: active >= 1 + i ? 0 : 20,
              }}
              transition={{ duration: 0.45, ease: EASE, delay: i * 0.08 }}
              className={`relative rounded-2xl border p-4 ${p.color}`}
            >
              <div className="mb-3 flex items-center justify-between">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl border border-white/10 bg-slate-950/40 font-mono text-[11px] font-black text-white/80">
                  0{p.idx}
                </span>
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-slate-950/40">
                  <Icon className={`h-4 w-4 ${p.text}`} />
                </div>
              </div>
              <p className={`text-sm font-black ${p.text}`}>{p.title}</p>
              <p className="mt-0.5 text-[11px] text-slate-400">{p.sub}</p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: active >= 4 + i ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="mt-2 rounded-lg border border-white/5 bg-slate-950/40 px-2.5 py-1.5 text-[10.5px] leading-relaxed text-slate-200"
              >
                {p.detail}
              </motion.p>
            </motion.div>
          );
        })}
      </div>

      {/* 总结 */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: active >= 7 ? 1 : 0, y: active >= 7 ? 0 : 14 }}
        transition={{ duration: 0.45, ease: EASE }}
        className="mt-5 flex items-center justify-center gap-3 rounded-2xl border border-cyan-400/35 bg-gradient-to-r from-blue-950/25 via-slate-900/40 to-emerald-950/20 px-6 py-4 text-center"
      >
        <div>
          <p className="text-base font-black bg-gradient-to-r from-blue-200 via-emerald-200 to-amber-200 bg-clip-text text-transparent">
            三件套一立 · 联调要命的地方就兜住了
          </p>
          <p className="mt-1 text-[11px] text-slate-300">
            别图省事一律返回 200 然后在 body 里塞错误信息 —— 那是糊弄联调的人
          </p>
        </div>
      </motion.div>
    </div>
  );
};
