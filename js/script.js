// Temporary Storage For Todo Items
let todos = [];

// Function to Add Todo Item
function addTodo() {
    const todoInput = document.getElementById('todo-input');
    const todoDate = document.getElementById('todo-date');

    if (todoInput.value === '' || todoDate.value === '') {
        alert('Please fill in both the todo item and the date.');
    }else {
        const newTodo = {
            task: todoInput.value,
            date: todoDate.value
        };

        // Add the new todo to the todos array
        todos.push(newTodo);

        renderTodos();

        // Clear input fields
        todoInput.value = '';
        todoDate.value = '';
    }
}

/// Function to render todo items to the DOM
function renderTodos() {
    const todoList = document.getElementById('todo-list');

    // Clear existing list
    todoList.innerHTML = '';

    // Render each todo item
    todos.forEach((todo, _) => {
        todoList.innerHTML += `
         <li>
            <p class="text-2xl">${todo.task} <span class="text-sm text-gray-500">(${todo.date})</span></p>
            <hr />
        </li>
        `;
    });
}

// Function to Remove All Todo Items
function removeAllTodo() {
    todos = [];
    renderTodos();
}

// Function to Filter Todo Items
function filterTodo() {
    // Get today's date in YYYY-MM-DD format
    const today = new Date().toISOString().split('T')[0];

    // Filter the array to get only items scheduled for today
    const todayTodos = todos.filter(todo => todo.date === today);

    // Select the list element and clear it
    const todoList = document.getElementById('todo-list');
    todoList.innerHTML = '';

    // Check if there are any task for today
    if (todayTodos.length === 0) {
        todoList.innerHTML = '<li><p class="text-xl text-gray-500">No tasks for today!</p></li>';
    } else {
        // Render only the filtered tasks
        todayTodos.forEach((todo) => {
            todoList.innerHTML += `
            <li>
                <p class="text-2xl">${todo.task} <span class="text-sm text-blue-500">(Today)</span></p>
                <hr />
            </li>
            `;
        });
    }

    console.log("Filtering for today's tasks:", todayTodos);

}