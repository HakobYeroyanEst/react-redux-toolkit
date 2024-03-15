import { useDispatch, useSelector } from 'react-redux'

import { filterTodos, markAllCompleted } from '../store/todoSlice.js'

const FilterButtons = () => {
  const dispatch = useDispatch()
  const todoFilter = useSelector((state) => state.todo.todoFilter)

  const handleFilterChange = (e) => {
    dispatch(filterTodos(e.target.value))
  }

  const markAllTodos = (e) => {
    dispatch(markAllCompleted())
  }

  return (
    <div className="flex space-x-4 items-center">
      <select
        className="text-base px-2 py-1 mr-2 rounded border border-gray-300 focus:outline-none"
        value={todoFilter}
        onChange={handleFilterChange}
      >
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="incomplete">Incomplete</option>
      </select>

      <button className="text-sm px-2 py-1 bg-purple-500 text-white rounded ml-2" onClick={markAllTodos}>
        Mark All Completed
      </button>
    </div>
  )
}

export default FilterButtons
