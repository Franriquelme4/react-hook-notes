import React from 'react'
import { useCounter } from '../../hooks/useCounter'
import './counter.css'
export default function CounterWithCustomHook() {


    const {state,increment,decrement,reset}=useCounter(100000);
  return (

    <>
        <h1>Counter with hook: {state}</h1>
        <hr/>

        <button onClick={()=>increment(100)} className='btn btn-primary mx-2'>+1</button>
        <button onClick={reset} className='btn btn-info mx-2'>Reset</button>

        <button onClick={()=>decrement(100)} className='btn btn-danger mx-2'>-1</button>
    
    </>
  )
}
