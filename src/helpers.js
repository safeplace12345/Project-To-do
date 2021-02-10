const addEvent = (element,event) => {
   return element.addEventListener(`${event}`,function(e){
    //    console.log(e.target);
    })
}
const addEventWithFunc = (element,event,fn) => {
   return element.addEventListener(`${event}`,function(e){
       fn();
    })
}
function createLi(todo) {
    let todoDropDown = document.querySelector('.allTodos');
    const li = document.createElement('li');
    li.classList.add('dropdown-menu')
    li.innerText = todo.title;
    return todoDropDown.appendChild(li);
}

export const helper = {
    addEvent,
    addEventWithFunc
}