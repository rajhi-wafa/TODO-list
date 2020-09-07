import React,{useState} from 'react';
import TodoListe from './component/TodoListe';
import InputTodo from './component/InputTodo';
import './App.css';
import Todo from './component/Todo';

function App() {
  const [todos, setTodos] = useState([{id:0,isCompleted:false ,text:"nour"}
  ,{id:1,isCompleted:false ,text:"yassien"}
  ,{id:3,isCompleted:false ,text:"saloi"}])
  const handleAdd=(newTodo)=>{
    setTodos([...todos,newTodo])};

  const handleDelet=(index)=>{
    setTodos(todos.filter((todo)=>todo.id !== index));
 };
 const handleComplete =(id)=>
{setTodos(todos.map(todo=>
    todo.id===id?{...todo,isCompleted:!todo.isCompleted,auth:"5"}:todo))
  }
  const handleEdit=(id,editedText)=>{
    setTodos(todos.map(todo=>todo.id===id?{...todo,text:editedText}:todo))
  }
  
  return (
    <div className="App">
      
      <InputTodo handleAdd={handleAdd} />
      <TodoListe todos={todos} handleDelet={handleDelet} handleComplete={handleComplete} handleEdit={handleEdit} />
    </div>
  );
}

export default App;
