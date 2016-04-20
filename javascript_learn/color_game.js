/*
          FUNCTIONS
*/
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
  var randoNum = Math.floor(Math.random() * colors.length);
  return colors[randoNum];
}

function changeColors(color){
  for(var n = 0; n < squares.length; n++){
    squares[n].style.background = color;
  }
}

function randomColor() {
  // generate a random int between 0 and 255
  // r - red | b - blue | g - green
  var r = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);

  return "rgb("+r+", "+b+", "+g+")";
}
/*
          GLOBAL VARIABLES
*/

var colors = generateSquareColors(6);

var resetButton = document.querySelector("#resetButton")
// selects all squares
var squares = document.querySelectorAll(".square");

// correctColor is now the return of the pickedColor function
var correctColor = pickedColor();
var colorDisplay = document.querySelector("#colorDisplay");

// game messaging area
var messageArea = document.querySelector("#message");

// the random rgb color presented in the h1
// is the color of the square you must pick
colorDisplay.textContent = correctColor;

/*
          EVENT LISTENERS
*/

// for loop to assign a color to a square
for(var i = 0; i < squares.length; i++){
  squares[i].style.background = colors[i];
  //add click listeners to all squares
  squares[i].addEventListener("click", function(){
    var clickedSquare = this.style.background;
    if(clickedSquare == correctColor){
      alert("WINNER!!!");
      changeColors(correctColor)
      messageArea.textContent = "Winner!"
    } else {
      this.style.background = "#232323";
      messageArea.textContent = "Try Again";
    }
  });
}

resetButton.addEventListener("click", function(){
  // if clicked new colors array
  colors = generateSquareColors(6);
  // reset game message
  messageArea.textContent = '';
  // new picked color
  correctColor = pickedColor();
  // change display
  colorDisplay.textContent = correctColor
  // giving new colors to the squares
  for(var n = 0; n<squares.length;n++){
    squares[n].style.background = colors[n];
  }
});
