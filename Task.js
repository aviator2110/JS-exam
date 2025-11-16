import {TaskManager} from "./TaskManager.js";

export class Task {
    static #idNumber = 0;

    #id;
    #name;
    #description;
    #creationDate;
    #isComplete;
    #element = document.createElement("li");

    constructor(name, description){
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

    #createUIElement(name, description){
        const taskName = document.createTextNode(name + " - " + description);

        const editButton = document.createElement("button");
        editButton.textContent = 'Edit';

        const deleteButton = document.createElement("button");
        deleteButton.textContent = 'Delete';

        this.#element.append(taskName, editButton, deleteButton);
    }

    editTask(){

    }

    deleteTask(){

    }

    changeCompleteStatus(){

    }
}