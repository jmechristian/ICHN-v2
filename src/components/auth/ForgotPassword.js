import React from 'react';

const ForgotPassword = () => {
  return (
    <>
      <div className='mb-4'>
        <span className='font-bold text-4xl uppercase tracking-wider text-gray-800'>
          iCanHelpNetwork
        </span>
      </div>
      <div className='mb-16'>
        <span className='text-gray-500'>
          Please enter the email you used to register with.
        </span>
      </div>
      <div className='w-full max-w-md'>
        <form>
          <div className='flex items-center border-b border-b-2 border-gray-400 py-2 mb-8'>
            <input
              className='appearance-none bg-transparent border-none w-full text-gray-700 py-1 px-2 leading-tight focus:outline-none'
              id='email'
              type='text'
              placeholder='Email'
            />
          </div>
          <div className='flex items-center justify-center mt-12'>
            <button
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-12 mx-2 rounded focus:outline-none focus:shadow-outline'
              type='button'
            >
              Send Request
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ForgotPassword;
