const teamPoints = [
  { anaheim: '0' },
  { arizona: '0' },
  { boston: '2' },
  { buffalo: '0' },
  { calgary: '0' },
  { carolina: '0' },
  { chicago: '0' },
  { colorado: '0' },
  { columbus: '0' },
  { dallas: '0' },
  { detroit: '0' },
  { edmonton: '0' },
  { florida: '8' },
  { vegas: '0' },
  { 'los-angeles': '3' },
  { minnesota: '0' },
  { montreal: '0' },
  { nashville: '0' },
  { 'new-jersey': '0' },
  { 'ny-islanders': '0' },
  { 'ny-rangers': '0' },
  { ottawa: '0' },
  { philadelphia: '0' },
  { pittsburgh: '1' },
  { 'san-jose': '0' },
  { seattle: '0' },
  { 'st-louis': '0' },
  { tampa: '0' },
  { toronto: '1' },
  { vancouver: '0' },
  { washington: '0' },
  { winnipeg: '2' },
]

const currentChamp = 'winnipeg'

const james = document.querySelector('.james')
const jerod = document.querySelector('.jerod')
const jeff = document.querySelector('.jeff')
const billy = document.querySelector('.billy')

const players = [james, jerod, jeff, billy]



// iterates through team points array and displays all team points accordingly

teamPoints.forEach(team => {
  teamName = Object.keys(team)[0]
  document.getElementById(teamName).innerText = team[teamName]
})

// adds a border to the active cup champ

document.getElementById(currentChamp).parentElement.classList.add('champ')

// gets all team points for each player and displays the max value of each next to the player name

getPoints()

function getPoints() {
  players.forEach(player => {
    const playerArray = []
    player.querySelectorAll('.team-score').forEach(team => {
      playerArray.push(Number(team.innerText))
    })

    player.querySelector('#high-points').innerText = Math.max(...playerArray)
  })
}