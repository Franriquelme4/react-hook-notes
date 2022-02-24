const initialState = [{
    id:1,
    toDo:'Comprar mouse',
    done:false
}]



const todoReducer=(state=initialState,action)=>{
    if (action?.type==='add') {
        return [...state,action.payload];
    }

    return state;
}

let todos = todoReducer();

const newToDo = {
    id:2,
    toDo:'Comprar Teclado',
    done:false
}

const actionAddToDo ={
    type:'add',
    payload:newToDo
}

todos =  todoReducer(todos,actionAddToDo);




console.log(todos);