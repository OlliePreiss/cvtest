import SidebarExperience from "./SidebarExperience";
import SidebarEducation from "./SidebarEducation";
import SidebarBio from "./SidebarBio";
import SidebarPersonalInfo from "./SidebarPersonalInfo";

function Sidebar({
  activeSection,
  experience,
  education,
  bio,
  personalInfo,
  handleExperienceChange,
  handleEductionChange,
  handleBioChange,
  handlePersonalInfoChange,
  handleSectionClick,
  addNewExperience,
  addNewEducation
}) {

  return (
    <div className='sidebar'>
      <SidebarPersonalInfo
        activeSection={activeSection}
        personalInfo={personalInfo}
        handleSectionClick={handleSectionClick}
        handleChange={handlePersonalInfoChange}
        />
      <SidebarBio
        activeSection={activeSection}
        handleSectionClick={handleSectionClick}
        bio={bio}
        handleChange={handleBioChange}
        />
      <SidebarExperience
        activeSection={activeSection}
        handleSectionClick={handleSectionClick}
        experience={experience}
        handleChange={handleExperienceChange}
        addNewExperience={addNewExperience}
        />
      <SidebarEducation
        activeSection={activeSection}
        handleSectionClick={handleSectionClick}
        education={education}
        handleChange={handleEductionChange}
        addNewEducation={addNewEducation}
        />
    </div>
  )

}

export default Sidebar;
