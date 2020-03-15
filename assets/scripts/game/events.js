'use strict'

const store = require('../store')
const api = require('./api')
const ui = require('./ui')
const logic = require('./logic')

const onNewGame = event => {
  event.preventDefault()
  console.log('New Game Clicked!')
  api.newGame()
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
}

const onBoxClick = event => {
  const squareId = event.target.id
  console.log('Square ID: ' + squareId)
  const squareValue = $(`#${squareId}`).text()
  console.log('Square Value: ' + squareValue)
  console.log('isGameOver: ' + store.isGameOver)
  if (squareValue === '' && !store.isGameOver) {
    $(`#${squareId}`).text(store.currentPlayer)
    store.board[squareId] = store.currentPlayer
    if (logic.isWinner(store.board)) {
      ui.winner(store.currentPlayer)
      store.isGameOver = true
    } else if (logic.isDraw(store.board)) {
      ui.draw()
      store.isGameOver = true
    }
    api.boxClick(squareId)
      .then(ui.boxClickSuccess)
      .catch(ui.boxClickFailure)
  } else if (!store.isGameOver) {
    ui.invalidSpace(store.currentPlayer)
  }
}

const onGetStats = () => {
  console.log('Get Stats Clicked')
  api.getStats()
    .then(ui.onGetStatsSuccess)
    .catch(ui.onGetStatsFailure)
}

module.exports = {
  onBoxClick,
  onNewGame,
  onGetStats
}
