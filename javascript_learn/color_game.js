var colors = generateSquareColors(6)
// selects all squares
var squares = document.querySelectorAll(".square");

// hard coded a picked color for development persons
var pickedColor = pickedColor();
var colorDisplay = document.querySelector("#colorDisplay");

// the random rgb color presented in the h1
// is the color of the square you must pick
colorDisplay.textContent = pickedColor;

// for loop to assign a color to a square
for(var i = 0; i < squares.length; i++){
  squares[i].style.background = colors[i];
  //add click listeners to all squares
  squares[i].addEventListener("click", function(){
    var clickedSquare = this.style.background;
    if(clickedSquare == pickedColor){
      prompt("WINNER!!!");
      changeColors(pickedColor)
    } else {
      alert("You clicked the WRONG square");
      this.style.background = "#232323";
    }
  });
}

function randomColor() {
  // generate a random int between 0 and 255
  // r - red | b - blue | g - green
  var r = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);

  return "rgb("+r+", "+b+", "+g+")";
}

function generateSquareColors(num){
  // empty list of colors
  var colors = [];

  // creates how ever many colors of 'num'
  for(var n = 0; n < num; n++){
    colors.push(randomColor());
  }
  // returns a complete list of random colors
  return colors;
}

function pickedColor(){
  // this gets a random number between 0 and the length of
  // the colors array
  var randoNum = Math.floor(Math.random() * colors.length)
  return colors[randoNum]
}

function changeColors(color){
  for(var n = 0; n < squares.length; n++){
    squares[n].style.background = color;
  }
}
