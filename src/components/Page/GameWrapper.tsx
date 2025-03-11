import React from 'react';

import './GameWrapper.css';
import { GameBoard } from '../Atoms/GameBoard/GameBoard';
import { Player } from '../Atoms/Player/Player';
import { TokenSpace } from '../Atoms/TokenSpace/TokenSpace';

interface TokenSpaceClick {
  row: number;
  column: number;
}

const onTokenSpaceClick = ({ row, column }: TokenSpaceClick) => {
  console.log(`row: ${row}, column: ${column}`);
}

export const GameWrapper= ()=> {
  return (
    <div className="gameWrapper">
      <Player variant="primary" />
      <GameBoard>
        <div className="gameWrapper__row">
          <TokenSpace onClick={() => onTokenSpaceClick({row: 1, column: 1})}/>
          <TokenSpace onClick={() => onTokenSpaceClick({row: 2, column: 1})}/>
          <TokenSpace onClick={() => onTokenSpaceClick({row: 3, column: 1})}/>
          <TokenSpace onClick={() => onTokenSpaceClick({row: 4, column: 1})}/>
          <TokenSpace onClick={() => onTokenSpaceClick({row: 5, column: 1})}/>
          <TokenSpace onClick={() => onTokenSpaceClick({row: 6, column: 1})}/>
        </div>
        <div className="gameWrapper__row">
          <TokenSpace onClick={() => onTokenSpaceClick({row: 1, column: 2})}/>
          <TokenSpace onClick={() => onTokenSpaceClick({row: 2, column: 2})}/>
          <TokenSpace onClick={() => onTokenSpaceClick({row: 3, column: 2})}/>
          <TokenSpace onClick={() => onTokenSpaceClick({row: 4, column: 2})}/>
          <TokenSpace onClick={() => onTokenSpaceClick({row: 5, column: 2})}/>
          <TokenSpace onClick={() => onTokenSpaceClick({row: 6, column: 2})}/>
        </div>
        <div className="gameWrapper__row">
          <TokenSpace onClick={() => onTokenSpaceClick({row: 1, column: 3})}/>
          <TokenSpace onClick={() => onTokenSpaceClick({row: 2, column: 3})}/>
          <TokenSpace onClick={() => onTokenSpaceClick({row: 3, column: 3})}/>
          <TokenSpace onClick={() => onTokenSpaceClick({row: 4, column: 3})}/>
          <TokenSpace onClick={() => onTokenSpaceClick({row: 5, column: 3})}/>
          <TokenSpace onClick={() => onTokenSpaceClick({row: 6, column: 3})}/>
        </div>
        <div className="gameWrapper__row">
          <TokenSpace onClick={() => onTokenSpaceClick({row: 1, column: 4})}/>
          <TokenSpace onClick={() => onTokenSpaceClick({row: 2, column: 4})}/>
          <TokenSpace onClick={() => onTokenSpaceClick({row: 3, column: 4})}/>
          <TokenSpace onClick={() => onTokenSpaceClick({row: 4, column: 4})}/>
          <TokenSpace onClick={() => onTokenSpaceClick({row: 5, column: 4})}/>
          <TokenSpace onClick={() => onTokenSpaceClick({row: 6, column: 4})}/>
        </div>
        <div className="gameWrapper__row">
          <TokenSpace onClick={() => onTokenSpaceClick({row: 1, column: 5})}/>
          <TokenSpace onClick={() => onTokenSpaceClick({row: 2, column: 5})}/>
          <TokenSpace onClick={() => onTokenSpaceClick({row: 3, column: 5})}/>
          <TokenSpace onClick={() => onTokenSpaceClick({row: 4, column: 5})}/>
          <TokenSpace onClick={() => onTokenSpaceClick({row: 5, column: 5})}/>
          <TokenSpace onClick={() => onTokenSpaceClick({row: 6, column: 5})}/>
        </div>
        <div className="gameWrapper__row">
          <TokenSpace onClick={() => onTokenSpaceClick({row: 1, column: 6})}/>
          <TokenSpace onClick={() => onTokenSpaceClick({row: 2, column: 6})}/>
          <TokenSpace onClick={() => onTokenSpaceClick({row: 3, column: 6})}/>
          <TokenSpace onClick={() => onTokenSpaceClick({row: 4, column: 6})}/>
          <TokenSpace onClick={() => onTokenSpaceClick({row: 5, column: 6})}/>
          <TokenSpace onClick={() => onTokenSpaceClick({row: 6, column: 6})}/>
        </div>
        <div className="gameWrapper__row">
          <TokenSpace onClick={() => onTokenSpaceClick({row: 1, column: 7})}/>
          <TokenSpace onClick={() => onTokenSpaceClick({row: 2, column: 7})}/>
          <TokenSpace onClick={() => onTokenSpaceClick({row: 3, column: 7})}/>
          <TokenSpace onClick={() => onTokenSpaceClick({row: 4, column: 7})}/>
          <TokenSpace onClick={() => onTokenSpaceClick({row: 5, column: 7})}/>
          <TokenSpace onClick={() => onTokenSpaceClick({row: 6, column: 7})}/>
        </div>
      </GameBoard>
      <Player variant="secondary" />
    </div> 
  );
};
