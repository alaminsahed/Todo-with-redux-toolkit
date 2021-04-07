import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './reduxSlice'; 

export default configureStore({
  reducer: {
      todos: todoReducer,
  },
})