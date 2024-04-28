import { useState } from 'react'
import Arrow from '../icons/Arrow'
import SidebarPersonalInfoForm from './SidebarPersonalInfoForm';

function SidebarPersonalInfo({
  activeSection,
  personalInfo,
  handleChange,
  handleSectionClick
  }) {
  return (
    <>
    <div className='dropdown-container' onClick={handleSectionClick} >
      <button className='dropdown-button'>
      <h3> Personal Info </h3>
      <Arrow
        activeSection={activeSection}
        section='personal info'
        />
      </button>
    </div>
    {(activeSection === 'personal info') &&
      <SidebarPersonalInfoForm
        personalInfo={personalInfo}
        handleChange={handleChange}
      />
    }
  </>
  )
}

export default SidebarPersonalInfo;
