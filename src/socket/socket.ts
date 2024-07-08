import React from "react";
import { Socket } from "socket.io-client";
import { DefaultEventsMap } from "socket.io/dist/typed-events";

export const SocketContext = React.createContext<Socket<
  DefaultEventsMap,
  DefaultEventsMap
> | null>(null);
