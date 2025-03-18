import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SideListItem.scss';

const SideListItem = ({ item }) => {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  const toggleSubmenu = () => {
    setIsSubmenuOpen(!isSubmenuOpen);
  };

  return (
    <li className="side-list-item">
      <div className="list-item-content">
        <Link to={item.path} className="link">
          {item.name}
        </Link>
        {item.submenu && (
          <button
            onClick={toggleSubmenu}
            className="toggle-btn"
            aria-label={`Toggle submenu for ${item.name}`}
          >
            {isSubmenuOpen ? '-' : '+'}
          </button>
        )}
      </div>
      {item.submenu && (
        <ul className={`submenu ${isSubmenuOpen ? 'open' : 'closed'}`}>
          {item.submenu.map((subItem, index) => (
            <li key={index} className="submenu-item">
              <Link to={subItem.path} className="link">
                {subItem.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default SideListItem;
