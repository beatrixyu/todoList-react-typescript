import React,{useState} from 'react';
import ToDoList from "./components/ToDoList"
import NewToDoList from "./components/NewToDo"
import { Todo } from "./Todo.modal"

const App: React.FC = () => {

  // const todos = [{id:"t1", text:"to finish the course"}]
  const [todos, setTodos] = useState<Todo[]>([])
  const todoAddHandler = (text:string) => {
    setTodos(prevTodos=>[...prevTodos,{ id: Math.random().toString(), text:text}])
  }

  const deleteTodoHandler = (todoId: string) => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.id !== todoId);
    })
  }
  return(
    <div>
    <NewToDoList onAddTodo={todoAddHandler} />
      <ToDoList items={todos} onDelete={deleteTodoHandler}/>
    </div>
  )
}

export default App;
