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
        <div className="w-full p-8">
          <div className="flex flex-grow justify-center">
            <ItemStat title="My Items" />
            <ItemStat title="Open Items" />
            <ItemStat title="Organizations" />
          </div>
        </div>
        <div className="w-full p-8">
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
