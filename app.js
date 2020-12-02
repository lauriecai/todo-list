// selectors
const addItemBtn = document.querySelector('.todo-btn');
const todoInput = document.querySelector('.todo-input');
const todoList = document.querySelector('.todo-list');

// event listeners
addItemBtn.addEventListener('click', addItem);
todoList.addEventListener('click', takeAction);

// functions
function addItem(e) {
    // prevent form from submitting
    e.preventDefault();
    // create the item div
    const itemDiv = document.createElement('div');
    itemDiv.className = 'todo-item';
    // create item text
    const itemText = document.createElement('li');
    itemText.textContent = todoInput.value;
    itemText.className = 'item-text';
    itemDiv.appendChild(itemText);
    // create check button
    const completeItemBtn = document.createElement('button');
    completeItemBtn.className = 'complete-item-btn';
    completeItemBtn.innerHTML = '<i class="fas fa-check"></i>';
    itemDiv.appendChild(completeItemBtn);
    // create delete button
    const deleteItemBtn = document.createElement('button');
    deleteItemBtn.className = 'delete-item-btn';
    deleteItemBtn.innerHTML = '<i class="fas fa-trash"></i>';
    itemDiv.appendChild(deleteItemBtn);
    // append item div to todo container
    todoList.appendChild(itemDiv);
    // clear input
    todoInput.value = '';
}

function takeAction(e) {
    const click = e.target;
    // delete todo item
    if (click.classList == 'delete-item-btn') {
        const todoItem = click.parentElement;
        // animation
        todoItem.classList.add('fall');
        todoItem.addEventListener('transitionend', function() {
            todoItem.remove();
        })
    }
    // mark as complete
    if (click.classList == 'complete-item-btn') {
        const todoItem = click.parentElement;
        todoItem.classList.toggle('completed');
    }
}