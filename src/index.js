import React from 'react';
import ReactDOM from 'react-dom';
// import CounterApp from './components/01-useState/CounterApp';
// import CounterWithCustomHook from './components/01-useState/CounterWithCustomHook';
// import FormWithCH from './components/02-useEffect/FormWithCH';
// import SimpleForm from './components/02-useEffect/SimpleForm';
import { MultipleCustomHooks } from './components/03-Examples/MultipleCustomHooks';
import { FocusScreen } from './components/04-useRef/FocusScreen';
import RealExampleRef from './components/04-useRef/RealExampleRef';
import { Layout } from './components/05-LayoutEffect/Layout';
import { CallbackHook } from './components/06-Memos/CallbackHook';
import { MemoHook } from './components/06-Memos/MemoHook';
import { Memorize } from './components/06-Memos/Memorize';
import { Padre } from './components/07-tarea-memo/Padre';
import { ToDoApp } from './components/08-useReducer/ToDoApp';
//import HookApp from './HookApp';
ReactDOM.render(
 
    <ToDoApp />
,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

