import React from 'react';
import './search.css';

interface searchbarProps {
  handleSearch: (search: string) => void;
}

const Searchbar = ({ handleSearch }: searchbarProps) => {
  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search"
        onChange={(event) => {
          handleSearch(event.target.value);
        }}
      />
    </div>
  );
};

export default Searchbar;
