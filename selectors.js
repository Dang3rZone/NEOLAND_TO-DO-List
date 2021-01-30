'use strict';

// FIRST, SELECT INPUT, BTN AND LIST
const todoList = document.querySelector('.todo-list');
const todoInput = document.querySelector('.todo-input');
const todoFilter = document.querySelector('.todo-input2');
const todoButton = document.querySelector('.todo-btn');
const selectPriority = document.querySelector('.select-priority');
const filterOption = document.querySelector('.filter-todo');

todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteTask);
// FILTER
filterOption.addEventListener('change', filterTodo);
todoFilter.addEventListener('focus', getTypeNombre);
