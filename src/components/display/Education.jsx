function Education({ education }) {
  return (
    <div className="cv-section">
      <p className="section-title"> Education </p>
      <hr />
      {education.map((school) =>
        <div className="cv-entry">
          <div className="entry-title-div">
            <p className="entry-title"> {school.description.school} </p>
            <p className="entry-headline"> {school.description.startDate} - {school.description.endDate} </p>
          </div>
          <div className='entry-headline-div'>
            <p className='entry-headline'> {school.description.course} - {school.description.grade} </p>
          </div>
        </div>
      )}
    </div>
  )
}

export default Education;
