'use strict'

const store = require('../store')

const switchPlayer = () => {
  if (store.currentPlayer === 'X') {
    store.currentPlayer = 'O'
  } else {
    store.currentPlayer = 'X'
  }
  console.log('Current player is ' + store.currentPlayer)
}

const isWinner = board => {
  const isRowOneWin = (board[0] === board[1] && board[1] === board[2] && board[2] !== '')
  const isRowTwoWin = (board[3] === board[4] && board[4] === board[5] && board[5] !== '')
  const isRowThreeWin = (board[6] === board[7] && board[7] === board[8] && board[8] !== '')
  const isColumnOneWin = (board[0] === board[3] && board[3] === board[6] && board[6] !== '')
  const isColumnTwoWin = (board[1] === board[4] && board[4] === board[7] && board[7] !== '')
  const isColumnThreeWin = (board[2] === board[5] && board[5] === board[8] && board[8] !== '')
  const isDiagOneWin = (board[0] === board[4] && board[4] === board[8] && board[8] !== '')
  const isDiagTwoWin = (board[2] === board[4] && board[4] === board[6] && board[6] !== '')
  return (isRowOneWin || isRowTwoWin || isRowThreeWin || isColumnOneWin || isColumnTwoWin || isColumnThreeWin || isDiagOneWin || isDiagTwoWin)
}

// This function is written on the basis that it will always be called after isWinner
const isDraw = board => !board.some(value => value === '')

const clearBoard = () => {
  store.board = ['', '', '', '', '', '', '', '', '']
}

const countIf = (array, targetValue) => array.reduce((count, value) => (value === targetValue ? count + 1 : count), 0)

const totalGames = data => data.games.length

const incompleteGames = data => data.games.reduce((count, game) => !game.over ? count + 1 : count, 0)

const completeGames = data => data.games.reduce((count, game) => game.over ? count + 1 : count, 0)

const wonGames = data => data.games.reduce((count, game) => {
  if (game.over && isWinner(game.cells) && countIf(game.cells, 'X') > countIf(game.cells, 'O')) {
    return count + 1
  } else {
    return count
  }
}, 0)

const lostGames = data => data.games.reduce((count, game) => {
  if (game.over && isWinner(game.cells) && countIf(game.cells, 'X') === countIf(game.cells, 'O')) {
    return count + 1
  } else {
    return count
  }
}, 0)

const drawGames = data => data.games.reduce((count, game) => {
  if (game.over && !isWinner(game.cells)) {
    return count + 1
  } else {
    return count
  }
}, 0)

const calculateStats = data => {
  const stats = []
  // Total games
  stats.push(totalGames(data))
  // Incomplete games
  stats.push(incompleteGames(data))
  // Completed games
  stats.push(completeGames(data))
  // Games won
  stats.push(wonGames(data))
  // Games lost
  stats.push(lostGames(data))
  // Games draw
  stats.push(drawGames(data))
  return stats
}

module.exports = {
  switchPlayer,
  isWinner,
  isDraw,
  clearBoard,
  countIf,
  calculateStats
}
