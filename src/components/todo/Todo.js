import './Todo.css'
import {useState} from "react"
import TodoList from "../todo-list/TodoList"
import TodoCreate from "../todo-create/TodoCreate"

const Todo = () => {
    const [getTodos, setTodas] = useState([
        { id: 1, title: 'Eat'},
        { id: 2, title: 'Sleep'},
        { id: 3, title: 'Code'},
    ])

    const eventCreateTodo = (todo) => {
        setTodas(getTodos.concat(todo))
        console.log(getTodos)
    }

    return (
        <div>
            <h3>To List</h3>
            <TodoCreate onCreateTodo = {eventCreateTodo}/>
            <TodoList datasTodos = {getTodos} />
        </div>
    )
}

export default Todo