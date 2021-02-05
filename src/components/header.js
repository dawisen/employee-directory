import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <div className="navbar">
        <div className="header-text">
          <h1>Employee Directory</h1>
          <p>Sort by last name (by clicking on the Name heading) or use the search box to narrow table results.</p>
        </div>
      </div>
    </div>
  );
};

export default Header;