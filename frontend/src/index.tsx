import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Navbar from './components/Navbar/Navbar'
import EventCard from './components/EventCard/EventCard'
import VibeBar from './components/FilterBar/FilterBar'

ReactDOM.render(
  <div>
    <Navbar />
    <VibeBar />
    <div className='home-page-body'>
      <EventCard />
    </div>
  </div>,
  document.getElementById('root')
)
