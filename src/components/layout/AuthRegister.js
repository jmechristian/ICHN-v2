import React from 'react';

import Register from '../auth/Register';

const AuthRegister = () => {
  var bgImage = require('../../img/login-background.png');

  return (
    <div className="flex mb-4 min-h-screen max-w-full">
      <div
        className="md:w-1/3 xl:w-1/2 bg-gray-400 bg-auto bg-center invisible sm:visible"
        style={{ backgroundImage: 'url(' + bgImage + ')' }}
      ></div>
      <div className="w-full md:w-2/3 xl:w-1/2 p-8 flex justify-center items-center flex-col min-h-screen">
        <Register />
      </div>
    </div>
  );
};

export default AuthRegister;
