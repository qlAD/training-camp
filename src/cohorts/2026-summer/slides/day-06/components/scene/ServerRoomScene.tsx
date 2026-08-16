'use client';

import React, { useContext, useEffect, useRef, useState } from 'react';
import { ServerRoomContext } from './useServerRoom';

interface ServerRoomSceneProps {
  length: number;
  firstDelay?: number;
  stepDelay?: number;
  autoPlay?: boolean;
  onDone?: () => void;
  className?: string;
  children: React.ReactNode;
}

export const ServerRoomScene: React.FC<ServerRoomSceneProps> = ({
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

  useEffect(() => {
    doneRef.current = onDone;
  }, [onDone]);

  useEffect(() => {
    if (!autoPlay || completed) return;
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
    <ServerRoomContext.Provider value={{ active, total: length, completed }}>
      <div
        className={`relative flex h-full min-h-0 flex-col overflow-hidden bg-transparent ${className}`}
      >
        {children}
      </div>
    </ServerRoomContext.Provider>
  );
};

export const useServerProgress = () => useContext(ServerRoomContext);
