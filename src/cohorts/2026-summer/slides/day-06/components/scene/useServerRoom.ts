'use client';

import { createContext, useContext } from 'react';

export interface ServerRoomValue {
  active: number;
  total: number;
  completed: boolean;
}

const ServerRoomContext = createContext<ServerRoomValue>({
  active: 0,
  total: 0,
  completed: false,
});

export const useServerRoom = () => useContext(ServerRoomContext);

export { ServerRoomContext };
