import React from "react";
import "./search.css"
const Searchbar = ({handleSearch}) => {
  return (
  <div className='search'>
      <input type="text" placeholder="Search" onChange={event => { handleSearch(event.target.value) }}/>
  </div>
  );
};

export default Searchbar;




