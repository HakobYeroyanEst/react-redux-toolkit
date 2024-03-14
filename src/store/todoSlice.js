// import {
//   ADD_TODO,
//   TOGGLE_TODO,
//   REMOVE_TODO,
//   MARK_COMPLETED,
//   MARK_INCOMPLETE,
//   FILTER_TODOS,
//   MARK_ALL_COMPLETED,
//   UPDATE_SEARCH_TERM,
// } from './actionTypes'
//
// const initialState = {
//   todos: [],
//   filter: 'All',
//   searchTerm: '',
// }
//
// const todoReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case TOGGLE_TODO:
//       return {
//         todos: state.todos.map((todo, index) =>
//           index === action.payload.id
//             ? { ...todo, completed: !todo.completed }
//             : todo
//         ),
//         filter: state.filter,
//         searchTerm: state.searchTerm,
//       }
//
//     case REMOVE_TODO:
//       return {
//         todos: state.todos.filter((todo, index) => index !== action.payload.id),
//         filter: state.filter,
//         searchTerm: state.searchTerm,
//       }
//
//     case MARK_COMPLETED:
//       return {
//         todos: state.todos.map((todo, index) =>
//           index === action.payload.id ? { ...todo, completed: true } : todo
//         ),
//         filter: state.filter,
//         searchTerm: state.searchTerm,
//       }
//
//     case MARK_INCOMPLETE:
//       return {
//         todos: state.todos.map((todo, index) =>
//           index === action.payload.id ? { ...todo, completed: false } : todo
//         ),
//         filter: state.filter,
//         searchTerm: state.searchTerm,
//       }
//
//     case MARK_ALL_COMPLETED:
//       return {
//         todos: state.todos.map((todo) => ({ ...todo, completed: true })),
//         filter: state.filter,
//         searchTerm: state.searchTerm,
//       }
//
//     default:
//       return state
//   }
// }
//
// export default todoReducer

import { createSlice } from '@reduxjs/toolkit'

export const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    todos: [
      { tex: 'asd', completed: false },
      { tex: 'ssd', completed: true },
      { tex: 'sdsd', completed: true },
      { tex: 'dsds', completed: false },
    ],
    todoFilter: 'all',
    searchTerm: '',
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos = [...state.todos, { text: action.payload, completed: false }]
    },
    updateSearchTerm: (state, action) => {
      state.searchTerm = action.payload
    },
    filterTodos: (state, action) => {
      state.todoFilter = action.payload
    },
  },
})

export const { addTodo, updateSearchTerm, filterTodos } = todoSlice.actions

export default todoSlice.reducer
