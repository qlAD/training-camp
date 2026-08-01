'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { useScene } from '../scene/SceneSlide';
import { FONT_MONO } from '../scene/theme';

interface TypewriterProps {
  lines: string[];
  /** 起始场景序号 */
  at?: number;
  /** 每字间隔（ms） */
  speed?: number;
  className?: string;
  minLines?: number;
}

/** 打字机效果：逐字打出 + 光标闪烁（代码/提示词用） */
export const Typewriter: React.FC<TypewriterProps> = ({
  lines,
  at = 0,
  speed = 55,
  className = '',
  minLines,
}) => {
  const { active } = useScene();
  const started = active > at;
  const [lineIdx, setLineIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);

  useEffect(() => {
    if (!started) return;
    if (lineIdx >= lines.length) return;
    const line = lines[lineIdx];
    if (charIdx < line.length) {
      const t = setTimeout(() => setCharIdx((c) => c + 1), speed);
      return () => clearTimeout(t);
    }
    // 换行停顿
    const t = setTimeout(() => {
      setLineIdx((l) => l + 1);
      setCharIdx(0);
    }, speed * 4);
    return () => clearTimeout(t);
  }, [started, lineIdx, charIdx, lines, speed]);

  const finished = lineIdx >= lines.length;
  const height = minLines ?? lines.length;

  return (
    <pre
      className={`${FONT_MONO} text-xs leading-relaxed text-slate-200 ${
        started ? '' : 'opacity-0'
      } transition-opacity duration-500 ${className}`}
      style={{ minHeight: `${height * 1.6}em` }}
      aria-hidden={!started}
    >
      {lines.slice(0, lineIdx).map((l, i) => (
        <div key={i}>{l || '\u00A0'}</div>
      ))}
      {lineIdx < lines.length && (
        <div>
          {lines[lineIdx].slice(0, charIdx)}
          {!finished && (
            <motion.span
              className="inline-block w-[0.55em] h-[1em] translate-y-[0.18em] bg-cyan-300/90"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.9, repeat: Infinity }}
            />
          )}
        </div>
      )}
    </pre>
  );
};
