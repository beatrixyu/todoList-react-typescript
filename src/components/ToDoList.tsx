import React from 'react';

interface ToDoListProp {
    items: { id: string, text: string }[]
    onDelete: (id: string) => void
}

const ToDoList: React.FC<ToDoListProp> = (props) => {
    return (
        <ul>
            {props.items.map(
                todo => <li key={todo.id} value={todo.text}>
                    {todo.text}
                    <button onClick={props.onDelete.bind(null, todo.id)}>Delete</button>
                </li>
            )}
        </ul>
    )
}

export default ToDoList;


