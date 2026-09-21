//Create an empty array called shoppingList.
// let toDoList = [];
let taskName= document.getElementById("task");
let categoryInfo=document.getElementById("category");
let statusInfo=document.getElementById("status")
let date= document.getElementById("dueDate")
let btn=document.getElementById("add")
let toDoList=[]

let item={
    taskName :document.getElementById("task")
    categoryInfo : document.getElementById("category")
    statusInfo :document.getElementById("status")
    date :document.getElementById("dueDate")
}
    

  
// //Write a function called addItem that takes an item as a parameter and adds it to the shoppingList array.
// function addItem() {
    
function addItem(item) {
    toDoList.push(item); // Add item to shopping list
    console.log(toDoListt)

}

function updateList(additem()){
    toDoList.update
}


btn.addEventListener("click", function addItem()) {
    // let item = itemInput.value;
    if (item === "") {
    // alert("Please enter an item.");
    return
    }
}
toDoList.push(item); // Add item to list
console.log(toDoList);

function filterItems(item) {

19

// function displayList() {
//     for (let item of toDoList) {
//         console.log(toDoList)
// }
// }