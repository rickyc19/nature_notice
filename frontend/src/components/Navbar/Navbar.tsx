import React from 'react'
import Logo from './Logo'
import SearchBar from './SearchBar'
import MenuItems from './MenuItems'

export default function Navbar () {
  return (
    <nav className='navbar'>
      <Logo />
      <SearchBar />
      <MenuItems />
    </nav>
  )
}
