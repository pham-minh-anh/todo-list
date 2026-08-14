import { initTodos } from "./todos.js";
import { initProjects, INBOX_ID } from "./projects.js";
import { renderProjectList, renderTodosByProject, setUpProjectFormListeners, setUpTodoFormListeners, appendSelectProjectOptions, setUpAddTodoButton} from "./dom.js"
import "./styles.css";

initProjects();

initTodos();

renderProjectList();

renderTodosByProject(INBOX_ID);

setUpAddTodoButton();

setUpProjectFormListeners();

setUpTodoFormListeners();

appendSelectProjectOptions();

