'use strict'

const store = require('../store')

const clearForm = formID => {
  $(`#${formID}`)[0].reset()
  $(`#${formID}`).addClass('hidden')
}

const signUpSuccess = function (data) {
  $('#authMessage').text('Signed up successfully. Please login to proceed.')
  $('#authMessage').removeClass()
  $('#authMessage').addClass('success')
  console.log('signUpSuccess data is: ', data)
  clearForm('sign-up')
}

const signUpFailure = function (error) {
  $('#authMessage').text('Sign up failed')
  $('#authMessage').removeClass()
  $('#authMessage').addClass('failure')
  console.log('signUpFailure error is: ', error)
  $('#sign-up')[0].reset()
}

const signInSuccess = function (data) {
  $('#authMessage').text('Signed in successfully')
  $('#authMessage').removeClass()
  $('#authMessage').addClass('success')
  console.log('signInSuccess data is: ', data)
  clearForm('sign-in')
  $('nav > .hidden').removeClass('hidden')
  $('#login-nav').addClass('hidden')
  $('#register-nav').addClass('hidden')
  store.user = data.user
}

const signInFailure = function (error) {
  $('#authMessage').text('Sign in failed')
  $('#authMessage').removeClass()
  $('#authMessage').addClass('failure')
  console.log('signInFailure error is: ', error)
  $('#sign-in')[0].reset()
}

const changePasswordSuccess = function (data) {
  $('#authMessage').text('Changed password')
  $('#authMessage').removeClass()
  $('#authMessage').addClass('success')
  console.log('changePasswordSuccess data is: ', data)
  $('#change-password')[0].reset()
  $('#change-password').addClass('hidden')
}

const changePasswordFailure = function (error) {
  $('#authMessage').text('Could not change password')
  $('#authMessage').removeClass()
  $('#authMessage').addClass('failure')
  console.log('changePasswordFailure error is: ', error)
  $('#change-password')[0].reset()
}

const signOutSuccess = function (data) {
  $('#authMessage').text('Signed Out')
  $('#authMessage').removeClass()
  $('#authMessage').addClass('success')
  console.log('signOutSuccess data is: ', data)
  $('nav > button').addClass('hidden')
  $('#login-nav').removeClass('hidden')
  $('#register-nav').removeClass('hidden')
  $('form').addClass('hidden')
  $('section').addClass('hidden')
  $('.grid-container').addClass('hidden')
  $('#message').addClass('hidden')
  $('#stats-message').addClass('hidden')
}

const signOutFailure = function (error) {
  $('#authMessage').text('Could not sign out')
  $('#authMessage').removeClass()
  $('#authMessage').addClass('failure')
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
