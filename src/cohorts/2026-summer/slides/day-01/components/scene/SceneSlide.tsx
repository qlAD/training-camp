'use client';

import React, { createContext, useContext, useEffect, useRef, useState } from 'react';

export interface SceneContextValue {
  /* 当前已揭示的场景块数量（0 ~ total） */
  active: number;
  /* 场景块总数 */
  total: number;
  /* 全部场景是否揭示完成 */
  completed: boolean;
}

const SceneContext = createContext<SceneContextValue>({ active: 0, total: 0, completed: false });

export const useScene = () => useContext(SceneContext);

interface SceneSlideProps {
  /* 场景块总数 = 时间轴长度 */
  sceneCount: number;
  /* 首块延迟（ms），默认 400 */
  initialDelay?: number;
  /* 块间隔（ms），默认 800 */
  blockInterval?: number;
  /* 挂载即播，默认 true（视频感核心） */
  autoPlay?: boolean;
  /* 全部场景揭示完成回调 */
  onSceneComplete?: () => void;
  className?: string;
  children: React.ReactNode;
}

/*
 * 镜头容器：activeScene 时间轴自动推进（挂载即播）。
 * 子元素用 <RevealBlock index={n}> 分块；visual 组件通过 useScene() 读取 active 驱动自身进度。
 */
export const SceneSlide: React.FC<SceneSlideProps> = ({
  sceneCount,
  initialDelay = 400,
  blockInterval = 800,
  autoPlay = true,
  onSceneComplete,
  className = '',
  children,
}) => {
  const [active, setActive] = useState(0);
  const [completed, setCompleted] = useState(false);
  const onCompleteRef = useRef(onSceneComplete);
  // 保持回调引用最新（ref 同步必须放在 effect 内，避免渲染期更新 ref）
  useEffect(() => {
    onCompleteRef.current = onSceneComplete;
  }, [onSceneComplete]);

  useEffect(() => {
    if (!autoPlay || completed) return;
    // 全部场景揭示完成后回调（setState 放在定时器回调内，规避 set-state-in-effect）
    if (active >= sceneCount) {
      const t = setTimeout(() => {
        setCompleted(true);
        onCompleteRef.current?.();
      }, 0);
      return () => clearTimeout(t);
    }
    const delay = active === 0 ? initialDelay : blockInterval;
    const t = setTimeout(() => setActive((a) => a + 1), delay);
    return () => clearTimeout(t);
  }, [active, autoPlay, completed, sceneCount, initialDelay, blockInterval]);

  return (
    <SceneContext.Provider value={{ active, total: sceneCount, completed }}>
      <div className={`relative h-full min-h-0 flex flex-col overflow-hidden ${className}`}>
        {children}
      </div>
    </SceneContext.Provider>
  );
};
