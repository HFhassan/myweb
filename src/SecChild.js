import React, {useReducer} from 'react';
import CounterReducer from './CounterReducer';

const SecChild = ()=>{
    let [state, dispatch] = useReducer(CounterReducer,1);
    console.log(state);
    return (
        <div>
            <h1>This is second Child using counter reducer</h1>
            <h4>Value of reducer is {state}</h4>
            <button onClick= { ()=> dispatch('Increment')}>
                Increment Reducer
            </button>
        
        </div>
    )
}

export default SecChild;