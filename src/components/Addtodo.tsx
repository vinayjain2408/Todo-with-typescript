import {FormEvent, useState } from 'react'
import { useTodos } from '../store/Todos'

function Addtodo() {
    const [todo , setTodo] = useState('')
    const {handleAddToDo} = useTodos()

    const handleformSubmit = (e:FormEvent<HTMLElement>) => {
        e.preventDefault()
        handleAddToDo(todo)
        setTodo("")
    }
  return (
    <div>
        <form onSubmit={handleformSubmit}>
            <input type='text'
             placeholder='Enter text'
             value={todo} 
             onChange={(e)=> setTodo(e.target.value)}/>
             <button type='submit'>Add</button>
        </form>
    </div>
  )
}

export default Addtodo