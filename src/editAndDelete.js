function editTodo(element) {
    let tdBody = element.target.parentNode.parentNode.lastChild;
    if (tdBody.style.display === 'none') {
        tdBody.style.display = 'block'
    } else {
        tdBody.style.display = 'none'
    }
}

function deleteTodo(element) {
    let todoContainer = document.querySelector('#todo-container');
    return todoContainer.remove(element.target.parentNode.parentNode);
}

function setTimer(element){
    
}

export const editAndDelete = {
    editTodo,
    deleteTodo
}