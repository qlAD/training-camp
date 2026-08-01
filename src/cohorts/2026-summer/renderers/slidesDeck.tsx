import React from 'react';
import type { BootcampCohortCore, DayDeckRenderer } from '@/lib';
import type { SummerMetaExtra } from '../types';

export interface SummerSlidesDeckProps {
  meta: BootcampCohortCore<SummerMetaExtra>;
  decks: DayDeckRenderer[];
  selectedDay: number;
  currentSlideIndex: number;
}

/**
 * 2026-summer 幻灯片核心渲染器（只负责"渲染内容"，不负责外围播放控制）。
 *
 * 职责：
 *   1. 根据 selectedDay 从 decks[] 里找到对应 day 的 deck
 *   2. 根据 currentSlideIndex 调用该 deck.Render(slideIndex) 把具体 slide 内容画出来
 *
 * 外围交互（全屏、自动连播、键盘、侧栏、缩略图网格）都由 shells/workshop/* 共享层统一提供，
 * 这样 2027-winter 加新期数时，播放控制一套复用，无需复制。
 */
export const SummerSlidesDeck: React.FC<SummerSlidesDeckProps> = ({
  decks,
  selectedDay,
  currentSlideIndex,
}) => {
  // 根据选中的 day 找到对应的 deck
  const currentDeck: DayDeckRenderer | undefined =
    decks.find((d) => d.meta.day === selectedDay) || decks[0];

  if (!currentDeck) {
    return (
      <div className="w-full aspect-video rounded-3xl border border-slate-800 bg-slate-900 text-slate-400 flex items-center justify-center text-sm">
        当前 Day {selectedDay} 暂未配置幻灯片
      </div>
    );
  }

  const { Render } = currentDeck;
  return <Render slideIndex={currentSlideIndex} />;
};

/** 帮助 Workshop 层拿到 metadata（标题栏、讲师备注等） */
export function findSummerDeck(decks: DayDeckRenderer[], selectedDay: number) {
  return decks.find((d) => d.meta.day === selectedDay) || decks[0];
}
