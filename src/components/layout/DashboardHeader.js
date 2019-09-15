import React from 'react';

const DashboardHeader = props => {
  return (
    <div className="flex h-16 items-center shadow z-20">
      <div className="flex flex-grow flex-row-reverse px-6 items-center">
        <div className="flex border-l border-gray-400 items-center h-8">
          <span className="mr-3 ml-6 text-gray-600">
            Hello, {props.username}
          </span>
          <ion-icon name="contact" size="large"></ion-icon>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
