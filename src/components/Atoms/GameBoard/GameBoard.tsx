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
          0,
          0
        ],
        [
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ],
        [
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ],
        [
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ],
        [
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ],
        [
          0,
          0,
          0,
          0,
          1,
          0,
          0
        ],
      ];

const buildGameBoard = (board) => {
  return board.map((row, rowIndex) => {
    return (
      <div className="gameBoard__row" key={rowIndex}>
        {row.map((column, columnIndex) => {
          console.log(row, column, columnIndex);
          const tokenVariant = column === 0 ? 'default' : column === 1 ? 'primary' : 'secondary';
          return (
            <div className="gameBoard__column" key={columnIndex}>
              <Token variant={tokenVariant} />
            </div>
          );
        })}
      </div>
    );
  });
}

export const GameBoard = ({...props}) => {
  return (
    <div className="gameBoard" {...props}>
      {buildGameBoard(board)}
    </div> 
  );
};
