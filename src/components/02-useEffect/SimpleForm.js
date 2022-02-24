import React, { useEffect, useState } from "react";
import "./effects.css";
import { Message } from "./Message";
export default function SimpleForm() {
  const [formState, setformState] = useState({
    name: "",
    email: "",
  });
  const { name, email } = formState;
  //usar use efect cuando se realizan cambios en un sector especifico del elemento
  useEffect(() => {
    // console.log('hello');
    return ()=>{}
  }, []);

  useEffect(() => {
    // console.log('Cambio el form State');
  }, [formState]);

  useEffect(() => {
    // console.log('email cambio');
  }, [email]);

  const handleInputChange = ({ target }) => {
    setformState({
      ...formState,
      [target.name]: target.value,
    });
  };

  return (
    <>
      <h1>useEffect</h1>
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


    {name==='123' && <Message/>}
    </>
  );
}
