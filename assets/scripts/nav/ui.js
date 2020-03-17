'use strict'

const showView = name => {
  $(`#${name}`).removeClass('hidden')
}

module.exports = {
  showView
}
