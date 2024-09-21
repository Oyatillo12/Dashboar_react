import { createContext, useState } from "react";

export const Context = createContext()



export const TitleCOntext = ({children}) => {

    const [todos, setTodos] = useState([])
    const [path, setPath] = useState("Overview")

    function addTodos(value){
        setTodos([...todos, value])
    }
    return (
        <Context.Provider value={{path,setPath, addTodos, todos,setTodos}}>
            {children}
        </Context.Provider>
    )
}