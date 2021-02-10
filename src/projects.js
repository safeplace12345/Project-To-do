import {helper} from './helpers'
import {
    newTodoFunc
} from './newTodo'
import {
    allProjects
} from './index'
const CreateHTML = () => {
    const card = (id) => {
        const card = document.createElement('div')
        card.classList.add('card')
        card.setAttribute('id', id);
        return card;
    }
    const cardHeader = (text) => {
        const close = document.createElement('button')
        close.innerHTML = '&cross;'
        close.classList.add('rounded-circle')
        close.classList.add('btn-outline-danger')
        close.addEventListener('click',closeProj)
        const card = document.createElement('div')
        card.innerText = text
        card.classList.add('card-header')
        card.classList.add('bg-secondary')
        card.classList.add('text-danger')
        card.classList.add('d-flex')
        card.classList.add('justify-content-between')
        card.appendChild(close);
        return card;
    }
    const cardBody = (text) => {
    //     const createTodoBTN = document.createElement('button')
    //     createTodoBTN.innerText = 'Add Todo';
    //     createTodoBTN.classList.add('fixedTop')
    //     createTodoBTN.classList.add('btn')
    //     createTodoBTN.classList.add('btn-outline-success')
    //     // helper.addEventWithFunc(createTodoBTN,'click',showInput)
    //     const inputTodo = document.createElement('input');
    //     inputTodo.classList.add('form-control-sm')
    //     inputTodo.setAttribute('placeholder','Add new to-do....')
        const card = document.createElement('div')
    //    card.classList.add('card-body')
    //     card.appendChild(inputTodo);
    //     card.appendChild(createTodoBTN);
    card.innerHTML = ` <div class="row m-1 p-3">
            <div class="col col-11 mx-auto ">
                <div
                    class="row bg-white rounded shadow-sm p-2 add-todo-wrapper align-items-center justify-content-center">
                    <div class="col border">
                        <input class="form-control form-control-lg border-0 add-todo-input bg-transparent rounded"
                            type="text" placeholder="Add new To-do.." id="newTodoInput">
                    </div>
                    <div class="col-auto m-0 px-2 d-flex align-items-center">

                        <input type="date" name="date" id="inputTodoDate"
                            class="my-2 px-1 text-primary btn due-date-button" data-toggle="tooltip"
                            data-placement="bottom" title="Set a Due date">

                    </div>
                    <div class="col-auto px-0 mx-0 mr-2">
                        <button type="button" class="btn btn-primary" id="addTo-dobtn">Add</button>
                    </div>
                </div>
            </div>
        </div>`
        return card;
    }
    const cardFooter = (text) => {
        const card = document.createElement('div')
        card.classList.add('card-footer')
        card.innerText = 'Gh0st&copy;2021;'
         card.classList.add('bg-secondary')
         card.classList.add('text-danger')
         card.classList.add('text-center')
        return card;
    }

    const alink = (text) => {
        const a = document.createElement('a')
        a.classList.add('dropdown-item')
        a.addEventListener('click', showProjects)
        a.innerText = text.title
        a.setAttribute('id', text.id)
        return a;
    }
    return {
        card,
        cardHeader,
        cardBody,
        cardFooter,
        alink

    }

}
const projHTML = (proj) => {
    const html = CreateHTML()
    let card = html.card(proj.id)
    let cardHead = html.cardHeader(proj.title)
    let cardBody = html.cardBody(proj.todos)
    let cardFoot = html.cardFooter(proj.id)
    const arr = [cardHead, cardBody, cardFoot]
    arr.forEach(el => card.appendChild(el))
    return card;
}
const showProjects = (e) => {
    let container = document.querySelector('#todo-container')
    let todo = allProjects[e.target.id]
    let html = projHTML(todo)
    container.appendChild(html)

}
const closeProj = (e) => {
    let node = e.target.parentNode.parentNode
    return node.style.display = 'none';
}
export class NewProject {
    constructor(name, id) {
        this.title = name,
            this.todos = null,
            this.id = id,
            this.proj = true
    }
    getTodos() {
        return this.todos;
    }
    setTodos(val) {
        return this.todos = val
    }

}
export function appendToAllProjects(project, allProjDropdown,allTasksDropdown) {
    allProjDropdown.appendChild(CreateHTML().alink(project))
    newTodoFunc.appendToAllTasks(project,allTasksDropdown);
}