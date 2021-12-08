import{Todo}from"./todo.class";export class TodoList{constructor(){this.cargarLocalStorage()}nuevoTodo(o){this.todos.push(o),this.guardarLocalStorage()}eliminarTodo(o){this.todos=this.todos.filter((t=>t.id!==o)),this.guardarLocalStorage()}marcarCompletado(o){for(const t of this.todos)if(t.id==o){t.completado=!t.completado,this.guardarLocalStorage();break}}eliminarCompletados(){this.todos=this.todos.filter((o=>!o.completado)),this.guardarLocalStorage()}guardarLocalStorage(){localStorage.setItem("todo",JSON.stringify(this.todos))}cargarLocalStorage(){this.todos=localStorage.getItem("todo")?JSON.parse(localStorage.getItem("todo")):this.todos=[],this.todos=this.todos.map(Todo.fromJson)}}