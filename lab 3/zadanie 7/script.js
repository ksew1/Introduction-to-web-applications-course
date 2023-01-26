answerQuestions();
async function answerQuestions() {
    let data = await fetchData();
    questionA(data);
    questionB(data);
    questionC(data);
    questionD(data);
    questionE(data);
    questionF(data);
    questionG(data);
}
async function fetchData() {
    let response = await fetch("http://localhost:3000/cities");
    let data = await response.json();
    return data;
}

async function questionA(data) {
    let filtered = data.filter(function (city) {
        return city.province === "małopolskie";
    });
    let result = [];
    for (let key in filtered) {
        result.push(" " + filtered[key].name);
    }
    document.getElementById("a-answer").innerText = result;
}

async function questionB(data) {
    let filtered = data.filter(function (city) {
        let counter = 0;
        for (let i = 0; i < city.name.length; i++) {
            letter = city.name.charAt(i);
            if (letter == "A" || letter == "a") counter++;
            if (counter == 2) return true;
        }
        return false;
    });

    let result = [];
    for (let key in filtered) {
        result.push(" " + filtered[key].name);
    }
    document.getElementById("b-answer").innerText = result;
}

async function questionC(data) {
    let result = [];
    for (let key in data) {
        result.push([data[key].name, data[key].dentensity]);
    }
    result.sort(function (a, b) {
        return b[1] - a[1];
    });
    document.getElementById("c-answer").innerText = result[4][0];
}

async function questionD(data) {
    let filtered = data.filter(function (city) {
        return city.people > 100000;
    });

    let result = [];

    for (let key in filtered) {
        result.push(" " + filtered[key].name + " city");
    }
    document.getElementById("d-answer").innerText = result;
}

async function questionE(data) {
    let above = 0;
    let below = 0;
    for (let key in data) {
        if (data[key].people > 80000) above++;
        else below++;
    }
    if (above > below) {
        document.getElementById("e-answer").innerText =
            "Więcej jest miast powyżej 80000 mieszkańców (" +
            above +
            "), niż tych poniżej (" +
            below +
            ")";
    } else if (above < below) {
        document.getElementById("e-answer").innerText =
            "Więcej jest miast poniżej 80000 mieszkańców (" +
            below +
            "), niż tych powyżej (" +
            above +
            ")";
    } else {
        document.getElementById("e-answer").innerText =
            "Miast poniżej 80000 mieszkańców (" +
            below +
            "), jest tyle samo co tych powyżej(" +
            above +
            ")";
    }
}

async function questionF(data) {
    let sum = 0;
    let counter = 0;
    let filtered = data.filter(function (city) {
        return city.township.charAt(0) === "p";
    });
    for (let key in filtered) {
        sum += filtered[key].area;
        counter += 1;
    }
    let result = sum / counter;
    result = result.toPrecision(5);
    document.getElementById("f-answer").innerText = result;
}

async function questionG(data) {
    let filtered = data.filter(function (city) {
        return city.province === "pomorskie";
    });
    let counter = 0;
    for (let key in filtered) {
        if (filtered[key].people > 5000) counter += 1;
    }
    if (counter < filtered.length) {
        document.getElementById("g-answer").innerText =
            "Jest takich miast: " +
            "(" +
            counter +
            ") i nie są to wszystkie miasta";
    } else {
        document.getElementById("g-answer").innerText =
            "Jest takich miast: " +
            "(" +
            counter +
            ") i są to wszystkie miasta";
    }
}
