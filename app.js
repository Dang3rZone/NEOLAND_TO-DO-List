'use strict';

let idCounter = 0;

// print data tasks array
const printTasks = (task) => {
  todoList.innerHTML = '';
  for (let todo of task) {
    let color = '';

    switch (todo.priority) {
      case 'important':
        color = 'tomato';
        break;

      case 'daily':
        color = 'yellow';
        break;

      case 'monthly':
        color = 'lightgreen';
        break;
    }

    idCounter++;

    todoList.innerHTML += `
    <div class="todo ${todo.priority}" style='background-color:${color}'data-id='${idCounter}'>
        <li class="todo-item">${todo.name}</li>
        <button class="complete-btn"><i class="fas fa-check-double"></i></button>
        <button class="delete-btn"><i class="fas fa-trash-alt"></i></button>
    </div>`;
  }
};

// ADD NEW TODO TO THE LIST
function addTodo(e) {
  e.preventDefault();
  if (selectPriority.value == '' || todoInput == '') {
    alert('Gotta add a task dude!');
  } else {
    let color = '';
    switch (selectPriority.value) {
      case 'important':
        color = 'tomato';

        break;

      case 'daily':
        color = 'yellow';

        break;

      case 'monthly':
        color = 'lightgreen';
        break;
    }

    idCounter++;

    todoList.innerHTML += `
    <div class="todo" style='background-color:${color}' data-id='${idCounter}'>
          <li class="todo-item ${color}">${todoInput.value}</li>
          <button class="complete-btn"><i class="fas fa-check-double"></i></button>
          <button class="delete-btn"><i class="fas fa-trash-alt"></i></button>
    </div>`;

    let newTask = {
      id: idCounter,
      name: todoInput.value,
      priority: selectPriority.value,
    };
    // push to array
    tasks.push(newTask);
    // clean inout but alert only goes one time
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

// FILTER TASKS BY PRIORITY
function filterTodo(e) {
  let type = e.target.value;
  let list = filterList(type, tasks);
  if (type != '') {
    printTasks(list);
  } else {
    printTasks(tasks);
  }
}
function filterList(priority, tasks) {
  let filteredList = tasks.filter((task) => {
    return task.priority == priority;
  });

  return filteredList;
}
