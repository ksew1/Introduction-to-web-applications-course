const blue = document.getElementById("blue");
const red = document.getElementById("red");
const yellow = document.getElementById("yellow");
const message = document.getElementById("message");
const counter = document.getElementById("counter");
const propagationButton = document.getElementById("propagation");
const resetButton = document.getElementById("reset");
const captureButton = document.getElementById("capture");

let sum = 0;
let propagation = false;
let capture = false;

yellow.addEventListener("click", yellowBox, capture);
red.addEventListener("click", redBox, capture);
blue.addEventListener("click", blueBox, capture);

propagationButton.addEventListener("click", changePropagation);
resetButton.addEventListener("click", reset);
captureButton.addEventListener("click", changeCapture);

function reset() {
    sum = 0;
    counter.innerText = 0;
    message.innerText = "";

    red.addEventListener("click", redBox, capture);
    red.setAttribute("style", "background-color: red;");

    yellow.addEventListener("click", yellowBox, capture);
    yellow.setAttribute("style", "background-color: yellow;");

    if (capture) changeCapture();
    if (propagation) changePropagation();
}
function changeCapture() {
    yellow.removeEventListener("click", yellowBox, capture);
    red.removeEventListener("click", redBox, capture);
    blue.removeEventListener("click", blueBox, capture);

    capture = !capture;

    yellow.addEventListener("click", yellowBox, capture);
    red.addEventListener("click", redBox, capture);
    blue.addEventListener("click", blueBox, capture);
    check();

    if (capture) captureButton.innerText = "Capture";
    else captureButton.innerText = "Bubble";
}
function changePropagation() {
    propagation = !propagation;
    if (propagation) propagationButton.innerText = "StopPropagation";
    else propagationButton.innerText = "StartPropagation";
}
function check() {
    if (sum > 30) {
        red.removeEventListener("click", redBox, capture);
        red.setAttribute("style", "background-color: gray;");
    }

    if (sum > 50) {
        yellow.removeEventListener("click", yellowBox, capture);
        yellow.setAttribute("style", "background-color: gray;");
    }
}

function blueBox(e) {
    sum += 1;
    message.innerText = "nacisnąłeś niebieski o wartości 1";
    counter.innerText = sum;
    if (!propagation) {
        e.stopPropagation();
    }
    check();
}

function redBox(e) {
    sum += 2;
    message.innerText = "nacisnąłeś czerwony o wartości 2";
    counter.innerText = sum;
    if (!propagation) {
        e.stopPropagation();
    }
    check();
}

function yellowBox(e) {
    sum += 5;
    message.innerText = "nacisnąłeś żółty o wartości 5";
    counter.innerText = sum;
    if (!propagation) {
        e.stopPropagation();
    }
    check();
}
