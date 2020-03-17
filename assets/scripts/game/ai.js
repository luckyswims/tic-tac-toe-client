'use strict'

const logic = require('./logic')

const openMoves = board => {
  const result = []
  board.forEach((square, index) => {
    if (square === '') {
      result.push(index)
    }
  })
  return result
}

const findWinningMove = (board, player) => {
  const options = openMoves(board)
  let winner = null
  options.forEach(move => {
    const copy = board.map(x => x)
    copy[move] = player
    if (logic.isWinner(copy)) {
      winner = move
    }
  })
  return winner
}

const easyAi = board => {
  const options = openMoves(board)
  const index = Math.trunc(Math.random() * options.length)
  return options[index]
}

const mediumAi = (board, lastMove) => {
  const winnerO = findWinningMove(board, 'O')
  const winnerX = findWinningMove(board, 'X')
  if (winnerO !== null) {
    return winnerO
  } else if (winnerX !== null) {
    return winnerX
  } else if (logic.countIf(board, 'O') === 0) {
    return 1
  } else if (board[(8 - lastMove)] === '') {
    return (8 - lastMove)
  } else {
    easyAi(board)
  }
}

module.exports = {
  easyAi,
  mediumAi
}
