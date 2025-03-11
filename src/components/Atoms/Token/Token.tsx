import React from 'react';

import './Token.css';

interface TokenProps {
    /** Token variant type */
    variant?: 'primary' | 'secondary';
    onClick?: () => void;
}

export const Token = ({ variant = 'primary', onClick }: TokenProps) => {
  return (
    <div className={['token', `token--${variant}`].join(' ')} onClick={onClick}></div> 
  );
};
