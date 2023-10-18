import IconButton from '@mui/material/IconButton'
import React from 'react'
import SearchIcon from '../../images/search-icon.svg'
import MapPin from '../../images/map-pin.svg'

function LocationDropdown () {
  return (
    <form className='location-dropdown'>
      <img src={MapPin} alt='map-pin' />
      <select className='location-selector'>
        <option value='option 1'>Austin</option>
        <option value='option 2'>LA</option>
      </select>
    </form>
  )
}

function SearchField () {
  return (
    <input
      className='search-text-box'
      placeholder='search events, communities, etc.'
    />
  )
}

export default function SearchBar () {
  return (
    <form className='search-bar'>
      <LocationDropdown />
      <SearchField />
      <IconButton type='submit' aria-label='search' className='search-button'>
        <img src={SearchIcon} alt='search-icon' />
      </IconButton>
    </form>
  )
}
