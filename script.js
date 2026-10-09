
const theme = document.getElementById("theme");
const text = document.getElementById("text");
const counter = document.getElementById("counter");

const upper = document.getElementById("upper");
const lower = document.getElementById("lower");
const red = document.getElementById("red");
const blue = document.getElementById("blue");
const submit = document.getElementById("submit");
const result = document.getElementById("result");

// Dark and light theme
theme.onclick = function () {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        theme.textContent = "Light Theme";
    } else {
        theme.textContent = "Dark Theme";
    }
};

// Character counter
function updateCounter() {
    counter.textContent = text.value.length;
}

text.addEventListener("input", updateCounter);

// Uppercase
upper.onclick = function () {
    text.value = text.value.toUpperCase();
    updateCounter();
};

// Lowercase
lower.onclick = function () {
    text.value = text.value.toLowerCase();
    updateCounter();
};

// Red text
red.onclick = function () {
    text.style.color = "red";
};

// Blue text
blue.onclick = function () {
    text.style.color = "blue";
};

// Submit text
submit.onclick = function () {
    if (text.value.trim() === "") {
        result.textContent = "Please type something first!";
    } else {
        result.textContent = text.value;
    }
};
