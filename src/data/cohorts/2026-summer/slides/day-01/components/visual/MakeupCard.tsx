'use client';

import React from 'react';
import { motion } from 'motion/react';
import { useScene } from '../scene/SceneSlide';
import { COLORS, EASE, FONT_MONO } from '../scene/theme';

interface MakeupCardProps {
  /** 起始场景序号：step1 背景渐变、step2 居中、step3 圆角、step4 阴影 */
  at?: number;
  className?: string;
}

const STEPS = [
  { code: 'background: linear-gradient(135deg, #6366F1, #E879F9);', desc: '① 打底：渐变背景', step: 1 },
  { code: 'display: flex; align-items: center; justify-content: center;', desc: '② 定妆：内容居中', step: 2 },
  { code: 'border-radius: 20px;', desc: '③ 塑形：圆润边角', step: 3 },
  { code: 'box-shadow: 0 12px 40px rgba(99,102,241,0.5);', desc: '④ 高光：霓虹阴影', step: 4 },
];

/** 上妆卡：同一卡片四步逐行「上妆」，右侧预览同步变化（镜头 13） */
export const MakeupCard: React.FC<MakeupCardProps> = ({ at = 0, className = '' }) => {
  const { active } = useScene();
  const step = Math.max(0, active - at);

  return (
    <div className={`grid grid-cols-[1fr_auto] items-center gap-5 ${className}`}>
      {/* 左：CSS 逐行生效 */}
      <div className={`rounded-2xl border border-white/10 bg-black/40 p-3 ${FONT_MONO} text-[10px] leading-relaxed`}>
        <p className="mb-1.5 text-[9px] font-black tracking-widest text-fuchsia-300">style.css · 化妆师的手</p>
        {STEPS.map((s) => {
          const lit = step >= s.step;
          const isActive = step === s.step;
          return (
            <motion.div
              key={s.step}
              className="flex items-baseline gap-2 py-0.5"
              style={{
                color: lit ? '#E2F9FF' : 'rgba(148,163,184,0.35)',
                backgroundColor: isActive ? 'rgba(232,121,249,0.13)' : 'transparent',
                borderRadius: 4,
              }}
            >
              <span className="text-[9px]" style={{ color: lit ? COLORS.magenta : 'rgba(148,163,184,0.4)' }}>
                {lit ? '✓' : s.step}
              </span>
              <span className="text-[10px]">{s.code}</span>
            </motion.div>
          );
        })}
      </div>

      {/* 右：预览卡同步上妆 */}
      <div className="flex items-center justify-center">
        <motion.div
          className="flex h-28 w-28 items-center justify-center text-center text-[10px] font-black"
          style={{
            background:
              step >= 1
                ? 'linear-gradient(135deg, #6366F1, #E879F9)'
                : 'rgba(148,163,184,0.12)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: step >= 3 ? 20 : 8,
            boxShadow: step >= 4 ? '0 12px 40px rgba(99,102,241,0.55)' : 'none',
            border: '1px solid rgba(255,255,255,0.12)',
            color: step >= 2 ? '#fff' : 'rgba(148,163,184,0.5)',
          }}
          animate={{ scale: [1, 1.04, 1] }}
          transition={{ duration: 0.6, repeat: step >= 1 ? Infinity : 0, repeatDelay: 2.2, ease: EASE }}
        >
          你好，网页
        </motion.div>
      </div>
    </div>
  );
};
