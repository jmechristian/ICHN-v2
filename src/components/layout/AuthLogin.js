import React from 'react';

import Login from '../auth/Login';

const AuthLogin = () => {
  var bgImage = require('../../img/login-background.png');

  return (
    <div className='flex mb-4 min-h-screen'>
      <div
        className='w-1/2 bg-gray-400 bg-auto bg-center invisible sm:visible'
        style={{ backgroundImage: 'url(' + bgImage + ')' }}
      ></div>
      <div className='w-1/2 flex justify-center items-center flex-col'>
        <Login />
      </div>
    </div>
  );
};

export default AuthLogin;
