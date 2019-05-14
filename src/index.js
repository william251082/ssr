import 'babel-polyfill'; // execute this module to define async/await syntax
import express         from 'express';
import React           from 'react';
import renderer        from './helpers/renderer';
import createStore     from './helpers/createStore';
import Routes          from './client/Routes'
import { matchRoutes } from 'react-router-config';
import proxy           from 'express-http-proxy';

const app = express();

// authenticate through this proxy
app.use('/api', proxy('http://react-ssr-api.herokuapp.com', {
    // second option for proxy config
    proxyReqOptDecorator(opts) {
        opts.headers['x-forwarded-host'] = 'localhost:3000';
        return opts;
    }
}));
app.use(express.static('public'));
app.get('*', (req, res) => {
    const store = createStore(req);

    // What are we doing in the loadData?
    // Array of promises
    const promises = matchRoutes(Routes, req.path).map(({route}) => {
        // Call loadData function, passing in the redux store
        return route.loadData ? route.loadData(store) : null;
    }).map(promise => {
        if (promise) {
            return new Promise((resolve, reject) => {
                promise.then(resolve).catch(resolve)
            });
        }
    });

    const render = () => {
        const context = {};
        const content = renderer(req, store, context);

        if (context.notFound) {
            res.status(404);
        }

        res.send(content);
    };

    // Some promise fail inside promises
    // catch is rendering the promise to soon, it should wait for the unresolved ones
    Promise.all(promises).then(render).catch(render)
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});