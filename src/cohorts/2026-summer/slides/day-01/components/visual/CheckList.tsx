'use client';

import React from 'react';
import { motion } from 'motion/react';
import { useScene } from '../scene/SceneSlide';
import { COLORS, EASE } from '../scene/theme';
import { Trophy } from 'lucide-react';

interface CheckListProps {
  items: string[];
  /** 起始场景序号：step k 勾选第 k 项（k=1..5），step 6 目标徽章 */
  at?: number;
  className?: string;
}

/** 勾选清单：逐项打勾动画 + 目标徽章（镜头 15） */
export const CheckList: React.FC<CheckListProps> = ({ items, at = 0, className = '' }) => {
  const { active } = useScene();
  const step = Math.max(0, active - at);

  return (
    <div className={`w-full ${className}`}>
      <ul className="space-y-3">
        {items.map((it, i) => {
          const done = step >= i + 1;
          return (
            <motion.li
              key={i}
              className="flex items-center gap-3 rounded-2xl border px-4 py-2.5"
              style={{
                borderColor: done ? `${COLORS.green}66` : 'rgba(148,163,184,0.22)',
                backgroundColor: done ? 'rgba(52,211,153,0.1)' : 'rgba(15,23,42,0.5)',
              }}
              initial={{ opacity: 0, x: -14 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45, ease: EASE }}
            >
              <motion.span
                className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-black"
                style={{
                  backgroundColor: done ? COLORS.green : 'rgba(148,163,184,0.15)',
                  color: done ? '#06281b' : 'rgba(148,163,184,0.5)',
                  boxShadow: done ? `0 0 12px ${COLORS.green}66` : 'none',
                }}
                animate={{ scale: done ? [0.6, 1.25, 1] : 1 }}
                transition={{ duration: 0.4 }}
              >
                {done ? '✓' : i + 1}
              </motion.span>
              <p className="text-sm font-bold" style={{ color: done ? '#D1FAE5' : 'rgba(226,232,240,0.75)' }}>
                {it}
              </p>
            </motion.li>
          );
        })}
      </ul>

      {/* 目标徽章 */}
      <motion.div
        className="mt-4 flex justify-center"
        animate={{ opacity: step >= items.length + 1 ? 1 : 0, scale: step >= items.length + 1 ? 1 : 0.85 }}
        transition={{ duration: 0.5, ease: EASE }}
      >
        <span
          className="inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-black"
          style={{
            backgroundColor: 'rgba(251,191,36,0.14)',
            color: COLORS.amber,
            border: `1px solid ${COLORS.amber}66`,
            boxShadow: `0 0 20px ${COLORS.amber}44`,
          }}
        >
          <Trophy className="h-3.5 w-3.5" />
          首日打卡目标 100%
        </span>
      </motion.div>
    </div>
  );
};
