// selectors
const addItemBtn = document.querySelector('.todo-button');
const todoInput = document.querySelector('.todo-input');
const todoList = document.querySelector('.todo-list');

// event listeners
addItemBtn.addEventListener('click', addItem);

// functions
function addItem(e) {
    // prevent form from submitting
    e.preventDefault();
    // create the item div
    const itemDiv = document.createElement('div');
    itemDiv.className = 'todo-item';
    // create item text
    const itemText = document.createElement('li');
    itemText.textContent = 'Start new JavaScript project!';
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
}
