'use strict'

const store = require('../store')
const logic = require('./logic')

const onBoxClick = (event) => {
  const squareId = event.target.id
  console.log('Square ID: ' + squareId)
  const squareValue = $(`#${squareId}`).text()
  console.log('Square Value: ' + squareValue)
  if (squareValue === '') {
    $(`#${squareId}`).text(store.currentPlayer)
    logic.switchPlayer()
  }
}

module.exports = {
  onBoxClick
}
