import React, { useState } from 'react'
import '../03-Examples/effects.css'
import { MultipleCustomHooks } from '../03-Examples/MultipleCustomHooks'
export default function RealExampleRef() {
    const [show, setshow] = useState(false)


  return (
    <div>
     <h1>Real Example Ref</h1>
     <hr></hr>
     {show && <MultipleCustomHooks/>}
     <button className='btn btn-primary mt-5' onClick={()=>{
         setshow(!show)
     }} >Show/Hide</button>
    </div>
  )
}
