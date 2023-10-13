import Textfield from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search'
import React from 'react'

function LocationDropdown () {
  return (
    <select className='location-dropdown'>
      <option value='option 1'>Austin</option>
      <option value='option 2'>LA</option>
    </select>
  )
}

function SearchField () {
  return (
    <input
      className='search-text-box'
      placeholder='search events...'
    />
  )
}

export default function SearchBar () {
  return (
    <form className='search-bar'>
      <LocationDropdown />
      <SearchField />
      <IconButton type='submit' aria-label='search' className='search-button'>
        <SearchIcon />
      </IconButton>
    </form>
  )
}
