import React,{ useContext } from 'react';
import counterContext from './CounterContext';


const  Child = (props) =>  {
    let counterValue = useContext (counterContext);
    
    return (
        <div>
            <h1>This is first Child</h1>
            <h3>My name is {props.name}</h3>
            <h5>counter value is {counterValue[0]}</h5>
            <button 
                onClick = {()=> {counterValue[1](++counterValue[0])}}>
                Press to Increment    
            </button>
        </div>
    )

}

export default Child;