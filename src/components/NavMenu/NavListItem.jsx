import React from 'react';
import { Link } from 'react-router-dom';
import './NavListItem.scss';

const NavListItem = ({ item }) => {
  return (
    <li className="nav-item">
      <Link to={item.path}>{item.name}</Link>

      {item.submenu && (
        <ul className="submenu">
          {item.submenu.map((subItem, index) => (
            <li key={index} className="submenu-item">
              <Link to={subItem.path}>{subItem.name}</Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default NavListItem;
