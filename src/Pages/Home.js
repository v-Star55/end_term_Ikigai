import React from 'react'
import { useState, useEffect } from "react";
import Form from "../ToDo/Form";
import ToDo from "../ToDo/ToDo";
import "../ToDo/ToDoStyle.css";


const Home = () => {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status,setStatus] = useState("all");
  const [filteredTodos,setFilteredTodos] = useState([]);


  useEffect(() => {
    filterHandler();   
    saveLocalTodos();               
  } ,[todos,status]);   

  useEffect(() => {
    getLocalTodos();
  
  },[]);   

  const filterHandler = () => {
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }

  }



  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));   
  }


  // here i am getting the todos from the local storage

  const getLocalTodos = () => {
    if(localStorage.getItem("todos") === null){       
      localStorage.setItem("todos", JSON.stringify([]));
    }
    else{
      let todoLocal = JSON.parse(localStorage.getItem("todos"));    
      setTodos(todoLocal);  
    }
  }
    
  

  return (
    <div className='main-todo'>
      <header>
      <h1>Vaibhav's Todo List</h1>
    </header>
    
    <Form inputText={inputText} setTodos={setTodos} todos={todos} setInputText={setInputText} setStatus={setStatus} />
    <ToDo filteredTodos={filteredTodos} setInputText={setInputText} setTodos={setTodos} todos={todos} />
      
    </div>
  )
}

export default Home
