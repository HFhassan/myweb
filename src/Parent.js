import React, { useState } from 'react';
import Child from './Child';
import counterContext from './CounterContext';
import SecChild from './SecChild';

const Parent = (props) => {
    let countState = useState(10)
    //countState is an array [count, setCount]
    return (
        <counterContext.Provider value={countState}>
            <Child name = {props.name} />
            <SecChild />
        </counterContext.Provider>
    )
}

export default Parent;