const heading = document.getElementById("heading");
const para = document.getElementById("para");
const input = document.getElementById("inputText");

let fontSize = 16;
let isHidden = false;

// Change Heading
document.getElementById("changeText").addEventListener("click", () => {
    heading.textContent = input.value || "Please enter text!";
});

// Change Background
document.getElementById("changeColor").addEventListener("click", () => {
    document.body.style.backgroundColor =
        document.body.style.backgroundColor === "lightblue"
        ? "#e6e6e6"
        : "lightblue";
});

// Increase Font Size
document.getElementById("increaseFont").addEventListener("click", () => {
    fontSize += 2;
    para.style.fontSize = fontSize + "px";
});

// Show/Hide Paragraph
document.getElementById("togglePara").addEventListener("click", () => {
    isHidden = !isHidden;
    para.style.display = isHidden ? "none" : "block";
});

// Reset Everything
document.getElementById("reset").addEventListener("click", () => {
    heading.textContent = "Welcome to JavaScript Lab";
    para.style.fontSize = "16px";
    document.body.style.backgroundColor = "#e6e6e6";
    para.style.display = "block";
    input.value = "";
    fontSize = 16;
    isHidden = false;
});