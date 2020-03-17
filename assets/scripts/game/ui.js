'use strict'

const store = require('../store')
const logic = require('./logic')

const success = () => {
  $('#game-message').removeClass('failure')
  $('#game-message').removeClass('hidden')
  $('#game-message').addClass('success')
}

const failure = () => {
  $('#game-message').removeClass('success')
  $('#game-message').removeClass('hidden')
  $('#game-message').addClass('failure')
}

const nextPlayer = player => {
  $('#game-message').text(`It is now player ${player}'s turn`)
  success()
}

const invalidSpace = player => {
  $('#game-message').text(`Invalid space. It is still player ${player}'s turn`)
  failure()
}

const winner = player => {
  $('#game-message').text(`${player} is the winner!`)
}

const draw = () => {
  $('#game-message').text('The game is a draw')
}

const newGameSuccess = data => {
  console.log('newGameSuccess data is: ', data)
  $('.grid-container > div').text('')
  logic.clearBoard()
  $('.grid-container').removeClass('hidden')
  $('#game-message').text('You have started a new game. Player X goes first.')
  store.isGameOver = false
  store.game = data.game
  store.currentPlayer = 'X'
  success()
}

const newGameFailure = error => {
  console.log('newGameFailure error is: ', error)
  $('#game-message').text('Error. A new game was unable to be created.')
  failure()
}

const boxClickSuccess = data => {
  console.log('boxClickSuccess data is: ', data)
  if (!store.isGameOver) {
    logic.switchPlayer()
    nextPlayer(store.currentPlayer)
  }
  success()
}

const boxClickFailure = error => {
  console.log('boxClickFailure error is: ', error)
  $('#game-message').text('Error. Unable to update move on the server.')
  failure()
}

const onGetStatsSuccess = data => {
  console.log('onGetStatsSuccess data is: ', data)
  $('#stats-message').text('Statistics successfully retrieved!')
  $('#stats-message').removeClass('failure')
  $('#stats-message').addClass('success')
  const stats = logic.calculateStats(data)
  console.log(stats)
  $('#games-total').text(`Total Games: ${stats[0]}`)
  $('#games-unfinished').text(`Unfinished Games: ${stats[1]}`)
  $('#games-finished').text(`Finished Games: ${stats[2]}`)
  $('#games-won').text(`Won Games: ${stats[3]}`)
  $('#games-lost').text(`Lost Games: ${stats[4]}`)
  $('#games-draw').text(`Draw Games: ${stats[5]}`)
}

const onGetStatsFailure = error => {
  console.log('onGetStatsFailure error is: ', error)
  $('#stats-message').text('Error. Unable to retrieve statistics!')
  $('#stats-message').removeClass('success')
  $('#stats-message').addClass('failure')
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
