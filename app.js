'use strict';
let color;
let idCounter = 0;

// print data tasks array
const printTasks = (task) => {
  todoList.innerHTML = '';
  for (let todo of task) {
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
    <div class="todo" style='background-color:${color}'data-id='${idCounter}'>
        <li class="todo-item">${todo.name}</li>
        ${btn}
    </div>`;
  }
};

// ADD NEW TODO TO THE LIST
function addTodo(e) {
  e.preventDefault();
  if (selectPriority.value == '' || todoInput == '') {
    alert('Gotta add a task dude!');
  } else {
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
          ${btn}
    </div>`;

    let newTodo = {
      id: idCounter,
      name: todoInput.value,
      priority: selectPriority.value,
    };
    // push to array
    tasks.push(newTodo);
    // clean input but alert only goes one time
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
function filterPriority(e) {
  let type = e.target.value;
  let list = filterList(type, tasks);

  type != '' ? printTasks(list) : printTasks(tasks);
}

function filterList(priority, tasks) {
  let filteredList = tasks.filter((task) => task.priority == priority);

  return filteredList;
}

// FILTER BY TASK
function filterTodo(name, todo) {
  let filteredByName = todo.filter((task) =>
    task.name.toLowerCase().includes(name.toLowerCase())
  );

  return filteredByName;
}

function filterTask(e) {
  let type = e.target.value;
  let list = filterTodo(type, tasks);

  type != '' ? printTasks(list) : printTasks(tasks);
}
