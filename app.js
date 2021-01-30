'use strict';

function addTodo(e) {
  // no loading bro
  e.preventDefault();
  //   console.log('hello');

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
