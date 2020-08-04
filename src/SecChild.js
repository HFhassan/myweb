import React, {useReducer} from 'react';
import CounterReducer from './CounterReducer';

const SecChild = ()=>{
    let [state, dispatch] = useReducer(CounterReducer,17);
    console.log(state);
    return (
        <div>
            <h4>Value of reducer is {state}</h4>
            <button onClick= { ()=> dispatch('Increment')}>
                Increment Reducer
            </button>
        
        </div>
    )
}

export default SecChild;