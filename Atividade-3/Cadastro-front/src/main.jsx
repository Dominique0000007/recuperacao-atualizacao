import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import server from './server.js'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Cadastro from './Cadastro.jsx';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/" exact component={App} />
      </Switch>
    </Router>
  </React.StrictMode>
)