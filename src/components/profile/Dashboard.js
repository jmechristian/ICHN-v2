import React, { useEffect } from 'react';
import {
  faAddressCard,
  faFolderOpen,
  faHandHoldingHeart
} from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux';
import { setFollowing } from '../../actions/authActions';
import { getMyNeeds, getNeeds } from '../../actions/needsActions';
import { getOrgs } from '../../actions/orgActions';

import ItemStat from './ItemStat';
import MyItemList from './MyItemsList';
import AvailableOrgs from './AvailableOrgs';
import DashboardHeader from '../layout/DashboardHeader';
import MyOrgs from './MyOrgs';

const Dashboard = () => {
  const dispatch = useDispatch();

  const { user, following } = useSelector(state => state.auth);
  const { needs, myNeeds } = useSelector(state => state.needs);
  const { orgs } = useSelector(state => state.organization);

  useEffect(() => {
    dispatch(setFollowing());
    dispatch(getMyNeeds());
    dispatch(getNeeds());
    dispatch(getOrgs());
  }, [dispatch]);

  return (
    <div className="flex flex-grow flex-col">
      <DashboardHeader username={user.unique_name} />
      <div className="flex flex-grow flex-col bg-gray-200 py-6 px-10">
        <div className="w-full mt-4 mb-4">
          <div className="text-2xl font-semibold text-gray-800 ml-3 mb-4">
            User Dashboard
          </div>
          <div className="flex flex-grow justify-center">
            <ItemStat
              title="My Items"
              name={faAddressCard}
              number={myNeeds.length}
            />
            <ItemStat
              title="Open Items"
              name={faFolderOpen}
              number={needs.length}
            />
            <ItemStat
              title="Organizations"
              name={faHandHoldingHeart}
              number={orgs.length}
            />
          </div>
        </div>
        <div className="w-full mt-4 mb-4">
          <div className="flex flex-row">
            <div className="flex-grow w-2/3">
              <MyItemList items={myNeeds} />
            </div>
            <div className="flex flex-col w-1/3">
              <AvailableOrgs orgs={orgs} />
              <MyOrgs orgs={following} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
