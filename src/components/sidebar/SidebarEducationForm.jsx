function SidebarEducationForm({
    school,
    handleChange,
    handleSubmitClick
  }) {

  return (
    <form className='form'>
      <div className='form-datafield hidden'>
        <label className='form-datafield-label hidden' htmlFor='id'> ID </label>
        <input className='hidden' type="text" id='id' value={school.id} onChange={handleChange} />
      </div>
      <div className="form-datafield">
        <label className='form-datafield-label' htmlFor='school'> School / University </label>
        <input type="text" id='school' value={school.description.school} onChange={handleChange}/>
      </div>
      <div className="form-datafield">
        <label className='form-datafield-label' htmlFor='course'> Course Details </label>
        <input type="text" id='course' value={school.description.course} onChange={handleChange}/>
      </div>
      <div className="form-datafield">
        <label className='form-datafield-label' htmlFor='grade'> Grade </label>
        <input type="text" id='grade' value={school.description.grade} onChange={handleChange}/>
      </div>
      <div className="form-datafield">
        <label className='form-datafield-label' htmlFor='startDate'> Start Date </label>
        <input type="text" id='startDate' value={school.description.startDate} onChange={handleChange}/>
      </div>
      <div className="form-datafield">
        <label className='form-datafield-label' htmlFor='endDate'> End Date </label>
        <input type="text" id='endDate' value={school.description.endDate} onChange={handleChange}/>
      </div>
      <button type='button' onClick={handleSubmitClick} > Submit </button>
    </form>
    )
}

export default SidebarEducationForm;
