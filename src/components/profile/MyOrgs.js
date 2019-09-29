import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { faMinusSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { unFollow } from '../../actions/authActions';

const MyOrgs = props => {
  const dispatch = useDispatch();

  const { following } = useSelector(state => state.auth);

  const removeOrg = useCallback(
    id => {
      dispatch(unFollow(id));
    },
    [following]
  );

  return (
    <div className="flex flex-col bg-white shadow-md mx-3 p-6 rounded mb-8">
      <div className="w-full border-b-2 pb-6">
        <span className="text-lg">My Organizations</span>
      </div>
      <div>
        {props.orgs.map(org => (
          <li
            key={org.Id}
            className="flex flex-row justify-between border-b-2 py-4"
          >
            <div className="text-gray-600">{org.Name}</div>
            <div className="text-red-400">
              <FontAwesomeIcon
                icon={faMinusSquare}
                onClick={removeOrg.bind(this, org.Id)}
              />
            </div>
          </li>
        ))}
      </div>
    </div>
  );
};

export default MyOrgs;
