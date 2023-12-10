const currentChamp = "philadelphia";

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

fetch('23-24-schedule.json')
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
  { anaheim: "2" },
  { arizona: "6" },
  { boston: "0" },
  { buffalo: "0" },
  { calgary: "0" },
  { carolina: "0" },
  { chicago: "1" },
  { colorado: "0" },
  { columbus: "0" },
  { dallas: "1" },
  { detroit: "0" },
  { edmonton: "0" },
  { florida: "0" },
  { vegas: "8" },
  { "los-angeles": "0" },
  { minnesota: "0" },
  { montreal: "0" },
  { nashville: "0" },
  { "new-jersey": "1" },
  { "ny-islanders": "0" },
  { "ny-rangers": "1" },
  { ottawa: "0" },
  { philadelphia: "2" },
  { pittsburgh: "4" },
  { "san-jose": "0" },
  { seattle: "0" },
  { "st-louis": "0" },
  { tampa: "0" },
  { toronto: "0" },
  { vancouver: "0" },
  { washington: "0" },
  { winnipeg: "0" },
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