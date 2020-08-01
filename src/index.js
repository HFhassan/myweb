import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Dinner from './Dinner';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <h1>Dinner Menu</h1>
    <Dinner dishName="Mutton Karahi" />
    <hr />
    <Dinner dishName="Beef Biryani" dessert="macflurry oreo" />
    <hr />
    <Dinner dishName="Pudding in Sweet Dish" />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
