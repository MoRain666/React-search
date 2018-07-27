import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './js/App.jsx';
import registerServiceWorker from './registerServiceWorker';
import { Provider} from 'react-redux';
import {createStore} from 'redux';
import products from './js/reducers/index';

const store = createStore(products);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();