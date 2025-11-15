export class Task {
    static #idNumber = 0;

    #id;
    #name;
    #description;
    #creationDate;
    #isComplete;

    constructor(name, description){
        this.#name = name;
        this.#description = description;
        this.#creationDate = new Date();
        this.#isComplete = false;
        this.#id = Task.#idNumber++;
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


    editTask(){

    }

    deleteTask(){

    }

    changeCompleteStatus(){

    }
}