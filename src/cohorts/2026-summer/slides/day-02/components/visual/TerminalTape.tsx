'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { useTimeline } from '../scene/TimelineScene';

export interface InstallJob {
  title: string;
  cmd: string;
  lines: string[];
  ok: string;
}

interface TerminalTapeProps {
  /* 时间轴位置：active >= at 后开始逐行播放 */
  at: number;
  jobs: InstallJob[];
  className?: string;
}

/* 终端安装动画：三个窗口并排，各自逐行打出安装输出（内部定时器驱动，挂载即播） */
export const TerminalTape: React.FC<TerminalTapeProps> = ({ at, jobs, className = '' }) => {
  const { active } = useTimeline();
  const started = active >= at;
  const rows = useMemo(() => jobs.map((j) => [j.title, j.cmd, ...j.lines, j.ok]), [jobs]);
  const offsets = useMemo(() => {
    const acc: number[] = [];
    let sum = 0;
    rows.forEach((r) => {
      acc.push(sum);
      sum += r.length;
    });
    return acc;
  }, [rows]);
  const total = rows.reduce((a, r) => a + r.length, 0);
  const [shown, setShown] = useState(0);

  useEffect(() => {
    if (!started) return;
    if (shown >= total) return;
    const t = setTimeout(() => setShown((n) => Math.min(total, n + 1)), 240);
    return () => clearTimeout(t);
  }, [started, shown, total]);

  return (
    <div className={`grid w-full grid-cols-1 gap-3 sm:grid-cols-3 ${className}`}>
      {jobs.map((job, ji) => {
        const count = Math.min(rows[ji].length, Math.max(0, shown - offsets[ji]));
        return (
          <div
            key={job.title}
            className="overflow-hidden rounded-xl border border-white/10 bg-slate-950/80 text-left shadow-lg"
          >
            {/* 终端标题栏 */}
            <div className="flex items-center gap-1.5 border-b border-white/10 px-3 py-1.5">
              <span className="h-2 w-2 rounded-full bg-rose-400/80" />
              <span className="h-2 w-2 rounded-full bg-amber-400/80" />
              <span className="h-2 w-2 rounded-full bg-lime-400/80" />
              <span className="ml-2 truncate font-mono text-[10px] text-slate-400">{job.title}</span>
            </div>
            {/* 输出区：高度封顶，超长可滚 */}
            <div className="max-h-[150px] overflow-y-auto px-3 py-2 font-mono text-[11px] leading-relaxed">
              {rows[ji].slice(0, count).map((row, ri) => {
                const isTitle = ri === 0;
                const isCmd = ri === 1;
                const isOk = ri === rows[ji].length - 1;
                return (
                  <p
                    key={ri}
                    className={
                      isTitle
                        ? 'font-bold text-slate-100'
                        : isCmd
                        ? 'text-sky-300'
                        : isOk
                        ? 'font-bold text-lime-300'
                        : 'text-slate-400'
                    }
                  >
                    {isCmd ? `$ ${row}` : row}
                  </p>
                );
              })}
              {count < rows[ji].length && (
                <p className="animate-pulse text-slate-500">▍</p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};
