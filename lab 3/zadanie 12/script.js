const gunpoint = document.querySelector("#gunpoint");
const board = document.querySelector("#board");
const score = document.querySelector("#score");

let points = 0;

document.addEventListener("mousemove", changeGunpointPosition);
document.addEventListener("click", shoot);

let placeInterval = setInterval(() => {
    setTimeout(place, randInt(3000, 2000));
}, 1000);

function randInt(max, min) {
    return Math.floor(Math.random() * max + min);
}

function place() {
    let zombie = new Zombie();
    board.appendChild(zombie.structure);
}

function Zombie() {
    const moveAnimation = [
        { left: "110%", scale: this.size, bottom: this.y },
        { left: "-300px", scale: this.size, bottom: this.y },
    ];

    this.size = randInt(15, 10) / 10;
    this.speed = randInt(15000, 1000);
    this.y = randInt(500, 100);

    this.structure = document.createElement("div");
    this.structure.classList.add("zombie");

    this.structure.animate(moveAnimation, this.speed);
}

function changeScore() {
    let stringPoints = points.toString();

    if (points > 99999) return "YOU WON";

    return "0".repeat(5 - stringPoints.length) + stringPoints;
}

function shoot(e) {
    console.log(e.target);
    if (e.target.matches(".zombie")) {
        points += 12;
        e.target.remove();
    } else points -= 6;

    if (points < 0) points = 0;
    score.innerText = changeScore();
}

function changeGunpointPosition(e) {
    gunpoint.setAttribute(
        "style",
        "left:" +
        (e.pageX - gunpoint.offsetWidth / 2) +
        "px;" +
        "top: " +
        (e.pageY - gunpoint.offsetHeight / 2) +
        "px"
    );
}
