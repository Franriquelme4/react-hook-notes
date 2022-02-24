import React, { useCallback, useEffect, useState } from 'react'
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {
      const [counter, setcounter] = useState(10);

      // const increment = ()=>{
      //   setcounter(counter +1);
      // }

 const increment = useCallback((num) => {
      setcounter(c=>c+num);
    },[setcounter]);


    useEffect(() => {
      
    }, [increment])
    
  return (
    <div>
        <h1>
            Use Callback hook : {counter}
        </h1>
        <hr/>

        <ShowIncrement increment={increment}/>
   </div>
  )
}
