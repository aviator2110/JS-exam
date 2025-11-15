import { Task } from "./Task.js";
import { TaskManager } from "./TaskManager.js";

const taskManager = new TaskManager();

const hideFormButton = document.getElementById("hide-form");
const addTaskForm = document.getElementById("add-task-form");

addTaskForm.style.display = "none";

hideFormButton.addEventListener("click", (e) => {
    hideFormButton.style.transition = "1000ms";

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