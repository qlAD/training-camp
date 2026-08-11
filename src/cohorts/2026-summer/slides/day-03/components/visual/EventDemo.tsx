'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useStage } from '../scene/StageClock';
import { EASE } from '../scene/theme';

interface EventDemoProps {
  /* 时间轴位置：active >= at+1 时展示"已点击"效果（自动连播也看得到） */
  at: number;
  className?: string;
}

/* JS 交互 demo：真实可点的按钮（点击换字换色）；setState 全在点击事件回调 */
export const EventDemo: React.FC<EventDemoProps> = ({ at, className = '' }) => {
  const { active } = useStage();
  const [clicked, setClicked] = useState(false);
  const demo = clicked || active >= at + 1;

  return (
    <div className={`w-full flex flex-col items-center ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={active >= at ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
        transition={{ duration: 0.5, ease: EASE }}
        className={`w-full max-w-md rounded-2xl border px-6 py-6 text-center transition-colors duration-500 ${
          demo
            ? 'border-amber-400/40 bg-gradient-to-br from-amber-400/15 via-sky-400/10 to-orange-400/15'
            : 'border-white/10 bg-slate-950/50'
        }`}
      >
        <h3
          className={`text-xl font-black transition-colors duration-500 ${
            demo ? 'text-amber-200' : 'text-slate-100'
          }`}
        >
          {demo ? '我学会了 JavaScript 🎉' : '我的第一个页面'}
        </h3>
        <p className="mt-1 text-xs text-slate-400">
          {demo ? '看！文字和背景都变了 —— 这就是 JS 的“行为”' : '点下面的按钮，让页面活过来'}
        </p>

        <button
          onClick={() => setClicked(true)}
          disabled={demo}
          className={`mt-4 rounded-xl px-6 py-2.5 text-sm font-bold transition-all ${
            demo
              ? 'cursor-default bg-amber-400/20 text-amber-200'
              : 'bg-sky-500/25 text-sky-100 hover:bg-sky-500/40 active:scale-95'
          }`}
        >
          {demo ? '已点亮 ✨' : '点我试试'}
        </button>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={active >= at + 2 ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, ease: EASE }}
        className="mt-3 text-sm text-slate-300"
      >
        一次点击，一次响应 —— 这就是 JS 的核心动作
      </motion.p>
    </div>
  );
};
