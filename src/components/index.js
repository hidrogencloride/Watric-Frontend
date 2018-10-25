import React, { Component } from 'react';
import Login from './LoginRegister';
import Dashboard from './Dashboard'
import {HashRouter, Route, Switch} from 'react-router-dom';


class Index extends Component {
  render() {
    return (
      <HashRouter>
          <Switch>
              <Route exact path={"/"} component={Login} />
              <Route path={"/dashboard"} component={Dashboard}/>
          </Switch>
      </HashRouter>
    );
  }
}

export default Index;
