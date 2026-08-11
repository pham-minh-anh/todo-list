import {getTodosByProject, deleteTodoById} from "./todos.js"
import {deleteProjectById, INBOX_ID} from "./projects.js"

export function deleteProjectMoveTodosToInbox (projectId) {
    if (deleteProjectById(projectId)) {
        const todosByProject = getTodosByProject(projectId);
        for (const todo of todosByProject) {
            todo.projectId = INBOX_ID;
        }
        return true;
    }
    return false;
}

export function deleteProjectAndTodos (projectId) {
    if(deleteProjectById(projectId)) {
        const todosByProject = getTodosByProject(projectId);
        for (const todo of todosByProject) {
            deleteTodoById(todo.id);
        }
        return true;
    }
    return false;
}