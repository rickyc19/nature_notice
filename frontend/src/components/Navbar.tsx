import React from 'react'
import icon from '../images/tree-icon.svg'
import Textfield from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search'

function Logo () {
  return (
    <div className='logo-with-text'>
      <img src={icon} alt='logo' />
      <h3>Nature Notice</h3>
    </div>
  )
}

function SearchBar () {
  return (
    <form className='search-bar'>
      <Textfield
        className='search-text-box'
        label='Search Events'
        variant='outlined'
        size='small'
      />
      <IconButton type='submit' aria-label='search' className='search-button'>
        <SearchIcon />
      </IconButton>
    </form>
  )
}

function MenuItems () {
  return (
    <ul className='menu-items'>
      <li>Create Event</li>
      <li>My Events</li>
    </ul>
  )
}

export default function Navbar () {
  return (
    <nav className='navbar'>
      <Logo />
      <SearchBar />
      <MenuItems />
    </nav>
  )
}
