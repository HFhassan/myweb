import React, {useState} from 'react';
import './App.css';

function App() {
  let [count,setCount] = useState(0);
  let [green,setGreen] = useState(true);
  return (
    <div className= {green ? 'box' : 'colorChange'}>
      <h3>background color is {green ? 'green':'blue'}</h3>
      <h4>you have clicked me {count} times</h4>
      <button
        onClick = {()=> setCount(count+1)}>
        click me 
      </button>
      <button onClick = { () => { setGreen(!green)}}
      >
        change color
      </button>
    </div>
  );
}

export default App;
