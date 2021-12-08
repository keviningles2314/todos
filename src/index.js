
import './style.css';
import {Todo, TodoList } from './class' 
import { crearTodoHtml } from './js/components';



export const todoList = new TodoList();

todoList.todos.forEach(crearTodoHtml);

// const newTodo = new Todo("aprender javascript");
// todoList.nuevoTodo(newTodo);

console.log('Todos', todoList.todos);