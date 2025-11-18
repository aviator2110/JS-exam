import {TaskManager} from "./TaskManager.js";

export class Task {
    static #idNumber = 0;

    #id;
    #name;
    #description;
    #creationDate;
    #isComplete;
    #element = document.createElement("li");

    constructor(name, description) {
        this.#name = name;
        this.#description = description;
        this.#creationDate = new Date();
        this.#isComplete = false;
        this.#id = Task.#idNumber++;
        this.#createUIElement(name, description);
    }

    get id(){
        return this.#id;
    }

    get name(){
        return this.#name;
    }

    get description(){
        return this.#description;
    }

    get creationDate(){
        return this.#creationDate;
    }

    get isComplete(){
        return this.#isComplete;
    }

    get idNumber(){
        return Task.#idNumber;
    }

    get element(){
        return this.#element;
    }

    static set idNumber(value){
        Task.#idNumber = value;
    }

    #createUIElement(name, description){
        const taskName = document.createTextNode(name + " - " + description);

        const editButton = document.createElement("button");
        editButton.textContent = 'Edit';

        editButton.addEventListener("click", (e) => {
            e.preventDefault();
            window.location.href = `edit.html?id=${this.#id}`;
        });

        const deleteButton = document.createElement("button");
        deleteButton.textContent = 'Delete';

        deleteButton.addEventListener("click", ()=>{
            this.#element.remove();
            TaskManager.deleteTask(this.#id);
        })

        this.#element.append(taskName, editButton, deleteButton);
    }

    toJson(){
        return {
            id: this.#id,
            name: this.#name,
            description: this.#description,
            creationDate: this.#creationDate,
            isComplete: this.#isComplete
        }
    }

    fromJson(id, creationDate, isComplete){
        this.#creationDate = creationDate;
        this.#isComplete = isComplete;
        this.#id = id;
    }

    editTask(){

    }

    deleteTask(){

    }

    changeCompleteStatus(){

    }
}