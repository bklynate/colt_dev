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
// sets colors for the initial squares
var numberOfSquares = 6;
var colors = generateSquareColors(numberOfSquares);
// --- buttons assignments
var resetButton = document.querySelector("#resetButton");
var easyButton = document.querySelector("#easyButton");
var hardButton = document.querySelector("#hardButton");
// selects all squares
var squares = document.querySelectorAll(".square");
// correctColor is now the return of the pickedColor function
var correctColor = pickedColor();
// --- Text Displays
var colorDisplay = document.querySelector("#colorDisplay");
var messageArea = document.querySelector("#message");
var h1 = document.querySelector("h1");
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
      h1.style.background = correctColor;
    } else {
      this.style.background = "#232323";
      messageArea.textContent = "Try Again";
    }
  });
}

resetButton.addEventListener("click", function(){
  // if clicked new colors array
  colors = generateSquareColors(numberOfSquares);
  // reset game message
  messageArea.textContent = '';
  // new picked color
  correctColor = pickedColor();
  // change display
  colorDisplay.textContent = correctColor
  // reset h1 color
  h1.style.background = "#232323"
  // giving new colors to the squares
  for(var n = 0; n<squares.length;n++){
    squares[n].style.background = colors[n];
  }
});

hardButton.addEventListener("click", function(){
  hardButton.classList.add('selected');
  easyButton.classList.remove('selected');
  numberOfSquares = 6;
  // if clicked new colors array
  colors = generateSquareColors(numberOfSquares);
  // reset game message
  messageArea.textContent = '';
  // new picked color
  correctColor = pickedColor();
  // change display
  colorDisplay.textContent = correctColor;
  // reset h1 color
  h1.style.background = "#232323";
  // giving new colors to the squares
  for(var n = 0; n<squares.length;n++){
   squares[n].style.display = "block";
   squares[n].style.background = colors[n];
  }
});

easyButton.addEventListener("click", function(){
  hardButton.classList.remove('selected');
  easyButton.classList.add('selected');
  numberOfSquares = 3;
  // if clicked new colors array
  colors = generateSquareColors(numberOfSquares);
  // reset game message
  messageArea.textContent = '';
  // new picked color
  correctColor = pickedColor();
  // change display
  colorDisplay.textContent = correctColor;
  // reset h1 color
  h1.style.background = "#232323";
  // giving new colors to the squares
  for(var n = 0; n<squares.length;n++){
    // if there are colors present
    // then assign the color
    if (colors[n]){
      squares[n].style.background = colors[n];
    // else if there isnt a color present "undefined"
    // then change the display of those squares to none
    } else {
      squares[n].style.display = "none";
    }
  }
});
