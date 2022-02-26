const formEl = document.querySelector("#task-form")
const tasksToDo = document.querySelector("#tasks-to-do")

const taskFormHandler = function(event) {
  event.preventDefault()

  const taskNameInput = document.querySelector("input[name='task-name']").value
  const taskTypeInput = document.querySelector("select[name='task-type']").value

  // package to hold data as an object 
  const taskDataObj = {
    name: taskNameInput,
    type: taskTypeInput 
  }

  // send as an argument to createTaskEl 
  createTaskEl(taskDataObj)
}

const createTaskEl = function(taskDataObj) {
  // create list item and give it a class name
  const listItemEl = document.createElement("li")
  listItemEl.className = "task-item"

  // create div with a class name to hold info and add to list item
  const taskInfoEl = document.createElement("div")
  taskInfoEl.className = "task-info"
  taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>"

  listItemEl.appendChild(taskInfoEl)

  // add entire list item to list
  tasksToDo.appendChild(listItemEl)
}

formEl.addEventListener("submit", taskFormHandler)
