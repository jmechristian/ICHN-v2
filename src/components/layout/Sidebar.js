import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="min-h-screen w-2/12 bg-blue-800">
      <div className="flex h-16 bg-blue-900 justify-center items-center shadow z-20">
        <span className="font-bold uppercase tracking-wider text-white invisible md:visible">
          iCanHelpNetwork
        </span>
      </div>
      <div className="flex min-h-screen bg-blue-800 text-blue-400 justify-center">
        <ul className="flex flex-col my-6">
          <li className="flex md:py-5 items-center flex-col md:flex-row">
            <Link to="/profile">
              <ion-icon name="contact" size="large"></ion-icon>
            </Link>
            <Link to="/profile">
              <span className="ml-2 text-white invisible md:visible">
                My Profile
              </span>
            </Link>
          </li>
          <li className="flex md:py-5 items-center flex-col md:flex-row">
            <Link to="/dashboard">
              <ion-icon name="apps" size="large"></ion-icon>
            </Link>
            <span className="ml-2 text-white invisible md:visible">
              <Link to="/dashboard">Dashboard</Link>
            </span>
          </li>
          <li className="flex md:py-5 items-center flex-col md:flex-row">
            <Link to="/my-items">
              <ion-icon name="copy" size="large"></ion-icon>
            </Link>
            <span className="ml-2 text-white invisible md:visible">
              <Link to="/my-items">My Items</Link>
            </span>
          </li>
          <li className="flex md:py-5 items-center flex-col md:flex-row">
            <Link to="/open-items">
              <ion-icon name="people" size="large"></ion-icon>
            </Link>
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
