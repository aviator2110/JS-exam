import { Task } from "./Task.js";
import { TaskManager } from "./TaskManager.js";

const hideFormButton = document.getElementById("hide-form");
const addTaskForm = document.getElementById("add-task-form");

addTaskForm.style.display = "none";

hideFormButton.addEventListener("click", (e) => {
    if(addTaskForm.style.display === "none") {
        addTaskForm.style.display = "flex";
    }
    else {
        addTaskForm.style.display = "none";
    }

    if (hideFormButton.textContent === "add task"){
        hideFormButton.textContent = "back";
    }
    else {
        hideFormButton.textContent = "add task";
    }
})

const form = document.querySelector('#add-task-form');
const tasksList = document.querySelector('#tasks-list');

const taskManager = new TaskManager(tasksList);

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const taskName = formData.get("name");
    const taskDescription = formData.get("description");

    const task = new Task(taskName, taskDescription);

    taskManager.addTask(task);
})