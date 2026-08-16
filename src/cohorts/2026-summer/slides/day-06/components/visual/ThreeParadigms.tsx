'use client';

import React from 'react';
import { motion } from 'motion/react';
import { useServerRoom } from '../scene/useServerRoom';
import { EASE } from '../scene/theme';
import { Layers, Link2Off, X, Check } from 'lucide-react';

interface Paradigm {
  num: string;
  title: string;
  core: string;
  color: string;
  badge: string;
  good: string[];
  bad: string[];
}

const PARADIGMS: Paradigm[] = [
  {
    num: '1NF',
    title: '第一范式',
    core: '字段不可再分，一兜子不能塞',
    color: 'from-amber-950/40 to-slate-900/40 border-amber-400/30',
    badge: 'border-amber-400/40 text-amber-200 bg-amber-500/10',
    good: ['地址拆成：省 / 市 / 区 / 详细'],
    bad: ['把省市区详细揉进一个「地址」格子'],
  },
  {
    num: '2NF',
    title: '第二范式',
    core: '非主键字段要完全依赖主键',
    color: 'from-cyan-950/40 to-slate-900/40 border-cyan-400/30',
    badge: 'border-cyan-400/40 text-cyan-200 bg-cyan-500/10',
    good: ['商品信息单独建表，订单表只存商品编号'],
    bad: ['订单表里塞商品名 + 商品价格'],
  },
  {
    num: '3NF',
    title: '第三范式',
    core: '非主键之间不能传话（无传递依赖）',
    color: 'from-emerald-950/40 to-slate-900/40 border-emerald-400/30',
    badge: 'border-emerald-400/40 text-emerald-200 bg-emerald-500/10',
    good: ['用户表存部门编号，部门名称放部门表'],
    bad: ['用户表同时存「部门编号」+「部门名称」'],
  },
];

export const ThreeParadigms: React.FC = () => {
  const { active } = useServerRoom();

  return (
    <div className="mx-auto w-full max-w-5xl">
      {/* 顶部说明 */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: active >= 1 ? 1 : 0, y: active >= 1 ? 0 : 12 }}
        transition={{ duration: 0.4, ease: EASE }}
        className="mb-4 flex items-center justify-center gap-2 rounded-xl border border-amber-400/25 bg-amber-500/8 px-4 py-2.5"
      >
        <Layers className="h-4 w-4 text-amber-300" />
        <p className="text-xs font-medium text-amber-100">
          三大设计范式 = 三条仓库整理规矩；朴素原则：<span className="font-bold">能拆就拆，能引用就引用，别在多处存同一份信息</span>
        </p>
      </motion.div>

      {/* 三条阶梯 */}
      <div className="space-y-3">
        {PARADIGMS.map((p, i) => {
          const baseIdx = 2 + i * 4;
          return (
            <motion.div
              key={p.num}
              initial={{ opacity: 0, x: -20 }}
              animate={{
                opacity: active >= baseIdx ? 1 : 0,
                x: active >= baseIdx ? 0 : -20,
              }}
              transition={{ duration: 0.45, ease: EASE }}
              className={`relative rounded-2xl border bg-gradient-to-r p-4 ${p.color}`}
            >
              <div className="flex flex-col gap-3 md:flex-row md:items-start">
                {/* 左：范式标识 */}
                <div className="flex shrink-0 items-center gap-3 md:w-40">
                  <span
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl font-black border ${p.badge}`}
                  >
                    {p.num}
                  </span>
                  <div>
                    <p className="text-sm font-black text-white">{p.title}</p>
                    <p className="text-[10px] text-slate-300">{p.core}</p>
                  </div>
                </div>

                {/* 中：错误 */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: active >= baseIdx + 1 ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-1 rounded-xl border border-rose-400/20 bg-rose-500/6 p-3"
                >
                  <div className="mb-2 flex items-center gap-1.5">
                    <X className="h-3 w-3 text-rose-400" />
                    <span className="text-[10px] font-bold text-rose-200">❌ 反例</span>
                  </div>
                  <ul className="space-y-1">
                    {p.bad.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-1.5 text-[10.5px] text-rose-100"
                      >
                        <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-rose-400" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* 右：正确 */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: active >= baseIdx + 2 ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-1 rounded-xl border border-emerald-400/20 bg-emerald-500/6 p-3"
                >
                  <div className="mb-2 flex items-center gap-1.5">
                    <Check className="h-3 w-3 text-emerald-400" />
                    <span className="text-[10px] font-bold text-emerald-200">✅ 正例</span>
                  </div>
                  <ul className="space-y-1">
                    {p.good.map((g) => (
                      <li
                        key={g}
                        className="flex items-start gap-1.5 text-[10.5px] text-emerald-100"
                      >
                        <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-emerald-400" />
                        {g}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>

              {/* 1→2→3 链接标识 */}
              {i < PARADIGMS.length - 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: active >= baseIdx + 3 ? 1 : 0 }}
                  transition={{ duration: 0.35 }}
                  className="absolute -bottom-3 left-10 flex items-center gap-1 text-slate-500"
                >
                  <Link2Off className="h-3 w-3" />
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* 底部说明 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: active >= 14 ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        className="mt-4 text-center text-[10.5px] text-slate-400"
      >
        范式不是铁律，有时为了查询性能会刻意做冗余 —— 但零基础阶段，先把「规整」二字刻进脑子里
      </motion.div>
    </div>
  );
};
