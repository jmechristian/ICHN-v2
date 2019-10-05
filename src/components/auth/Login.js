import React, { useEffect, useCallback, useReducer, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

import { loginUser } from '../../actions/authActions';

const LoginForm = props => {
  const [passwordMasked, setPasswordMasked] = useState(true);

  const { isAuthenticated } = useSelector(state => state.auth);
  const { message } = useSelector(state => state.error);

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/dashboard');
    }
  }, [isAuthenticated]);

  const dispatchAction = useDispatch();

  const initialState = '';
  const formReducer = (state, action) => action;

  const [email, setEmail] = useReducer(formReducer, initialState);
  const [password, setPassword] = useReducer(formReducer, initialState);

  const onSubmit = useCallback(e => {
    e.preventDefault();

    const user = {
      Email: email,
      Password: password
    };

    dispatchAction(loginUser(user));
  });

  const togglePasswordMask = () => {
    setPasswordMasked(!passwordMasked);
  };

  return (
    <>
      <div className="mb-4">
        <span className="font-bold text-3xl md:text-4xl uppercase tracking-wider text-gray-800">
          iCanHelpNetwork
        </span>
      </div>
      <div className="mb-16 text-center">
        <span className="text-gray-500">
          Welcome back! Please login to your account.
        </span>
      </div>
      <div className="w-full max-w-md">
        <form>
          <div className="flex items-center border-b border-b-2 border-gray-400 py-2 mb-8">
            <input
              className="validate appearance-none bg-transparent border-none w-full text-gray-700 py-1 px-2 leading-tight focus:outline-none"
              name="Email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <span
              className="helper-text"
              data-error="Please Enter a Valid Email"
              data-success=" "
            />
          </div>
          <div className="flex items-center border-b border-b-2 border-gray-400 py-2 mb-4">
            <input
              className="validate appearance-none bg-transparent border-none w-full text-gray-700 py-1 px-2 leading-tight focus:outline-none"
              name="Password"
              type={passwordMasked ? 'password' : 'text'}
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <span
              className="helper-text"
              data-error="Please Enter Your Password"
              data-success=" "
            />
          </div>
        </form>
        <div className="text-gray-600 flex justify-end items-center md:mr-2">
          <span className="text-xs mr-1">Password</span>
          <FontAwesomeIcon icon={faEye} onClick={togglePasswordMask} />{' '}
        </div>
        <div className="flex flex-wrap items-center justify-center mt-16">
          <button
            onClick={onSubmit}
            className="max-w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-12 mx-2 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign In
          </button>
          <button
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-12 mx-2 border border-blue-500 hover:border-transparent rounded"
            type="button"
          >
            <Link to="/register">Sign up</Link>
          </button>
        </div>
        <div className="text-center w-full my-4 text-sm text-red-600">
          <p>{message}</p>
        </div>
        <div className="flex items-center justify-center my-12 text-sm text-gray-600">
          <Link to="/reset-password">Forgot Password?</Link>
        </div>
      </div>
    </>
  );
};

export default withRouter(LoginForm);
