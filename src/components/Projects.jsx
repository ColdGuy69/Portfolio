import project0_image from '../images/website.png';
import project1_image from '../images/samstree.png';
import project2_image from '../images/bluearchive.png';
import project3_image from '../images/my-website.png';
import project4_image from '../images/homepage.png';
import project5_image from '../images/sam-os.png';

function Projects() {

    return (
      <div className='projects'>
        <div className='projects-title'>My Coding Projects</div>

        <div className='projects-wrapper'>
          <div className="project">
            <img src={project4_image} />

            <div className='project-links'>
              <a href="https://github.com/KirixenYT/Gogoanime" target="_blank">Code</a>
              <a href="http://gogoanimez.free.nf/" target="_blank">Demo</a>
            </div>

            This is a <span><b>clone of gogoanime, improved version of it</b></span>, further you watch animes on here. This program uses a <span>API</span> for getting the animes and the <span>details</span>.<br /><br /><br />
            Built with: <span>Php</span>
          </div> 

          <div className="project">
            <img src={project3_image} />

            <div className='project-links'>
              <a href="https://github.com/KirixenYT/Portfolio" target="_blank">Code</a>
              <a href="https://kirisam.vercel.app/" target="_blank">Demo</a>
            </div>

            This is my <span><b>personal website</b></span> where I give a brief introduction about myself along with a display of the coding projects I worked on. Additionally, it serves as a platform to share my personal thoughts and experiences related to anime.<br /><br />

            Built with: <span>HTML</span> | <span>CSS</span> | <span>Javascript (React)</span>
          </div>

          <div className="project">
            <img src={project2_image} />

            <div className='project-links'>
              <a href="https://github.com/KirixenYT/Blue-archive" target="_blank">Code</a>
              <a href="https://blue-archive-phi.vercel.app/" target="_blank">Demo</a>
            </div>

            <b><span>Blue archive</span></b> is a website in blue archive style.
            Users can change the background, and click on the link.<br /><br /><br /><br /><br />

            Built with: <span>HTML</span> | <span>CSS</span> | <span>Vue</span> | <span>javascript</span>
          </div> 

          <div className="project">
            <img src={project1_image} />

            <div className='project-links'>
              <a href="https://github.com/KirixenYT/samstree" target="_blank">Code</a>
              <a href="https://samstree.netlify.app/" target="_blank">Demo</a>
            </div>

            <b><span>Sam's Tree</span></b> is a web application like Link tree where u can create ur own page by signing using google. The user can view other users links. You can <span>edit</span> your profile <span>bio</span> and add <span>links</span> too.<br /><br /><br /><br />

            Built with: <span>Svelte</span> | <span>Typescript</span> | <span>Javascript</span>
          </div>

            <div className="project">
            <img src={project5_image} />

            <div className='project-links'>
              <a href="https://github.com/KirixenYT/sam-os" target="_blank">Code</a>
              <a href="https://sams-os.vercel.app/" target="_blank">Demo</a>
            </div>

            This is a <span><b>os looking thing</b></span> where it looks like mostly os of windows/chrome-os etc. Additionally, it serves as a platform to share other stuff that is inside the website.<br /><br />

            Built with: <span>HTML</span> | <span>CSS</span> | <span>Javascript</span> | <span>Svelte</span>
          </div>

          <div className="project">
            <img src={project0_image} />

            <div className='project-links'>
              <a href="https://kirixen.vercel.app/" target="_blank">Demo</a>
            </div>

            This is my website, created to serve as the <b><span>website for getting the source code from my youtube channel for the Discord bot Tutorial</span></b>. Through this website, visitors can login, find codes, and easily locate contact details for further inquiries.<br /><br />

            Built with: <span>HTML</span> | <span>CSS</span> | <span>Javascript (React)</span>
          </div>  
        </div>
      </div>
    )
  }
  
  export default Projects
