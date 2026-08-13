const title = document.getElementById("title");

const text = "jon latifi.";

let i = 0;

function writeName() {
    if (i < text.length) {
        title.textContent += text[i];
        i++;

        setTimeout(writeName, 130);
    }
}

writeName();


function showPage(page) {
    document.getElementById(page).classList.add("active");
}


function hidePage(page) {
    document.getElementById(page).classList.remove("active");
}