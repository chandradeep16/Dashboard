import React from "react";
import {
  BsFillBellFill,
  BsFillEnvelopeFill,
  BsPersonCircle,
  BsSearch,
  BsJustify,
} from "react-icons/bs";

function Header({ OpenSidebar }) {
  return (
    <header className="header">
      <div className="menu-icon">
        <BsJustify className="icon" onClick={OpenSidebar} />
      </div>
      <div className="header-left">
        <div style={{ color: "#000", fontSize: 20 }}>Hello Sharukh</div>
      </div>

      <div className="header-right">
        <div className="search-bar">
          <div className="search-icon">
            <BsSearch />
          </div>
          <input type="text" placeholder="Search..." className="search-input" />
        </div>
      </div>
    </header>
  );
}

export default Header;
