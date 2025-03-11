import './App.css'
import { useWebSocket } from './use-websocket';
import { Button } from './components/Atoms/Button/Button';
import { GameWrapper } from './components/Page/GameWrapper';
import { useState } from 'react';

function App() {

  // start a new game with the useWebSocket hook
  const { gameContext, sendAction } = useWebSocket();
  const [gameId, setGameId] = useState<string>(0);

  const startGame = () => {
    const newGameId = `game-${Math.floor(Math.random() * 1000000) + 1}`;
    setGameId(newGameId);
    sendAction({ type: 'START_GAME', gameId:newGameId });
    sendAction({ type: 'JOIN_GAME', gameId:newGameId, playerName: 'player1' });
    sendAction({ type: 'JOIN_GAME', gameId:newGameId, playerName: 'player2'});
  }

  return (
    <>
      <div className='grid gap-8 items-center'>
        {gameContext?.gameState?.board ? <><Button variant="primary" onClick={startGame} label="New Game" /><GameWrapper gameId={gameId} gameContext={gameContext} /></> : <Button variant="primary" onClick={startGame} label="Start Game" />}
      </div>

    </>
  )
}

export default App
