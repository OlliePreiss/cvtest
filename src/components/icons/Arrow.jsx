function Arrow({ activeSection, section }) {
  return (activeSection === section) ? <p><i className='arrow open'></i></p> : <p><i className='arrow closed'></i></p>;
}

export default Arrow;
