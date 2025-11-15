export class TaskManager {
    static #allTasksArray = [];
    static #tasksListElement = null;

    constructor(){
        this.#allTasksArray = JSON.parse(localStorage.getItem("tasks")) || [];
    }

    static set tasksListElement(tasksListElement){
        this.#tasksListElement = tasksListElement;
    }

    static addTask(task){
        this.#allTasksArray.push(task);
        localStorage.setItem("tasks", JSON.stringify(this.#allTasksArray));
        this.#tasksListElement.append(task.element);
    }

    sortByCompleteStatus(){

    }

    sortByNameAndDate(){

    }

    static deleteTask(task){
        this.#allTasksArray.splice(this.#allTasksArray.indexOf(task), 1);
        localStorage.setItem("tasks", JSON.stringify(this.#allTasksArray));
    }
}