import { Task } from './Task.js';

export class TaskManager {
    #allTasksArray = [];
    #tasksListElement = null;

    constructor(listElement = null) {
        this.#tasksListElement = listElement;

        this.#allTasksArray = JSON.parse(localStorage.getItem("tasks")) || [];

        if (listElement) {
            for (let i = 0; i < this.#allTasksArray.length; i++) {
                const task = new Task(this.#allTasksArray[i].name, this.#allTasksArray[i].description);
                task.fromJson(this.#allTasksArray[i].id, this.#allTasksArray[i].creationDate, this.#allTasksArray[i].isComplete);
                this.#tasksListElement.append(task.element);
            }
        }

        if(this.#allTasksArray.length > 0){
            Task.idNumber = this.#allTasksArray[this.#allTasksArray.length - 1].id + 1 || 0;
        }else {
            Task.idNumber = 0;
        }
    }

    addTask(task){
        this.#allTasksArray.push(task.toJson());
        localStorage.setItem("tasks", JSON.stringify(this.#allTasksArray));
        this.#tasksListElement.append(task.element);
    }

    saveToStorage(){

    }

    sortByCompleteStatus(){

    }

    sortByNameAndDate(){

    }

    static deleteTask(id){
        let index = () => {
            for (let i = 0; i < this.#allTasksArray.length; i++) {
                if (this.#allTasksArray[i].id === id){
                    return i;
                }
            }
        }
        this.#allTasksArray.splice(index(), 1);
        localStorage.setItem("tasks", JSON.stringify(this.#allTasksArray));
    }

    findById(id){
        for (let i = 0; i < this.#allTasksArray.length; i++) {
            if (this.#allTasksArray[i].id === id){
                return this.#allTasksArray[i];
            }
        }
        return null;
    }
}