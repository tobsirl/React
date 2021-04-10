import React from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

export default function Sidebar() {
  return (
    <>
      <div class="sidebar">
        <Link to="#" className="menu-bars">
          <FaBars />
        </Link>
      </div>
      <nav className="nav-menu">
        <ul className="nav-menu-items">
          <li class="sidebar-toggle">
            <Link to="#" className="menu-bars"></Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
