'use strict';

// FIRST, SELECT INPUT, BTN AND LIST
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-btn');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');
const selectPriority = document.querySelector('.select-priority');

todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteTask);
