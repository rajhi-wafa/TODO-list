import React, { useState } from 'react'

function InputTodo({handleAdd}) {
    const [inputText,setInputText]=useState('')
    const add=()=>{
        handleAdd({id:Math.random(),text:inputText})
    }
    return (
        <div>
            <input type="text" value={inputText} onChange={(e)=>setInputText(e.target.value)}/>
            <button onClick={add}>ADD</button>
        </div>
    )
}

export default InputTodo
