import './TodoCreate.css'
import { useState } from 'react'

const TodoCreate = (props) => {
    const [getInputTodo, setInputTodo] = useState('')


    const hendleSubmit = (event) => {
        event.preventDefault()

        const newTodo = {
            id: Math.floor(Math.random() * 100) + 1,
            title: getInputTodo
        }

        props.onCreateTodo(newTodo)

        setInputTodo('')

        // console.log(newTodo)
    }

    const headleInputTodo = (event) => {
        setInputTodo(event.target.value)
        console.log(getInputTodo)
    }

    return (
        <form className="todo-form" onSubmit = {hendleSubmit}>
            <input type="text" value={getInputTodo} onChange = {headleInputTodo}/>
            <button type="submit">Add</button>
        </form>
    )
}

export default TodoCreate