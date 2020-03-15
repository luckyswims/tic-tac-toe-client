'use strict'

const ui = require('./ui')

const hideViews = () => {
  $('form').addClass('hidden')
  $('section').addClass('hidden')
  $('.grid-container').addClass('hidden')
  $('.message').text('')
  $('.message').addClass('hidden')
}

const onRegisterNav = () => {
  hideViews()
  ui.showView('sign-up')
}

const onLoginNav = () => {
  hideViews()
  ui.showView('sign-in')
}

const onGameNav = () => {
  hideViews()
  ui.showView('new-game')
}

const onStatsNav = () => {
  hideViews()
  $('#statistics div p').text('')
  ui.showView('statistics')
}

const onPasswordNav = () => {
  hideViews()
  ui.showView('change-password')
}

module.exports = {
  onRegisterNav,
  onLoginNav,
  onGameNav,
  onStatsNav,
  onPasswordNav
}
