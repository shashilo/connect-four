import React, { useEffect } from 'react';

import './GameWrapper.css';
import { GameBoard } from '../Atoms/GameBoard/GameBoard';
import { Player } from '../Atoms/Player/Player';
import { TokenSpace } from '../Atoms/TokenSpace/TokenSpace';
import { GameContext } from '../../types';
import { useWebSocket } from '../../use-websocket';

interface TokenSpaceClick {
  row: number;
  column: number;
}

export const GameWrapper= ({gameId, gameContext}: {gameId: string, gameContext: GameContext})=> {
  // const { sendAction } = useWebSocket();

  // const onTokenSpaceClick = ({ row, column }: TokenSpaceClick) => {
  //   alert(`sendAction({ type: 'MAKE_MOVE', x: ${row}, y: ${column}, gameId: some-game-id, playerId: ${gameContext.gameState.players[0].playerId} })`);
  // }

  return (
    <div className="gameWrapper">
      <Player variant="primary" />
      <GameBoard gameId={gameId} />
      <Player variant="secondary" />
    </div>
  );
};
