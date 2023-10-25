import React from 'react'
import IconOutdoorFun from '../../images/vibe-icons/outdoors-2.svg'
import IconWildlife from '../../images/vibe-icons/claw.svg'
import IconGardening from '../../images/vibe-icons/gardening.svg'
import IconWater from '../../images/vibe-icons/water-droplet-2.svg'
import IconWellness from '../../images/vibe-icons/woman-meditate-2.svg'
import IconScience from '../../images/vibe-icons/plant-science.svg'
import IconArtsCrafts from '../../images/vibe-icons/art-cloud.svg'
import IconJustice from '../../images/vibe-icons/civil-right.svg'
import IconDarkSkies from '../../images/vibe-icons/astronomy.svg'
import IconFilterBars from '../../images/bars-filter.svg'

function VibeOutdoorFun () {
  return (
    <form className='vibe-selection'>
      <img src={IconOutdoorFun} alt='vibe-icon' className='vibe-icon' />
      <div className='vibe-name'>Outdoor Fun</div>
    </form>
  )
}

function VibeWildlife () {
  return (
    <form className='vibe-selection'>
      <img src={IconWildlife} alt='vibe-icon' className='vibe-icon' />
      <div className='vibe-name'>Wildlife</div>
    </form>
  )
}

function VibeGardening () {
  return (
    <form className='vibe-selection'>
      <img src={IconGardening} alt='vibe-icon' className='vibe-icon' />
      <div className='vibe-name'>Gardening</div>
    </form>
  )
}

function VibeWater () {
  return (
    <form className='vibe-selection'>
      <img src={IconWater} alt='vibe-icon' className='vibe-icon' />
      <div className='vibe-name'>Water</div>
    </form>
  )
}

function VibeWellness () {
  return (
    <form className='vibe-selection'>
      <img src={IconWellness} alt='vibe-icon' className='vibe-icon' />
      <div className='vibe-name'>Wellness</div>
    </form>
  )
}

function VibeScience () {
  return (
    <form className='vibe-selection'>
      <img src={IconScience} alt='vibe-icon' className='vibe-icon' />
      <div className='vibe-name'>Science</div>
    </form>
  )
}

function VibeArtsCrafts () {
  return (
    <form className='vibe-selection'>
      <img src={IconArtsCrafts} alt='vibe-icon' className='vibe-icon' />
      <div className='vibe-name'>Arts & Crafts</div>
    </form>
  )
}

function VibeJustice () {
  return (
    <form className='vibe-selection'>
      <img src={IconJustice} alt='vibe-icon' className='vibe-icon' />
      <div className='vibe-name'>Justice</div>
    </form>
  )
}

function VibeDarkSkies () {
  return (
    <form className='vibe-selection'>
      <img src={IconDarkSkies} alt='vibe-icon' className='vibe-icon' />
      <div className='vibe-name'>Dark Skies</div>
    </form>
  )
}

function VibeBar () {
  return (
    <form className='carousel-container'>
      <VibeOutdoorFun />
      <VibeWildlife />
      <VibeGardening />
      <VibeWater />
      <VibeWellness />
      <VibeScience />
      <VibeArtsCrafts />
      <VibeJustice />
      <VibeDarkSkies />
    </form>
  )
}

function FilterButton () {
  return (
    <button className='btn-filters'>
      <img src={IconFilterBars} alt='filter-icon' className='filter-icon' />
      <div>Filters</div>
    </button>
  )
}

export default function FilterBar () {
  return (
    <form className='filter-bar'>
      <VibeBar />
      <FilterButton />
    </form>
  )
}
