let home = document.getElementById("home-score");
let away = document.getElementById("away-score");
let counterHome= 0;
let counterAway= 0;
function plus(team, points) {
    if (team === 'home') {
        counterHome += points;
        home.innerHTML = counterHome;
    } else if (team === 'away') {
        counterAway += points;
        away.innerHTML = counterAway;
    }
}
