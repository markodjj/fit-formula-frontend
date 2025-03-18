import React, { useState } from 'react';
import navListData from '../../data/navListData';
import SideListItem from './SideListItem';
import './SideMenu.scss';

function SideMenu() {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="side-menu">
      <button
        onClick={handleClick}
        className="toggle-button"
      >
        {isVisible ? '=>' : '<='}
      </button>

      <div
        className={`overlay ${isVisible ? 'visible' : ''}`}
        onClick={handleClick} 
      ></div>

      <div
        className={`side-menu-container ${isVisible ? 'visible' : ''}`}
      >
        <ul className="side-menu-list">
          {navListData.map((item) => (
            <SideListItem key={item._id} item={item} />
          ))}
          <button onClick={handleClick} className="auth-btn">
            Prijavi se
          </button>
        </ul>
      </div>
    </div>
  );
}

export default SideMenu;
