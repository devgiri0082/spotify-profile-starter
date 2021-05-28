import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from "react-redux";
import {store} from "./redux";
import Login from "./components/Login";

ReactDOM.render(
    <Provider store={store}>
        <Login/>
    </Provider>
    ,
    document.getElementById('root')
);

