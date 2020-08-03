import React,{ useContext } from 'react';
import counterContext from './CounterContext';


const  Child = (props) =>  {
    let counterValue = useContext (counterContext);
    console.log(counterValue);
    return (
        <div>
            <h1>This is first Child</h1>
            <h3>My name is {props.name}</h3>
            <h5>counter value is {counterValue}</h5>
        </div>
    )

}

export default Child;