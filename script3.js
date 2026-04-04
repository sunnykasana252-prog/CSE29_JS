// Select elements
const heading = document.getElementById("heading");
const para = document.getElementById("para");
const input = document.getElementById("inputText");

// Change heading text
document.getElementById("changeText").addEventListener("click", function() {
    heading.textContent = input.value || "No text entered!";
});

// Change background color
document.getElementById("changeColor").addEventListener("click", function() {
    document.body.style.backgroundColor = 
        document.body.style.backgroundColor === "lightblue" ? "white" : "lightblue";
});

// Increase font size
document.getElementById("increaseFont").addEventListener("click", function() {
    let currentSize = window.getComputedStyle(para).fontSize;
    let newSize = parseFloat(currentSize) + 2;
    para.style.fontSize = newSize + "px";
});

// Show/Hide paragraph
document.getElementById("togglePara").addEventListener("click", function() {
    if (para.style.display === "none") {
        para.style.display = "block";
    } else {
        para.style.display = "none";
    }
});