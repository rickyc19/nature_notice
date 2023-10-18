import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Navbar from './components/Navbar/Navbar'
import EventCard from './components/EventCard/EventCard'

ReactDOM.render(
  <div>
    <Navbar />
    <div className='home-page-body'>
      <EventCard />
    </div>
  </div>,
  document.getElementById('root')
)
