'use client';

import React, { useCallback, useRef, useState } from 'react';
import { GitCompare, GripVertical } from 'lucide-react';

interface CompareSide {
  label: string;
  content: React.ReactNode;
}

interface ComparisonSliderProps {
  title?: string;
  before: CompareSide;
  after: CompareSide;
  /** 分隔条初始位置百分比 0-100，默认 50 */
  initialPosition?: number;
}

// 前后对比滑块：可拖动分隔条对比两个内容块（左 before / 右 after），基于 PointerEvent
export const ComparisonSlider: React.FC<ComparisonSliderProps> = ({
  title,
  before,
  after,
  initialPosition = 50,
}) => {
  const [pos, setPos] = useState(Math.min(100, Math.max(0, initialPosition)));
  const draggingRef = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const p = rect.width > 0 ? ((clientX - rect.left) / rect.width) * 100 : 0;
    setPos(Math.min(100, Math.max(0, p)));
  }, []);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    draggingRef.current = true;
    containerRef.current?.setPointerCapture(e.pointerId);
    updateFromClientX(e.clientX);
  };
  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!draggingRef.current) return;
    updateFromClientX(e.clientX);
  };
  const onPointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    draggingRef.current = false;
    containerRef.current?.releasePointerCapture(e.pointerId);
  };

  return (
    <div className="space-y-2 max-w-5xl">
      {title && (
        <div className="text-sm font-bold text-white flex items-center space-x-2">
          <GitCompare className="h-4 w-4 text-indigo-400" />
          <span>{title}</span>
        </div>
      )}
      <div className="flex items-center justify-between text-[11px] font-bold">
        <span className="px-2 py-0.5 rounded bg-slate-700 text-slate-300">{before.label}</span>
        <span className="px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-200">{after.label}</span>
      </div>
      <div
        ref={containerRef}
        className="relative w-full select-none overflow-hidden rounded-2xl border border-slate-700/80 cursor-ew-resize touch-none"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
      >
        {/* 底层：before（完整显示） */}
        <div className="block">{before.content}</div>
        {/* 覆盖层：after，裁剪为分隔条右侧 */}
        <div className="absolute inset-0 overflow-hidden" style={{ clipPath: `inset(0 0 0 ${pos}%)` }}>
          {after.content}
        </div>
        {/* 分隔条与手柄 */}
        <div className="absolute top-0 bottom-0" style={{ left: `${pos}%`, transform: 'translateX(-50%)' }}>
          <div className="h-full w-0.5 bg-indigo-400" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-indigo-500 border-2 border-white flex items-center justify-center shadow-lg">
            <GripVertical className="h-4 w-4 text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};
