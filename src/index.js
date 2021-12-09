
import './style.css';
import {Todo, TodoList } from './class' 
import { crearTodoHtml } from './js/components';



export const todoList = new TodoList();

todoList.todos.forEach(crearTodoHtml);