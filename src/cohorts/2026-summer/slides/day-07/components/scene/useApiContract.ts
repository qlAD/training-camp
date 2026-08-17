'use client';

import { createContext, useContext } from 'react';

export interface ApiContractValue {
  active: number;
  total: number;
  completed: boolean;
}

const ApiContractContext = createContext<ApiContractValue>({
  active: 0,
  total: 0,
  completed: false,
});

export const useApiContract = () => useContext(ApiContractContext);

export { ApiContractContext };
