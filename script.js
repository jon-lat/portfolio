// Typewriter

const title = document.getElementById("title");
const text = "jon latifi.";

let charIndex = 0;

function writeName() {
    if (charIndex >= text.length) return;

    title.textContent += text[charIndex];
    charIndex++;

    setTimeout(writeName, 130);
}


// Page navigation

function showPage(page) {
    document.getElementById(page).classList.add("active");
}

function hidePage(page) {
    document.getElementById(page).classList.remove("active");
}


// Matrix background

const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const characters =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}".split("");

const fontSize = 13;
const columnCount = canvas.width / fontSize;
const drops = [];

for (let column = 0; column < columnCount; column++) {
    drops[column] = Math.floor(Math.random() * -100);
}

function drawMatrix() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.07)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#6cab4b";
    ctx.font = `${fontSize}px Arial`;

    for (let column = 0; column < drops.length; column++) {
        const character =
            characters[Math.floor(Math.random() * characters.length)];

        const x = column * fontSize;
        const y = drops[column] * fontSize;

        ctx.fillText(character, x, y);

        if (y > canvas.height && Math.random() > 0.992) {
            drops[column] = 0;
        }

        drops[column]++;
    }
}

setInterval(drawMatrix, 55);
writeName();