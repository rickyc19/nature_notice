import React from 'react'
import icon from '../images/nature-notice-logo.svg'

function LogoText () {
  return (
    <div className='logo-text'>
      <div className='name-nature'>Nature</div>
      <div className='name-notice'>notice</div>
    </div>
  )
}

export default function Logo () {
  return (
    <div className='logo-with-text'>
      <img src={icon} alt='logo' />
      <LogoText />
    </div>
  )
}
