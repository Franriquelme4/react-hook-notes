import React from 'react'
import { TodoListItem } from './TodoListItem';

export const TodoList = ({toDos,handleToggle,handleDeleteTodo}) => {
  return (
    <ul className="list-group list-group-flush">
    {toDos.map((todo, index) => {
      return (
            <TodoListItem 
                        key={todo.id}
                        todo={todo}
                        handleToggle  ={handleToggle}
                        handleDeleteTodo ={handleDeleteTodo} index={index}
                                />
      );
    })}
  </ul>
  )
}
