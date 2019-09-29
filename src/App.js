import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authActions';
import store from './store';

import AuthLogin from './components/layout/AuthLogin';
import AuthRegister from './components/layout/AuthRegister';
import AuthResetPassword from './components/layout/AuthResetPassword';
import DashboardContainer from './components/layout/DashboardContainer';

// Check for token
if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = '/';
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Route exact path="/" component={AuthLogin} />
            <Switch>
              <Route exact path="/register" component={AuthRegister} />
            </Switch>
            <Switch>
              <Route
                exact
                path="/reset-password"
                component={AuthResetPassword}
              />
            </Switch>
            <Switch>
              <Route exact path="/dashboard" component={DashboardContainer} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
