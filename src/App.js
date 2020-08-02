import React, {useState} from 'react';
import './App.css';

function App() {
  let [count,setCount] = useState(0);
  let [green,blue] = useState(true);
  return (
    <div className="box">
      <h3>background color is {green ? 'green':'blue'}</h3>
      <h4>you have clicked me {count} times</h4>
      <button
        onClick = {()=> setCount(count+1)}>
        click me 
      </button>
    </div>
  );
}

export default App;
