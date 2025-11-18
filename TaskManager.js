import { Task } from './Task.js';

export class TaskManager {
    #allTasksArray = [];
    #tasksListElement = null;

    constructor(listElement) {
        this.#tasksListElement = listElement;

        this.#allTasksArray = JSON.parse(localStorage.getItem("tasks")) || [];

        for (let i = 0; i < this.#allTasksArray.length; i++) {
            const task = new Task(this.#allTasksArray[i].name, this.#allTasksArray[i].description);
            task.fromJson(this.#allTasksArray[i].id, this.#allTasksArray[i].creationDate, this.#allTasksArray[i].isComplete);
            this.#tasksListElement.append(task.element);
        }

        Task.idNumber = this.#allTasksArray[this.#allTasksArray.length - 1].id + 1;
    }

    addTask(task){
        this.#allTasksArray.push(task.toJson());
        localStorage.setItem("tasks", JSON.stringify(this.#allTasksArray));
        this.#tasksListElement.append(task.element);
    }

    sortByCompleteStatus(){

    }

    sortByNameAndDate(){

    }

    deleteTask(task){
        this.#allTasksArray.splice(this.#allTasksArray.indexOf(task), 1);
        localStorage.setItem("tasks", JSON.stringify(this.#allTasksArray));
    }
}