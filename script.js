// Adding Task Function
function addingTask() {
  var textInput = document.querySelector("#taskInput");
  var task = textInput.value;
  textInput.focus();
  // Making Variable Containing tasks Local Storage As Array
  if (task != "") {
    var tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    displayTasks();
    taskInput.value = "";
  }
}
// Display Tasks Function
function displayTasks() {
  // Getting Ul
  var taskList = document.querySelector("#taskList");
  taskList.innerHTML = ""; // Clear the list before appending tasks
  var tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach(function (task, index) {
    var li = document.createElement("li");
    li.textContent = task;
    li.classList.add("task");
    var deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.onclick = function () {
      deleteTask(index);
    };
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
  });
}
// Delete Task Function
function deleteTask(index) {
  var tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  displayTasks();
}
document.querySelector("#addTaskBtn").addEventListener("click", addingTask);
displayTasks();
// End TG
