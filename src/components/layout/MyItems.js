import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Sidebar from './Sidebar';
import ItemList from './ItemList';
import DashboardHeader from './DashboardHeader';
import { getMyNeeds } from '../../actions/needsActions';
import { faMinusSquare } from '@fortawesome/free-solid-svg-icons';

const MyItems = () => {
  const { myNeeds } = useSelector(state => state.needs);
  const { user } = useSelector(state => state.auth);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMyNeeds());
  }, [dispatch]);

  return (
    <div className="flex flex-row">
      <Sidebar />
      <div className="flex flex-col w-full">
        <DashboardHeader username={user.unique_name} />
        <div className="bg-gray-200 p-10 h-full">
          <ItemList
            items={myNeeds}
            buttonName={'Release'}
            listType={'My Claimed Needs'}
            iconType={faMinusSquare}
            textColor={'text-red-400'}
          />
        </div>
      </div>
    </div>
  );
};

export default MyItems;
