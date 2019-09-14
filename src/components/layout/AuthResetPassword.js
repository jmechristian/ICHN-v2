import React from 'react';

import ForgotPassword from '../auth/ForgotPassword';

const AuthResetPassword = () => {
  var bgImage = require('../../img/login-background.png');

  return (
    <div className='flex mb-4 min-h-screen'>
      <div
        className='md:w-1/3 xl:w-1/2 bg-gray-400 bg-auto bg-center invisible sm:visible'
        style={{ backgroundImage: 'url(' + bgImage + ')' }}
      ></div>
      <div className='xs:w-full md:w-2/3 xl:w-1/2 p-8 flex justify-center items-center flex-col min-h-screen'>
        <ForgotPassword />
      </div>
    </div>
  );
};

export default AuthResetPassword;
