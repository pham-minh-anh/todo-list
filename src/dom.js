import { addTodo, updateFieldsById, toggleDoneById, deleteTodoById, getTodosByProject } from "./todos.js";
import { getProjectList, addProject, getProjectById, INBOX_ID } from "./projects.js";
import { deleteProjectMoveTodosToInbox, deleteProjectAndTodos } from "./app.js";
import { checkOverdue, compareDatesAscending } from "./date.js"

let currentProject = INBOX_ID;
let editingTodoId = null;

const sidebar = document.querySelector(".sidebar");
const projectList = document.querySelector(".project_list");
const container = document.querySelector(".container");
const todosNew = document.querySelector(".todo_list .new");
const todoDone = document.querySelector(".todo_list .done");
const todoDialog = document.querySelector("dialog.add_todo");
const todoForm = document.querySelector("dialog.add_todo > form");
const projectForm = document.querySelector("dialog.add_project > form");

function clearChildren(element) {
    element.replaceChildren();
}

export function renderProjectList() {
    clearChildren(projectList);

    const projects = getProjectList();

    for (const project of projects) {
        const newProject = document.createElement("div");
        newProject.dataset.id = project.id;

        newProject.addEventListener("click", () => {
            if (event.target.tagName === "BUTTON") {
                return;
            }
            renderTodosByProject(project.id);
            currentProject = project.id;
        })

        const name = document.createElement("p")
        name.textContent = project.name;
        newProject.appendChild(name)

        if (project.id !== INBOX_ID) {
            const deleteButtons = document.createElement("div");
            newProject.appendChild(deleteButtons);

            const deleteWithTodosButton = document.createElement("button")
            deleteWithTodosButton.textContent = "Delete with all todos";
            deleteWithTodosButton.addEventListener("click", () => {
                deleteProjectAndTodos(project.id);
                appendSelectProjectOptions();
                renderProjectList();
                if (currentProject === project.id) {
                    renderTodosByProject(INBOX_ID);
                    currentProject = INBOX_ID;
                } 
            })
            deleteButtons.appendChild(deleteWithTodosButton);

            const deleteMoveTodosButton = document.createElement("button")
            deleteMoveTodosButton.textContent = "Delete and move all todos to Inbox";
            deleteMoveTodosButton.addEventListener("click", () => {
                deleteProjectMoveTodosToInbox(project.id);
                appendSelectProjectOptions();
                renderProjectList();
                if (currentProject === project.id) {
                    renderTodosByProject(INBOX_ID);
                    currentProject = INBOX_ID;
                }
            })
            deleteButtons.appendChild(deleteMoveTodosButton);

        }

        projectList.appendChild(newProject);
    }
}

export function renderTodosByProject (projectId) {
    clearChildren(todosNew);
    clearChildren(todoDone);

    const todosByProject = getTodosByProject(projectId);
    todosByProject.sort((a, b) => compareDatesAscending(a.dueDate, b.dueDate));

    for (const todo of todosByProject) {
    
        const newTodo = document.createElement("div");
        newTodo.dataset.id = todo.id;
        newTodo.classList.add("todo_items")

        const title = document.createElement("p");
        title.textContent = todo.title;
        newTodo.appendChild(title)

        const description = document.createElement("p");
        description.classList.add("description")
        description.textContent = todo.description;

        

        const dueDate = document.createElement("p")
        if (todo.dueDate !== null) {
            dueDate.textContent = todo.dueDate;
        } else {
            dueDate.textContent = "No due date."
        }
        newTodo.appendChild(dueDate);

        const buttons = document.createElement("div")
        newTodo.appendChild(buttons)

        const editButton = document.createElement("button")
        editButton.textContent = "Edit";
        editButton.classList.add("edit_button");
        buttons.appendChild(editButton);

        editButton.addEventListener("click", () => {
            editingTodoId = todo.id;

            todoForm.elements.title.value = todo.title;
            todoForm.elements.description.value = todo.description;
            todoForm.elements.dueDate.value = todo.dueDate ?? "";
            todoForm.elements.priority.value = todo.priority;
            todoForm.elements.projectId.value = todo.projectId;

            const heading = todoDialog.querySelector("p");
            heading.textContent = "Edit todo";
            todoDialog.showModal();
        })

        const doneButton = document.createElement("button");
        if (todo.done) {
            doneButton.textContent = "Completed";
        } else if (checkOverdue(todo.dueDate)) {
            doneButton.textContent = "Overdue";
        } else {
            doneButton.textContent = "Pending";
        }
        buttons.appendChild(doneButton);

        doneButton.addEventListener("click", () => {
            toggleDoneById(todo.id)
            renderTodosByProject(currentProject);
        })

        const deleteButton = document.createElement("button")
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", () => {
            deleteTodoById(todo.id);
            renderTodosByProject(currentProject);
        })
        buttons.appendChild(deleteButton)

        if (todo.done) {
            todoDone.appendChild(newTodo);
        } else {
            todosNew.appendChild(newTodo);
        }

        newTodo.addEventListener("click", (event) => {
            if (event.target.tagName === "BUTTON") {
                return;
            }
            if (newTodo.querySelector(".description")) {
                newTodo.removeChild(description);
            } else {
                newTodo.appendChild(description);
            }
        })
    }
}

export function setUpAddTodoButton() {
    const addTodoButton = document.querySelector("button.add_todo");
    addTodoButton.addEventListener("click", () => {
        const heading = todoDialog.querySelector("p");
        heading.textContent = "Add a todo";
        todoDialog.showModal()
    })
}


export function setUpProjectFormListeners() {

    projectForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const dialog = document.querySelector("dialog.add_project");
        const data = new FormData(projectForm);
        const name = data.get("name");

        const result = addProject(name);
        if (result === null) {
            const errorMessage = document.createElement("p")
            errorMessage.textContent = "Duplicated names."
            errorMessage.style.color = "red";
            dialog.appendChild(errorMessage);

            return;
        }

        projectForm.reset();
        dialog.close();
        renderProjectList();
        appendSelectProjectOptions();
    });
}

export function setUpTodoFormListeners () {
    todoForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const dialog = document.querySelector("dialog.add_todo");
        const data = new FormData(todoForm);
        const fields = {
            title: data.get("title"),
            description: data.get("description"),
            dueDate: data.get("dueDate") || undefined,
            priority: Number(data.get("priority")),
            projectId: data.get("projectId") || undefined,
        };

        if (editingTodoId === null) {
            addTodo(fields);
        } else {
            updateFieldsById(editingTodoId, fields);
        }


        todoForm.reset();
        dialog.close();
        renderTodosByProject(currentProject);
    });
}

export function appendSelectProjectOptions() {
    const projectOptions = document.querySelector("#projectId");
    const projectList = getProjectList();

    projectOptions.replaceChildren();

    for (const project of projectList) {
        const option = document.createElement("option");
        option.setAttribute("value", project.id);
        option.textContent = project.name;

        projectOptions.appendChild(option);
    }
}

