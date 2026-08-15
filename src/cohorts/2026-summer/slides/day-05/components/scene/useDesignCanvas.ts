'use client';

import { createContext, useContext } from 'react';

export interface DesignCanvasValue {
  active: number;
  total: number;
  completed: boolean;
}

const DesignCanvasContext = createContext<DesignCanvasValue>({ active: 0, total: 0, completed: false });

export const useDesignCanvas = () => useContext(DesignCanvasContext);

export { DesignCanvasContext };
