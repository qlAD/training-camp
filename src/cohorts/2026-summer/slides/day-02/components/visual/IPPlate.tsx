'use client';

import React from 'react';
import { motion } from 'motion/react';
import { useTimeline } from '../scene/TimelineScene';
import { EASE } from '../scene/theme';

interface IPPlateProps {
  /* 时间轴位置 */
  at: number;
  segments?: string[];
  className?: string;
}

/* IP 地址牌：点分十进制四段逐段点亮（0 标题 1-4 四段 5 总结） */
export const IPPlate: React.FC<IPPlateProps> = ({
  at,
  segments = ['172', '16', '0', '1'],
  className = '',
}) => {
  const { active } = useTimeline();
  const s = (i: number) => active >= at + i;

  return (
    <div className={`w-full flex flex-col items-center ${className}`}>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={s(0) ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.5, ease: EASE }}
        className="flex items-center rounded-2xl border border-sky-400/25 bg-slate-950/60 px-3 py-2"
      >
        {segments.map((seg, i) => (
          <React.Fragment key={i}>
            {i > 0 && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={s(i) ? { opacity: 1 } : { opacity: 0 }}
                className="mx-1.5 font-black text-slate-500"
              >
                .
              </motion.span>
            )}
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={s(i + 1) ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.4, ease: EASE }}
              className="rounded-lg border border-teal-400/30 bg-teal-400/10 px-3 py-1.5 font-mono text-xl font-bold text-teal-200"
            >
              {seg}
            </motion.span>
          </React.Fragment>
        ))}
      </motion.div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={s(5) ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, ease: EASE }}
        className="mt-4 text-sm text-slate-300"
      >
        四段数字，每段 0-255 —— 互联网上的每台设备，都有一个这样的「门牌号」
      </motion.p>
    </div>
  );
};
