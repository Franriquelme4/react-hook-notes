import React from 'react'

export const TodoListItem = ({todo,handleToggle,handleDeleteTodo,index}) => {
  return (
    <li className="list-group-item" key={todo.id}>
    <p className={`${todo.done && 'complete'}`}
      onClick={()=>handleToggle(todo.id)}
    >
      {index + 1}. {todo.desc}{" "}
    </p>
    <button className="btn btn-danger"
       onClick={()=>handleDeleteTodo(todo.id)}
              >Borrar</button>
  </li>
  )
}
