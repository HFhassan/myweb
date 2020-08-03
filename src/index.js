import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Parent from './Parent';
import counterContext from './CounterContext';

 
ReactDOM.render(
  <React.StrictMode>
    <counterContext.Provider>
    <Parent name="Hassan Farooqui" />
      </counterContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
