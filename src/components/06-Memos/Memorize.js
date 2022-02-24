import React, { useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import '../05-LayoutEffect/layount.css'
import Small from './Small';
export const Memorize = props => {

 const {counter,increment} = useCounter(10);
const [show, setshow] = useState(true)

  return (
    <div>
        <h1>
            Counter: <Small value={counter}/>
        </h1>
        <hr/>
    <button
    className='btn btn-primary'
    onClick={increment}
    >+1

    </button>

    <button className='btn btn-outline-primary mx-3'
            onClick={()=>{
                setshow(!show)
            }}
        >
    

        Show/Hide{JSON.stringify(show)}
    </button>
    </div>
  )
}


