import React from 'react';

import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <>
      <div className='mb-4'>
        <span className='font-bold text-4xl uppercase tracking-wider text-gray-800'>
          iCanHelpNetwork
        </span>
      </div>
      <div className='mb-16'>
        <span className='text-gray-500'>
          Please complete to create your account.
        </span>
      </div>

      <form className='w-full max-w-lg'>
        <div className='flex flex-wrap items-center '>
          <div className='border-b border-b-2 border-gray-400 mx-2 flex-grow'>
            <input
              className='appearance-none bg-transparent border-none w-full text-gray-700 py-2 px-2 leading-tight focus:outline-none'
              id='firstName'
              type='text'
              placeholder='First Name'
            />
          </div>
          <div className='items-center border-b border-b-2 border-gray-400 mx-2 flex-grow'>
            <input
              className='appearance-none bg-transparent border-none w-full text-gray-700 py-2 px-2 leading-tight focus:outline-none'
              id='lastName'
              type='text'
              placeholder='Last Name'
            />
          </div>
          <div className='items-center border-b border-b-2 border-gray-400 mx-2 my-12 w-full'>
            <input
              className='appearance-none bg-transparent border-none w-full text-gray-700 py-2 px-2 leading-tight focus:outline-none'
              id='userName'
              type='text'
              placeholder='Username'
            />
          </div>
          <div className='items-center border-b border-b-2 border-gray-400 mx-2 w-full'>
            <input
              className='appearance-none bg-transparent border-none w-full text-gray-700 py-2 px-2 leading-tight focus:outline-none'
              id='password'
              type='text'
              placeholder='Password'
            />
          </div>
          <div className='items-center border-b border-b-2 border-gray-400 mx-2 my-12 w-full'>
            <input
              className='appearance-none bg-transparent border-none w-full text-gray-700 py-2 px-2 leading-tight focus:outline-none'
              id='confirmPassword'
              type='text'
              placeholder='Confirm Password'
            />
          </div>
        </div>
        <div className='flex items-center justify-center mt-6 '>
          <button
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-12 mx-2 rounded focus:outline-none focus:shadow-outline'
            type='button'
          >
            Sign Up
          </button>
        </div>
      </form>
      <div className='flex items-center justify-center my-8 text-sm text-gray-700'>
        <p>Already have an account?&nbsp;</p>
        <Link to='/'>
          <u>Sign In</u>
        </Link>
      </div>
    </>
  );
};

export default Register;
