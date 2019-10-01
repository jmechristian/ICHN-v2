import React from 'react';

import Sidebar from './Sidebar';
import Dashboard from '../profile/Dashboard';

const DashboardContainer = () => {
  return (
    <div className="flex flex-row">
      <Sidebar />
      <Dashboard />
    </div>
  );
};

export default DashboardContainer;
