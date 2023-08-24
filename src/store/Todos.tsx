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
    handleDeleteTodo : (id:string)=> void;
}


export const todosContext = createContext<Tododata | null >(null)

export const TodoProvider = ({children} : TodoProviderProps) =>{

    const [todos , setTodos] = useState<Todo[]>(()=>{
        try {
            const newTodos = localStorage.getItem("todos") || "[]";
            return JSON.parse(newTodos) as Todo[]
        } catch (error) {
            return []
        }
    })
    
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
            // console.log("my prev data" +  prev)
            // console.log(newtodos)
            localStorage.setItem("todos" , JSON.stringify(newtodos))

            return newtodos
        })
    }

    const toggleTodoascomplete = (id:string) => {
        setTodos((prev) => {
            let newcheck = prev.map((check)=>{
                if(check.id === id){
                    return { ...check , complete : !check.complete}
                }
                return check ;
            })
            return newcheck;
        })
    }

    // const handleDeleteTodo = (id:string) => {
    //     setTodos(
    //         todos.filter((todo)=>{
    //             localStorage.setItem("todos" , JSON.stringify(todo))
    //           return(
    //                todo.id !== id
    //           )
    //         })
    //     )    
    // }
   
    const handleDeleteTodo = (id:string)=>{
        setTodos((prev)=>{
            let newTodo = prev.filter((filtertodo)=>{
                return(
                    filtertodo.id !== id
                )
            })
            localStorage.setItem("todos" , JSON.stringify(newTodo))
            return newTodo;
        })
    }

    return (
    <todosContext.Provider value={{todos , handleAddToDo ,toggleTodoascomplete,handleDeleteTodo}}>
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