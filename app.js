'use strict';

function addTodo(e) {
  // no loading bro
  e.preventDefault();
  //   console.log('hello');
  if (todoInput.value == '' || selectPriority.value == '') {
    alert('Gotta add a task dude!');
  } else {
    //CREATING ELEMENTS FOR THE TO DOS
    const createTodo = document.createElement('div');
    createTodo.classList.add('todo');

    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');

    createTodo.appendChild(newTodo);

    // TAKS DONE BTN
    const doneBtn = document.createElement('button');
    doneBtn.innerHTML = '<i class="fas fa-check-double"></i>';
    doneBtn.classList.add('complete-btn');
    createTodo.appendChild(doneBtn);

    // DELETE TASK BTN
    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
    deleteBtn.classList.add('delete-btn');
    createTodo.appendChild(deleteBtn);

    // ADDING TO LIST
    todoList.appendChild(createTodo);

    // CLEAN THE INPUT
    todoInput.value = '';
  }
}

// DELETE FUNCTION
function deleteTask(e) {
  //   console.log(e.target);
  const item = e.target;

  // DELETE
  if (item.classList[0] === 'delete-btn') {
    const todo = item.parentElement;
    todo.remove();
  }

  // DONE
  if (item.classList[0] === 'complete-btn') {
    const todo = item.parentElement;
    todo.classList.toggle('completed');
  }
}

// FILTER TASKS
function filterTodo(e) {
  e.preventDefault();
  const todos = todoList.childNodes;
  //   console.log(todos);
  todos.forEach((todo) => {
    switch (e.target.value) {
      case 'all':
        todo.style.display = 'flex';
        break;

      case 'completed':
        if (todo.classList.contains('completed')) {
          todo.style.display = 'flex';
        } else {
          todo.style.display = 'none';
        }
        break;

      case 'uncompleted':
        if (!todo.classList.contains('completed')) {
          todo.style.display = 'flex';
        } else {
          todo.style.display = 'none';
        }
        break;

      case 'important':
        color = 'tomato';

        break;

      case 'daily':
        color = 'lightyellow';

        break;

      case 'monthly':
        color = 'lightgreen';
        break;
    }
  });
}
