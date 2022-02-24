import React, { useEffect } from "react";
import { useForm } from "../../hooks/useForm";
import "./effects.css";
export default function FormWithCH() {
  const [formValues, handleInputChange] = useForm({
    name: "",
    email: "",
    password:''
  });
  const { name, email ,password} = formValues;
  //usar use efect cuando se realizan cambios en un sector especifico del elemento
useEffect(() => {
  console.log('Cambio email ');
}, [email])
const handleSubmitForm =(e)=>{
    e.preventDefault();
    console.log(formValues);
}
  return (
    <form onSubmit={handleSubmitForm}>
      <h1>Form with Custom hook</h1>
      <hr />
      <div className="form-group">
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Your name"
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group mt-2">
        <input
          type="text"
          name="email"
          className="form-control"
          placeholder="Your email"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group mt-2">
        <input
          type="password"
          name="password"
          className="form-control"
          placeholder="*******"
          autoComplete="off"
          value={password}
          onChange={handleInputChange}
        />
      </div>

      <button type="submit" className="btn btn-primary mt-2">Guardar</button>
    </form>
  );
}
