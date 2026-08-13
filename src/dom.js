import { addTodo, deleteTodoById, getTodoById, getTodosByProject } from "./todos.js";
import { getProjectList, addProject, getProjectById, INBOX_ID } from "./projects.js";
import { deleteProjectMoveTodosToInbox, deleteProjectAndTodos } from "./app.js";

let currentProject = INBOX_ID;

const sidebar = document.querySelector(".sidebar");
const projectList = document.querySelector(".project_list")
const container = document.querySelector(".container");
const todoList = document.querySelector(".todo_list")

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
    clearChildren(todoList);

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
            dueDate.textContent = todo.dueDate.toDateString();
        }
        newTodo.appendChild(dueDate);


        todoList.appendChild(newTodo);
    }
}