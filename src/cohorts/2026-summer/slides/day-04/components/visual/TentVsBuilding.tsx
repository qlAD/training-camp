'use client';

import React from 'react';
import { motion } from 'motion/react';
import { useBlueprint } from '../scene/useBlueprint';
import { EASE } from '../scene/theme';

export const TentVsBuilding: React.FC = () => {
  const { active } = useBlueprint();

  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col items-center gap-6">
      {/* 上方对比 */}
      <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
        {/* 帐篷 */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: active >= 1 ? 1 : 0, x: active >= 1 ? 0 : -30 }}
          transition={{ duration: 0.5, ease: EASE }}
          className="rounded-2xl border border-rose-400/30 bg-rose-950/20 p-5"
        >
          <div className="mb-3 flex items-center gap-2">
            <span className="rounded-md bg-rose-500/20 px-2 py-0.5 font-mono text-[10px] font-bold text-rose-300">
              静态页面
            </span>
            <span className="text-xs text-slate-400">手工作坊</span>
          </div>
          {/* 帐篷 SVG */}
          <svg viewBox="0 0 200 120" className="mx-auto h-28 w-full">
            <polygon
              points="100,15 30,100 170,100"
              fill="none"
              stroke="#F43F5E"
              strokeWidth="2"
              strokeDasharray={active >= 1 ? '0' : '200'}
              style={{ transition: 'stroke-dasharray 1s ease' }}
            />
            <line
              x1="100"
              y1="15"
              x2="100"
              y2="100"
              stroke="#F43F5E"
              strokeWidth="1"
              strokeDasharray={active >= 1 ? '0' : '100'}
              style={{ transition: 'stroke-dasharray 1s ease 0.3s' }}
            />
            {/* 地面 */}
            <line x1="20" y1="100" x2="180" y2="100" stroke="#64748B" strokeWidth="1" />
          </svg>
          <div className="mt-3 space-y-1 text-center">
            <p className="text-xs text-rose-200">搭起来快，但经不起扩展</p>
            <p className="text-xs text-rose-200">改导航要逐个文件改</p>
            <p className="text-xs text-rose-200">刷新就回到起点</p>
          </div>
        </motion.div>

        {/* 小楼 */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: active >= 2 ? 1 : 0, x: active >= 2 ? 0 : 30 }}
          transition={{ duration: 0.5, ease: EASE }}
          className="rounded-2xl border border-cyan-400/30 bg-cyan-950/20 p-5"
        >
          <div className="mb-3 flex items-center gap-2">
            <span className="rounded-md bg-cyan-500/20 px-2 py-0.5 font-mono text-[10px] font-bold text-cyan-300">
              Vue3 工程
            </span>
            <span className="text-xs text-slate-400">现代工厂</span>
          </div>
          {/* 小楼 SVG */}
          <svg viewBox="0 0 200 120" className="mx-auto h-28 w-full">
            {/* 地基 */}
            <line
              x1="20"
              y1="100"
              x2="180"
              y2="100"
              stroke="#22D3EE"
              strokeWidth="2"
              strokeDasharray={active >= 2 ? '0' : '160'}
              style={{ transition: 'stroke-dasharray 1s ease' }}
            />
            {/* 墙体 */}
            <rect
              x="40"
              y="50"
              width="120"
              height="50"
              fill="none"
              stroke="#22D3EE"
              strokeWidth="2"
              strokeDasharray={active >= 3 ? '0' : '340'}
              style={{ transition: 'stroke-dasharray 1s ease 0.2s' }}
            />
            {/* 屋顶 */}
            <polygon
              points="40,50 100,20 160,50"
              fill="none"
              stroke="#22D3EE"
              strokeWidth="2"
              strokeDasharray={active >= 3 ? '0' : '180'}
              style={{ transition: 'stroke-dasharray 1s ease 0.4s' }}
            />
            {/* 窗户 */}
            <rect
              x="55"
              y="62"
              width="20"
              height="18"
              fill="none"
              stroke="#F59E0B"
              strokeWidth="1.5"
              strokeDasharray={active >= 4 ? '0' : '76'}
              style={{ transition: 'stroke-dasharray 1s ease' }}
            />
            <rect
              x="85"
              y="62"
              width="20"
              height="18"
              fill="none"
              stroke="#F59E0B"
              strokeWidth="1.5"
              strokeDasharray={active >= 4 ? '0' : '76'}
              style={{ transition: 'stroke-dasharray 1s ease 0.15s' }}
            />
            <rect
              x="115"
              y="62"
              width="20"
              height="18"
              fill="none"
              stroke="#F59E0B"
              strokeWidth="1.5"
              strokeDasharray={active >= 4 ? '0' : '76'}
              style={{ transition: 'stroke-dasharray 1s ease 0.3s' }}
            />
            {/* 门 */}
            <rect
              x="88"
              y="72"
              width="24"
              height="28"
              fill="none"
              stroke="#34D399"
              strokeWidth="1.5"
              strokeDasharray={active >= 5 ? '0' : '104'}
              style={{ transition: 'stroke-dasharray 1s ease' }}
            />
          </svg>
          <div className="mt-3 space-y-1 text-center">
            <p className="text-xs text-cyan-200">有地基、有水电、有房本</p>
            <p className="text-xs text-cyan-200">组件复用、路由切换</p>
            <p className="text-xs text-cyan-200">经得起扩展</p>
          </div>
        </motion.div>
      </div>

      {/* 底部过渡 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: active >= 5 ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-2 text-sm font-medium text-slate-300"
      >
        <span className="rounded bg-amber-500/20 px-2 py-0.5 font-mono text-xs text-amber-300">今天</span>
        <span>我们要把帐篷拆了，在原址上盖一栋小楼</span>
      </motion.div>
    </div>
  );
};