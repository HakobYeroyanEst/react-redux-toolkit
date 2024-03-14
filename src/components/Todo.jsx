import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { FaPlus } from 'react-icons/fa'
import { BsSearch } from 'react-icons/bs'

import FilterButtons from './FilterButtons.jsx'
import TodoList from './TodoList.jsx'

import { addTodo, updateSearchTerm } from '../store/todoSlice.js'

const Todo = () => {
  const dispatch = useDispatch()

  const [newTodoText, setNewTodoText] = useState('')
  const [searchTerm, setSearchTerm] = useState('')

  const handleAddTodo = () => {
    const newTodoRawValue = newTodoText.trim()
    if (newTodoRawValue) {
      dispatch(addTodo({ text: newTodoRawValue, id: Math.random().toString(16).slice(2) }))
      setNewTodoText('')
    }
  }

  const handleSearchChange = (value) => {
    setSearchTerm(value)
    dispatch(updateSearchTerm(value))
  }

  return (
    <div className="max-w-4xl mx-auto sm:mt-8 p-4 bg-gray-100 rounded">
      <h2 className="mt-3 mb-6 text-2xl font-bold text-center uppercase">Personal Todo app</h2>

      <div className="flex items-center mb-4">
        <input
          value={newTodoText}
          type="text"
          name="addTodoInput"
          id="addTodoInput"
          placeholder="Add Todo"
          className="flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
          onChange={(e) => setNewTodoText(e.target.value)}
        />
        <button className="ml-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-700" onClick={handleAddTodo}>
          <FaPlus />
        </button>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <FilterButtons />
        <div className="flex items-center mb-4">
          <input
            className="flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
            type="text"
            placeholder="Search Todos"
            value={searchTerm}
            onChange={(e) => handleSearchChange(e.target.value)}
          />
          <button className="ml-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none">
            <BsSearch size={17} />
          </button>
        </div>
      </div>

      <TodoList />
    </div>
  )
}

export default Todo
