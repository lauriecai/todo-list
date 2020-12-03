// selectors
const addItemBtn = document.querySelector('.todo-btn');
const todoInput = document.querySelector('.todo-input');
const todoList = document.querySelector('.todo-list');
const filter = document.querySelector('.filter-todo');

// event listeners
addItemBtn.addEventListener('click', addItem);
todoList.addEventListener('click', takeAction);
filter.addEventListener('change', filterItems);
document.addEventListener('DOMContentLoaded', getItems);

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
    // add to local storage
    saveLocalTodos(todoInput.value);
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
        removeLocalItem(todoItem);
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

function filterItems(e) {
    const items = todoList.childNodes;
    items.forEach(function(item) {
        switch (e.target.value) {
            case 'all items':
                item.style.display = 'flex';
                break;
            case 'completed':
                if (item.classList.contains('completed')) {
                    item.style.display = 'flex';
                } else {
                    item.style.display = 'none';
                }
                break;
            case 'active':
                if (!item.classList.contains('completed')) {
                    item.style.display = 'flex';
                } else {
                    item.style.display = 'none';
                }
                break;
        }
    })
}

// local storage
function saveLocalTodos(item) {
    // check if any previously stored items
    let items;
    if (localStorage.getItem('items') == null) {
        items = [];
    } else {
        items = JSON.parse(localStorage.getItem('items'));
    }
    items.push(item);
    localStorage.setItem('items', JSON.stringify(items));
}

function getItems() {
    // check if any previously stored items
    let items;
    if (localStorage.getItem('items') == null) {
        items = [];
    } else {
        items = JSON.parse(localStorage.getItem('items'));
    }
    items.forEach(function(item) {
        // create the item div
        const itemDiv = document.createElement('div');
        itemDiv.className = 'todo-item';
        // create item text
        const itemText = document.createElement('li');
        itemText.textContent = item;
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
    })
}

function removeLocalItem(item) {
    // check if any previously stored items
    let items;
    if (localStorage.getItem('items') == null) {
        items = [];
    } else {
        items = JSON.parse(localStorage.getItem('items'));
    }
    const text = item.children[0].textContent;
    items.splice(items.indexOf(text), 1);
    localStorage.setItem('items', JSON.stringify(items));
}