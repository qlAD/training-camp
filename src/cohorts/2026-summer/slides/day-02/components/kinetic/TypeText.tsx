'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { useTimeline } from '../scene/TimelineScene';

interface TypeTextProps {
  /* 逐行文本，行间换行 */
  lines: string[];
  /* 时间轴位置：active >= at 后才开始打字 */
  at: number;
  speed?: number;
  cursor?: string;
  className?: string;
}

/* 打字机：逐字符打出（含行分隔），时间轴到 at 后启动；setState 全部在定时器回调内 */
export const TypeText: React.FC<TypeTextProps> = ({
  lines,
  at,
  speed = 32,
  cursor = '▍',
  className = '',
}) => {
  const { active } = useTimeline();
  const started = active >= at;
  const flat = useMemo(() => lines.join('\n'), [lines]);
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

  // 渲染：取前缀按行拆分；未完成的最后一行追加光标
  const shown = flat.slice(0, count).split('\n');
  return (
    <div className={`font-mono text-left ${className}`}>
      {shown.map((line, i) => (
        <div key={i} className="whitespace-pre-wrap leading-relaxed">
          {i === shown.length - 1 && !done && count < flat.length ? `${line}${cursor}` : line}
        </div>
      ))}
    </div>
  );
};
