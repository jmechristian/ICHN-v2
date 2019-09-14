import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import AuthLogin from './components/layout/AuthLogin';
import AuthRegister from './components/layout/AuthRegister';
import AuthResetPassword from './components/layout/AuthResetPassword';
import DashboardContainer from './components/profile/DashboardContainer';

function App() {
  return (
    <Router>
      <Route exact path='/' component={AuthLogin} />
      <Route exact path='/register' component={AuthRegister} />
      <Route exact path='/reset-password' component={AuthResetPassword} />
      <Route exact path='/Dashboard' component={DashboardContainer} />
    </Router>
  );
}

export default App;
