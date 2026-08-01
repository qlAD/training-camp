'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { useStage } from '../scene/StageClock';

interface TypeCodeProps {
  /** 逐行文本，行间换行；每行可带行级颜色（HTML 橙 / CSS 蓝 / JS 黄 / 注释灰） */
  lines: { text: string; color?: string }[];
  /** 时间轴位置：active >= at 后才开始打字 */
  at: number;
  speed?: number;
  cursor?: string;
  className?: string;
}

/** 代码打字机：逐字符打出（含行分隔），时间轴到 at 后启动；setState 全部在定时器回调内 */
export const TypeCode: React.FC<TypeCodeProps> = ({ lines, at, speed = 30, cursor = '▍', className = '' }) => {
  const { active } = useStage();
  const started = active >= at;
  const flat = useMemo(() => lines.map((l) => l.text).join('\n'), [lines]);
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!started || done) return;
    if (count >= flat.length) {
      const t = setTimeout(() => setDone(true), 80);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setCount((c) => Math.min(flat.length, c + 1)), speed);
    return () => clearTimeout(t);
  }, [started, done, count, flat, speed]);

  // 渲染：按字符前缀重建各行，保留行级颜色
  const parts = flat.slice(0, count).split('\n');
  return (
    <div className={`font-mono ${className}`}>
      {lines.map((line, i) => {
        const shown = i < parts.length ? parts[i] : null;
        const isLastTyping = i === parts.length - 1 && !done && count < flat.length;
        return (
          <div
            key={i}
            className="whitespace-pre-wrap leading-relaxed"
            style={{ color: line.color ?? 'inherit' }}
          >
            {shown === null ? '' : isLastTyping ? `${shown}${cursor}` : shown}
          </div>
        );
      })}
    </div>
  );
};
