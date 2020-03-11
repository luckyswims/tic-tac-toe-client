'use strict'

const store = require('../store')
const logic = require('./logic')
const ui = require('./ui')

const onBoxClick = (event) => {
  const squareId = event.target.id
  console.log('Square ID: ' + squareId)
  const squareValue = $(`#${squareId}`).text()
  console.log('Square Value: ' + squareValue)
  console.log('isGameOver: ' + store.isGameOver)
  if (squareValue === '' && !store.isGameOver) {
    $(`#${squareId}`).text(store.currentPlayer)
    store.board[squareId] = store.currentPlayer
    if (logic.isWinner()) {
      ui.winner(store.currentPlayer)
      store.isGameOver = true
      return
    } else if (logic.isDraw()) {
      ui.draw()
      store.isGameOver = true
      return
    }
    logic.switchPlayer()
    ui.nextPlayer(store.currentPlayer)
  } else if (!store.isGameOver) {
    ui.invalidSpace(store.currentPlayer)
  }
}

module.exports = {
  onBoxClick
}
