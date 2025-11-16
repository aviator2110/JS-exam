import { Task } from './Task.js';

export class TaskManager {
    #allTasksArray = [];
    #tasksListElement = null;

    constructor(){
        const raw = JSON.parse(localStorage.getItem("tasks")) || [];

        this.#allTasksArray = raw.map(obj =>
            new Task(obj.id, obj.name, obj.description, obj.creationDate, obj.isComplete)
        );

        for (let task of this.#allTasksArray) {
            this.#tasksListElement.append(task.element);
        }
    }

    set tasksListElement(tasksListElement){
        this.#tasksListElement = tasksListElement;
    }

    addTask(task){
        this.#allTasksArray.push(task);
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