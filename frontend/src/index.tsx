import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Navbar from './components/Navbar/Navbar'
import EventCard from './components/EventCard/EventCard'
import FilterBar from './components/FilterBar/FilterBar'
import ScrollBar from './components/FilterBar/ScrollBar/ScrollBar'

ReactDOM.render(
  <div>
    <Navbar />
    <FilterBar />
    <div className='home-page-body'>
      <EventCard />
    </div>
  </div>,
  document.getElementById('root')
)
