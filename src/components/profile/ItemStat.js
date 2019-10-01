import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ItemStat = props => {
  const { name } = props;
  return (
    <div className="flex md:w-1/3 w-full bg-white shadow-xl mx-3 p-8 rounded items-center mb-4 md:mb-0">
      <div className="mr-8 text-blue-400">
        <FontAwesomeIcon icon={name} size="3x" />
      </div>
      <div className="flex flex-col">
        <div>{props.title}</div>
        <div className="text-2xl font-bold text-blue-400">{props.number}</div>
      </div>
    </div>
  );
};

export default ItemStat;
