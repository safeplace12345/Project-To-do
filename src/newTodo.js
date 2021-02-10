
import {
    allTodos
} from './index'
import {
    editAndDelete
} from './editAndDelete'
const appendTodo = (todo, element,allTodoDropdown,allTasksDropdown) => {
    let newTodo = newTodoHtml(todo)
    appendToAllTodos(todo,allTodoDropdown);
    appendToAllTasks(todo,allTasksDropdown)
    return element.appendChild(newTodo)
}
function appendToAllTodos(todo,dropdown) {
   return dropdown.insertAdjacentHTML('beforeend',
        ` <a class="dropdown-item">${todo.title}</a>`)
}
function appendToAllTasks(pro_Tod,dropdown) {
    if(pro_Tod.proj){
        dropdown.insertAdjacentHTML('beforeend',
            ` <a class="dropdown-item text-warning" data-toggle="tooltip" data-placement="top" title="project">${pro_Tod.title}</a>`)
    }else{
        dropdown.insertAdjacentHTML('beforeend',
            ` <a class="dropdown-item text-info" data-toggle="tooltip" data-placement="top" title="To-do">${pro_Tod.title}</a>`)
    }
}
const createTodoHTML = () => {
    const todoAndBody = function (todo) {
        let div = document.createElement('div');
        div.classList.add('container-fluid')
        div.classList.add('border')
        div.classList.add('my-1');
        div.setAttribute('id', todo.id);
        return div;
    }
    const newColumn = function () {
        const column = document.createElement('div');
        column.classList.add('d-flex')
        column.classList.add('justify-content-around')
        column.classList.add('my-1')
        return column;
    }
    const input = function () {
        const input = document.createElement('input');
        input.classList.add('form-control-sm')
        input.setAttribute('type', 'checkbox')
        input.setAttribute('data-toggle', 'tooltip')
        input.setAttribute('data-placement', 'top')
        const stat = input.checked ? 'Mark as UnCompleted' : 'Mark as Completed'
        input.setAttribute('title', stat);
        return input
    }
    const h6 = function (todo) {
        const h6 = document.createElement('h6');
        h6.classList.add('text-mute')
        h6.classList.add('my-1')
        h6.innerText += !todo.title ? 'Default' : todo.title
        return h6
    }
    const iElement = function () {
        const i = document.createElement('button')
        i.classList.add('fas')
        i.classList.add('text-success')
        i.classList.add('fa-pencil-alt')
        i.classList.add('mx-2')
        i.classList.add('new-todo')
        i.setAttribute('data-toggle', 'tooltip')
        i.setAttribute('data-placement', 'bottom')
        i.setAttribute('title', 'Edit-todo')
        i.addEventListener('click', editAndDelete.editTodo);
        return i;
    }
    const dltBtn = function () {
        const dltBtn = document.createElement('button')
        dltBtn.classList.add('fas')
        dltBtn.classList.add('text-danger')
        dltBtn.classList.add('fa-trash')
        dltBtn.classList.add('mx-2')
        dltBtn.setAttribute('data-toggle', 'tooltip')
        dltBtn.setAttribute('data-placement', 'bottom')
        dltBtn.setAttribute('title', 'Delete todo')
        dltBtn.addEventListener('click', editAndDelete.deleteTodo);
        return dltBtn;
    }
    const timer = function () {
        const timer = document.createElement('button');
        timer.classList.add('fas')
        timer.classList.add('fa-hourglass')
        timer.setAttribute('data-toggle', 'tooltip')
        timer.setAttribute('data-placement', 'bottom')
        timer.setAttribute('title', 'Set due Date');
        timer.addEventListener('click', setTime)
        return timer;
    }
    const tableHeader = () => {
        const head = document.createElement('thead');
        const tr = document.createElement('tr');
        const dateHeader = document.createElement('th');
        dateHeader.innerText = 'Date'
        dateHeader.setAttribute('scope','col')
        const description = document.createElement('th');
        description.innerText = 'Description'
        description.setAttribute('scope', 'col')
        const priority = document.createElement('th');
        priority.innerText = 'Priority'
        priority.setAttribute('scope','col')
        const status = document.createElement('th');
        status.innerText = 'Status'
        status.setAttribute('scope', 'col')
        const tNotes = document.createElement('th');
        tNotes.innerText = 'Notes'
        tNotes.setAttribute('scope', 'col')
        const headArr = [dateHeader, description, priority, tNotes,status];
        headArr.forEach(tableHead => tr.appendChild(tableHead));
        head.appendChild(tr);
        return head;
    }
    const todoBody = function (todo) {
        const tdDate = document.createElement('td')
        tdDate.innerText = todo.date
        const tdDescription = document.createElement('td')
        tdDescription.innerText = todo.description
        tdDescription.setAttribute('contenteditable', true)
        const tdPriority = document.createElement('td')
        tdPriority.classList.add('flexPriority')
        tdPriority.insertAdjacentHTML('beforeend', `
        <label for="low" class="text-info">Low</label>
        <input type = "checkbox"
        class = "btn btn-info-sm mx-1" id="low"
        data-toggle = "tooltip"
        data-placement = "bottom"
        title = "low"/>
        <label for="medium" class="text-warning">Medium</label>
        <input type = "checkbox"
      class = "btn btn-success-sm mx-1" id="medium"
      data-toggle = "tooltip"
      data-placement = "bottom"
      title = "medium" />
      <label for="high" class="text-danger">High</label>
      <input type = "checkbox"
      class = "btn btn-danger-sm mx-1" id="high"
      data-toggle = "tooltip"
      data-placement = "bottom"
      title = "High" />
      `)
      const tdNotes = document.createElement('td')
      tdNotes.innerText = todo.notes
      tdNotes.setAttribute('contenteditable', true)
      const tdStatus = document.createElement('td');
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox'
      checkbox.checked = !todo.status ? false : true;
      tdStatus.appendChild(checkbox);
      const tableHead = tableHeader();
      const todoBody = document.createElement('table');
      todoBody.classList.add('tdBody');
      todoBody.style.display = 'none';
      const arrToAppendInTr = [tableHead,tdDate, tdDescription, tdPriority, tdNotes, tdStatus]
      arrToAppendInTr.forEach(child => todoBody.appendChild(child))
      console.log(tableHead)
      return todoBody;
    }    
    return {
        todoAndBody,
        newColumn,
        input,
        h6,
        iElement,
        dltBtn,
        timer,
        todoBody
    }
}
const newTodoHtml = (todo) => {
    const todoHelper = createTodoHTML();
    const todoAndBody = todoHelper.todoAndBody(todo)
    const column = todoHelper.newColumn()
    const input = todoHelper.input();
    const h6 = todoHelper.h6(todo)
    const timer = todoHelper.timer();
    const i = todoHelper.iElement()
    const dltBtn = todoHelper.dltBtn();
    const todoBody = todoHelper.todoBody(todo);
    const AppendInColumn = [input, h6, i, dltBtn, timer];
    column.appendChild(input);
    column.appendChild(h6);
    column.appendChild(i)
    column.appendChild(dltBtn)
    column.appendChild(timer);
    todoAndBody.appendChild(column)
    todoAndBody.appendChild(todoBody)
    return todoAndBody;
}

function setTime(element) {
    let todo = allTodos[element.target.parentNode.parentNode.id];
    let newdate = prompt('Enter Date', );
    todo.dueDate = newdate;
    element.currentTarget.setAttribute('title', todo.dueDate);
    element.currentTarget.classList.add('text-warning');
}
export const newTodoFunc = {
    appendTodo,
    appendToAllTasks
}