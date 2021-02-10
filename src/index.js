import {
    helper
} from './helpers'
import {
    newTodoFunc
} from './newTodo'
import {
    CreateToDo
} from './createToDo'
import {
    NewProject,
    appendToAllProjects
} from './projects'
// buttons
let addTodoBtn = document.querySelector('#addTo-dobtn')
let todoDropDown = document.querySelector('.allTodos');
let viewAllProjects = document.querySelector('.viewAllProjects');
let viewAllTasks = document.querySelector('.viewAllTasks');
let addNewProjectBtn = document.querySelector('#addNewProject');


// inputs
let newTodo = document.querySelector('#newTodoInput');
let inputTodoDate = document.querySelector('#inputTodoDate');
let newProject = document.querySelector('#newProject');
let todoContainer = document.querySelector('#todo-container');
//Todo and Project containers
const allTodos = [];
export const allProjects = [];
helper.addEventWithFunc(addTodoBtn, "click", handleNewTodo);
helper.addEvent(newTodo, "click");
helper.addEvent(inputTodoDate, "click");
helper.addEvent(newProject, "click");
helper.addEventWithFunc(addNewProjectBtn, "click", handleNewProject);

// Handle new todo
function handleNewTodo() {
    let todo = new CreateToDo(newTodo.value, inputTodoDate.value, allTodos.length);
    allTodos.push(todo);
    newTodoFunc.appendTodo(todo, todoContainer,todoDropDown,viewAllTasks);
}


function handleNewProject() {
    let project = new NewProject(newProject.value, allProjects.length);
    allProjects.push(project);
    appendToAllProjects(project, viewAllProjects,viewAllTasks)
}