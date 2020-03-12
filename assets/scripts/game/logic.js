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

const isWinner = () => {
  const isRowOneWin = (store.board[0] === store.board[1] && store.board[1] === store.board[2] && store.board[2] !== '')
  const isRowTwoWin = (store.board[3] === store.board[4] && store.board[4] === store.board[5] && store.board[5] !== '')
  const isRowThreeWin = (store.board[6] === store.board[7] && store.board[7] === store.board[8] && store.board[8] !== '')
  const isColumnOneWin = (store.board[0] === store.board[3] && store.board[3] === store.board[6] && store.board[6] !== '')
  const isColumnTwoWin = (store.board[1] === store.board[4] && store.board[4] === store.board[7] && store.board[7] !== '')
  const isColumnThreeWin = (store.board[2] === store.board[5] && store.board[5] === store.board[8] && store.board[8] !== '')
  const isDiagOneWin = (store.board[0] === store.board[4] && store.board[4] === store.board[8] && store.board[8] !== '')
  const isDiagTwoWin = (store.board[2] === store.board[4] && store.board[4] === store.board[6] && store.board[6] !== '')
  console.log(store.board)
  return (isRowOneWin || isRowTwoWin || isRowThreeWin || isColumnOneWin || isColumnTwoWin || isColumnThreeWin || isDiagOneWin || isDiagTwoWin)
}

// This function is written on the basis that it will always be called after isWinner
const isDraw = () => !store.board.some(value => value === '')

const clearBoard = () => {
  store.board = ['', '', '', '', '', '', '', '', '']
}
module.exports = {
  switchPlayer,
  isWinner,
  isDraw,
  clearBoard
}
