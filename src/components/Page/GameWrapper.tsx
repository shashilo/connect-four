import React from 'react';

import './GameWrapper.css';
import { GameBoard } from '../Atoms/GameBoard/GameBoard';
import { Player } from '../Atoms/Player/Player';

export const GameWrapper= ()=> {
  return (
    <div className="gameWrapper">
      <Player variant="primary" />
      <GameBoard />
      <Player variant="secondary" />
    </div> 
  );
};
