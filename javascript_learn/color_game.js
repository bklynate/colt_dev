// list of colors
var colors = [
    "rgb(255, 0, 0)",
    "rgb(0, 255, 0)",
    "rgb(134, 0, 255)",
    "rgb(222, 34, 189)",
    "rgb(135, 156, 90)",
    "rgb(225, 156, 110)"
]
// selects all squares
var squares = document.querySelectorAll(".square");

// hard coded a picked color for development persons
var pickedColor = colors[3];
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
      alert("You clicked the RIGHT square");
    } else {
      alert("You clicked the WRONG square");
    }
  });
}
