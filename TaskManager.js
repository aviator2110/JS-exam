import { Task } from './Task.js';

export class TaskManager {
    static #allTasksArray = [];
    #tasksListElement = null;

    constructor(listElement) {
        this.#tasksListElement = listElement;

        TaskManager.#allTasksArray = JSON.parse(localStorage.getItem("tasks")) || [];

        for (let i = 0; i < TaskManager.#allTasksArray.length; i++) {
            const task = new Task(TaskManager.#allTasksArray[i].name, TaskManager.#allTasksArray[i].description);
            task.fromJson(TaskManager.#allTasksArray[i].id, TaskManager.#allTasksArray[i].creationDate, TaskManager.#allTasksArray[i].isComplete);
            this.#tasksListElement.append(task.element);
        }

        if(TaskManager.#allTasksArray.length > 0){
            Task.idNumber = TaskManager.#allTasksArray[TaskManager.#allTasksArray.length - 1].id + 1 || 0;
        }else {
            Task.idNumber = 0;
        }

        console.log(TaskManager.#allTasksArray.length);
    }

    addTask(task){
        TaskManager.#allTasksArray.push(task.toJson());
        localStorage.setItem("tasks", JSON.stringify(TaskManager.#allTasksArray));
        this.#tasksListElement.append(task.element);
    }

    sortByCompleteStatus(){

    }

    sortByNameAndDate(){

    }

    static deleteTask(id){
        let index = () => {
            for (let i = 0; i < TaskManager.#allTasksArray.length; i++) {
                if (TaskManager.#allTasksArray[i].id === id){
                    return i;
                }
            }
        }
        TaskManager.#allTasksArray.splice(index(), 1);
        localStorage.setItem("tasks", JSON.stringify(TaskManager.#allTasksArray));
    }

    static findById(id){
        console.log("findById", id);
        for (let i = 0; i < TaskManager.#allTasksArray.length; i++) {
            console.log("iteration" + i)
            if (TaskManager.#allTasksArray[i].id === id){
                console.log(TaskManager.#allTasksArray[i])
                return TaskManager.#allTasksArray[i];
            }
        }
        console.log("length" + TaskManager.#allTasksArray.length);
        console.log("findById did not found");
        return null;
    }
}