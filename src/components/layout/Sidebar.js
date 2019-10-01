import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="min-h-screen w-2/12">
      <div className="flex h-16 bg-blue-900 justify-center items-center shadow z-20">
        <span className="font-bold uppercase tracking-wider text-white invisible md:visible">
          iCanHelpNetwork
        </span>
      </div>
      <div className="flex min-h-screen bg-blue-800 text-blue-400 justify-center">
        <ul className="flex flex-col my-6">
          <li className="flex py-5 items-center">
            <ion-icon name="contact" size="large"></ion-icon>
            <span className="ml-2 text-white invisible md:visible">
              My Profile
            </span>
          </li>
          <li className="flex py-5 items-center">
            <ion-icon name="apps" size="large"></ion-icon>
            <span className="ml-2 text-white invisible md:visible">
              <Link to="/dashboard">My Dashboard</Link>
            </span>
          </li>
          <li className="flex py-5 items-center">
            <ion-icon name="copy" size="large"></ion-icon>
            <span className="ml-2 text-white invisible md:visible">
              <Link to="/my-items">My Items</Link>
            </span>
          </li>
          <li className="flex py-5 items-center">
            <ion-icon name="people" size="large"></ion-icon>
            <span className="ml-2 text-white invisible md:visible">
              <Link to="/open-items">Open Items</Link>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
