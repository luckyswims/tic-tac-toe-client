'use strict'

const showView = name => {
  console.log(`Open ${name} view`)
  $(`#${name}`).removeClass('hidden')
}

module.exports = {
  showView
}
