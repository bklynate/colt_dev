function printReverse(arr) {
  var reversedArr = arr.reverse()
  reversedArr.forEach(function(item){
    console.log(item);
  });
}

var colors = ['red','blue','green'];

printReverse(colors);

function isUniform(arr){
  var first = arr[0];
  for(var i = 1;i<arr.length;i++){
    if(first !== arr[i]){
      return false;
    } else {
      return true;
    }
  }
}

console.log(isUniform([5,5,5,5]));
console.log(isUniform([1,2,3,4]));


function sumArray(arr){
  var total = 0;
  arr.forEach(function(number){
    total+=number;
  })
  return total;
}

console.log(sumArray([5,5]));
console.log(sumArray([-5,15]));

function findMaxNum(arr){
  var potential_max = arr[0];
  var actual_max;
  for(var i = 0;i<arr.length;i++){
    if(potential_max<arr[i]){
      potential_max = arr[i];
    }
  }
  actual_max = potential_max;
  return actual_max;
}

var numArr = [3,5,6,1,87,2];
console.log(findMaxNum(numArr));
numArr.push(1500);
console.log(findMaxNum(numArr));
numArr.push(23);
console.log(findMaxNum(numArr));
numArr.push(2501);
console.log(findMaxNum(numArr));



var someObject = {
  friends:[
    {name:"Malfoy"},
    {name:"Crabbe"},
    {name:"Goyle"}
  ],

  color:"baby blue",
  isEvil: true
};

var arrayOfMovieObjects = [
  {
    title: "Friday",
    rating: 5,
    hasWatched: true
  },
  {
    title: "Deadpool",
    rating: 5,
    hasWatched: true
  },
  {
    title: "Frozen",
    rating: 4.4,
    hasWatched: false
  }
];

arrayOfMovieObjects.forEach(function(movie){
  var result = "You have ";
  if(movie.hasWatched === false){
    console.log(result + "not seen " + movie.title+ " - " + movie.rating+ " stars")
  } else {
    console.log(result + "seen " + movie.title + " - " + movie.rating+ " stars")
  }
});

