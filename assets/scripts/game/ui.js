'use strict'

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
  $('#message').text(`The game is a draw`)
}

module.exports = {
  nextPlayer,
  invalidSpace,
  winner,
  draw
}
