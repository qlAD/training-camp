'use client';

import React from 'react';
import { Monitor, Server, ArrowRight, ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';
import { useTimeline } from '../scene/TimelineScene';
import { EASE } from '../scene/theme';

interface ClientServerProps {
  /* 时间轴位置 */
  at: number;
  request?: string;
  response?: string;
  className?: string;
}

/* 浏览器 ↔ 服务器：左浏览器右服务器，请求/响应双向流光（0 浏览器 1 请求 2 服务器 3 响应 4 总结） */
export const ClientServer: React.FC<ClientServerProps> = ({
  at,
  request = 'GET /index.html',
  response = '200 OK + HTML',
  className = '',
}) => {
  const { active } = useTimeline();
  const s = (i: number) => active >= at + i;

  return (
    <div className={`w-full ${className}`}>
      <div className="flex items-center justify-between gap-4">
        {/* 浏览器卡 */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={s(0) ? { opacity: 1, x: 0 } : { opacity: 0, x: -24 }}
          transition={{ duration: 0.5, ease: EASE }}
          className="flex flex-col items-center gap-2 rounded-2xl border border-sky-400/30 bg-sky-400/10 px-6 py-4 min-w-[150px]"
        >
          <Monitor className="h-8 w-8 text-sky-300" />
          <span className="font-bold text-sky-100">浏览器</span>
          <span className="text-[11px] text-slate-400">客户端 · 发起请求</span>
        </motion.div>

        {/* 中间双向流光 */}
        <div className="relative flex flex-1 flex-col items-center justify-center gap-3 min-w-[120px]">
          <div className="relative flex w-full items-center">
            <div className="h-px flex-1 bg-sky-400/30" />
            <motion.div
              initial={{ x: -28, opacity: 0 }}
              animate={s(1) ? { x: 28, opacity: 1 } : { x: -28, opacity: 0 }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
            >
              <ArrowRight className="h-4 w-4 text-sky-300" />
            </motion.div>
            <div className="h-px flex-1 bg-sky-400/30" />
          </div>
          <span
            className={`font-mono text-[11px] transition-opacity duration-500 ${s(1) ? 'opacity-100' : 'opacity-0'}`}
          >
            {request}
          </span>

          <div className="relative flex w-full items-center">
            <div className="h-px flex-1 bg-teal-400/30" />
            <motion.div
              initial={{ x: 28, opacity: 0 }}
              animate={s(3) ? { x: -28, opacity: 1 } : { x: 28, opacity: 0 }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
            >
              <ArrowLeft className="h-4 w-4 text-teal-300" />
            </motion.div>
            <div className="h-px flex-1 bg-teal-400/30" />
          </div>
          <span
            className={`font-mono text-[11px] text-teal-200 transition-opacity duration-500 ${s(3) ? 'opacity-100' : 'opacity-0'}`}
          >
            {response}
          </span>
        </div>

        {/* 服务器卡 */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={s(2) ? { opacity: 1, x: 0 } : { opacity: 0, x: 24 }}
          transition={{ duration: 0.5, ease: EASE }}
          className="flex flex-col items-center gap-2 rounded-2xl border border-teal-400/30 bg-teal-400/10 px-6 py-4 min-w-[150px]"
        >
          <Server className="h-8 w-8 text-teal-300" />
          <span className="font-bold text-teal-100">服务器</span>
          <span className="text-[11px] text-slate-400">服务端 · 返回内容</span>
        </motion.div>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={s(4) ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, ease: EASE }}
        className="mt-4 text-center text-sm font-semibold text-slate-200"
      >
        你在浏览器里看到的一切，都来自服务器的一次「回应」
      </motion.p>
    </div>
  );
};
