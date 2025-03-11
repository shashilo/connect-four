import React from 'react';

import './TokenSpace.css';

interface TokenSpaceProps {
    onClick?: () => any;
}

export const TokenSpace = ({ onClick }: TokenSpaceProps) => {
    return (
        <div className="tokenSpace" onClick={onClick}></div>
    );
};
