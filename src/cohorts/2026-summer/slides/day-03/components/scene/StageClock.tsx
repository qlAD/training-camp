'use client';

import React, { createContext, useContext, useEffect, useRef, useState } from 'react';

export interface StageValue {
  /** 当前已揭示的场景块数量（0 ~ length） */
  active: number;
  /** 时间轴总长 */
  total: number;
  /** 全部揭示完成 */
  completed: boolean;
}

const StageContext = createContext<StageValue>({ active: 0, total: 0, completed: false });

/** 读取时间轴进度：visual/kinetic 组件通过它驱动自身动效 */
export const useStage = () => useContext(StageContext);

interface StageClockProps {
  /** 时间轴总长 = 场景块数量 */
  length: number;
  /** 首块延迟（ms），默认 400 */
  firstDelay?: number;
  /** 块间隔（ms），默认 800 */
  stepDelay?: number;
  /** 挂载即播，默认 true（视频感核心） */
  autoPlay?: boolean;
  /** 全部揭示完成回调 */
  onDone?: () => void;
  className?: string;
  children: React.ReactNode;
}

/**
 * 镜头容器：时间轴挂载即播、逐块推进。
 * 子元素用 <RevealFade index={n}> 分块；visual 组件通过 useStage() 读取 active 驱动自身进度。
 * 约束：所有 setState 放在定时器回调内（规避 react-hooks/set-state-in-effect）；
 *       onDone 引用同步放在 effect 内（规避 react-hooks/refs）。
 */
export const StageClock: React.FC<StageClockProps> = ({
  length,
  firstDelay = 400,
  stepDelay = 800,
  autoPlay = true,
  onDone,
  className = '',
  children,
}) => {
  const [active, setActive] = useState(0);
  const [completed, setCompleted] = useState(false);
  const doneRef = useRef(onDone);
  // 保持回调引用最新（ref 同步必须放在 effect 内，避免渲染期更新 ref）
  useEffect(() => {
    doneRef.current = onDone;
  }, [onDone]);

  useEffect(() => {
    if (!autoPlay || completed) return;
    // 全部场景揭示完成后回调（setState 放在定时器回调内）
    if (active >= length) {
      const t = setTimeout(() => {
        setCompleted(true);
        doneRef.current?.();
      }, 0);
      return () => clearTimeout(t);
    }
    const delay = active === 0 ? firstDelay : stepDelay;
    const t = setTimeout(() => setActive((a) => a + 1), delay);
    return () => clearTimeout(t);
  }, [active, autoPlay, completed, length, firstDelay, stepDelay]);

  return (
    <StageContext.Provider value={{ active, total: length, completed }}>
      <div className={`relative h-full min-h-0 flex flex-col overflow-hidden ${className}`}>
        {children}
      </div>
    </StageContext.Provider>
  );
};
