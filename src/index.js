import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, withRouter } from "react-router-dom";
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import reducer from './reducers';

import thunk from 'redux-thunk';
import logger from 'redux-logger';

import "./index.css";
import App from "./App";

const AppWithRouter = withRouter(App);

const store = createStore(reducer, applyMiddleware(thunk, logger));

const { worker } = require('./mocks/browser');
worker.start();

const rootElement = document.getElementById("root");

ReactDOM.render(
    <Router>
        <Provider store={store}>
            <AppWithRouter />
        </Provider>
    </Router>,
    rootElement
);

//Task List:
//1. Add in all necessary components and libary methods.
//2. Create a store that includes thunk and logger middleware support.
//3. Wrap the App component in a react-redux Provider element.