import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Sidebar from './Sidebar';
import ItemList from './ItemList';
import DashboardHeader from './DashboardHeader';
import { getMyNeeds, releaseNeed } from '../../actions/needsActions';
import { faMinusSquare } from '@fortawesome/free-solid-svg-icons';

const MyItems = () => {
  const { myNeeds } = useSelector(state => state.needs);
  const { user } = useSelector(state => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMyNeeds());
  }, [dispatch]);

  const releaseHandler = useCallback(
    (id, org) => {
      dispatch(releaseNeed(id, org));
    },
    [myNeeds]
  );

  return (
    <div className="flex flex-row max-w-full min-h-screen">
      <Sidebar />
      <div className="flex flex-col w-10/12">
        <DashboardHeader username={user.unique_name} />
        <div className="flex flex-grow flex-col bg-gray-200 px-4 py-6 md:px-10">
          <ItemList
            items={myNeeds}
            buttonName={'Release'}
            listType={'My Claimed Needs'}
            iconType={faMinusSquare}
            textColor={'text-red-400'}
            onClick={releaseHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default MyItems;
