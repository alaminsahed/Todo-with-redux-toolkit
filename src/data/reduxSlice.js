import { createSlice } from "@reduxjs/toolkit";

const initialState = {todoList:[]};

const reduxSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
      add:(state, action)=>{
            state.todoList.push(action.payload)
      },

      check:(state, action)=>{

        state.todoList.map((item,index) =>{
        
          if(item.id === action.payload)
          {
            if(item.done === true)
            {
              item.done = false;
            }
            else{
              item.done = true;
            }
          }
          return(0);
        })
      }
  },
});

export const {add, check } = reduxSlice.actions;
// export const selectTodo  = state => state.todos.todoList;
export default reduxSlice.reducer;
