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
        <Button variant="primary" onClick={() => sendAction({ type: 'START_GAME', gameId: 'game-557' })}label="Start Game" />
        {gameContext.gameState.board ? <GameBoard gameContext={gameContext} /> : null}
      </div>

    </>
  )
}

export default App
