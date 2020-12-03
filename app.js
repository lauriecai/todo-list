// selectors
const addItemBtn = document.querySelector('.todo-btn');
const todoInput = document.querySelector('.todo-input');
const todoList = document.querySelector('.todo-list');
const filter = document.querySelector('.filter-todo');

// event listeners
addItemBtn.addEventListener('click', addItem);
todoList.addEventListener('click', takeAction);
// filter.addEventListener('change', filterItems);
filter.addEventListener('change', filterItems);

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


// function filterItems() {
//     const selectedFilter = filter.value;
//     switch (selectedFilter) {
//         case 'completed':
//             display('completed');
//             break;
//         case 'active':
//             display('todo-item');
//             hide('completed');
//             break;
//         case 'all items':
//             display('todo-item');
//     }
// }

// function display(classname) {
//     for (i = 0; i < todoListItems.length; i++) {
//         const currentItem = todoListItems[i];
//         if (currentItem.classList.contains(classname)) {
//             currentItem.style.display = 'flex';
//         } else {
//             currentItem.style.display = 'none';
//         }
//     }
// }

// function hide(classname) {
//     for (i = 0; i < todoListItems.length; i++) {
//         const currentItem = todoListItems[i];
//         if (currentItem.classList.contains(classname)) {
//             currentItem.style.display = 'none';
//         }
//     }
// }