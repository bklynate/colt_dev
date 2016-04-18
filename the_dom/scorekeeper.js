var player1Button = document.getElementsByTagName("button")[0];
var player2Button = document.getElementsByTagName("button")[1];
var resetButton = document.getElementsByTagName("button")[2];
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var numInput = document.querySelector("input[type='number']");
var playTill = document.querySelector("#playTill");
var gameOver = false;
var p1Score = 0;
var p2Score = 0;
var winningScore = 5;

player1Button.addEventListener("click", function(){
  if(!gameOver){
    p1Score++;
    if (winningScore === p1Score){
      p1Display.classList.add("winner")
      gameOver = true;
    }
    p1Display.textContent = p1Score;
  }
});

player2Button.addEventListener("click", function(){
  if(!gameOver){
    p2Score++;
    if (winningScore === p2Score){
      p2Display.classList.add("winner")
      gameOver = true;
    }
    p2Display.textContent = p2Score;
  }
});

resetButton.addEventListener("click", function(){
  reset();
});

numInput.addEventListener("change", function(){
  playTill.textContent = numInput.value;
  winningScore = Number(numInput.value);
  reset();
});


function reset(){
  gameOver = false;
  p1Score = 0;
  p2Score = 0;
  p2Display.textContent = p2Score;
  p1Display.textContent = p1Score;
  p1Display.classList.remove("winner")
  p2Display.classList.remove("winner")
}
