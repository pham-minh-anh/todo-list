// Handles project related stuff
export class Project {
    constructor(name) {
        this.name = name;
    }
    id = Math.random().toString(36).slice(2);
}

const projects = []

const inbox = new Project("Inbox");

projects.push(inbox);

export const INBOX_ID = inbox.id; // Restore must run before this, or inbox creation must be contitional

export function addProject(name) {
    if (name === undefined || !(name = name.trim())) {
        throw new Error("Must add a name to create a project!")
    }
    if (projects.some(p => p.name === name)) {
        return null;
    }
    const newProject = new Project(name);
    projects.push(newProject);
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
    return true;
}
export function getProjectById(id) {
    return projects.find((project) => project.id === id);
}

export function getProjectList() {
    return projects.slice();
}
