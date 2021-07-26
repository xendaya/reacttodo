import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/wrappers/App';

// Add or edit the bootstrap app by going to this file path
import 'bootstrap/dist/css/bootstrap.css';

// Add or edit the styles by going to this file path
import './assets/style/index.css';

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
