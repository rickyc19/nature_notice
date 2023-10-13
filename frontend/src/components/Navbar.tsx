import React from 'react'
import icon from '../images/nature-notice-logo.svg'
import Textfield from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search'

function LogoName () {
  return (
    <div className='logo-name'>
      <div className='name-nature'>Nature</div>
      <div className='name-notice'>notice</div>
    </div>
  )
}

function Logo () {
  return (
    <div className='logo-with-text'>
      <img src={icon} alt='logo' />
      <LogoName />
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
