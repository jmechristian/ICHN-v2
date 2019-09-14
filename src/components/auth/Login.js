import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <>
      <div className='mb-4'>
        <span className='font-bold text-4xl uppercase tracking-wider text-gray-800'>
          iCanHelpNetwork
        </span>
      </div>
      <div className='mb-16'>
        <span className='text-gray-500'>
          Welcome back! Please login to your account.
        </span>
      </div>
      <div className='w-full max-w-md'>
        <form>
          <div className='flex items-center border-b border-b-2 border-gray-400 py-2 mb-8'>
            <input
              className='appearance-none bg-transparent border-none w-full text-gray-700 py-1 px-2 leading-tight focus:outline-none'
              id='username'
              type='text'
              placeholder='Username'
            />
          </div>
          <div className='flex items-center border-b border-b-2 border-gray-400 py-2 mb-12'>
            <input
              className='appearance-none bg-transparent border-none w-full text-gray-700 py-1 px-2 leading-tight focus:outline-none'
              id='username'
              type='text'
              placeholder='Password'
            />
          </div>
          <div className='flex items-center justify-center mt-16'>
            <button
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-12 mx-2 rounded focus:outline-none focus:shadow-outline'
              type='button'
            >
              Sign In
            </button>
            <button
              className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-12 mx-2 border border-blue-500 hover:border-transparent rounded'
              type='button'
            >
              <Link to='/register'>Sign up</Link>
            </button>
          </div>
        </form>
        <div className='flex items-center justify-center my-12 text-sm text-gray-700'>
          <Link to='/reset-password'>Forgot Password?</Link>
        </div>
      </div>
    </>
  );
};

export default Login;
