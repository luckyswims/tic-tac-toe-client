'use strict'

const config = require('../config')
const store = require('../store')

const newGame = () => {
  console.log('In game/api.js')
  return $.ajax({
    url: config.apiUrl + 'games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: ''
  })
}

const boxClick = squareId => {
  const object = {
    game: {
      cell: {
        index: squareId,
        value: store.currentPlayer
      },
      over: store.isGameOver
    }
  }
  console.log(object)
  console.log('In game/api.js')
  return $.ajax({
    url: config.apiUrl + 'games/' + store.game.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: object
  })
}

const getStats = () => {
  console.log('In game/api.js')
  return $.ajax({
    url: config.apiUrl + 'games',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  newGame,
  boxClick,
  getStats
}
