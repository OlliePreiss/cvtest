function SidebarExperienceForm({
    handleChange,
    job,
    handleSubmitClick
  }) {

  return (
    <form className='form'>
      <div className='form-datafield hidden'>
        <label className='form-datafield-label hidden' htmlFor='id'> ID </label>
        <input className='hidden' type="text" id='id' value={job.id} onChange={handleChange}/>
      </div>
      <div className="form-datafield">
        <label className='form-datafield-label' htmlFor='employer'> Employer </label>
        <input type="text" id='employer' value={job.description.employer} onChange={handleChange}/>
      </div>
      <div className="form-datafield">
        <label className='form-datafield-label' htmlFor='roleTitle'> Role Title </label>
        <input type="text" id='roleTitle' value={job.description.roleTitle} onChange={handleChange}/>
      </div>
      <div className="form-datafield">
        <label className='form-datafield-label' htmlFor='startDate'> Start Date </label>
        <input type="text" id='startDate' value={job.description.startDate} onChange={handleChange}/>
      </div>
      <div className="form-datafield">
        <label className='form-datafield-label' htmlFor='endDate'> End Date </label>
        <input type="text" id='endDate' value={job.description.endDate} onChange={handleChange}/>
      </div>
      <div className="form-datafield">
        <label className='form-datafield-label' htmlFor='responsibilities'> Responsibilities </label>
        <input type="text" id='responsibilities' value={job.description.responsibilities} onChange={handleChange}/>
      </div>
      <button type='button' onClick={handleSubmitClick} > Submit </button>
    </form>
    )
}

export default SidebarExperienceForm;
