import React from 'react';

function Dinner(props) {
    return (
        <ul>
            <li>We are having {props.dishName} {props.dessert}</li>
        </ul>
    )

}



export default Dinner;