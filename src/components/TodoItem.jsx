import { useDispatch } from 'react-redux'
import { FaTrash, FaCheck, FaTimes } from 'react-icons/fa'

import { deleteTodo, markCompleted, markIncomplete } from '../store/todoSlice.js'

const TodoItem = ({ todoItem, index }) => {
  const dispatch = useDispatch()

  const handleTodoDeletion = () => {
    dispatch(deleteTodo(todoItem.id))
  }

  const handleTodoCompletion = () => {
    dispatch(markCompleted(todoItem.id))
  }

  const handleTodoIncomplete = () => {
    dispatch(markIncomplete(todoItem.id))
  }

  return (
    <li className="flex flex-col sm:flex-row sm:items-center justify-between border-b-2 py-2 gap-4">
      <div className="flex items-center">
        <span className="mr-4 text-gray-500">{index + 1}.</span>
        <span className={`mr-4 ${todoItem.completed ? 'line-through text-gray-500' : ''}`}>{todoItem.text}</span>
      </div>
      <div className="space-x-3 ml-8">
        <button className="mr-2 text-sm bg-red-500 text-white sm:px-2 px-1 py-1 rounded" onClick={handleTodoDeletion}>
          <FaTrash />
        </button>
        {!todoItem.completed && (
          <button className="text-sm bg-green-500 text-white sm:px-2 px-1 py-1 rounded" onClick={handleTodoCompletion}>
            <FaCheck />
          </button>
        )}
        {todoItem.completed && (
          <button className="text-sm bg-yellow-500 text-white sm:px-2 px-1 py-1 rounded" onClick={handleTodoIncomplete}>
            <FaTimes />
          </button>
        )}
      </div>
    </li>
  )
}

export default TodoItem
