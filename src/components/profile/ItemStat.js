import React from 'react';

const ItemStat = props => {
  return (
    <div className="flex flex-grow bg-white shadow mx-6 p-6 rounded">
      I'm a {props.title} box!
    </div>
  );
};

export default ItemStat;
