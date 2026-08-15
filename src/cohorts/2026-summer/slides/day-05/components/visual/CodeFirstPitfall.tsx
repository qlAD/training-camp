'use client';

import React from 'react';
import { motion } from 'motion/react';
import { useDesignCanvas } from '../scene/useDesignCanvas';
import { EASE } from '../scene/theme';
import { AlertTriangle, Lightbulb, XCircle, CheckCircle2 } from 'lucide-react';

export const CodeFirstPitfall: React.FC = () => {
  const { active } = useDesignCanvas();

  const pitfalls = [
    { icon: XCircle, text: '写到一半发现布局别扭' },
    { icon: XCircle, text: '交互拧巴、跳来跳去没逻辑' },
    { icon: XCircle, text: '推倒重来，三天白写' },
  ];

  const rightWay = [
    { icon: CheckCircle2, text: '先画出来，几小时见分晓' },
    { icon: CheckCircle2, text: '流程对齐，再动手不慌' },
    { icon: CheckCircle2, text: '一次到位，少走弯路' },
  ];

  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col items-center gap-6">
      <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
        {/* 先写后想 */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: active >= 1 ? 1 : 0, x: active >= 1 ? 0 : -30 }}
          transition={{ duration: 0.5, ease: EASE }}
          className="rounded-2xl border border-rose-400/30 bg-rose-950/20 p-5"
        >
          <div className="mb-3 flex items-center gap-2">
            <span className="rounded-md bg-rose-500/20 px-2 py-0.5 font-mono text-[10px] font-bold text-rose-300">
              先写后想
            </span>
            <AlertTriangle className="h-4 w-4 text-rose-400" />
          </div>
          <svg viewBox="0 0 200 90" className="mx-auto h-24 w-full">
            {/* 乱糟糟的草图 */}
            <rect x="20" y="15" width="60" height="30" fill="none" stroke="#F43F5E" strokeWidth="2" strokeDasharray="4 3" />
            <rect x="90" y="10" width="40" height="50" fill="none" stroke="#F43F5E" strokeWidth="2" strokeDasharray="4 3" />
            <rect x="140" y="25" width="40" height="35" fill="none" stroke="#F43F5E" strokeWidth="2" strokeDasharray="4 3" />
            <line x1="20" y1="60" x2="180" y2="55" stroke="#F43F5E" strokeWidth="1.5" strokeDasharray="3 4" />
            <line x1="50" y1="70" x2="150" y2="75" stroke="#F43F5E" strokeWidth="1.5" strokeDasharray="3 4" />
            <text x="100" y="86" textAnchor="middle" fontSize="7" fill="#F43F5E">布局别扭 · 交互拧巴</text>
          </svg>
          <div className="mt-3 space-y-1">
            {pitfalls.map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.text} className="flex items-center gap-2">
                  <Icon className="h-3.5 w-3.5 shrink-0 text-rose-400" />
                  <p className="text-xs text-rose-200">{p.text}</p>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* 先想后写 */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: active >= 2 ? 1 : 0, x: active >= 2 ? 0 : 30 }}
          transition={{ duration: 0.5, ease: EASE }}
          className="rounded-2xl border border-violet-400/30 bg-violet-950/20 p-5"
        >
          <div className="mb-3 flex items-center gap-2">
            <span className="rounded-md bg-violet-500/20 px-2 py-0.5 font-mono text-[10px] font-bold text-violet-300">
              先想后写
            </span>
            <Lightbulb className="h-4 w-4 text-violet-300" />
          </div>
          <svg viewBox="0 0 200 90" className="mx-auto h-24 w-full">
            {/* 整齐的线框 */}
            <rect x="20" y="15" width="50" height="30" fill="none" stroke="#A78BFA" strokeWidth="2" />
            <line x1="25" y1="24" x2="55" y2="24" stroke="#A78BFA" strokeWidth="1.5" />
            <line x1="25" y1="30" x2="50" y2="30" stroke="#A78BFA" strokeWidth="1" />
            <rect x="80" y="15" width="50" height="30" fill="none" stroke="#A78BFA" strokeWidth="2" />
            <line x1="85" y1="24" x2="115" y2="24" stroke="#A78BFA" strokeWidth="1.5" />
            <line x1="85" y1="30" x2="110" y2="30" stroke="#A78BFA" strokeWidth="1" />
            <rect x="140" y="15" width="40" height="30" fill="none" stroke="#A78BFA" strokeWidth="2" />
            <rect x="20" y="55" width="160" height="22" fill="none" stroke="#34D399" strokeWidth="2" />
            <text x="100" y="86" textAnchor="middle" fontSize="7" fill="#34D399">流程清晰 · 一次到位</text>
          </svg>
          <div className="mt-3 space-y-1">
            {rightWay.map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.text} className="flex items-center gap-2">
                  <Icon className="h-3.5 w-3.5 shrink-0 text-emerald-400" />
                  <p className="text-xs text-violet-200">{p.text}</p>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* 底部过渡 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: active >= 4 ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-2 text-sm font-medium text-slate-300"
      >
        <span className="rounded bg-violet-500/20 px-2 py-0.5 font-mono text-xs text-violet-300">今天</span>
        <span>动手之前先想清楚 —— 从「会敲代码」到「能做产品」的第一道分水岭</span>
      </motion.div>
    </div>
  );
};
