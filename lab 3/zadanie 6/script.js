function isValid() {
    return (
        document.getElementById("name").checkValidity() &&
        document.getElementById("phone").checkValidity()
    );
}

let btn = document.getElementById("btn");
btn.addEventListener("click", addToEntries);

function addToEntries() {
    if (!isValid()) return;
    let entry = document.createElement("div");
    let trash = document.createElement("div");
    let info = document.createElement("div");
    let info_name = document.createElement("h3");
    let info_phone = document.createElement("span");
    let name = document.getElementById("name");
    let phone = document.getElementById("phone");
    entry.classList.add("entry-style");
    trash.classList.add("trash");
    trash.addEventListener("click", deleteEntry);
    trash.innerText = "🗑";
    entry.appendChild(trash);
    info_name.innerText = name.value;
    info_phone.innerText = phone.value;
    info.appendChild(info_name);
    info.appendChild(info_phone);
    entry.appendChild(info);
    document.getElementById("entries").appendChild(entry);

    name.value = "";
    phone.value = "";
}

function deleteEntry() {
    let parent = document.getElementById("entries");
    let index = Array.from(parent.children).indexOf(this.parentNode);
    parent.removeChild(parent.children[index]);
}
