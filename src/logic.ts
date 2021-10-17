import { avoidSelf, avoidWalls } from './basic'
import { InfoResponse, GameState, MoveResponse, Game, Moves } from './types'

export function info(): InfoResponse {
  console.log('INFO')
  const response: InfoResponse = {
    apiversion: '1',
    author: '',
    color: '#0bd2e0',
    head: 'pixel',
    tail: 'pixel',
  }
  return response
}

export function start(gameState: GameState): void {
  console.log(`${gameState.game.id} START`)
}

export function end(gameState: GameState): void {
  console.log(`${gameState.game.id} END\n`)
}

export function move(gameState: GameState): MoveResponse {
  let moves: Moves = ['up', 'down', 'left', 'right']

  // Step 0: Don't let your Battlesnake move back on it's own neck
  avoidSelf(gameState, moves)

  // TODO: Step 1 - Don't hit walls.
  avoidWalls(gameState, moves)

  // TODO: Step 2 - Don't hit yourself.
  // Use information in gameState to prevent your Battlesnake from colliding with itself.
  // const mybody = gameState.you.body

  // TODO: Step 3 - Don't collide with others.
  // Use information in gameState to prevent your Battlesnake from colliding with others.

  // TODO: Step 4 - Find food.
  // Use information in gameState to seek out and find food.

  // Finally, choose a move from the available safe moves.
  // TODO: Step 5 - Select a move to make based on strategy, rather than random.
  const response: MoveResponse = {
    move: moves[Math.floor(Math.random() * moves.length)],
  }

  console.log(`${gameState.game.id} MOVE ${gameState.turn}: ${response.move}`)
  return response
}
