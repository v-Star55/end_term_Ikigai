import React, { Fragment } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faEdit } from '@fortawesome/free-solid-svg-icons'

const ToDoItem = (props) => {

    const currentDate = new Date().toLocaleString();


const deleteHandler = () => {
    console.log(props.todo);  
    props.setTodos(props.todos.filter((el) => el.id !== props.todo.id)); 

}

const completeHandler = () => {
    props.setTodos(props.todos.map((item) => {
        if(item.id === props.todo.id){
            return {
                ...item, completed: !item.completed   
            }
        }
        return item;
    }))
}


const editHandler = () => {
    props.setTodos(props.todos.map((item) => {
        if(item.id === props.todo.id){
            return {
                ...item, text: prompt("Edit your task", item.text),
                lastEdited: currentDate   
            } 
        }
        return item;
    }))
}




  return (
    <Fragment>
        <div className="todo">
                    <li className={`todo-item ${props.todo.completed ? "completed":""}`}>{props.text}</li> 
                    <div className="last-edited">
                    Last edited: {props.todo.lastEdited ? props.todo.lastEdited.toString() : 'Never'}
            </div>

                    <button onClick={editHandler} className="edit-btn">
                    <FontAwesomeIcon icon={faEdit} />
                    </button>

                    <button onClick={completeHandler} className="complete-btn">
                    <FontAwesomeIcon icon={faCheck} />
                    </button>
                    <button onClick={deleteHandler} className="trash-btn">
                    <FontAwesomeIcon icon={faTrash} />
                    </button>
                </div>
      
    </Fragment>
  )
}

export default ToDoItem
