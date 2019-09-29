import React from 'react';

const Sidebar = () => {
  return (
    <div className="w-automin-h-screen">
      <div className="flex h-16 bg-blue-900 items-center shadow z-20  px-12 ">
        <span className="font-bold uppercase tracking-wider text-white">
          iCanHelpNetwork
        </span>
      </div>
      <div className="flex min-h-screen bg-blue-800 text-blue-400 justify-center">
        <ul className="flex flex-col my-6">
          <li className="flex py-5 items-center">
            <ion-icon name="contact" size="large"></ion-icon>
            <span className="ml-2 text-white">My Profile</span>
          </li>
          <li className="flex py-5 items-center">
            <ion-icon name="apps" size="large"></ion-icon>
            <span className="ml-2 text-white">My Dashboard</span>
          </li>
          <li className="flex py-5 items-center">
            <ion-icon name="search" size="large"></ion-icon>
            <span className="ml-2 text-white">Find Organizations</span>
          </li>
          <li className="flex py-5 items-center">
            <ion-icon name="copy" size="large"></ion-icon>
            <span className="ml-2 text-white">My Items</span>
          </li>
          <li className="flex py-5 items-center">
            <ion-icon name="people" size="large"></ion-icon>
            <span className="ml-2 text-white">Open Items</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
