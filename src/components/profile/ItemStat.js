import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ItemStat = props => {
  const { name } = props;
  return (
    <div className="flex w-1/3 bg-white shadow-md mx-3 p-8 rounded items-center">
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
