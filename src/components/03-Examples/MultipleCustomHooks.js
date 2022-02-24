import React from 'react'
import { useCounter } from '../../hooks/useCounter'
import { useFetch } from '../../hooks/useFetch'
import './effects.css'
export const MultipleCustomHooks = () => {

    const {counter,increment,decrement}=useCounter(1);

const url=`https://www.breakingbadapi.com/api/quotes/${counter}`;



const state =  useFetch(url);
const {loading,data}=state;
const {author,quote} = !!data && data[0];
//si existe la data extrae la posicion 0 de la data
  return (
    <div>
        <h1>BreakingBad Quotes</h1>
        <hr/>

        {loading 
            ?(
                <div className='alert alert-info text-center'>
                Loading...
                </div>
            ):(
                <blockquote className='blockquote text-right'>
                    <p className='mb-2'>{quote}</p>
                    <footer className='blockquote-footer'>{author}</footer>
                </blockquote>
            )
         }

         <button className='btn btn-danger' onClick={decrement}>Previus</button>
         <button className='btn btn-primary' onClick={increment}>Next</button>
    </div>
  )
}
