import { Todo, addTodo, deleteTodoById, getTodoById, getTodosByProject } from "./todos.js";
import { Project, addProject, deleteProjectById, getProjectById, INBOX_ID } from "./projects.js";
import { deleteProjectMoveTodosToInbox, deleteProjectAndTodos } from "./app.js";
import {} from "./dom.js"
import "./styles.css";

window.debug = {
  addTodo,
  deleteTodoById,
  getTodoById,
  getTodosByProject,
  addProject,
  deleteProjectById,
  getProjectById,
  deleteProjectMoveTodosToInbox,
  deleteProjectAndTodos,
  INBOX_ID,
};