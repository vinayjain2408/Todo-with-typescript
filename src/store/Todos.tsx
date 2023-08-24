import { ReactNode, createContext, useContext, useState } from "react";

export type TodoProviderProps = {
   children : ReactNode
}

export type Todo = {
    id : string;
    task : string;
    complete : boolean;
    createAt : Date;
}

export type Tododata = {
    todos : Todo[];
    handleAddToDo:(task:string) => void;
    toggleTodoascomplete:(id:string)=> void;
}


export const todosContext = createContext<Tododata | null >(null)

export const TodoProvider = ({children} : TodoProviderProps) =>{

    const [todos , setTodos] = useState<Todo[]>([])
    
    const handleAddToDo = (task:string)=>{
        setTodos((prev) =>{
            const newtodos:Todo[] =[
                {
                    id:Math.random().toString(),
                    task:task,
                    complete:false,
                    createAt:new Date
                },
                ... prev
            ]
            console.log("my prev data" +  prev)
            console.log(newtodos)

            return newtodos
        })
    }

    const toggleTodoascomplete =

    return (
    <todosContext.Provider value={{todos , handleAddToDo}}>
        {children}
    </todosContext.Provider>
    )
}


//consumer
export const useTodos = ()=>{
    const todoConsumer = useContext(todosContext)
    if(!todoConsumer){
        throw new Error(" useTodos used outside of Provider")
    }
    return todoConsumer;
}