'use client';

import React from 'react';
import type {
  BootcampCohortCore,
  DayDeckRenderer,
} from '@/lib';
import type { WinterMetaExtra } from '../types';

export interface WinterSlidesDeckProps {
  meta: BootcampCohortCore<WinterMetaExtra>;
  decks: DayDeckRenderer[];
  selectedDay: number;
  currentSlideIndex: number;
}

/**
 * 2026 寒假幻灯片聚合渲染器（严格按 workshop 层的 SlidesDeckRendererProps 契约）。
 * 职责：按 selectedDay 找到 deck → 按 currentSlideIndex 调 deck.Render(slideIndex)。
 * 外围的舞台背景、全屏 / 自动连播 / 键盘 / 进度条 / 缩略图网格等交互由 shells/workshop 层统一提供。
 */
export const WinterSlidesDeck: React.FC<WinterSlidesDeckProps> = ({
  decks,
  selectedDay,
  currentSlideIndex,
}) => {
  const currentDeck =
    decks.find((d) => d.meta.day === selectedDay) || decks[0];

  if (!currentDeck) {
    return (
      <div className="h-full w-full flex flex-col items-center justify-center text-center px-10 text-white">
        <div className="text-[11px] uppercase tracking-[0.35em] text-sky-300/80 font-bold mb-3">
          2026 Winter · Day {String(selectedDay).padStart(2, '0')}
        </div>
        <h2 className="text-2xl md:text-3xl font-black text-white mb-3">
          Day {selectedDay} 课件 · 制作中
        </h2>
        <p className="text-slate-300/80 max-w-xl text-sm">
          寒假集训营课件正在紧张筹备。第一期课件上线后将自动解锁此处详情教学模式。
        </p>
      </div>
    );
  }

  const { Render } = currentDeck;
  return <Render slideIndex={currentSlideIndex} />;
};

export default WinterSlidesDeck;
