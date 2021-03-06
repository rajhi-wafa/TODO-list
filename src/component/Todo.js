import React from 'react'
import EditModal from './EditModal'


function Todo  ({todo,handleDelet,handleComplete,handleEdit})  {
    const delett=()=>{
        handleDelet(todo.id)
    }
    const complete=()=>{
        handleComplete(todo.id)
    }
    return (
        <div style ={{display:"flex",alignItems:'center',justifyContent:"center"}}>
             <input type="checkbox"onClick={complete}/>
               <p style={todo.isCompleted?{textDecoration:"line-through"}:{}}>
    {" "}{todo.text}{" "}</p> 
               {/*<button> Edit</button>*/}
               <EditModal buttonLabel="Edit"todo={todo} handleEdit={handleEdit}/>
               <button onClick = {delett}>Deleat</button>
            
        </div>
    )
}

export default Todo

