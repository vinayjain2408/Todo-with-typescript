import React from 'react'
import { useTodos } from '../store/Todos'
import { useSearchParams } from 'react-router-dom';

function TodoData() {

  const {todos ,toggleTodoascomplete ,handleDeleteTodo} = useTodos();
  const [searchParams] = useSearchParams();
  let todoData = searchParams.get("todos")
    console.log("vinay search params" , todoData)

    let filterData = todos;

    if(todoData === 'active'){
        filterData = filterData.filter((task) => !task.complete)
    }

    if(todoData === "complete"){
        filterData = filterData.filter((task)=>task.complete)
    }

  return (
    <div>
        <ul>
            {
                filterData.map((todo)=>{
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