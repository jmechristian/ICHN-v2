import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { followOrg } from '../../actions/authActions';

const OrgItem = props => {
  const [isDisabled, setDisabled] = useState(false);
  const dispatch = useDispatch();
  const { following } = useSelector(state => state.auth);

  const addOrg = useCallback(
    id => {
      dispatch(followOrg(id));
      setDisabled(true);
    },
    [dispatch]
  );

  const newArray = following.map(org => org.Id);
  let buttonDisabled = newArray.lastIndexOf(props.org.Id);

  return (
    <li className="flex flex-row justify-between border-b-2 py-4">
      <div className="text-gray-600">{props.org.Name}</div>
      <div
        className={`${
          buttonDisabled > -1
            ? true
            : false
            ? 'text-gray-300'
            : 'text-green-400'
        }`}
      >
        <button
          onClick={addOrg.bind(this, props.org.Id)}
          disabled={buttonDisabled > -1 ? true : false || isDisabled}
        >
          <FontAwesomeIcon icon={faPlusSquare} size="2x" />
        </button>
      </div>
    </li>
  );
};

export default OrgItem;
