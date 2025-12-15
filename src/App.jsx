
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { addTask,editTask,removeTask } from './features/todos/todoSlice'
import { useState } from 'react'

function App() {
    const [text,setText]=useState("")
    const [editid,setEditid]=useState(null)
    const todos= useSelector((state)=>state.todos)
    const dispatch = useDispatch()

    const handleAdd=()=>{
      if(editid){
        dispatch(editTask({id:editid,newtext:text}))
        setEditid(null)
        setText("")
      }
      else{
        dispatch(addTask(text))
      setText("")
      }
    }
  return (
    <div>
         <h1>TODO APP</h1>
         <input type='text' placeholder='enter tasks'value={text} onChange={(e)=>setText(e.target.value)}/>
         <button onClick={handleAdd}>{editid ? "UPDATE" : "ADD"}</button>

         <ul>
          {todos.map((t)=>(
           <li key={t.id}>
             {t.text}
          <button onClick={()=>dispatch(removeTask(t.id))}>delete</button>
          <button onClick={()=>{
            setEditid(t.id);
            setText(t.text);
          }} >edit</button>
           </li>
           
          ))}
         </ul>
    </div>
  )
}

export default App
