import React from 'react';
import Child from './Child';
import counterContext from './CounterContext';

const Parent = (props) => {
    return (
        <counterContext.Provider value={60}>
            <Child name = {props.name} />
        </counterContext.Provider>
    )
}

export default Parent;