'use strict'

const store = require('../store')

const signUpSuccess = function (data) {
  $('#authMessage').text('Signed up successfully')
  $('#authMessage').removeClass()
  $('#authMessage').addClass('success')
  console.log('signUpSuccess data is: ', data)
  $('#sign-up')[0].reset()
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
  $('#sign-in')[0].reset()
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
