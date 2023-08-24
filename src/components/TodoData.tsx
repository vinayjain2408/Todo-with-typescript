import React from 'react'
import { useTodos } from '../store/Todos'

function TodoData() {

  const {todos} = useTodos();

  return (
    <div>
        <ul>
            {
                todos.map((todo)=>{
                    return(
                        <li key={todo.id}>
                            <input  type='checkbox' id={`todo-${todo.id}`}
                            checked = {todo.complete}
                            onChange={()=>toggleTodoascomplete(todo.id)}/>
                            <label htmlFor={`todo-${todo.id}`}>{todo.task}</label>
                            {
                                todo.complete && (
                                    <button type='button'
                                    onClick={()=>handleDeleteTodo(todo.id)}
                                    >Delete</button>
                                )
                            }
                        </li>
                    )
                })
            }
        </ul>
    </div>
  )
}

export default TodoData