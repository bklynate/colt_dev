/*
          GLOBAL VARIABLES
*/
// sets number of colors for the initial squares
var numberOfSquares = 6;
var colors;
// correctColor is will become the return of the pickedColor function
var correctColor;
// --- buttons assignments
var resetButton = document.querySelector("#resetButton");
var modeButtons = document.querySelectorAll(".mode");
// --- Text Displays
var colorDisplay = document.querySelector("#colorDisplay");
var messageArea = document.querySelector("#message");
var h1 = document.querySelector("h1");
// selects all squares
var squares = document.querySelectorAll(".square");

/*
          FUNCTIONS
*/

init();
function init(){
  // looping through the game mode buttons
  for(var n = 0; n < modeButtons.length; n++){
    modeButtons[n].addEventListener("click", function(){
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      // figure out how many color squares to show
      // pick new colors
      // pick a new correct color
      // update page to show the change
      if(this.textContent === "Easy"){
        numberOfSquares = 3;
      } else {
        numberOfSquares = 6;
      }
      reset();
    });
  }
  // for loop to assign a color to a square
  for(var i = 0; i < squares.length; i++){
    //add click listeners to all squares
    squares[i].addEventListener("click", function(){
      var clickedSquare = this.style.background;
      if(clickedSquare == correctColor){
        changeColors(correctColor);
        messageArea.textContent = "Winner!";
        h1.style.background = correctColor;
        resetButton.textContent = "Play Again?";
      } else {
        this.style.background = "#232323";
        messageArea.textContent = "Try Again";
      }
    });
  }
  reset();
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

function reset() {
  resetButton.textContent = "New Colors"
  colors = generateSquareColors(numberOfSquares);
  // reset game message
  messageArea.textContent = '';
  // new picked color
  correctColor = pickedColor();
  // change display
  colorDisplay.textContent = correctColor;
  // reset h1 color
  h1.style.background = "steelblue";
  // giving new colors to the squares
  for(var n = 0; n<squares.length;n++){
    if(colors[n]){
      squares[n].style.display = "block";
      squares[n].style.background = colors[n];
    } else {
      squares[n].style.display = "none";
    }
  }
}

/*
          EVENT LISTENERS
*/

resetButton.addEventListener("click", function(){
  reset()
});
