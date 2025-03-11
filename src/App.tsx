import './App.css'
import { useWebSocket } from './use-websocket';
import { Button } from './components/Atoms/Button/Button';
import { GameWrapper } from './components/Page/GameWrapper';

function App() {

  // start a new game with the useWebSocket hook
  const { gameContext, sendAction } = useWebSocket();

  const startGame = () => {
    const gameId = `game-${Math.floor(Math.random() * 1000000) + 1}`;
    sendAction({ type: 'START_GAME', gameId });
    sendAction({ type: 'JOIN_GAME', gameId, playerName: 'player1' });
    sendAction({ type: 'JOIN_GAME', gameId, playerName: 'player2'});
  }

  return (
    <>
      <div className='grid gap-8 items-center'>
        {gameContext?.gameState?.board ? <><Button variant="primary" onClick={startGame} label="New Game" /><GameWrapper gameContext={gameContext} /></> : <Button variant="primary" onClick={startGame} label="Start Game" />}
      </div>

    </>
  )
}

export default App
