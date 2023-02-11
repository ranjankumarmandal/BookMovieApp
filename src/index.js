import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import 'typeface-roboto';
import registerServiceWorker from './registerServiceWorker';
//import Home from './screens/Home/Home'
import Controller from './screens/Controller';
//import Details from './screens/details/Details';

ReactDOM.render(<Controller />, document.getElementById('root'));
registerServiceWorker();
