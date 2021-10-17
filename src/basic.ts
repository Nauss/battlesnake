import { Coord, GameState, Moves } from './types'
import { check, forEachMove, removePossible } from './utils'

export const avoidSelf = (gameState: GameState, moves: Moves) => {
  const {
    you: {
      body: [head, ...rest],
    },
  } = gameState
  // Don't move on self

  const isSelf = (position: Coord) => {
    console.log({ rest, position })
    return rest.some(({ x, y }) => position.x === x && position.y === y)
  }
  forEachMove(moves, (move: string) => {
    if (
      check({
        position: head,
        direction: move,
        checkFunction: isSelf,
      })
    )
      removePossible(moves, move)
  })
}

export const avoidWalls = (gameState: GameState, moves: Moves) => {
  const {
    you: { head },
    board: { width, height },
  } = gameState
  if (head.x === 0) {
    removePossible(moves, 'left')
  } else if (head.x === width - 1) {
    removePossible(moves, 'right')
  }
  if (head.y === 0) {
    removePossible(moves, 'down')
  } else if (head.y === height - 1) {
    removePossible(moves, 'up')
  }
}
