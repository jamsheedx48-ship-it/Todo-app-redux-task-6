import { createSlice } from "@reduxjs/toolkit"

export const todoSlice=createSlice({
  name:"todos",
  initialState:[],
  reducers:{
    addTask(state,action){
      state.push({
        id:Date.now(),
        text:action.payload
      })
    },
    removeTask(state,action){
      return state.filter((t)=>t.id!==action.payload)
    },
    editTask(state,action){
      const {id,newtext}=action.payload;
     const task=  state.find((t)=>t.id===id)
       if(task){
              task.text=newtext

       }
    }
  }

})

export const {addTask,removeTask,editTask}=todoSlice.actions;
export default todoSlice.reducer;