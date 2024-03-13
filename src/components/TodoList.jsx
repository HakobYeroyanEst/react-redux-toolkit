import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import TodoItem from "./TodoItem"

const TodoList = () => {
  const { todos, searchTerm } = useSelector((state) => state.todo)
  const [filteredTodos, setFilteredTodos] = useState([])

  useEffect(() => {
    setFilteredTodos(todos?.filter((todo) => todo.text?.includes(searchTerm)))
  }, [searchTerm, todos])

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
