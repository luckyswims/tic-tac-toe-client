'use strict'

const store = require('../store')
const logic = require('./logic')

const nextPlayer = player => {
  $('#message').text(`It is now player ${player}'s turn`)
}

const invalidSpace = player => {
  $('#message').text(`Invalid space. It is still player ${player}'s turn`)
}

const winner = player => {
  $('#message').text(`${player} is the winner!`)
}

const draw = () => {
  $('#message').text('The game is a draw')
}

const newGameSuccess = data => {
  console.log('newGameSuccess data is: ', data)
  $('.grid-container > div').text('')
  logic.clearBoard()
  $('.grid-container').removeClass('hidden')
  $('#message').text('You have started a new game. Player X goes first.')
  store.isGameOver = false
  store.game = data.game
}

const newGameFailure = error => {
  console.log('newGameFailure error is: ', error)
  $('#message').text('Error. A new game was unable to be created.')
}

const boxClickSuccess = data => {
  console.log('boxClickSuccess data is: ', data)
  logic.switchPlayer()
  nextPlayer(store.currentPlayer)
}

const boxClickFailure = error => {
  console.log('boxClickFailure error is: ', error)
  $('#message').text('Error. Unable to update move on the server.')
}

const onGetStatsSuccess = data => {
  console.log('onGetStatsSuccess data is: ', data)
  $('#stats-message').text('Statistics successfully retrieved!')
  $('#game-total').text(data.games.length)
}

const onGetStatsFailure = error => {
  console.log('onGetStatsFailure error is: ', error)
  $('#stats-message').text('Error. Unable to retrieve statistics!')
}

module.exports = {
  nextPlayer,
  invalidSpace,
  winner,
  draw,
  newGameSuccess,
  newGameFailure,
  boxClickSuccess,
  boxClickFailure,
  onGetStatsSuccess,
  onGetStatsFailure
}
