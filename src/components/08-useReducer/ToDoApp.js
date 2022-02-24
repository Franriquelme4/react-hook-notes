import React, { useEffect, useReducer } from "react";
import "./style.css";
import { toDoReducer } from "./toDoReducer";
import { useForm } from "../../hooks/useForm";
import { TodoList } from "./TodoList";
import { ToDoAdd } from "./ToDoAdd";

const init = () => {
  return JSON.parse(localStorage.getItem("ToDos")) || [];
};

export const ToDoApp = () => {
  const [toDos, dispatch] = useReducer(toDoReducer, [], init);
  

  useEffect(() => {
    localStorage.setItem("ToDos", JSON.stringify(toDos));
  }, [toDos]);

  const handleDeleteTodo=(id)=>{
    console.log(id);

    const actionDeleteTodo = {
        type:'delete',
        payload:id
    }
    dispatch(actionDeleteTodo);

  }

  const handleToggle = (todoId=>{
    dispatch({
        type:'toggle',
        payload:todoId
    })

  })

  const handleAddTodo=(newTodo)=>{
      dispatch({
        type: "add",
        payload: newTodo,
      });
  }


  return (
    <div>
      <h1>TodoApp ({toDos.length})</h1>
      <hr />
      <div className="row">
        <div className="col-7">
            {!toDos.length?<p>Agregar Elementos ...</p>:''}


         <TodoList  toDos={toDos}
                    handleToggle={handleToggle}
                    handleDeleteTodo={handleDeleteTodo}
        />
        </div>
        <div className="col-5">
            <ToDoAdd handleAddTodo={handleAddTodo}/>
        </div>
      </div>
    </div>
  );
};
