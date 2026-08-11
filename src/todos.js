// Handles todos related stuff
import {INBOX_ID} from './projects.js' 

export class Todo {
    constructor(title, description, dueDate, priority, projectId) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.projectId = projectId;
    }
    id = Math.random().toString(36).slice(2);
    done = false;
    
    toggleDone() {
        this.done = !this.done;
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
    }
}

const todos = []

export function addTodo({title, description = "", dueDate = null, priority = 0, projectId = INBOX_ID} ={}) {
    if (title === undefined || !(title = title.trim())) {
        throw new Error("Must add a title to create a todo!");
    }
    const newTodo = new Todo(title, description, dueDate, priority, projectId);
    todos.push(newTodo);
    return newTodo;
}

export function deleteTodoById(id) {
    const index = todos.findIndex((todo) => todo.id === id);
    if (index === -1) {
        return false;
    }
    todos.splice(index, 1); 
    return true;
}

export function getTodoById(id) {
    return todos.find((todo) => todo.id === id);
}

export function getTodosByProject(projectId) {
    return todos.filter(todo => todo.projectId === projectId);
}

export function getTodoList() {
    return todos.slice();
}
