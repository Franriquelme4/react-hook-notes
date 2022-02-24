import React, { useRef } from "react";
import "../03-Examples/effects.css";
export const FocusScreen = () => {
  const inputRef = useRef();
  console.log(inputRef);

  const handleClick = () => {
    inputRef.current.select();
  };
  return (
    <div>
      <h1>Focus Screm</h1>
      <hr />
      <input ref={inputRef} className="form-control" placeholder="Nombre" />
      <button className="btn btn-primary mt-5" onClick={handleClick}>
        Focus
      </button>
    </div>
  );
};
