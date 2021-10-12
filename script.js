// const logos = document.querySelectorAll('.logo')
// const containers = document.querySelectorAll('.droppable')

// document.addEventListener('drop', e => {
//   e.preventDefault()
// })

// addDragListeners()

// function addDragListeners() {
//   logos.forEach(item => {
//     item.addEventListener('dragstart', e => {
//       item.classList.add('dragging')
//     })

//     item.addEventListener('dragend', e => {
//       item.classList.remove('dragging')
//     })
//   })

//   containers.forEach(container =>
//     container.addEventListener('dragover', e => {
//       e.preventDefault()
//       const item = document.querySelector('.dragging')
//       container.appendChild(item)
//     })
//   )
// }

// Anaheim	0	Columbus	0	Montreal	0	San Jose	0
// Arizona	0	Dallas	0	Nashville	0	Seattle	0
// Boston	0	Detroit	0	New Jersey	0	St. Louis	0
// Buffalo	0	Edmonton	0	New York Islanders	0	Tampa Bay	0
// Calgary	0	Florida	0	New York Rangers	0	Toronto	0
// Carolina	0	Las Vegas	0	Ottawa	0	Vancouver	0
// Chicago	0	Los Angeles	0	Philadelphia	0	Washington	0
// Colorado	0	Minnesota	0	Pittsburgh	0	Winnipeg	0

const teamPoints = [
  { anaheim: '0' },
  { arizona: '0' },
  { boston: '0' },
  { buffalo: '0' },
  { calgary: '0' },
  { carolina: '0' },
  { chicago: '0' },
  { colorado: '0' },
  { columbus: '0' },
  { dallas: '0' },
  { detroit: '0' },
  { edmonton: '0' },
  { florida: '0' },
  { vegas: '0' },
  { 'los-angeles': '0' },
  { minnesota: '0' },
  { montreal: '0' },
  { nashville: '0' },
  { 'new-jersey': '0' },
  { 'ny-islanders': '0' },
  { 'ny-rangers': '0' },
  { ottawa: '0' },
  { philadelphia: '0' },
  { pittsburgh: '0' },
  { 'san-jose': '0' },
  { seattle: '0' },
  { 'st-louis': '0' },
  { tampa: '0' },
  { toronto: '0' },
  { vancouver: '0' },
  { washington: '0' },
  { winnipeg: '0' },
]

const currentChamp = 'tampa'

teamPoints.forEach(team => {
  teamName = Object.keys(team)[0]
  document.getElementById(teamName).innerText = team[teamName]
})

document.getElementById(currentChamp).parentElement.classList.add('champ')