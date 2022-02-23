const tasksToDo = document.querySelector("#tasks-to-do")
const buttonEl = document.querySelector("#save-task")

const createTaskHandler = function() {
  const listItemEl = document.createElement("li")
  listItemEl.className = "task-item"
  listItemEl.textContent = "This is a new task."
  tasksToDo.appendChild(listItemEl)
}

buttonEl.addEventListener("click", createTaskHandler())

document.createElement("li")
