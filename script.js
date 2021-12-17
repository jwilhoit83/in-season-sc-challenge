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
  { dallas: '5' },
  { detroit: '0' },
  { edmonton: '2' },
  { florida: '8' },
  { vegas: '1' },
  { 'los-angeles': '3' },
  { minnesota: '0' },
  { montreal: '1' },
  { nashville: '0' },
  { 'new-jersey': '0' },
  { 'ny-islanders': '0' },
  { 'ny-rangers': '0' },
  { ottawa: '0' },
  { philadelphia: '2' },
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

const currentChamp = 'montreal'

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

// adds a border to the active cup champ and changes theme to team colors

document.getElementById(currentChamp).parentElement.classList.add('champ')
document.documentElement.classList.add(currentChamp)
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
