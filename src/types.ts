interface GameState {
  isGameOver: boolean;
  players: Player[];
  board: number[][] | null;
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

export interface StartGameAction {
  type: 'START_GAME';
  gameId: string;
}

export interface JoinGameAction {
  type: 'JOIN_GAME';
  gameId: string;
  playerName: string;
}

export interface MakeMoveAction {
  type: 'MAKE_MOVE';
  gameId: string;
  x: number;
  y: number;
  playerId: number;
}

export interface ExplodePieceAction {
  type: 'EXPLODE_PIECE';
  x: number;
  y: number;
}

export type ActionType = StartGameAction | JoinGameAction | MakeMoveAction | ExplodePieceAction;