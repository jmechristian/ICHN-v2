import React from 'react';
import {
  faAddressCard,
  faFolderOpen,
  faHandHoldingHeart
} from '@fortawesome/free-solid-svg-icons';

import ItemStat from './ItemStat';
import MyItemList from './MyItemsList';
import AvailableOrgs from './AvailableOrgs';
import DashboardHeader from '../layout/DashboardHeader';

const Dashboard = () => {
  return (
    <div className="flex flex-grow flex-col">
      <DashboardHeader username="Jamie Christian" />
      <div className="flex flex-grow flex-col bg-gray-200 py-6 px-10">
        <div className="w-full mt-4 mb-4">
          <div className="text-2xl font-semibold text-gray-800 ml-3 mb-8">
            User Dashboard
          </div>
          <div className="flex flex-grow justify-center">
            <ItemStat title="My Items" name={faAddressCard} number="6" />
            <ItemStat title="Open Items" name={faFolderOpen} number="11" />
            <ItemStat
              title="Organizations"
              name={faHandHoldingHeart}
              number="4"
            />
          </div>
        </div>
        <div className="w-full mt-4 mb-4">
          <div className="flex flex-grow">
            <MyItemList />
            <AvailableOrgs />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
