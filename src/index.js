import 'babel-polyfill'; // execute this module to define async/await syntax
import express         from 'express';
import React           from 'react';
import renderer        from './helpers/renderer';
import createStore     from './helpers/createStore';
import Routes          from './client/Routes'
import { matchRoutes } from "react-router-config";

const app = express();

app.use(express.static('public'));
app.get('*', (req, res) => {
    const store = createStore();

    console.log(matchRoutes(Routes, req.path));

    res.send(renderer(req, store));
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});