import React from 'react';
import { useSelector } from 'react-redux';
import OrgItem from './OrgItem';

const AvailableOrgs = () => {
  const { orgs } = useSelector(state => state.organization);
  return (
    <div className="flex flex-col bg-white shadow-xl mx-3 p-6 rounded mb-8">
      <div className="w-full border-b-2 pb-6">
        <span className="text-lg">Available Organizations</span>
      </div>
      <div>
        {orgs.map(org => (
          <OrgItem org={org} key={org.Id} />
        ))}
      </div>
    </div>
  );
};

export default AvailableOrgs;
