import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <div className="header">
        <div className="header-text">
          <h1>Employee Directory</h1>
          <p>Filter by heading or use the search box to narrow your results.</p>
        </div>
      </div>
    </div>
  );
};

export default Header;