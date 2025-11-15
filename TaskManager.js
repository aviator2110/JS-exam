import {Task} from "./Task.js";

export class TaskManager {
    #allTasksArray = [];

    constructor(){
        this.#allTasksArray = JSON.parse(localStorage.getItem("tasks")) || [];
    }

    get allTasksArray(){
        return this.#allTasksArray;
    }

    addTask(task){
        this.#allTasksArray.push(task);
        localStorage.setItem("tasks", JSON.stringify(this.#allTasksArray));
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