//Create an empty array called shoppingList.

let taskName = document.getElementById("task");
let categoryInfo = document.getElementById("category");
let statusInfo = document.getElementById("status");
let dateInfo = document.getElementById("dueDate");
let btn = document.getElementById("add");
let list = document.getElementById("list");
let toDoList = [];
const options=`<option value="overdue">OverDue</option>
                        <option value="Not-Started">Not-Started</option>
                        <option value="InProgress">InProgress</option>
                        <option value="Completed">Completed</option>`

btn.addEventListener("click", (e) => {
  let item = {
    taskName: taskName.value,
    categoryInfo: categoryInfo.value,
    statusInfo: statusInfo.value,
    dateInfo: dateInfo.value,
  };
  if (item.taskName === "") {
    alert("Please enter an item.");
    return;
  } else {
    toDoList.push(item);
    console.log(toDoList);
  }
  render()
  // console.log(item)
});

function render() {
    list.innerHTML=""
  for (let i = 0; i < toDoList.length; i++) {
    console.log(toDoList[i])
    let itemList = document.createElement("li");
    let status = document.createElement("select");
        

    let title = document.createElement("p");
    let date = document.createElement("p");
    let category = document.createElement("p");
    
    title.innerText= toDoList[i].taskName
    status.innerHTML= options
    status.value= toDoList[i].statusInfo
    date.innerText= toDoList[i].dateInfo
    category.innerText= toDoList[i].categoryInfo


    itemList.appendChild(status);
    itemList.appendChild(title);
    itemList.appendChild(date);
    itemList.appendChild(category);
    list.appendChild(itemList);
  }
}

let filter=Document.getElementById(filter)
 
