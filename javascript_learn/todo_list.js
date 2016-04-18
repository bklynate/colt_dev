// var todo_list = ["black"];

// var input = prompt("What would you like to do?");

// while (input !== "quit") {
//   if(input === "list") {
//     console.log(todo_list);
//     var input = prompt("What would you like to do?");
//   } else if (input === "new") {
//     var newTodoItem = prompt("Enter a new list item");
//     todo_list.push(newTodoItem);
//     var input = prompt("What would you like to do?");
//   } else {
//     console.log("The application has closed.")
//     break
//   }
// }
var allLi = document.querySelectorAll("li");
// var input = prompt("What would you like to do?");
// var todoList = ["Study more javascript"];
// while (input !== "quit") {
//   if(input === "list"){
//     // show the contents of the todo list
//     todoList.forEach(nicePrint);
//   } else if (input === "new") {
//     // add a new item into the todo list
//     addNewItem();
//   } else if (input === "delete"){
//     deleteItem();
//   }
//   input = prompt("What would you like to do?");
// }
// console.log("The application has ended.");


function nicePrint(thing, i) {
  console.log("**********");
  console.log(i+". "+thing);
  console.log("**********");
}

function deleteItem(){
  var index = prompt("Enter the index of the item you wish deleted");
  todoList.splice(index,1);
  console.log("Item at index " +index+" was deleted.");
}

function addNewItem(){
  var newItem = prompt("Enter a new list item");
  todoList.push(newItem);
  console.log("Item Added.");
}

for(var i = 0; i < allLi.length; i++){
  allLi[i].addEventListener("mouseover", function(){
    this.classList.add("selected");
  });
  allLi[i].addEventListener("mouseout", function(){
    this.classList.remove("selected");
  });

  allLi[i].addEventListener("click", function(){
    this.classList.toggle("done")
  });
}
