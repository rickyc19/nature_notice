import IconButton from "@mui/material/IconButton";
import SearchIcon from "../../images/search-icon.svg";
import React from "react";

export default function SearchBar () {
  return (
    <form className='filter-modal'>
      <LocationDropdown />
      <SearchField />
      <IconButton type='submit' aria-label='search' className='search-button'>
        <img src={SearchIcon} alt='search-icon' />
      </IconButton>
    </form>
  )
}
