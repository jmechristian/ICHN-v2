import React from 'react';
import { useSelector } from 'react-redux';
import Sidebar from './Sidebar';
import Profile from '../auth/Profile';
import DashboardHeader from './DashboardHeader';

const ProfileContainer = () => {
  const { user } = useSelector(state => state.auth);

  return (
    <div className="flex flex-row max-w-full min-h-screen">
      <Sidebar />
      <div className="flex flex-col w-10/12">
        <DashboardHeader username={user.unique_name} />
        <div className="flex flex-grow flex-col bg-gray-200 px-4 py-6 md:px-10">
          <Profile />
        </div>
      </div>
    </div>
  );
};

export default ProfileContainer;
