import { TaskManager } from "./TaskManager.js";

const params = new URLSearchParams(window.location.search);
const id = Number(params.get("id"));

const notFound = document.getElementById("not-found");
const form = document.getElementById("editForm");

// Если id нет → 404
if (!id) {
    notFound.classList.remove("hidden");
}

// Инициализируем TaskManager (без списка, потому что он здесь не нужен)
const task = TaskManager.findById(id);

// Если задача не найдена → 404
if (!task) {
    notFound.classList.remove("hidden");
}

if (id && task){
    form.classList.remove("hidden");

// Заполнить поля
    const nameInput = document.getElementById("taskName");
    const descInput = document.getElementById("taskDescription");

    nameInput.value = task.name;
    descInput.value = task.description;

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const newName = nameInput.value.trim();
        const newDesc = descInput.value.trim();

        // Простая валидация (можешь усложнить regex-ом)
        if (!newName || !newDesc) {
            alert("Fields cannot be empty!");
            return;
        }

        // Изменяем задачу
        task.editTask(newName, newDesc);

        // Обновляем localStorage
        // manager._saveToStorage();

        // Возврат на главную
        window.location.href = "/";
    });
}
// Показать форму
