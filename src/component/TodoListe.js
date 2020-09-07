import React from 'react';
import Todo from  "./Todo"

function TodoListe({todos,handleDelet,handleComplete,handleEdit}) {
    return (
        <div>
            {todos.map((todo)=>
            <Todo  key = {todo.id} todo={todo} handleDelet={handleDelet} handleComplete={handleComplete} handleEdit={handleEdit}/>
                )}
               
        </div>
    )
}

export default TodoListe
