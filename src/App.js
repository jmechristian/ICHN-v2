import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import AuthLogin from './components/layout/AuthLogin';
import AuthRegister from './components/layout/AuthRegister';
import AuthResetPassword from './components/layout/AuthResetPassword';

function App() {
  return (
    <Router>
      <Route exact path='/' component={AuthLogin} />
      <Route exact path='/register' component={AuthRegister} />
      <Route exact path='/reset-password' component={AuthResetPassword} />
    </Router>
  );
}

export default App;
