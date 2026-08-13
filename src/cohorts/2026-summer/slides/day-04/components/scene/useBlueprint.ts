'use client';

import { createContext, useContext } from 'react';

export interface BlueprintValue {
  active: number;
  total: number;
  completed: boolean;
}

const BlueprintContext = createContext<BlueprintValue>({ active: 0, total: 0, completed: false });

export const useBlueprint = () => useContext(BlueprintContext);

export { BlueprintContext };