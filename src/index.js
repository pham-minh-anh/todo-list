import { initTodos } from "./todos.js";
import { initProjects, INBOX_ID } from "./projects.js";
import { renderProjectList, renderTodosByProject, setUpFormListeners, appendSelectProjectOptions} from "./dom.js"
import "./styles.css";

initProjects();

initTodos();

renderProjectList();

renderTodosByProject(INBOX_ID);

setUpFormListeners();

appendSelectProjectOptions();
