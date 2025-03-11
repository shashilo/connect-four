import React from 'react';

import './Token.css';

interface TokenProps {
    /** Token variant type */
    variant?: 'default' | 'primary' | 'secondary';
    onClick?: () => void;
}

export const Token = ({ variant = 'default', onClick }: TokenProps) => {
  return (
    <div className={['token', `token--${variant}`].join(' ')} onClick={onClick}></div> 
  );
};
