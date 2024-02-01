function Projects() {
  return (
    <div className='projects'>
      <div className='projects-title'>My Coding Projects (Under Maintenance)</div>

      <div className='projects-wrapper'>
        {Array.from({ length: 5 }, (_, i) => (
          <div className="project" key={i}>
            <img src={`https://static.wixstatic.com/media/90186d_6851a46df2de44f8ab80d4848dcbb585~mv2.gif`} alt={`Under maintenance`} />

            <div className='project-links'>
              <span>Under Maintenance</span>
            </div>

            <p>This project is currently undergoing maintenance. We apologize for any inconvenience and appreciate your patience.</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
