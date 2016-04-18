// var firstName = prompt("What is your first name?");

// var lastName = prompt("What is your last name?");

// var age = prompt("What is your age?");

// alert("Nice to finally meet you " +firstName+" "+lastName);
// alert("I remember you when you were a baby, now you're " + age);

// console.log("Nice to finally meet you " +firstName+" "+lastName);
// console.log("I remember you when you were a baby, now you're " + age);

// alert(age+" is roughtly " + age*365.25 + " days old.");

// var negativeNine = -9;

// while(negativeNine<19) {
//   console.log(negativeNine)
//   negativeNine++
// }
// console.log("==================================================")
// var b = 11
// while(b < 40){
//   if (b%2===0){
//     console.log(b)
//   }
//   b++
// }

// console.log("==================================================")
// var c = 300
// while(c < 333){
//   if (c%2===1){
//     console.log(c)
//   }
//   c++
// }

// console.log("==================================================")
// var d = 6
// while(d < 50){
//   if (d%3===0 && d%5===0){
//     console.log(d)
//   }
//   d++
// }


// var correctAnswer = "yes";
// var answer;
// while(answer !== correctAnswer) {
//   answer = prompt("Are we there yet?");
//   if (answer == correctAnswer){
//     alert("Yay, we finally made it !")
//   }
// }

// for(var i = -10; i <=19; i++){
//   console.log(i);
// }

// console.log("==================================================")

// for(var i = 10; i <= 40; i++) {
//   if(i%2===0){
//     console.log(i);
//   }
// }

// console.log("==================================================")

// for(var i = 300; i <=333; i++) {
//   if(i%2===1){
//     console.log(i);
//   }
// }

// console.log("==================================================")

// for(var i = 5; i <=50; i++) {
//   if(i%3===0&&i%5===0){
//     console.log(i);
//   }
// }

function isEven(num) {
  if(num%2===0){
    return true;
  }
  else {
    return false;
  }
}

function factorial(num) {
  var result = num;
  if(num === 0) {
    return 1
  }
  else if(num<0) {
    return -1
  }
  while(num > 1){
    num--;
    result *= num;
  }
  return result;
}

function kebabToSnake(name){
  var newName=name.replace(/-/g,"_");
  return newName;
}
