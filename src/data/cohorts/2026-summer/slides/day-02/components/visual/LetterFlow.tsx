'use client';

import React from 'react';
import { Mail, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { useTimeline } from '../scene/TimelineScene';
import { EASE } from '../scene/theme';

interface LetterFlowProps {
  /** 时间轴位置 */
  at: number;
  method?: string;
  path?: string;
  headers?: string[];
  statusLine?: string;
  className?: string;
}

/** HTTP 请求/响应信封：请求行 → 请求头 → 寄出 → 响应回信（0-4 五段） */
export const LetterFlow: React.FC<LetterFlowProps> = ({
  at,
  method = 'GET',
  path = '/index.html',
  headers = ['Host: example.com', 'User-Agent: Chrome'],
  statusLine = 'HTTP/1.1 200 OK',
  className = '',
}) => {
  const { active } = useTimeline();
  const s = (i: number) => active >= at + i;

  return (
    <div className={`w-full ${className}`}>
      {/* 请求信封 */}
      <motion.div
        initial={{ opacity: 0, x: -18 }}
        animate={s(0) ? { opacity: 1, x: 0 } : { opacity: 0, x: -18 }}
        transition={{ duration: 0.5, ease: EASE }}
        className="mx-auto flex w-full max-w-md items-center gap-3 rounded-2xl border border-sky-400/30 bg-sky-400/5 px-4 py-3"
      >
        <Mail className="h-5 w-5 shrink-0 text-sky-300" />
        <div className="min-w-0 font-mono text-left text-xs leading-relaxed">
          <p className="font-bold text-sky-100">
            {method} {path}
          </p>
          {headers.map((h) => (
            <p key={h} className="text-slate-400">
              {h}
            </p>
          ))}
        </div>
        <span className="ml-auto shrink-0 rounded-md bg-sky-400/15 px-2 py-1 text-[10px] font-bold text-sky-200">
          请求 · 你写给服务器
        </span>
      </motion.div>

      {/* 寄出 */}
      <div className="mt-2 flex items-center justify-center gap-2">
        <motion.span
          initial={{ opacity: 0 }}
          animate={s(1) ? { opacity: 1 } : { opacity: 0 }}
          className="font-mono text-xs text-sky-400"
        >
          浏览器
        </motion.span>
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={s(1) ? { x: 20, opacity: 1 } : { x: -20, opacity: 0 }}
          transition={{ duration: 1, repeat: s(1) ? Infinity : 0, repeatDelay: 1.2, ease: 'linear' }}
        >
          <ArrowRight className="h-4 w-4 text-sky-300" />
        </motion.div>
        <motion.span
          initial={{ opacity: 0 }}
          animate={s(1) ? { opacity: 1 } : { opacity: 0 }}
          className="font-mono text-xs text-sky-400"
        >
          服务器
        </motion.span>
      </div>

      {/* 响应回信 */}
      <motion.div
        initial={{ opacity: 0, x: 18 }}
        animate={s(2) ? { opacity: 1, x: 0 } : { opacity: 0, x: 18 }}
        transition={{ duration: 0.5, ease: EASE }}
        className="mx-auto mt-2 flex w-full max-w-md items-center gap-3 rounded-2xl border border-teal-400/30 bg-teal-400/5 px-4 py-3"
      >
        <Mail className="h-5 w-5 shrink-0 text-teal-300" />
        <div className="min-w-0 font-mono text-left text-xs leading-relaxed">
          <p className="font-bold text-teal-100">{statusLine}</p>
          <p className="text-slate-400">Content-Type: text/html</p>
          <p className="text-slate-400">&lt;html&gt;…你的网页内容…&lt;/html&gt;</p>
        </div>
        <span className="ml-auto shrink-0 rounded-md bg-teal-400/15 px-2 py-1 text-[10px] font-bold text-teal-200">
          响应 · 服务器回给你
        </span>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={s(3) ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, ease: EASE }}
        className="mt-3 text-center text-sm text-slate-300"
      >
        HTTP = 浏览器和服务器之间「写信、回信」的规则
      </motion.p>
    </div>
  );
};
