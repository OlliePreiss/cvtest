function SidebarBioForm({
    bio,
    handleChange
  }) {
  return (
    <form className='form'>
      <div className='form-datafield'>
        <label className='form-datafield-label' htmlFor='bio'> White a short summary of your experience and ambitions </label>
        <textarea className="textarea" name="bio" id="nio" cols="30" rows="10" value={bio} onChange={handleChange}></textarea>
      </div>
    </form>
  )
}

export default SidebarBioForm;
