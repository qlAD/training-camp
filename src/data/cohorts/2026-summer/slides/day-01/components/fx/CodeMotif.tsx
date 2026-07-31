'use client';

import React, { useMemo } from 'react';
import { motion } from 'motion/react';
import { FONT_MONO } from '../scene/theme';

interface CodeMotifProps {
  lines?: string[];
  count?: number;
}

const DEFAULT_LINES = [
  'print("Hello World!")',
  'git commit -m "day 1 done"',
  '<html lang="zh">',
  'const vibe = ai.write();',
  'npm run dev',
  'h1 { color: #22D3EE; }',
  'import React from "react";',
  'curl https://your.site',
  'body { display: grid; }',
  '<p>Hello, Web!</p>',
];

/** 漂浮代码行装饰：半透明等宽字体，角落/背景散落，缓慢浮动 */
export const CodeMotif: React.FC<CodeMotifProps> = ({ lines, count = 6 }) => {
  const pool = lines && lines.length > 0 ? lines : DEFAULT_LINES;
  const items = useMemo(
    () =>
      Array.from({ length: Math.min(count, pool.length) }, (_, i) => ({
        text: pool[i % pool.length],
        left: `${(i * 17 + 6) % 72}%`,
        top: `${(i * 23 + 4) % 76}%`,
        dur: 12 + (i % 4) * 3,
        delay: (i % 5) * 1.4,
        dim: 0.12 + (i % 4) * 0.05,
        size: i % 3 === 0 ? 'text-sm' : 'text-xs',
      })),
    [pool, count]
  );

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
      {items.map((c, i) => (
        <motion.div
          key={i}
          className={`absolute ${FONT_MONO} ${c.size} text-cyan-200 select-none`}
          style={{ left: c.left, top: c.top, opacity: c.dim, whiteSpace: 'pre' }}
          animate={{ y: [0, -14, 0], opacity: [c.dim, c.dim + 0.1, c.dim] }}
          transition={{ duration: c.dur, delay: c.delay, repeat: Infinity, ease: 'easeInOut' }}
        >
          {c.text}
        </motion.div>
      ))}
    </div>
  );
};
