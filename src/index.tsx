import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import { Provider } from 'react-redux';
import {setupStore} from './services/store'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import {App} from './components/App/App';

const store = setupStore();

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route exact path='/' component={App} />
    </Router>
    
  </Provider>
  ,
  document.getElementById('root')
);

