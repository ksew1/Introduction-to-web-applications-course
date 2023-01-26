let circle = document.getElementById("circle");
let boundary = document.getElementById("boundary");
let box = document.getElementById("box");
let textAlert = document.getElementById("text-alert");

boundary.addEventListener("click", changePosition);
box.addEventListener("click", outOfBoundary);

function changePosition(event) {
    circle.setAttribute(
        "style",
        "left:" +
            (-circle.offsetWidth / 2 + event.offsetX) +
            "px;" +
            "top: " +
            (-circle.offsetHeight / 2 + event.offsetY) +
            "px"
    );
    event.stopPropagation();
}

function outOfBoundary(event) {
    textAlert.setAttribute(
        "style",
        "display: block;" +
            "left:" +
            (event.offsetX - textAlert.offsetWidth / 2) +
            "px;" +
            "top: " +
            (event.offsetY - textAlert.offsetHeight / 2) +
            "px"
    );
    setTimeout(() => {
        textAlert.style.display = "none";
    }, 1500);
}
