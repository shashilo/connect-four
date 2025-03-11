interface GameState {
  isGameOver: boolean;
  players: Player[];
  board: number[][];
}

export interface GameContext {
  // gameId: string;
  gameState: GameState;
  error?: string;
}

export interface Move {
  x: number;
  y: number;
  playerId: number;
}

export interface Player {
  playerId: string;
  name: string;
}