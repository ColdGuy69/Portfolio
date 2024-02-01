import about_image from '../images/shinobu.png';

function About() {

    return (
      <div className='about-page'>
        <div className='about-wrapper'>
          <div className='about'>
            <div className='title'><span>Who I am</span></div><br />

            Hi! My name is <span>Sam</span>, a newbie to the world of coding. I picked up coding to create small applications that align with my personal interests. <br /><br />

            Besides coding, a few other things I love to do!<br /><br />

            <li>Watching <span>anime</span></li> 
            <li>Reading <span>manga</span> & <span>light novel</span></li> 
            <li><span>Honkai Impact 3rd</span> & <span>Doki Doki Literature Club</span></li><br />

          </div>

          <img src={about_image} className='about-image' />
        </div>

        <div className='about-socials-wrapper'>
          <div className='title'><span>FIND ME ON</span></div>
          Don't hesitate to get in touch with me<br />

          <div className='about-socials'>
            <a href="https://github.com/kirixenyt" target="_blank"><i class="fa-brands fa-github"></i></a> 
            <a href="https://www.youtube.com/@kirixenyt" target="_blank"><i class="fa-brands fa-youtube"></i></a> 
          </div>
        </div>
      </div>
    )
  }
  
  export default About