import React from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { SidebarData } from '../data/sidebarData';
import './Sidebar.css';

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
          {SidebarData.map((menuItem) => (
            <li key={menuItem.id} className={menuItem.cName}>
              <Link to={`${menuItem.path}`}>
                {menuItem.icon}
                <span>{menuItem.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
