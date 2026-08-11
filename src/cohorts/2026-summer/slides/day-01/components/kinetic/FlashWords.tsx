'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useScene } from '../scene/SceneSlide';
import { EASE, TEXT_GRADIENT } from '../scene/theme';

interface FlashWordsProps {
  words: string[];
  /* 起始场景序号 */
  at?: number;
  /* 每词停留（ms） */
  interval?: number;
  className?: string;
}

/* 大字快闪：关键词逐词高速缩放+模糊入场，循环播完常驻最后一词 */
export const FlashWords: React.FC<FlashWordsProps> = ({
  words,
  at = 0,
  interval = 950,
  className = '',
}) => {
  const { active } = useScene();
  const started = active > at;
  const [idx, setIdx] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!started || done) return;
    const t = setTimeout(() => {
      setIdx((i) => i + 1);
      if (idx + 1 >= words.length) setDone(true);
    }, interval);
    return () => clearTimeout(t);
  }, [started, done, idx, words.length, interval]);

  if (!started) return null;
  const current = Math.min(idx, words.length - 1);

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={current}
          className={`${TEXT_GRADIENT} text-5xl sm:text-6xl font-black tracking-tight`}
          initial={{ opacity: 0, scale: 0.82, filter: 'blur(14px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          exit={{ opacity: 0, scale: 1.08, filter: 'blur(8px)' }}
          transition={{ duration: 0.4, ease: EASE }}
        >
          {words[current]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};
