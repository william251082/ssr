import React             from 'react';
import ReactDOM          from 'react-dom';
import { BrowserRouter } from './components/Home';
import Routes             from './Routes';

ReactDOM.hydrate(
    <BrowserRouter>
        <Routes />
    </BrowserRouter>,
    document.querySelector('#root')
);