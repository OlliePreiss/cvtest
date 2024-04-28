import { useState } from 'react'
import Arrow from '../icons/Arrow'
import SidebarExperienceForm from './SidebarExperienceForm'

function SidebarExperience({
    activeSection,
    experience,
    handleChange,
    handleSectionClick,
    addNewExperience
  }) {

  const [openForm, setOpenForm] = useState(null)

  function handleClick(e) {
    const company = (e.target.firstElementChild === null) ? e.target.textContent.trim() : e.target.firstElementChild.textContent.trim()
    experience.map((job) => {
      (job.description.employer === company) && setOpenForm(job.id)
    })
  }

  function handleSubmitClick() {
    setOpenForm(null)
  }

  return (
    <>
      <div className='dropdown-container' onClick={handleSectionClick} >
        <button className='dropdown-button'>
        <h3> Experience </h3>
        <Arrow
          activeSection={activeSection}
          section='experience'
        />
      </button>
      </div>
      {(activeSection === 'experience') && experience.map((job) => {
        if (job.id === openForm) {
          return (
            <SidebarExperienceForm
              job={job}
              handleChange={handleChange}
              handleSubmitClick={handleSubmitClick}
            />
          )
        } else {
          return (
            <div className='section-container' onClick={handleClick} >
              <p> {job.description.employer} </p>
            </div>
          )
        }
      })}
      {(activeSection === 'experience') && (<div className='section-container'>
        <button className='submit-button' onClick={addNewExperience}> Add new experience </button>
      </div>
      )}
    </>
  )
}

export default SidebarExperience;
