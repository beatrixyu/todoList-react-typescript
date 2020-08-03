import React, { useRef } from 'react';
import "./NewToDo.css"

type NewToDoProps = {
    onAddTodo: (todoText: string) =>void
}

const NewToDoList: React.FC<NewToDoProps> = (props) => {

    const textInputRef = useRef<HTMLInputElement>(null)
    
    const todoSubmitHandler = (event:React.FormEvent)=> {
        event.preventDefault()
        const enteredText = textInputRef.current!.value
        props.onAddTodo(enteredText)
    }
    return (
        <form onSubmit={todoSubmitHandler}>
            <div className="form-control">
                <label htmlFor="todo-text"></label>
                <input type="text" id="todo-text" ref={textInputRef}/>
            </div>
            <button type="submit" >Add</button>
        </form>
    )
}

export default NewToDoList;