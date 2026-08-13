import { loadData, saveData } from "./storage.js";
import {INBOX_ID} from './projects.js' 

export class Todo {
    constructor(title, description, dueDate, priority, projectId, id = Math.random().toString(36).slice(2), done = false) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.projectId = projectId;
        this.id = id;
        this.done = done;
    }
    
    toggleDone() {
        this.done = !this.done;
        saveData("todos", todos);
        
    }
    updateFields({title, description, dueDate, priority}) {
        if (title !== undefined && (title = title.trim())) {
            this.title = title;
        }
        if (description !== undefined) {
            this.description = description;
        }
        if (dueDate !== undefined) {
            this.dueDate = dueDate;
        }
        if (priority !== undefined) {
            this.priority = priority;
        }
        saveData("todos", todos);
    }
}

const todos = []

export function initTodos() {
    todos.length = 0;

    const data = loadData("todos");
    for (const todo of data) {
        todos.push(new Todo(todo.title, todo.description, todo.dueDate, todo.priority, todo.projectId, todo.id, todo.done));
    }
}

export function toggleDoneById(id) {
    const todo = getTodoById(id);
    if (!todo) {
        return false;
    }

    todo.toggleDone();
    saveData("todos", todos);

    return true;
}

export function updateFieldsById(id, fields) {
    const todo = getTodoById(id);
    if (!todo) {
        return false;
    }

    todo.updateFields(fields);
    saveData("todos", todos);

    return true;
}

export function addTodo({title, description = "", dueDate = null, priority = 0, projectId = INBOX_ID} ={}) {
    if (title === undefined || !(title = title.trim())) {
        throw new Error("Must add a title to create a todo!");
    }
    const newTodo = new Todo(title, description, dueDate, priority, projectId);
    todos.push(newTodo);
    saveData("todos", todos);

    return newTodo;
}

export function deleteTodoById(id) {
    const index = todos.findIndex((todo) => todo.id === id);
    if (index === -1) {
        return false;
    }

    todos.splice(index, 1); 
    saveData("todos", todos);

    return true;
}

export function moveTodoToProject(todoId, projectId) {
    const todo = getTodoById(todoId);

    if (!todo) {
        return false;
    }

    todo.projectId = projectId;
    saveData("todos", todos);

    return true;
}

export function getTodoById(id) {
    return todos.find((todo) => todo.id === id);
}

export function getTodosByProject(projectId) {
    return todos.filter(todo => todo.projectId === projectId);
}
