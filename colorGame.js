var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function() {
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    messageDisplay.textContent = "";
    for(var i = 0; i < squares.length; i++) {
        if(colors[i]) {
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
});

hardBtn.addEventListener("click", function() {
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    messageDisplay.textContent = "";
    for(var i = 0; i < squares.length; i++) {
            squares[i].style.background = colors[i];
            squares[i].style.display = "block";
    }
});

resetButton.addEventListener("click", function() {
    // generate all new colors
    colors = generateRandomColors(numSquares);
    // pick a new color from array
    pickedColor = pickColor();
    // change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    // change colors of square
    for(var i = 0; i < squares.length; i++) {
        squares[i].style.background = colors[i];
    }
    h1.style.background = "steelblue";
    this.textContent = "New Colors";
    messageDisplay.textContent = "";
})

colorDisplay.textContent = pickedColor;
for(var i = 0; i < squares.length; i++) {
    // add initial squares to squares
    squares[i].style.background = colors[i];
    // add click listeners to squares
    squares[i].addEventListener("click", function() {
    // grab color of clicked square
        var clickedColor = this.style.background;
        // compare color of picked color
        if(clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct!";
            resetButton.textContent = "Play Again?";
            changeColors(clickedColor);
            h1.style.background = clickedColor;
        } else {
            this.style.background = "#232323";
            messageDisplay.textContent = "Try again!"
        }
    });
}

function changeColors(color) {
    // loop through all squares
    for(var i = 0; i < squares.length; i++) {
        // change each color to match given color
        squares[i].style.background = color;
    }
}

function pickColor() {
    
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    //create array
    var arr = [];
    // repeat num times
    for( var i = 0; i < num; i++) {
        // get random array and push it into array
        arr.push(randomColor());
    }
    // return array
    return arr;
}

function randomColor() {
    // pick "red" from 0 - 255
    var r = Math.floor(Math.random() * 256);
    // pick "green" from 0 - 255
    var g = Math.floor(Math.random() * 256);
    // pick "blue" from 0 - 255
    var b = Math.floor(Math.random() * 256);
    return ("rgb(" + r + ", " + g + ", " + b + ")");
    
}