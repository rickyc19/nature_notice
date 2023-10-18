import React from 'react'
import EventImage from '../../images/placeholder-image.svg'

function EventCardImage () {
  return (
    <div className='event-card-image'>
      <img src={EventImage} alt='event image' />
    </div>
  )
}

function EventLocationDate () {
  return (
    <div className='event-card-location-date'>
      <div className='event-card-location'>6814 Onion Creek Drive</div>
      <div className='event-card-date-time'>
        <div>Jan 1</div>
        <div> | </div>
        <div>10AM</div>
      </div>
    </div>
  )
}

function EventCardPrice () {
  return (
    <div className='event-card-price-entry'>
      <div className='event-card-price'>Free</div>
      <div>entry</div>
    </div>
  )
}

function EventCardBody () {
  return (
    <div className='event-card-body'>
      <div className='event-card-title'>Wilderness Wonders: Exploring the Hidden Beauty</div>
      <EventLocationDate />
      <EventCardPrice />
    </div>
  )
}

export default function EventCard () {
  return (
    <div className='event-card'>
      <EventCardImage />
      <EventCardBody />
    </div>
  )
}
