'use client';

import React from 'react';
import { motion } from 'motion/react';
import { useDesignCanvas } from '../scene/useDesignCanvas';
import { EASE } from '../scene/theme';
import { Home, ImagePlus, FileText, User, LogIn } from 'lucide-react';

export const PageFlowMap: React.FC = () => {
  const { active } = useDesignCanvas();

  const nodes = [
    { id: 'home', icon: Home, name: '首页', x: 50, y: 40, color: 'violet' as const },
    { id: 'detail', icon: FileText, name: '详情页', x: 320, y: 40, color: 'cyan' as const },
    { id: 'publish', icon: ImagePlus, name: '发布页', x: 185, y: 160, color: 'pink' as const },
    { id: 'login', icon: LogIn, name: '登录页', x: 185, y: 290, color: 'emerald' as const },
  ];

  const colorMap = {
    violet: { fill: '#A78BFA', text: 'text-violet-300' },
    cyan: { fill: '#22D3EE', text: 'text-cyan-300' },
    pink: { fill: '#F472B6', text: 'text-pink-300' },
    emerald: { fill: '#34D399', text: 'text-emerald-300' },
  } as const;

  return (
    <div className="mx-auto w-full max-w-3xl">
      <div className="relative">
        <svg viewBox="0 0 400 360" className="h-full w-full">
          {/* 连线 */}
          <motion.path
            d="M 110 40 L 300 40"
            stroke="#475569"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: active >= 2 ? 1 : 0 }}
            transition={{ duration: 0.5 }}
            fill="none"
            markerEnd="url(#arrow)"
          />
          <motion.path
            d="M 220 80 Q 220 120 185 130"
            stroke="#F472B6"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: active >= 3 ? 1 : 0 }}
            transition={{ duration: 0.5 }}
            fill="none"
            markerEnd="url(#arrowPink)"
          />
          <text x="240" y="110" fontSize="8" fill="#F472B6">未登录</text>
          <motion.path
            d="M 185 210 L 185 250"
            stroke="#34D399"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: active >= 4 ? 1 : 0 }}
            transition={{ duration: 0.4 }}
            fill="none"
            markerEnd="url(#arrowEmerald)"
          />
          <text x="195" y="235" fontSize="8" fill="#34D399">登录后回原页</text>
          <motion.path
            d="M 150 160 Q 80 120 80 60"
            stroke="#A78BFA"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: active >= 5 ? 1 : 0 }}
            transition={{ duration: 0.5 }}
            fill="none"
            markerEnd="url(#arrowViolet)"
          />
          <text x="20" y="120" fontSize="8" fill="#A78BFA">发布成功</text>
          <text x="20" y="132" fontSize="8" fill="#A78BFA">回首页置顶</text>

          <defs>
            <marker id="arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
              <path d="M0,0 L6,3 L0,6" fill="#475569" />
            </marker>
            <marker id="arrowPink" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
              <path d="M0,0 L6,3 L0,6" fill="#F472B6" />
            </marker>
            <marker id="arrowEmerald" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
              <path d="M0,0 L6,3 L0,6" fill="#34D399" />
            </marker>
            <marker id="arrowViolet" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
              <path d="M0,0 L6,3 L0,6" fill="#A78BFA" />
            </marker>
          </defs>
        </svg>

        {/* 节点叠层 */}
        <div className="pointer-events-none absolute inset-0">
          {nodes.map((n, i) => {
            const Icon = n.icon;
            const c = colorMap[n.color];
            return (
              <motion.div
                key={n.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: active >= 1 + i ? 1 : 0, scale: active >= 1 + i ? 1 : 0.8 }}
                transition={{ duration: 0.4, ease: EASE }}
                className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center"
                style={{ left: `${(n.x / 400) * 100}%`, top: `${(n.y / 360) * 100}%` }}
              >
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-full border-2 bg-slate-950"
                  style={{ borderColor: c.fill }}
                >
                  <Icon className="h-5 w-5" style={{ color: c.fill }} />
                </div>
                <span className={`mt-1 text-[11px] font-bold ${c.text}`}>{n.name}</span>
              </motion.div>
            );
          })}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: active >= 6 ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className="mt-2 text-center"
      >
        <p className="text-xs italic text-slate-400">
          {'>'} 小贴士：用线把"从哪来、到哪去"连出来，比写文档清楚十倍
        </p>
      </motion.div>
    </div>
  );
};
