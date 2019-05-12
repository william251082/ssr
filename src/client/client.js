import React                           from 'react';
import ReactDOM                        from 'react-dom';
import { BrowserRouter }               from 'react-router-dom';
import thunk                           from 'redux-thunk';
import Routes                          from './Routes';
import { Provider }                    from 'redux-thunk';
import { createStore, applyMiddleware} from 'redux';

const store = createStore(reducers, {}, applyMiddleware());

ReactDOM.hydrate(
    <Provider store={store}>
        <BrowserRouter>
            <Routes/>
        </BrowserRouter>
    </Provider>,
    document.querySelector('#root')
);