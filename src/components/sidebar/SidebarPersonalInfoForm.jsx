function SidebarPersonalInfoForm({
  personalInfo,
  handleChange
}) {
return (
  <form className='form'>
      <div className='form-datafield'>
        <label className='form-datafield-label' htmlFor='name'> Name </label>
        <input type="text" id='name' value={personalInfo.name} onChange={handleChange} />
      </div>
      <div className='form-datafield'>
        <label className='form-datafield-label' htmlFor='phone'> Phone </label>
        <input type="text" id='phone' value={personalInfo.phone} onChange={handleChange} />
      </div>
      <div className='form-datafield'>
        <label className='form-datafield-label' htmlFor='email'> Email </label>
        <input type="text" id='email' value={personalInfo.email} onChange={handleChange} />
      </div>
      <div className='form-datafield'>
        <label className='form-datafield-label' htmlFor='linkedin'> LinkedIn </label>
        <input type="text" id='linkedin' value={personalInfo.linkedin} onChange={handleChange} />
      </div>
  </form>
)
}

export default SidebarPersonalInfoForm;
