'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const gameEvents = require('./game/events')
const authEvents = require('./auth/events')
const navEvents = require('./nav/events')

$(() => {
  $('#home-nav').on('click', navEvents.onHomeNav)
  $('#register-nav').on('click', navEvents.onRegisterNav)
  $('#login-nav').on('click', navEvents.onLoginNav)
  $('#game-nav').on('click', navEvents.onGameNav)
  $('#stats-nav').on('click', navEvents.onStatsNav)
  $('#password-nav').on('click', navEvents.onPasswordNav)
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#logout-nav').on('click', authEvents.onSignOut)
  $('#new-game').on('submit', gameEvents.onNewGame)
  $('.grid-container > div').on('click', gameEvents.onBoxClick)
  $('#get-stats').on('click', gameEvents.onGetStats)
})
