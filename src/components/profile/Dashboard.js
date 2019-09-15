import React from 'react';

import ItemStat from './ItemStat';
import MyItemList from './MyItemsList';
import AvailableOrgs from './AvailableOrgs';
import DashboardHeader from '../layout/DashboardHeader';

const Dashboard = () => {
  return (
    <div className="flex flex-grow flex-col">
      <DashboardHeader username="Jamie Christian" />
      <div className="flex flex-grow flex-col bg-gray-200">
        <div className="w-full mt-16 px-8 mb-4">
          <div className="text-2xl font-semibold text-gray-800 ml-6 mb-12">
            User Dashboard
          </div>
          <div className="flex flex-grow justify-center">
            <ItemStat title="My Items" />
            <ItemStat title="Open Items" />
            <ItemStat title="Organizations" />
          </div>
        </div>
        <div className="w-full px-8 my-4">
          <div className="flex flex-grow justify-center">
            <MyItemList />
            <AvailableOrgs />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
