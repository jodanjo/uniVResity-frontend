import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

const options = {
    position: 'bottom left',
    timeout: 8000,
    offset: '5px',
    transition: 'fade',
    zIndex: 100
  }



ReactDOM.render(<AlertProvider template={AlertTemplate} {...options}><App /></AlertProvider>, document.getElementById('root'));
registerServiceWorker();
