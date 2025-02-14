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
    <div className="flex flex-col w-10/12">
      <DashboardHeader username={user.unique_name} />
      <div className="flex flex-grow flex-col bg-gray-200 px-4 py-6 md:px-10">
        <div className="w-full mt-2 mb-4">
          <div className="text-2xl font-semibold text-gray-800 ml-3 mb-4">
            User Dashboard
          </div>
          <div className="flex flex-grow justify-center flex-wrap md:flex-no-wrap">
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
        <div className="md:mt-4 mb-4">
          <div className="flex flex-row flex-wrap">
            <div className="flex-grow w-full md:w-2/3 mb-4 md:mb-0">
              <MyItemList items={myNeeds} />
            </div>
            <div className="flex flex-col mt-4 md:mt-0 w-full md:w-1/3 flex-wrap">
              <MyOrgs orgs={following} />
              <AvailableOrgs />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
