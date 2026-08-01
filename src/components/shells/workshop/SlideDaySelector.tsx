'use client';

import React from 'react';

/** 幻灯片日选择侧栏（共享交互壳：通用 day-N 按钮列表）。
 *  由期数 slidesRenderer 或 CohortWorkshop shell 实例化，传入受控 selectedDay / setSelectedDay / maxDay，
 *  实际 day 内容不在此组件内，保持共享壳零期数专属内容。 */
export interface SlideDaySelectorProps {
  selectedDay: number;
  setSelectedDay: (day: number) => void;
  /** 总课日数（至少显示 Day 1-3，即使 slidesData 为空） */
  maxDay: number;
  /** 可选：标记每个 day 是否已就绪（长度可少于 maxDay，未标记的 day 默认显示「课件制作中」） */
  readyMap?: boolean[];
  className?: string;
  /** 侧栏顶部标题（默认：「课程日」） */
  headerText?: string;
  /** 主色调：激活态按钮背景色（默认 sky：与寒假一致，暑期可改为 indigo） */
  accentTone?: 'indigo' | 'sky' | 'emerald' | 'pink' | 'slate';
}

const TONE_ACTIVE: Record<NonNullable<SlideDaySelectorProps['accentTone']>, string> = {
  indigo: 'bg-indigo-600 text-white shadow-md shadow-indigo-200',
  sky: 'bg-sky-600 text-white shadow-md shadow-sky-200',
  emerald: 'bg-emerald-600 text-white shadow-md shadow-emerald-200',
  pink: 'bg-pink-600 text-white shadow-md shadow-pink-200',
  slate: 'bg-slate-800 text-white shadow-md shadow-slate-300',
};
const TONE_READY_SUB: Record<NonNullable<SlideDaySelectorProps['accentTone']>, string> = {
  indigo: 'text-indigo-100',
  sky: 'text-sky-100',
  emerald: 'text-emerald-100',
  pink: 'text-pink-100',
  slate: 'text-slate-200',
};

export const SlideDaySelector: React.FC<SlideDaySelectorProps> = ({
  selectedDay,
  setSelectedDay,
  maxDay,
  readyMap,
  className = '',
  headerText = '课程日',
  accentTone = 'indigo',
}) => {
  const total = Math.max(1, maxDay);
  return (
    <aside
      className={`w-56 shrink-0 bg-slate-50 border-r border-slate-200 p-4 space-y-2 overflow-y-auto ${className}`}
    >
      <div className="text-[11px] uppercase tracking-[0.25em] text-slate-400 font-bold px-2 mb-2">
        {headerText}
      </div>
      {Array.from({ length: total }).map((_, i) => {
        const day = i + 1;
        const active = day === selectedDay;
        const ready = Array.isArray(readyMap) ? !!readyMap[i] : false;
        return (
          <button
            key={day}
            type="button"
            onClick={() => setSelectedDay(day)}
            className={`w-full text-left px-3 py-2.5 rounded-xl text-xs font-semibold transition-all ${
              active
                ? TONE_ACTIVE[accentTone]
                : 'text-slate-600 hover:bg-slate-200/60'
            }`}
          >
            <div className="flex items-center justify-between">
              <span>Day {String(day).padStart(2, '0')}</span>
              {active ? <span className="opacity-80">●</span> : null}
            </div>
            <div
              className={`text-[10px] font-medium mt-0.5 ${
                active ? TONE_READY_SUB[accentTone] : 'text-slate-400'
              }`}
            >
              {ready ? '课件已就绪' : '课件制作中'}
            </div>
          </button>
        );
      })}
    </aside>
  );
};

export default SlideDaySelector;
