function PersonalInfo({ personalInfo }) {
  return (
    <div className="cv-header">
      <h3> {personalInfo.name} </h3>
      <div className="contact-details">
        <div className="contact-info">
          <p> {personalInfo.phone} </p>
        </div>
        <div className="contact-info">
          <p> {personalInfo.email} </p>
        </div>
        <div className="contact-info">
          <p> {personalInfo.linkedin} </p>
        </div>
      </div>
    </div>
  )
}

export default PersonalInfo;
