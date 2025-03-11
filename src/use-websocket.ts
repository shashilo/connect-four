// create a hook that connects to the websocket and returns the game state

import { useEffect, useState, useCallback } from 'react';
import { GameContext, ActionType } from './types';

// create a hook that connects to the websocket and returns the game state
export const useWebSocket = (url = 'ws://localhost:8080/ws') => {
  const [gameContext, setGameContext] = useState<GameContext>({
    gameState: {
      isGameOver: false,
      players: [],
      board: null,
    },
  });
  const [ws, setWs] = useState<WebSocket | null>(null);

  useEffect(() => {
    const websocket = new WebSocket(url);
    websocket.onmessage = (event) => {
      setGameContext(JSON.parse(event.data));
    };
    setWs(websocket);

    return () => {
      websocket.close();
    };
  }, [url]);

  const sendAction = useCallback((action: ActionType) => {
    if (ws?.readyState === WebSocket.OPEN) {
      ws.send(JSON.stringify(action));
    }
  }, [ws]);

  return { gameContext, sendAction };
};
