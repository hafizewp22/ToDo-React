import './TodoList.css'

const TodoList = (props) => {
    console.log(props.datasTodos)

    return (
        <ul>{
            props.datasTodos.map((todo) => {
                // { id: 3, title: 'Code'}
                return <li key={todo.id}>{todo.title}</li>
            })
        }</ul>
    ) 
}

export default TodoList