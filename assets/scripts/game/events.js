'use strict'

const store = require('../store')
const api = require('./api')
const ui = require('./ui')
const logic = require('./logic')
const ai = require('./ai')

const onNewGame = event => {
  event.preventDefault()
  console.log('New Game Clicked!')
  api.newGame()
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
}

const onNewEasy = event => {
  event.preventDefault()
  console.log('New Game Clicked!')
  api.newGame()
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
  store.ai = 'easy'
}

const onNewMedium = event => {
  event.preventDefault()
  console.log('New Game Clicked!')
  api.newGame()
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
  store.ai = 'medium'
}

const moveUpdate = async (square, value) => {
  if (value === '' && !store.isGameOver) {
    $(`#${square}`).text(store.currentPlayer)
    store.board[square] = store.currentPlayer
    if (logic.isWinner(store.board)) {
      ui.winner(store.currentPlayer)
      store.isGameOver = true
    } else if (logic.isDraw(store.board)) {
      ui.draw()
      store.isGameOver = true
    }
    await api.boxClick(square)
      .then(ui.boxClickSuccess)
      .catch(ui.boxClickFailure)
  } else if (!store.isGameOver) {
    ui.invalidSpace(store.currentPlayer)
  }
}

const onBoxClick = async (event) => {
  const squareId = event.target.id
  console.log('Square ID: ' + squareId)
  const squareValue = $(`#${squareId}`).text()
  console.log('Square Value: ' + squareValue)
  console.log('isGameOver: ' + store.isGameOver)
  await moveUpdate(squareId, squareValue)
  console.log(store.ai)
  switch (store.ai) {
    case 'easy':
      const moveEasy = ai.easyAi(store.board)
      moveUpdate(moveEasy, store.board[moveEasy])
      break
    case 'medium':
      const moveMedium = ai.mediumAi(store.board, squareId)
      moveUpdate(moveMedium, store.board[moveMedium])
      break
  }
}

const onGetStats = () => {
  console.log('Get Stats Clicked')
  api.getStats()
    .then(ui.onGetStatsSuccess)
    .catch(ui.onGetStatsFailure)
}

module.exports = {
  onNewGame,
  onNewEasy,
  onNewMedium,
  onBoxClick,
  onGetStats
}
