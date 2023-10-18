import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserPage from './components/UserPage';
import './index.css';
import App from './App';
import { Router as BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import {createBrowserHistory} from 'history';
import LogInPage from './components/LogInPage';
import Login from './components/Login';
import Signup from './components/Signup';

const hist =  createBrowserHistory();
const route = (
    <BrowserRouter history={hist}>
        <div>
        <Switch>
    <Route exact path="/" component={App}/>
    <Route path="/login" component={Login} />
    <Route path="/signup" component={Signup} />
    <Route path="/user" component={UserPage} />
</Switch>
</div>
    </BrowserRouter>
)

ReactDOM.render(route, document.getElementById('root'));
