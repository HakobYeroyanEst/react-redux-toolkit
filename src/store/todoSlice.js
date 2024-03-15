import { createSlice } from '@reduxjs/toolkit'

export const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    todos: [],
    todoFilter: 'all',
    searchTerm: '',
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos = [...state.todos, { text: action.payload.text, completed: false, id: action.payload.id }]
    },
    updateSearchTerm: (state, action) => {
      state.searchTerm = action.payload
    },
    filterTodos: (state, action) => {
      state.todoFilter = action.payload
    },
    deleteTodo: (state, action) => {
      state.todos = [...state.todos.filter((todo) => todo.id !== action.payload)]
    },
    markCompleted: (state, action) => {
      state.todos = [
        ...state.todos.map((todo) => {
          if (todo.id === action.payload) {
            return { ...todo, completed: true }
          }

          return todo
        }),
      ]
    },
    markIncomplete: (state, action) => {
      state.todos = [
        ...state.todos.map((todo) => {
          if (todo.id === action.payload) {
            return { ...todo, completed: false }
          }

          return todo
        }),
      ]
    },
    markAllCompleted: (state, action) => {
      state.todos = [...state.todos.map((todo) => ({ ...todo, completed: true }))]
    },
  },
})

export const { addTodo, updateSearchTerm, filterTodos, deleteTodo, markCompleted, markIncomplete, markAllCompleted } =
  todoSlice.actions

export default todoSlice.reducer
