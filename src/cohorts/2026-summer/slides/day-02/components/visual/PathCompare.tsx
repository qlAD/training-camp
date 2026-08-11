'use client';

import React from 'react';
import { motion } from 'motion/react';
import { HardDrive, Globe, ArrowRight, Link2 } from 'lucide-react';
import { useTimeline } from '../scene/TimelineScene';
import { COLORS, EASE, SPRING } from '../scene/theme';

interface PathCompareProps {
  at?: number;
  className?: string;
}

export const PathCompare: React.FC<PathCompareProps> = ({ at = 0, className = '' }) => {
  const { active } = useTimeline();
  const s = (i: number) => active >= at + i;

  const leftPath = 'C:/Users/Alice/Documents/project/index.html';
  const rightPath = './css/style.css';

  return (
    <div className={`w-full ${className}`}>
      <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={s(0) ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 0.5, ease: EASE }}
          className="flex flex-col gap-2 rounded-2xl border border-sky-400/30 bg-sky-400/10 p-4"
        >
          <div className="flex items-center gap-2">
            <HardDrive className="h-5 w-5 text-sky-300" />
            <span className="text-sm font-black text-sky-200">绝对路径</span>
          </div>
          <p className="text-[11px] text-slate-400">从根目录开始，完整描述文件位置</p>
          <motion.code
            animate={{ color: s(3) ? COLORS.amber : '#7DD3FC' }}
            transition={{ duration: 0.3 }}
            className="block rounded-lg border border-sky-400/20 bg-slate-950/80 px-3 py-2 font-mono text-[11px] leading-relaxed break-all"
          >
            {leftPath.split('/').map((seg, i) => (
              <span key={i}>
                <span
                  style={{
                    color:
                      i === 0
                        ? '#FDE68A'
                        : i === leftPath.split('/').length - 1
                        ? COLORS.amber
                        : '#94A3B8',
                  }}
                >
                  {seg}
                </span>
                {i < leftPath.split('/').length - 1 && (
                  <span className="text-slate-600">/</span>
                )}
              </span>
            ))}
          </motion.code>
          <span className="text-[10px] text-slate-500">文件在硬盘上的真实坐标</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={s(2) ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
          transition={SPRING}
          className="flex flex-col items-center gap-1"
        >
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.3, ease: EASE }}
          >
            <ArrowRight className="h-5 w-5 text-teal-300" />
          </motion.div>
          <span className="text-[9px] font-bold text-teal-300">依赖上下文</span>
          <Link2 className="h-3 w-3 text-slate-500" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={s(1) ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
          transition={{ duration: 0.5, ease: EASE }}
          className="flex flex-col gap-2 rounded-2xl border border-teal-400/30 bg-teal-400/10 p-4"
        >
          <div className="flex items-center gap-2">
            <Globe className="h-5 w-5 text-teal-300" />
            <span className="text-sm font-black text-teal-200">相对路径</span>
          </div>
          <p className="text-[11px] text-slate-400">相对于当前文件的位置</p>
          <motion.code
            animate={{ color: s(3) ? COLORS.amber : '#5EEAD4' }}
            transition={{ duration: 0.3 }}
            className="block rounded-lg border border-teal-400/20 bg-slate-950/80 px-3 py-2 font-mono text-[11px] leading-relaxed break-all"
          >
            {rightPath.split('/').map((seg, i) => (
              <span key={i}>
                {i === 0 && <span className="text-slate-500">./</span>}
                {i > 0 && i < rightPath.split('/').length - 1 && (
                  <>
                    <span className="text-slate-400">{seg}</span>
                    <span className="text-slate-600">/</span>
                  </>
                )}
                {i === rightPath.split('/').length - 1 && (
                  <span style={{ color: s(3) ? COLORS.amber : '#FDE68A' }}>{seg}</span>
                )}
              </span>
            ))}
          </motion.code>
          <span className="text-[10px] text-slate-500">只在「当前文件」这个语境下才有意义</span>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={s(3) ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ duration: 0.5, ease: EASE }}
        className="mt-4 flex items-center justify-center gap-2"
      >
        <span
          className="rounded-full px-3 py-1 text-[11px] font-bold"
          style={{
            backgroundColor: 'rgba(251,191,36,0.14)',
            color: COLORS.amber,
            border: `1px solid ${COLORS.amber}66`,
          }}
        >
          最后一段 → 真正的文件名
        </span>
      </motion.div>
    </div>
  );
};