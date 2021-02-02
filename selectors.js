'use strict';

// REFACTOR
// HTML
const btn = `<button class="complete-btn"><i class="fas fa-check-double"></i></button>
<button class="delete-btn"><i class="fas fa-trash-alt"></i></button>`;

// FIRST, SELECT INPUT(BOTH), BTN AND LIST
const todoList = document.querySelector('.todo-list');
const todoInput = document.querySelector('.todo-input');
const todoFilter = document.querySelector('.todo-input2');
const todoButton = document.querySelector('.todo-btn');
const selectPriority = document.querySelector('.select-priority');
const filterOption = document.querySelector('.filter-todo');

// LOAD PAGE WITH ARRAY PRINTED
printTasks(tasks);

// CREATING
todoButton.addEventListener('click', addTodo);

// DELETING
todoList.addEventListener('click', deleteTask);

// FILTER BY PRIORITY
filterOption.addEventListener('change', filterPriority);

// FILTER TASKS BY NAME
todoFilter.addEventListener('input', filterTask);
