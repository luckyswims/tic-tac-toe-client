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
  } else if (openMoves(board).length === 8 && board[1] === '') {
    return 1
  } else if (board[(8 - lastMove)] === '') {
    return (8 - lastMove)
  } else {
    easyAi(board)
  }
}

const impossibleAi = (board, lastMove) => {
  const winnerO = findWinningMove(board, 'O')
  const winnerX = findWinningMove(board, 'X')
  if (winnerO !== null) {
    return winnerO
  } else if (winnerX !== null) {
    return winnerX
  } else if (openMoves(board).length === 8 && board[4] === '') {
    return 4
  } else if (board[4] === 'O' && openMoves(board).length === 6) {
    if ((board[0] === 'X' && board[8] === 'X') || (board[0] === 'X' && board[8] === 'X')) {
      return 1
    } else if (board[0] === '') {
      return 0
    } else {
      return 6
    }
  } else if (board[0] === '') {
    return 0
  } else if (board[6] === '') {
    return 6
  } else if (board[8] === '') {
    return 8
  } else if (board[2] === '') {
    return 2
  } else {
    easyAi(board)
  }
}

module.exports = {
  easyAi,
  mediumAi,
  impossibleAi
}
