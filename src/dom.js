import { addTodo, deleteTodoById, getTodoById, getTodosByProject } from "./todos.js";
import { getProjectList, addProject, getProjectById, INBOX_ID } from "./projects.js";
import { deleteProjectMoveTodosToInbox, deleteProjectAndTodos } from "./app.js";

const sidebar = document.querySelector(".sidebar");
const projectList = document.querySelector(".project_list")
const container = document.querySelector(".container");
const todoList = document.querySelector(".todo_list")

export function renderProjectList() {
    const projects = getProjectList();

    for (const project of projects) {
        const newProject = document.createElement("div");
        newProject.dataset.id = project.id;

        const name = document.createElement("p")
        name.textContent = project.name;
        newProject.appendChild(name)

        projectList.appendChild(newProject);
    }
}

addProject("mem");
addProject("map");
addProject("hihi");
addProject("haha");

renderProjectList();

export function renderTodosByProject (projectId) {
    const todosByProject = getTodosByProject(projectId);

    for (const todo of todosByProject){
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

addTodo({title: "first todo", dueDate: new Date()});
addTodo({title: "second todo", dueDate: new Date()});
addTodo({title: "third todo", dueDate: new Date()});
addTodo({title: "fourth todo", dueDate: new Date()});

renderTodosByProject(INBOX_ID);
