function Experience({ experience }) {
  return (
    <div className="cv-section">
      <p className="section-title"> Experience </p>
      <hr />
      {experience.map((job) =>
        <div className="cv-entry">
          <div className="entry-title-div">
            <p className="entry-title"> {job.description.employer} </p>
            <p className="entry-headline"> {job.description.startDate} - {job.description.endDate} </p>
          </div>
          <div className='entry-headline-div'>
            <p className='entry-headline'> {job.description.roleTitle} </p>
          </div>
          <div className="entry-body">
            <p> {job.description.responsibilities} </p>
          </div>
        </div>
      )}
    </div>
  )
}

export default Experience;
