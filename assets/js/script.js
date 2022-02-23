const formEl = document.querySelector("#task-form")
const tasksToDo = document.querySelector("#tasks-to-do")

const createTaskHandler = function(event) {
  event.preventDefault()

  const listItemEl = document.createElement("li")
  listItemEl.className = "task-item"
  listItemEl.textContent = "This is a new task."
  tasksToDo.appendChild(listItemEl)
}

formEl.addEventListener("submit", createTaskHandler)
