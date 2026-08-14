import { addTodo, toggleDoneById, deleteTodoById, getTodoById, getTodosByProject } from "./todos.js";
import { getProjectList, addProject, getProjectById, INBOX_ID } from "./projects.js";
import { deleteProjectMoveTodosToInbox, deleteProjectAndTodos } from "./app.js";

let currentProject = INBOX_ID;

const sidebar = document.querySelector(".sidebar");
const projectList = document.querySelector(".project_list");
const container = document.querySelector(".container");
const todosNew = document.querySelector(".todo_list .new");
const todoDone = document.querySelector(".todo_list .done");

function clearChildren(element) {
    element.replaceChildren();
}

export function renderProjectList() {
    clearChildren(projectList);

    const projects = getProjectList();

    for (const project of projects) {
        const newProject = document.createElement("div");
        newProject.dataset.id = project.id;

        const name = document.createElement("button")
        name.textContent = project.name;
        newProject.appendChild(name)
        name.addEventListener("click", () => {renderTodosByProject(project.id)})
        projectList.appendChild(newProject);
    }
}

export function renderTodosByProject (projectId) {
    clearChildren(todosNew);
    clearChildren(todoDone);

    const todosByProject = getTodosByProject(projectId);

    for (const todo of todosByProject) {
        const newTodo = document.createElement("div");
        newTodo.dataset.id = todo.id;
        newTodo.classList.add("todo_items")

        const title = document.createElement("p");
        title.textContent = todo.title;
        newTodo.appendChild(title)
        

        const dueDate = document.createElement("p")
        if (todo.dueDate !== null) {
            dueDate.textContent = todo.dueDate;
        }
        newTodo.appendChild(dueDate);

        const done = document.createElement("button");
        if (todo.done) {
            done.textContent = "done";
        } else {
            done.textContent = "not done";
        }
        newTodo.appendChild(done);

        done.addEventListener("click", () => {
            toggleDoneById(todo.id)
            renderTodosByProject(currentProject);
        })

        if (todo.done) {
            todoDone.appendChild(newTodo);
        } else {
            todosNew.appendChild(newTodo);
        }
    }
}

export function setUpFormListeners() {
    const projectForm = document.querySelector("dialog.add_project > form");

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

    const todoForm = document.querySelector("dialog.add_todo > form");

    todoForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const dialog = document.querySelector("dialog.add_todo");
        const data = new FormData(todoForm);
        const title = data.get("title");
        const description = data.get("description");
        const dueDate = data.get("dueDate") || undefined;
        const priority = Number(data.get("priority"));
        const projectId = data.get("projectId") || undefined;

        addTodo({title, description, dueDate, priority, projectId});

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