import { useState } from 'react'
import Arrow from '../icons/Arrow'
import SidebarEducationForm from './SidebarEducationForm';

function SidebarEducation({
    activeSection,
    education,
    handleChange,
    handleSectionClick,
    addNewEducation
  }) {

  const [openForm, setOpenForm] = useState(null)

  function handleClick(e) {
    const uni = (e.target.firstElementChild === null) ? e.target.textContent.trim() : e.target.firstElementChild.textContent.trim()
    education.map((school) => {
      (school.description.school === uni) && setOpenForm(school.id)
    })
  }

  function handleSubmitClick() {
    setOpenForm(null)
  }

  return (
    <>
      <div className='dropdown-container' onClick={handleSectionClick} >
        <button className='dropdown-button'>
        <h3> Education </h3>
        <Arrow
          activeSection={activeSection}
          section='education'
          />
        </button>
      </div>
      {(activeSection === 'education') && education.map((school) => {
        if (school.id === openForm) {
          return (
            <SidebarEducationForm
              school={school}
              handleChange={handleChange}
              handleSubmitClick={handleSubmitClick}
            />
          )
        } else {
          return (
            <div className='section-container' onClick={handleClick} >
              <p> {school.description.school} </p>
            </div>
          )
        }
      })}
      {(activeSection === 'education') && (<div className='section-container'>
        <button className='submit-button' onClick={addNewEducation}> Add new education </button>
      </div>
      )}
    </>

    // copy the rest of the code from Experience
  )
}

export default SidebarEducation;
