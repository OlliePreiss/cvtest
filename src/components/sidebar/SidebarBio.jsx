import { useState } from 'react'
import Arrow from '../icons/Arrow'
import SidebarBioForm from './SidebarBioForm';

function SidebarBio({
  activeSection,
  handleSectionClick,
  bio,
  handleChange
}) {
  return (
    <>
      <div className='dropdown-container' onClick={handleSectionClick} >
        <button className='dropdown-button'>
        <h3> Bio </h3>
        <Arrow
          activeSection={activeSection}
          section='bio'
          />
        </button>
      </div>
      {(activeSection === 'bio') &&
        <SidebarBioForm
          bio={bio}
          handleChange={handleChange}
        />
      }
    </>
  )
}

export default SidebarBio;
