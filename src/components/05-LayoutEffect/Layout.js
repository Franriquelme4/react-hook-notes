import React, { useLayoutEffect, useRef, useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import { useFetch } from '../../hooks/useFetch'
import './layount.css'
export const Layout = () => {

    const {counter,increment,decrement}=useCounter(1);

const url=`https://www.breakingbadapi.com/api/quotes/${counter}`;



const state =  useFetch(url);
const {data}=state;
const {quote} = !!data && data[0];

const pTag = useRef()
//si existe la data extrae la posicion 0 de la data
const [boxSize, setboxSize] = useState({})
useLayoutEffect(() => {
 setboxSize(pTag.current.getBoundingClientRect());
}, [quote])


  return (
    <div>
        <h1>Layouts</h1>
        <hr/>

        
                <blockquote className='blockquote text-right'>
                    <p className='mb-2'
                        ref={pTag}
                    
                     >{quote}
                        
                    </p>
                </blockquote>
     <pre>{JSON.stringify(boxSize,null,3)}</pre>
         <button className='btn btn-danger' onClick={decrement}>Previus</button>
         <button className='btn btn-primary' onClick={increment}>Next</button>
    </div>
  )
}
