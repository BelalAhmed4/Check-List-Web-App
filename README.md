# Task Manager

This project is a simple task manager application that allows users to add and delete tasks. The tasks are stored in the browser's LocalStorage, ensuring that the list of tasks persists even after the page is refreshed.

## Features

- **Add Task:** Users can add a new task to the list.
- **Delete Task:** Users can delete a specific task from the list.
- **Persistent Storage:** Tasks are stored in LocalStorage, so they persist across page reloads.

## Technologies Used

- HTML
- CSS
- JavaScript
- LocalStorage API for persistent storage

## Setup Instructions

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/task-manager.git
   cd task-manager
   ```

2. **Open the Project:**
   Open the `index.html` file in your preferred web browser to use the task manager.

## How to Use

1. **Add a Task:**
   - Enter a task in the input field with the placeholder "Add a new task...".
   - Click the "Add Task" button to add the task to the list.

2. **Delete a Task:**
   - Each task in the list has a "Delete" button next to it.
   - Click the "Delete" button to remove the task from the list.

## Code Overview

The main functionalities are implemented in `script.js`:

- **Adding Task:**
  ```javascript
  function addingTask() {
    var textInput = document.querySelector("#taskInput");
    var task = textInput.value;
    if (task != "") {
      var tasks = JSON.parse(localStorage.getItem("tasks")) || [];
      tasks.push(task);
      localStorage.setItem("tasks", JSON.stringify(tasks));
      displayTasks();
      taskInput.value = "";
    }
  }
  ```

- **Displaying Tasks:**
  ```javascript
  function displayTasks() {
    var taskList = document.querySelector("#taskList");
    taskList.innerHTML = "";
    var tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(function (task, index) {
      var li = document.createElement("li");
      li.textContent = task;
      li.classList.add("task");
      var deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.onclick = function () {
        deleteTask(index);
      };
      li.appendChild(deleteBtn);
      taskList.appendChild(li);
    });
  }
  ```

- **Deleting Task:**
  ```javascript
  function deleteTask(index) {
    var tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    displayTasks();
  }
  ```

- **Event Listener for Adding Task:**
  ```javascript
  document.querySelector("#addTaskBtn").addEventListener("click", addingTask);
  displayTasks();
  ```

## Example Usage

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Task Manager</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="task-manager">
    <input type="text" id="taskInput" placeholder="Add a new task...">
    <button id="addTaskBtn">Add Task</button>
    <ul id="taskList"></ul>
  </div>
  <script src="script.js"></script>
</body>
</html>
```

## Contributing

Contributions are welcome! Please fork this repository and submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License.
