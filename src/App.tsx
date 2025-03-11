import './App.css'
import { GameBoard } from './components/Atoms/GameBoard/GameBoard'
import { useWebSocket } from './use-websocket';
import { Button } from './components/Atoms/Button/Button';

function App() {

  // start a new game with the useWebSocket hook
  const { gameContext, sendAction } = useWebSocket();

  return (
    <>
      <div className='grid gap-8 items-center'>
        {gameContext.gameState.board ? <><Button variant="primary" onClick={() => sendAction({ type: 'START_GAME', gameId: `game-${Math.floor(Math.random() * 1000000) + 1}` })}label="New Game" /><GameBoard gameContext={gameContext} /></> : <Button variant="primary" onClick={() => sendAction({ type: 'START_GAME', gameId: `game-${Math.floor(Math.random() * 1000000) + 1}` })}label="Start Game" />}
      </div>

    </>
  )
}

export default App
