import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import TodoItem from './TodoItem'

const TodoList = () => {
  const { todos, searchTerm, todoFilter } = useSelector((state) => state.todo)
  const [filteredTodos, setFilteredTodos] = useState([])

  useEffect(() => {
    setFilteredTodos(
      todos?.filter((todo) => {
        if (todoFilter === 'completed') {
          return todo.text?.includes(searchTerm) && todo.completed
        } else if (todoFilter === 'incomplete') {
          return todo.text?.includes(searchTerm) && !todo.completed
        } else if (todoFilter === 'all') {
          return todo.text?.includes(searchTerm)
        }
      })
    )
  }, [searchTerm, todos, todoFilter])

  return (
    <ul>
      <li className="my-2 text-sm italic">All Your Notes Here...</li>
      {filteredTodos.map((todoItem, index) => (
        <TodoItem key={index} todoItem={todoItem} index={index} />
      ))}
    </ul>
  )
}

export default TodoList
