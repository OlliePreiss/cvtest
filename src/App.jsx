import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { v4 as uuidv4 } from 'uuid';
import './App.css'
import Nav from './components/nav/Nav'
import Display from './components/display/Display';
import Sidebar from './components/sidebar/Sidebar'
import experienceTestData from './components/testdata/experienceTestData'
import educationTestData from './components/testdata/educationTestData'
import bioTest from './components/testdata/bioTest'
import personalInfoTestData from './components/testdata/personalInfoTestData'


function App() {
  const [activeSection, setActiveSection] = useState(null)
  const [personalInfo, setPersonalInfo] = useState(personalInfoTestData);
  const [bio, setBio] = useState(bioTest);
  const [experience, setExperience] = useState(experienceTestData);
  const [education, setEducation] = useState(educationTestData);

  function handleSectionClick(e) {
    // outer if statements handles an error which occured when people clicked on the arrow
    if (e.target.tagName === 'I') {
      // inner if statement identifies whether the open section is being clicked to close it
      if (activeSection === e.target.previousSibling.textContent.trim().toLowerCase()) {
        setActiveSection(null)
      } else {
        console.log(e.target.previousSibling.textContent.trim().toLowerCase())
        setActiveSection(e.target.previousSibling.textContent.trim().toLowerCase())
      }
    } else {
      if (activeSection === e.target.textContent.trim().toLowerCase()) {
        setActiveSection(null)
      } else {
        setActiveSection(e.target.textContent.trim().toLowerCase())
      }
    }
  }

  function handleNewExperienceClick(e) {
    // adds a new job object to the experiences array
    setExperience([
      ...experience,
      {
        id: uuidv4(),
        description: {
          employer: '',
          roleTitle: '',
          StartDate: '',
          EndDate: '',
          responsibilities: ''
        }
      }
    ])
  }

  function handleNewEducationClick(e) {
    // adds a new education object to the experiences array
    setEducation([
      ...education,
        {
          id: uuidv4(),
          description: {
            school: '',
            course: '',
            startDate: '',
            endDate: '',
            grade: ''
          }
        },
      ])
  }

  function handleExperienceChange(e) {
    // gets the job ID from the id datafield within the form
    const targetJobID = e.target.form.firstElementChild.lastElementChild.value
    // gets the name of the datafield being updated
    const targetInput = e.target.id
    // finds that datafield in the experience object array and updates it
    const arr  = experience.map((job) => {
      if (job.id === targetJobID) {
        return {
          ...job,
            description: {
              ...job.description,
              [targetInput]: e.target.value
            }
        }
      // doesn't currentl work for Employer as that doesn't sit in description
      } else {
        return job;
      }
    })
    setExperience(arr)
  }

  function handleEductionChange(e) {
    // gets the job ID from the id datafield within the form
    const targetSchoolID = e.target.form.firstElementChild.lastElementChild.value
    // gets the name of the datafield being updated
    const targetInput = e.target.id
    // finds that datafield in the experience object array and updates it
    const arr  = education.map((school) => {
      if (school.id === targetSchoolID) {
        return {
          ...school,
            description: {
              ...school.description,
              [targetInput]: e.target.value
            }
        }
      // doesn't currentl work for Employer as that doesn't sit in description
      } else {
        return school;
      }
    })
    setEducation(arr)
  }

  function handleBioChange(e) {
    setBio(e.target.value)
  }

  function handlePersonalInfoChange(e) {
    const obj = {
      ...personalInfo,
        [e.target.id]: e.target.value
    }
    setPersonalInfo(obj)
  }

  return (
    <>
      <Nav />
      <div className="container">
        <Sidebar
          activeSection={activeSection}
          experience={experience}
          education={education}
          bio={bio}
          personalInfo={personalInfo}
          handleExperienceChange={handleExperienceChange}
          handleEductionChange={handleEductionChange}
          handleBioChange={handleBioChange}
          handlePersonalInfoChange={handlePersonalInfoChange}
          handleSectionClick={handleSectionClick}
          addNewExperience={handleNewExperienceClick}
          addNewEducation={handleNewEducationClick}
        />
        <Display
          experience={experience}
          education={education}
          bio={bio}
          personalInfo={personalInfo}
        />
      </div>
    </>
  )
}

export default App;
