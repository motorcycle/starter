import { Direction } from 'application/types'

export const goInDirection = (direction: Direction, shouldMove: boolean) =>
  shouldMove ? direction : false
