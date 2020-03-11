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
  const currentBoard = store.board
  const isRowOneWin = (currentBoard[0] === currentBoard[1] && currentBoard[1] === currentBoard[2])
  const isRowTwoWin = (currentBoard[3] === currentBoard[4] && currentBoard[4] === currentBoard[5])
  const isRowThreeWin = (currentBoard[6] === currentBoard[7] && currentBoard[7] === currentBoard[8])
  const isColumnOneWin = (currentBoard[0] === currentBoard[3] && currentBoard[3] === currentBoard[6])
  const isColumnTwoWin = (currentBoard[1] === currentBoard[4] && currentBoard[4] === currentBoard[7])
  const isColumnThreeWin = (currentBoard[2] === currentBoard[5] && currentBoard[5] === currentBoard[8])
  const isDiagOneWin = (currentBoard[0] === currentBoard[4] && currentBoard[4] === currentBoard[8])
  const isDiagTwoWin = (currentBoard[2] === currentBoard[4] && currentBoard[4] === currentBoard[6])
  return (isRowOneWin || isRowTwoWin || isRowThreeWin || isColumnOneWin || isColumnTwoWin || isColumnThreeWin || isDiagOneWin || isDiagTwoWin)
}

module.exports = {
  switchPlayer,
  isWinner
}
