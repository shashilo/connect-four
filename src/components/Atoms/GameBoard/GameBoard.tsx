import React from 'react';

import './GameBoard.css';
import { Token } from '../Token/Token';

const board = [
        [
          0,
          0,
          0,
          0,
          0,
          2,
        ],
        [
          0,
          0,
          0,
          0,
          1,
          1,
        ],
        [
          0,
          0,
          0,
          2,
          2,
          2,
        ],
        [
          0,
          0,
          0,
          1,
          1,
          1,
        ],
        [
          0,
          0,
          0,
          0,
          0,
          2,
        ],
        [
          0,
          0,
          0,
          0,
          1,
          2,
        ],
        [
          0,
          0,
          0,
          0,
          1,
          1,
        ],
      ];

const buildGameBoard = (board, gameId) => {
    const onTokenSpaceClick = ({ row, column }: TokenSpaceClick) => {
    alert(`sendAction({ type: 'MAKE_MOVE', x: ${row}, y: ${column}, gameId: ${gameId}, playerId: 1`);
  }

  return board.map((row, rowIndex) => {
    return (
      <div className="gameBoard__row" key={rowIndex}>
        {row.map((column, columnIndex) => {
          console.log(row, column, columnIndex);
          const tokenVariant = column === 0 ? 'default' : column === 1 ? 'primary' : 'secondary';
          return (
            <div className="gameBoard__column" key={columnIndex}>
              <Token variant={tokenVariant} onClick={() => onTokenSpaceClick({ row: rowIndex, column: columnIndex })} />
            </div>
          );
        })}
      </div>
    );
  });
}

export const GameBoard = ({gameId, ...props}) => {
  return (
    <div className="gameBoard" {...props}>
      {buildGameBoard(board, gameId)}
    </div>
  );
};
