import React from 'react';

import Register from '../auth/Register';

const AuthRegister = () => {
  var bgImage = require('../../img/login-background.png');

  return (
    <div className='flex mb-4 min-h-screen'>
      <div
        className='w-1/2 bg-gray-400 bg-auto bg-center'
        style={{ backgroundImage: 'url(' + bgImage + ')' }}
      ></div>
      <div className='w-1/2 flex justify-center items-center flex-col'>
        <Register />
      </div>
    </div>
  );
};

export default AuthRegister;
