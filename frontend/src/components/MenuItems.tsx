import React from 'react'
import icon from '../images/create-plus-icon.svg'

export default function MenuItems () {
  return (
    <ul className='menu-items'>
      <li>
        <button className='btn-create-event'>
          <img src={icon} alt='logo' />
          <div>Create</div>
        </button>
      </li>
      <li>
        <button className='btn-my-events'>
          My Events
        </button>
      </li>
    </ul>
  )
}
