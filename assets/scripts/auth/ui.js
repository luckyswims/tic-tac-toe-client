'use strict'

const store = require('../store')

const clearForm = formID => {
  $(`#${formID}`)[0].reset()
  $(`#${formID}`).addClass('hidden')
}

const signUpSuccess = function (data) {
  $('#auth-message').text('Signed up successfully. Please login to proceed.')
  $('#auth-message').removeClass()
  $('#auth-message').addClass('success')
  console.log('signUpSuccess data is: ', data)
  clearForm('sign-up')
}

const signUpFailure = function (error) {
  $('#auth-message').text('Sign up failed')
  $('#auth-message').removeClass()
  $('#auth-message').addClass('failure')
  console.log('signUpFailure error is: ', error)
  $('#sign-up')[0].reset()
}

const signInSuccess = function (data) {
  $('#auth-message').text('Signed in successfully')
  $('#auth-message').removeClass()
  $('#auth-message').addClass('success')
  console.log('signInSuccess data is: ', data)
  clearForm('sign-in')
  $('nav > .hidden').removeClass('hidden')
  $('#login-nav').addClass('hidden')
  $('#register-nav').addClass('hidden')
  store.user = data.user
}

const signInFailure = function (error) {
  $('#auth-message').text('Sign in failed')
  $('#auth-message').removeClass()
  $('#auth-message').addClass('failure')
  console.log('signInFailure error is: ', error)
  $('#sign-in')[0].reset()
}

const changePasswordSuccess = function (data) {
  $('#auth-message').text('Changed password')
  $('#auth-message').removeClass()
  $('#auth-message').addClass('success')
  console.log('changePasswordSuccess data is: ', data)
  $('#change-password')[0].reset()
  $('#change-password').addClass('hidden')
}

const changePasswordFailure = function (error) {
  $('#auth-message').text('Could not change password')
  $('#auth-message').removeClass()
  $('#auth-message').addClass('failure')
  console.log('changePasswordFailure error is: ', error)
  $('#change-password')[0].reset()
}

const signOutSuccess = function (data) {
  $('#auth-message').text('Signed Out')
  $('#auth-message').removeClass()
  $('#auth-message').addClass('success')
  console.log('signOutSuccess data is: ', data)
  $('nav > button').addClass('hidden')
  $('#login-nav').removeClass('hidden')
  $('#register-nav').removeClass('hidden')
  $('form').addClass('hidden')
  $('section').addClass('hidden')
  $('.grid-container').addClass('hidden')
  $('#message').text('')
  $('#stats-message').text('')
}

const signOutFailure = function (error) {
  $('#auth-message').text('Could not sign out')
  $('#auth-message').removeClass()
  $('#auth-message').addClass('failure')
  console.log('signOutFailure error is: ', error)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
