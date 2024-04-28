import Experience from './Experience'
import Education from './Education';
import Bio from './Bio'
import PersonalInfo from './PersonalInfo';

function Display({
    experience,
    education,
    bio,
    personalInfo
  }) {

  return (
    <div className="workspace-container">
      <div className="cv-page">
        <PersonalInfo personalInfo={personalInfo} />
        <Bio bio={bio} />
        <Experience experience={experience}/>
        <Education education={education}/>
      </div>
    </div>
  )
}

export default Display;
