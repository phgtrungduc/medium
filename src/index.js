import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Component/Header/Header';
import * as serviceWorker from './serviceWorker';
import Menu from './Component/Menu/Menu';

ReactDOM.render(<Header />, document.getElementById('root'));
ReactDOM.render(<Menu />, document.getElementById('menu'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
