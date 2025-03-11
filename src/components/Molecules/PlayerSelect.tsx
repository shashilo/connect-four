import React from 'react';

import './PlayerSelect.css';
import { Button } from '../Atoms/Button/Button';

export const PlayerSelect = ({...props}) => {
  return (
    <div className="playerSelect p-8" {...props}>
        <h1 className='pt-4 pb-8 text-center'>Who Are You?</h1>
        <div className="playerSelect__tokens grid grid-rows-2 gap-4">
            <Button variant="secondary" label="Player 1" onClick={() => console.log('player 1')} />
            <Button variant="secondary" label="Player 2" onClick={() => console.log('player 2')} />
        </div>
    </div> 
  );
};
