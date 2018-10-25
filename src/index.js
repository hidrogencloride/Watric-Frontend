import React from 'react';
import ReactDOM from 'react-dom';
import './components/css/index.css';
import Index from './components/index';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers'


ReactDOM.render(
    <Provider store={createStore(reducers,{})}>
        <Index />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
