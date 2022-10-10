const logos = document.querySelectorAll('.logo')
const containers = document.querySelectorAll('.droppable')

document.addEventListener('drop', e => {
  e.preventDefault()
})

addDragListeners()

function addDragListeners() {
  logos.forEach(item => {
    item.addEventListener('dragstart', e => {
      item.classList.add('dragging')
    })

    item.addEventListener('dragend', e => {
      item.classList.remove('dragging')
    })
  })

  containers.forEach(container =>
    container.addEventListener('dragover', e => {
      e.preventDefault()
      const item = document.querySelector('.dragging')
      container.appendChild(item)
    })
  )
}
