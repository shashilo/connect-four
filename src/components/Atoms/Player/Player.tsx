import React from 'react';

import './Player.css';

export interface ButtonProps {
  /** Player variant type */
  variant?: 'primary' | 'secondary';
}

export const Player = ({
  variant = 'primary',
  ...props
}: ButtonProps) => {
  return (
    <div
      className={['player', `player--${variant}`].join(' ')}
      {...props}
    >
      {variant === 'primary' ? 'Player 1' : 'Player 2'}
    </div>
  );
};
