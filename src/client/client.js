import React                            from 'react';
import ReactDOM                         from 'react-dom';
import { BrowserRouter }                from 'react-router-dom';
import thunk                            from 'redux-thunk';
import Routes                           from './Routes';
import { Provider }                     from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers                         from './reducers';

const store = createStore(reducers, {}, applyMiddleware());

ReactDOM.hydrate(
    <Provider store={ store }>
        <BrowserRouter>
            <Routes/>
        </BrowserRouter>
    </Provider>,
    document.querySelector('#root')
);