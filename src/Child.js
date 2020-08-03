import React from 'react';

const  Child = (props) =>  {
    return (
        <div>
            <h1>This is first Child</h1>
            <h3>My name is {props.name}</h3>
        </div>
    )

}

export default Child;