import {getTodosByProject, deleteTodoById, moveTodoToProject} from "./todos.js"
import {deleteProjectById, getProjectById, INBOX_ID, initProjects} from "./projects.js"


export function deleteProjectMoveTodosToInbox (projectId) {
    if (getProjectById(projectId) && projectId !== INBOX_ID) {
        const todosByProject = getTodosByProject(projectId);
        for (const todo of todosByProject) {
            moveTodoToProject(todo.id, INBOX_ID);
        }

        deleteProjectById(projectId);

        return true;
    }
    return false;
}

export function deleteProjectAndTodos (projectId) {
    if(getProjectById(projectId) && projectId !== INBOX_ID) {
        const todosByProject = getTodosByProject(projectId);
        for (const todo of todosByProject) {
            deleteTodoById(todo.id);
        }

        deleteProjectById(projectId);

        return true;
    }
    return false;
}

initProjects