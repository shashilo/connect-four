import './App.css'
import { useWebSocket } from './use-websocket';
import { Button } from './components/Atoms/Button/Button';
import { GameWrapper } from './components/Page/GameWrapper';

function App() {

  // start a new game with the useWebSocket hook
  const { gameContext, sendAction } = useWebSocket();

  const startGame = () => {
    sendAction({ type: 'START_GAME', gameId: `game-${Math.floor(Math.random() * 1000000) + 1}` });
    sendAction({ type: 'JOIN_GAME', gameId: `game-${Math.floor(Math.random() * 1000000) + 1}`, playerName: 'player1' });
    sendAction({ type: 'JOIN_GAME', gameId: `game-${Math.floor(Math.random() * 1000000) + 1}`, playerName: 'player2'});
  }

  return (
    <>
      <div className='grid gap-8 items-center'>
        {gameContext.gameState.board ? <><Button variant="primary" onClick={startGame} label="New Game" /><GameWrapper gameContext={gameContext} /></> : <Button variant="primary" onClick={startGame} label="Start Game" />}
      </div>

    </>
  )
}

export default App
