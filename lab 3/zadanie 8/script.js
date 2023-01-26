const password = document.getElementById("password");
const repeat = document.getElementById("repeat");
const eye1 = document.getElementById("eye1");
const eye2 = document.getElementById("eye2");
const message = document.getElementById("message");

password.addEventListener("keyup", validation);
repeat.addEventListener("keyup", samePassword);
password.addEventListener("keyup", samePassword);
eye1.addEventListener("click", changeVisibility);
eye2.addEventListener("click", changeVisibility);

function validator(place, statement) {
    if (statement) {
        document
            .querySelector(place)
            .setAttribute("style", "background-color: lightgreen;");
        document.querySelector(place).textContent = "done";
    } else {
        document
            .querySelector(place)
            .setAttribute("style", "background-color: lightgrey;");
        document.querySelector(place).textContent = "close";
    }
}

function validation() {
    let inputValue = password.value;
    validator("#length-validator > span", inputValue.length >= 8);
    validator("#special-validator > span", inputValue.match(/[^a-zA-Z0-9]/));
    validator("#capital-validator > span", inputValue.match(/[A-Z]/));
    validator("#digit-validator > span", inputValue.match(/[0-9]/));
}

function changeVisibility() {
    let eye = this;
    let eyeParent = eye.parentElement;
    let input = eyeParent.firstElementChild;
    if (input.type === "password") {
        input.type = "text";
        eye.textContent = "visibility";
    } else {
        input.type = "password";
        eye.textContent = "visibility_off";
    }
}

function samePassword(event) {
    if (event.keyCode == 13) {
        if (repeat.value !== password.value && repeat.value.length > 0) {
            message.innerText = "Hasła są inne!";
            repeat.setAttribute("style", "border-color: lightgrey;");
        } else {
            message.innerText = "";
            repeat.setAttribute("style", "border-color: lightgreen;");
        }
    }
}
