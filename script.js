// object for the team IDs on the NHL API
const teamIds = {
  anaheim: 24,
  arizona: 53,
  boston: 6,
  buffalo: 7,
  calgary: 20,
  carolina: 12,
  chicago: 16,
  colorado: 21,
  columbus: 29,
  dallas: 25,
  detroit: 17,
  edmonton: 22,
  florida: 13,
  vegas: 54,
  "los-angeles": 26,
  minnesota: 30,
  montreal: 8,
  nashville: 18,
  "new-jersey": 1,
  "ny-islanders": 2,
  "ny-rangers": 3,
  ottawa: 9,
  philadelphia: 4,
  pittsburgh: 5,
  "san-jose": 28,
  seattle: 55,
  "st-louis": 19,
  tampa: 14,
  toronto: 10,
  vancouver: 23,
  washington: 15,
  winnipeg: 52,
};

const currentChamp = "vancouver";

let days = 20;
let dateCurrent = new Date();
let dateTemp = new Date().setDate(new Date().getDate() + days);
let dateFuture = new Date(dateTemp);

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

// grabbing the upcoming schedule for the current cup holder and adding date and logos to the DOM
fetch(
  `https://statsapi.web.nhl.com/api/v1/schedule?teamId=${
    teamIds[currentChamp]
  }&startDate=${formatDate(dateCurrent)}&endDate=${formatDate(dateFuture)}`
)
  .then((res) => res.json())
  .then((res) => {
    const game = res.dates[0].games[0];

    // formatting the home and away team names correctly
    let homeTeam = game.teams.home.team.name;
    let awayTeam = game.teams.away.team.name;
    homeTeam = homeTeam
      .split(" ")
      [homeTeam.split(" ").length - 1].toLowerCase();
    awayTeam = awayTeam
      .split(" ")
      [awayTeam.split(" ").length - 1].toLowerCase();

    // adding date and team logos for the next game
    document.getElementById("date").innerText = new Date(
      game.gameDate
    ).toLocaleString("en-US", {
      weekday: "long",
      month: "short",
      day: "numeric",
    });
    document.getElementById("time").innerText = new Date(
      game.gameDate
    ).toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
    });
    document
      .getElementById("home")
      .setAttribute("src", `logos/${homeTeam}.png`);
    document
      .getElementById("away")
      .setAttribute("src", `logos/${awayTeam}.png`);
  });

const teamPoints = [
  { anaheim: "0" },
  { arizona: "0" },
  { boston: "0" },
  { buffalo: "2" },
  { calgary: "3" },
  { carolina: "0" },
  { chicago: "0" },
  { colorado: "1" },
  { columbus: "0" },
  { dallas: "0" },
  { detroit: "0" },
  { edmonton: "0" },
  { florida: "0" },
  { vegas: "0" },
  { "los-angeles": "0" },
  { minnesota: "0" },
  { montreal: "0" },
  { nashville: "0" },
  { "new-jersey": "0" },
  { "ny-islanders": "0" },
  { "ny-rangers": "0" },
  { ottawa: "0" },
  { philadelphia: "0" },
  { pittsburgh: "0" },
  { "san-jose": "0" },
  { seattle: "1" },
  { "st-louis": "0" },
  { tampa: "0" },
  { toronto: "0" },
  { vancouver: "1" },
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

// adds a border to the active cup champ and changes theme to team colors

document.getElementById(currentChamp).parentElement.classList.add("champ");

// document.documentElement.className = currentChamp

// let themeSelector = document.getElementById('theme-selector')
// themeSelector.addEventListener('change', () => document.documentElement.className = themeSelector.value)

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
