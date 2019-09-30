import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { followOrg } from '../../actions/authActions';

const AvailableOrgs = props => {
  const dispatch = useDispatch();
  const { following } = useSelector(state => state.auth);

  const addOrg = useCallback(
    id => {
      dispatch(followOrg(id));
    },
    [dispatch]
  );

  const newArray = following.map(org => org.Id);

  return (
    <div className="flex flex-col bg-white shadow-xl mx-3 p-6 rounded mb-8">
      <div className="w-full border-b-2 pb-6">
        <span className="text-lg">Available Organizations</span>
      </div>
      <div>
        {props.orgs.map(org => (
          <li
            key={org.Id}
            className="flex flex-row justify-between border-b-2 py-4"
          >
            <div className="text-gray-600">{org.Name}</div>
            <div
              className={`${
                newArray.lastIndexOf(org.Id)
                  ? 'text-green-400'
                  : 'text-gray-300'
              }`}
            >
              <button
                onClick={addOrg.bind(this, org.Id)}
                disabled={newArray.lastIndexOf(org.Id) ? false : true}
              >
                <FontAwesomeIcon icon={faPlusSquare} size="2x" />
              </button>
            </div>
          </li>
        ))}
      </div>
    </div>
  );
};

export default AvailableOrgs;
