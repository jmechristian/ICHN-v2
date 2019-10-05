import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getData, updatePassword } from '../../actions/authActions';

const Profile = () => {
  const myUser = useSelector(state => state.auth.myUser);
  const [isGood, setIsGood] = useState('');
  const [isPassword, setPassword] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  const onSubmit = useCallback(e => {
    e.preventDefault();

    const updatedUser = {
      Id: myUser.Id,
      FirstName: myUser.FirstName,
      LastName: myUser.LastName,
      Email: myUser.Email,
      Password: isPassword
    };

    dispatch(updatePassword(updatedUser));

    setIsGood('New Password Saved');
    setPassword('');
  });

  return (
    <div className="flex bg-white shadow-xl mx-3 p-6 rounded flex-col">
      <div className="w-full pb-6 ml-2">
        <span className="text-2xl font-semibold text-gray-800">My Profile</span>
      </div>
      <div>
        <form onSubmit={onSubmit}>
          <div className="flex flex-wrap mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                First Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="text"
                name="FirstName"
                value=""
                placeholder={myUser.FirstName}
                disabled="disabled"
              />
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Last Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="text"
                name="LastName"
                value=""
                placeholder={myUser.LastName}
                disabled="disabled"
              />
            </div>
          </div>
          <div className="flex flex-wrap mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Email
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="email"
                name="Email"
                value=""
                placeholder={myUser.Email}
                disabled="disabled"
              />
            </div>
          </div>
          <div className="flex flex-wrap mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Password
              </label>
              <input
                className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 leading-tight focus:outline-none focus:border-gray-500"
                type="text"
                name="Update Password"
                onChange={e => setPassword(e.target.value)}
                value={isPassword}
                placeholder="**********"
              />
            </div>
          </div>
          <div className="flex flex-wrap mb-6 mx-3">
            <button
              className="max-w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-12 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Save Changes
            </button>
          </div>
        </form>
        <div>
          <p className="m-2 text-sm text-gray-600 text-italic">{isGood}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
