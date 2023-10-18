import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Navbar from './components/Navbar/Navbar'
import EventCard from './components/EventCard/EventCard'

ReactDOM.render(
  <div>
    <Navbar />
    <EventCard />
  </div>,
  document.getElementById('root')
)
