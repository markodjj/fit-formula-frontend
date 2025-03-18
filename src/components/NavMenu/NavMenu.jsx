import React, { useState } from "react";
import navListData from "../../data/navListData";
import NavListItem from "./NavListItem";

import "./NavMenu.scss";
export const NavMenu = () => {
  const [isVisible, setIsVisible] = useState(false);
  const handleClick = () => {};

  return (
    <div className="nav-menu">
      <ul className="nav-list">
        <img src="../../assets/Logo.png" alt="Logo" className="logo" />
        <div className="nav-items">
          {navListData.map((item) => (
            <NavListItem key={item._id} item={item} />
          ))}
        </div>
        <button onClick={handleClick} className="auth-btn">
          Prijavi se
        </button>
      </ul>
      <div className="mobile-menu">
        <img src="../../assets/Logo.png" alt="Logo" className="logo" />
        <button onClick={handleClick} className="auth-btn">
          Prijavi se
        </button>
      </div>
    </div>
  );
};

export default NavMenu;
