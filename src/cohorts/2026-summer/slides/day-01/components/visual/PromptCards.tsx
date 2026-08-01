'use client';

import React from 'react';
import { motion } from 'motion/react';
import { useScene } from '../scene/SceneSlide';
import { COLORS, EASE, FONT_MONO } from '../scene/theme';
import { Typewriter } from '../kinetic/Typewriter';

export interface PromptElement {
  label: string;
  value: string;
}

interface PromptCardsProps {
  elements: PromptElement[];
  /** 起始场景序号：step 1..5 五要素卡依次揭示，step 6 后正文打字 */
  at?: number;
  promptLines: string[];
  className?: string;
}

/** 结构化提示词五要素卡依次揭示 + 正文打字（镜头 10） */
export const PromptCards: React.FC<PromptCardsProps> = ({
  elements,
  at = 0,
  promptLines,
  className = '',
}) => {
  const { active } = useScene();
  const step = Math.max(0, active - at);
  const accents = [COLORS.cyan, COLORS.indigo, COLORS.magenta, COLORS.amber, COLORS.green];

  return (
    <div className={`w-full ${className}`}>
      <div className="grid grid-cols-5 gap-2">
        {elements.map((e, i) => {
          const lit = step >= i + 1;
          const accent = accents[i % accents.length];
          return (
            <motion.div
              key={i}
              className="rounded-xl border px-2 py-2 text-center"
              style={{
                borderColor: lit ? `${accent}88` : 'rgba(148,163,184,0.22)',
                backgroundColor: lit ? `${accent}14` : 'rgba(15,23,42,0.5)',
                boxShadow: lit ? `0 0 14px ${accent}44` : 'none',
              }}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: EASE }}
            >
              <p className="text-[10px] font-black" style={{ color: lit ? accent : 'rgba(148,163,184,0.55)' }}>
                {e.label}
              </p>
              <p className={`mt-1 text-[10px] leading-snug ${FONT_MONO}`} style={{ color: lit ? '#E2F9FF' : 'rgba(148,163,184,0.4)' }}>
                {e.value}
              </p>
            </motion.div>
          );
        })}
      </div>
      {/* 提示词正文：step >= elements.length + 1 开始打字 */}
      <div className="mt-3 rounded-2xl border border-white/10 bg-black/40 p-3">
        <Typewriter
          lines={promptLines}
          at={at + elements.length}
          speed={40}
          minLines={4}
          className="text-[11px]"
        />
      </div>
    </div>
  );
};
