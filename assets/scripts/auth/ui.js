'use strict'

const store = require('../store')

const clearForm = formID => {
  $(`#${formID}`)[0].reset()
  $(`#${formID}`).addClass('hidden')
}

const success = () => {
  $('#auth-message').removeClass('failure')
  $('#auth-message').removeClass('hidden')
  $('#auth-message').addClass('success')
}

const failure = () => {
  $('#auth-message').removeClass('success')
  $('#auth-message').removeClass('hidden')
  $('#auth-message').addClass('failure')
}

const signUpSuccess = function (data) {
  $('#auth-message').text('Signed up successfully. Please login to proceed.')
  success()
  console.log('signUpSuccess data is: ', data)
  clearForm('sign-up')
}

const signUpFailure = function (error) {
  $('#auth-message').text('Sign up failed')
  failure()
  console.log('signUpFailure error is: ', error)
  $('#sign-up')[0].reset()
}

const signInSuccess = function (data) {
  $('#auth-message').text('Signed in successfully')
  success()
  console.log('signInSuccess data is: ', data)
  clearForm('sign-in')
  $('nav > .hidden').removeClass('hidden')
  $('#login-nav').addClass('hidden')
  $('#register-nav').addClass('hidden')
  $('#how-to').removeClass('hidden')
  $('#how-to #logged-in').removeClass('hidden')
  $('#how-to #logged-out').addClass('hidden')
  store.user = data.user
}

const signInFailure = function (error) {
  $('#auth-message').text('Sign in failed')
  failure()
  console.log('signInFailure error is: ', error)
  $('#sign-in')[0].reset()
}

const changePasswordSuccess = function (data) {
  $('#auth-message').text('Changed password')
  success()
  console.log('changePasswordSuccess data is: ', data)
  $('#change-password')[0].reset()
  $('#change-password').addClass('hidden')
}

const changePasswordFailure = function (error) {
  $('#auth-message').text('Could not change password')
  failure()
  console.log('changePasswordFailure error is: ', error)
  $('#change-password')[0].reset()
}

const signOutSuccess = function (data) {
  console.log('signOutSuccess data is: ', data)
  $('nav > button').addClass('hidden')
  $('#home-nav').removeClass('hidden')
  $('#about-nav').removeClass('hidden')
  $('#login-nav').removeClass('hidden')
  $('#register-nav').removeClass('hidden')
  $('form').addClass('hidden')
  $('section').addClass('hidden')
  $('.grid-container').addClass('hidden')
  $('.message').addClass('hidden')
  $('.message').text('')
  $('#auth-message').text('Signed Out')
  $('#how-to #logged-in').addClass('hidden')
  $('#how-to #logged-out').removeClass('hidden')
  success()
}

const signOutFailure = function (error) {
  $('#auth-message').text('Could not sign out')
  failure()
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
