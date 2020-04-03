document.addEventListener('DOMContentLoaded', function () {
  // Definitions
  let canvas = document.getElementById('paint-canvas')
  let context = canvas.getContext('2d')
  let boundings = canvas.getBoundingClientRect()

  // specs
  let mouseX = 0
  let mouseY = 0
  let isDrawing = false
  context.strokeStyle = '#000' // initial brush color
  context.lineWidth = 1 // initial brush width

  // handle colors
  let colors = document.getElementsByClassName('colors')[0]

  colors.addEventListener('click', function (e) {
    let target = e.target
    context.strokeStyle = target.value || '#000'
  })

  // handle brushes
  let brushes = document.getElementsByClassName('brushes')[0]

  brushes.addEventListener('click', function (e) {
    let target = e.target
    context.lineWidth = target.value || 1
  })

  // mouse down event
  canvas.addEventListener('mousedown', function (e) {
    setMouseCoordinates(e)
    isDrawing = true

    // start drawing
    context.beginPath()
    context.moveTo(mouseX, mouseY)
  })

  // mouse move event
  canvas.addEventListener('mousemove', function (e) {
    setMouseCoordinates(e)

    if (isDrawing) {
      context.lineTo(mouseX, mouseY)
      context.stroke()
    }
  })

  // mouse up event
  canvas.addEventListener('mouseup', function (e) {
    setMouseCoordinates(e)
    isDrawing = false
  })

  // clear
  let clear = document.getElementById('clear')

  clear.addEventListener('click', function (e) {
    let target = e.target

    console.log(target)
  })

  // save
  let save = document.getElementById('save')

  save.addEventListener('click', function (e) {
    let target = e.target

    console.log(target)
  })

  // handle mouse coords
  function setMouseCoordinates (e) {
    mouseX = e.clientX - boundings.left
    mouseY = e.clientY - boundings.top
  }
})
