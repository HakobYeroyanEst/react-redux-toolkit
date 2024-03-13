import { useSelector } from 'react-redux'
import TodoItem from './TodoItem'

const TodoList = () => {
  const todos = useSelector((state) => {
    const { todos, searchTerm } = state.todo

    return todos?.filter((todo) => todo.text?.includes(searchTerm))
  })

  return (
    <ul>
      <li className="my-2 text-sm italic">All Your Notes Here...</li>
      {todos.map((todoItem, index) => (
        <TodoItem key={index} todoItem={todoItem} index={index} />
      ))}
    </ul>
  )
}

export default TodoList
