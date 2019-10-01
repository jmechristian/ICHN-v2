import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Sidebar from './Sidebar';
import ItemList from './ItemList';
import DashboardHeader from './DashboardHeader';
import { getNeeds, claimNeed } from '../../actions/needsActions';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';

const OpenItems = () => {
  const { needs } = useSelector(state => state.needs);
  const { user } = useSelector(state => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNeeds());
  }, [dispatch]);

  const claimHandler = useCallback((id, org) => {
    dispatch(claimNeed(id, org));
  }, []);

  return (
    <div className="flex flex-row">
      <Sidebar />
      <div className="flex flex-col flex-grow">
        <DashboardHeader username={user.unique_name} />
        <div className="flex flex-grow flex-col bg-gray-200 py-6 px-10">
          <ItemList
            items={needs}
            buttonName={'Claim'}
            listType={'Open Needs'}
            iconType={faPlusSquare}
            textColor={'text-green-400'}
            onClick={claimHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default OpenItems;
