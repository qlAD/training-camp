'use client';

import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Clapperboard, Pause, Play } from 'lucide-react';

interface CarouselItem {
  title?: string;
  content: React.ReactNode;
  caption?: string;
}

interface CarouselShowcaseProps {
  title?: string;
  items: CarouselItem[];
  /** 是否自动轮播，默认 false */
  autoPlay?: boolean;
  /** 自动轮播间隔毫秒，默认 4000 */
  interval?: number;
}

// 轮播展示：左右箭头 + 圆点指示器，可自动轮播，hover 暂停
export const CarouselShowcase: React.FC<CarouselShowcaseProps> = ({
  title,
  items,
  autoPlay = false,
  interval = 4000,
}) => {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = items.length;
  const safeIdx = Math.max(0, Math.min(idx, total - 1));
  const item = items[safeIdx];

  const go = (n: number) => setIdx(((n % total) + total) % total);

  useEffect(() => {
    if (!autoPlay || paused || total <= 1) return;
    const id = setInterval(() => setIdx((p) => (p + 1) % total), interval);
    return () => clearInterval(id);
  }, [autoPlay, paused, total, interval]);

  return (
    <div
      className="space-y-3 max-w-4xl"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {title && (
        <div className="text-sm font-bold text-white flex items-center space-x-2">
          <Clapperboard className="h-4 w-4 text-violet-400" />
          <span>{title}</span>
        </div>
      )}
      <div className="relative rounded-2xl border border-slate-700/80 bg-slate-800/80 overflow-hidden">
        <div
          key={safeIdx}
          className="p-5 min-h-[200px] flex flex-col"
          style={{ animation: 'cds-fade-in 0.4s ease both' }}
        >
          {item?.title && <div className="text-sm font-bold text-indigo-200 mb-2">{item.title}</div>}
          <div className="flex-1 text-xs text-slate-200">{item?.content}</div>
          {item?.caption && <div className="mt-3 text-[11px] text-slate-400 italic">{item.caption}</div>}
        </div>
        {total > 1 && (
          <>
            <button
              onClick={() => go(safeIdx - 1)}
              className="cursor-pointer absolute left-2 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-slate-900/80 border border-slate-700 hover:bg-slate-700 text-white flex items-center justify-center transition-colors"
              aria-label="上一项"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={() => go(safeIdx + 1)}
              className="cursor-pointer absolute right-2 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-slate-900/80 border border-slate-700 hover:bg-slate-700 text-white flex items-center justify-center transition-colors"
              aria-label="下一项"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </>
        )}
      </div>
      <div className="flex items-center justify-center space-x-2">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            className={`cursor-pointer h-2 rounded-full transition-all ${
              i === safeIdx ? 'w-6 bg-violet-400' : 'w-2 bg-slate-600 hover:bg-slate-500'
            }`}
            aria-label={`跳转到第 ${i + 1} 项`}
          />
        ))}
        {autoPlay && total > 1 && (
          <span className="ml-2 text-[10px] text-slate-500 flex items-center space-x-1">
            {paused ? <Pause className="h-3 w-3" /> : <Play className="h-3 w-3" />}
            <span>{paused ? '已暂停' : '自动播放'}</span>
          </span>
        )}
      </div>
    </div>
  );
};
