const currentChamp = "chicago";

let nextHome = ''
let nextVisitor = ''
let nextDate

function formatDate(date) {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return [
    year,
    month.toString().padStart(2, "0"),
    day.toString().padStart(2, "0"),
  ].join("-");
}

// schedule and upcoming game widget

fetch('24-25-schedule.json')
  .then(res => res.json())
  .then(res => {

    let schedule = {}

    // reformatting the schedule downloaded from hockeyreference.com

    res.forEach(game => {
      if (!Object.keys(schedule).includes(game.date)) {
        schedule[game.date] = { 'games': [] }
      }
      schedule[game.date].games.push({ 'home': game.home, 'visitor': game.visitor })
    })

    let found = 0

    for (let i = 0; i < 20; i++) {
      let tempDate = new Date().setDate(new Date().getDate() + i)
      tempDate = new Date(tempDate)
      tempDate = formatDate(tempDate)

      if(!schedule[tempDate]){
        continue
      }

      schedule[tempDate].games.forEach(game => {
        if (Object.values(game).includes(currentChamp)) {
          nextHome = game.home
          nextVisitor = game.visitor
          nextDate = tempDate
          found = 1
        }
      })

      if (found != 0) break

    }

    // adding date and team logos for the next game
    
    document.getElementById("date").innerText = new Date(
      nextDate
    ).toLocaleString("en-us", {
      timeZone: "UTC",
      weekday: "long",
      month: "short",
      day: "numeric",
    });
    document
      .getElementById("home")
      .setAttribute("src", `logos/${nextHome}.png`);
    document
      .getElementById("away")
      .setAttribute("src", `logos/${nextVisitor}.png`);

  })

const teamPoints = [
  { anaheim: "4" },
  { boston: "2" },
  { buffalo: "0" },
  { calgary: "2" },
  { carolina: "1" },
  { chicago: "2" },
  { colorado: "4" },
  { columbus: "2" },
  { dallas: "9" },
  { detroit: "2" },
  { edmonton: "0" },
  { florida: "1" },
  { vegas: "3" },
  { "los-angeles": "0" },
  { minnesota: "0" },
  { montreal: "3" },
  { nashville: "1" },
  { "new-jersey": "0" },
  { "ny-islanders": "1" },
  { "ny-rangers": "1" },
  { ottawa: "5" },
  { philadelphia: "0" },
  { pittsburgh: "3" },
  { "san-jose": "2" },
  { seattle: "0" },
  { "st-louis": "4" },
  { tampa: "4" },
  { toronto: "2" },
  { utah: "4" },
  { vancouver: "4" },
  { washington: "10" },
  { winnipeg: "3"  },
];

const james = document.querySelector(".james");
const jerod = document.querySelector(".jerod");
const jeff = document.querySelector(".jeff");
const billy = document.querySelector(".billy");

const players = [james, jerod, jeff, billy];

// iterates through team points array and displays all team points accordingly

teamPoints.forEach((team) => {
  const teamName = Object.keys(team)[0];
  document.getElementById(teamName).innerText = team[teamName];
});

// adds a border to the active cup champ

document.getElementById(currentChamp).parentElement.classList.add("champ");

// gets all team points for each player and displays the max value of each next to the player name

getPoints();

function getPoints() {
  players.forEach((player) => {
    let playerTotal = 0;
    const playerArray = [];
    player.querySelectorAll(".team-score").forEach((team) => {
      playerTotal += Number(team.innerText);
      playerArray.push(Number(team.innerText));
    });

    player.querySelector("#high-points").innerText = `High ${Math.max(...playerArray)} / Total ${playerTotal}`;
  });
}

// Rules Modal functionality

let rulesModal = document.getElementById('rules-modal');
let modalOpen = document.getElementById('modal-open');
let modalClose = document.getElementById('modal-close');

modalOpen.addEventListener('click', () => {
  rulesModal.showModal();
})

modalClose.addEventListener('click', () => {
  rulesModal.close();
})

// const teamPoints23_24 = [
//   { anaheim: "2" },
//   { utah: "6" },
//   { boston: "7" },
//   { buffalo: "0" },
//   { calgary: "5" },
//   { carolina: "7" },
//   { chicago: "1" },
//   { colorado: "9" },
//   { columbus: "1" },
//   { dallas: "3" },
//   { detroit: "0" },
//   { edmonton: "0" },
//   { florida: "3" },
//   { vegas: "8" },
//   { "los-angeles": "0" },
//   { minnesota: "0" },
//   { montreal: "2" },
//   { nashville: "3" },
//   { "new-jersey": "2" },
//   { "ny-islanders": "0" },
//   { "ny-rangers": "1" },
//   { ottawa: "0" },
//   { philadelphia: "2" },
//   { pittsburgh: "4" },
//   { "san-jose": "0" },
//   { seattle: "2" },
//   { "st-louis": "2" },
//   { tampa: "0" },
//   { toronto: "0" },
//   { vancouver: "6" },
//   { washington: "1" },
//   { winnipeg: "2" },
// ];
