import { loadData, saveData } from "./storage.js";

export class Project {
    constructor(name, id = Math.random().toString(36).slice(2)) {
        this.name = name;
        this.id = id;
    }
}

const projects = []
export const INBOX_ID = "inbox"; 


export function initProjects() {
    projects.length = 0;

    const data = loadData("projects");
    if (!data.find((project) => (project.id === INBOX_ID))) {
        const inbox = new Project("Inbox", INBOX_ID);
        projects.push(inbox);
    }

    for (const project of data) {
        projects.push(new Project(project.name, project.id));
    }
    
    saveData("projects", projects);
}

export function addProject(name) {
    if (name === undefined || !(name = name.trim())) {
        throw new Error("Must add a name to create a project!")
    }
    if (projects.some(p => p.name === name)) {
        return null;
    }
    const newProject = new Project(name);
    projects.push(newProject);
    saveData("projects", projects);

    return(newProject);
}
export function deleteProjectById(id) {
    if (id === INBOX_ID) {
        throw new Error("Can't remove Inbox.");
    }

    const index = projects.findIndex((project) => project.id === id);
    if (index === -1) {
        return false;
    }

    projects.splice(index, 1); 
    saveData("projects", projects);

    return true;
}
export function getProjectById(id) {
    return projects.find((project) => project.id === id);
}

export function getProjectList() {
    return projects.slice();
}
