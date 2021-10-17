import { Coord, Moves } from './types'

export const check = ({
  position,
  direction,
  checkFunction,
}: {
  position: Coord
  direction: string
  checkFunction: (position: Coord) => boolean
}): boolean => {
  let actualPosition = { ...position }
  switch (direction) {
    case 'up': {
      actualPosition.y += 1
      break
    }
    case 'down': {
      actualPosition.y -= 1
      break
    }
    case 'left': {
      actualPosition.x -= 1
      break
    }
    case 'right': {
      actualPosition.x += 1
      break
    }
  }
  if (checkBound(actualPosition)) return checkFunction(actualPosition)

  return false
}

export const checkBound = (position: Coord): boolean =>
  position.y < global.board.height &&
  position.y >= 0 &&
  position.x >= 0 &&
  position.x < global.board.width

export const removePossible = (moves: Moves, move: string) => {
  const index = moves.indexOf(move)
  if (index !== -1) moves.splice(index, 1)
}

export const forEachMove = (moves: Moves, func: (move: string) => void) => {
  for (let index = moves.length - 1; index >= 0; index--) {
    func(moves[index])
  }
}

// export const checkUp = ({
//   gameState,
//   position,
//   checkFunction,
// }: {
//   gameState: GameState
//   position: Coord
//   checkFunction: (position: Coord) => boolean
// }) => {
//   return check({ gameState, position, checkFunction, direction: 'up' })
// }

// export const checkDown = ({
//   gameState,
//   position,
//   checkFunction,
// }: {
//   gameState: GameState
//   position: Coord
//   checkFunction: (position: Coord) => boolean
// }) => {
//   return check({
//     gameState,
//     position,
//     checkFunction,
//     direction: 'down',
//   })
// }

// export const checkLeft = ({
//   gameState,
//   position,
//   checkFunction,
// }: {
//   gameState: GameState
//   position: Coord
//   checkFunction: (position: Coord) => boolean
// }) => {
//   return check({
//     gameState,
//     position,
//     checkFunction,
//     direction: 'left',
//   })
// }

// export const checkRight = ({
//   gameState,
//   position,
//   checkFunction,
// }: {
//   gameState: GameState
//   position: Coord
//   checkFunction: (position: Coord) => boolean
// }) => {
//   return check({
//     gameState,
//     position,
//     checkFunction,
//     direction: 'right',
//   })
// }
