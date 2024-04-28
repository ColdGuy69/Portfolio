// import { useState } from 'react'
import home_image from '../images/waifu.gif';

function Home() {

  return (
    <div className='home'>
      <div className='home-welcome-message'>
        Hi There!<br />
        I'm <span><b>Sam</b></span><br /><br />

        <b><span>Newbie Coder<br />
        Avid Anime watcher</span> &<span><br />
        Manga/Light Novel reader</span></b>
      </div>

      <script src="https://static.elfsight.com/platform/platform.js" data-use-service-core defer></script>
<div class="elfsight-app-64347529-b92b-41cb-a10d-c0a450d5414e" data-elfsight-app-lazy></div>

      <div className='home-introduction-wrapper'>
        <img src={home_image} className='home-introduction-image' />

        <div className='home-introduction'>
          <div className='title'>You can’t change anything unless <span>you can discard part of yourself too.</span></div><br />

          To surpass monsters,<span> you must be willing to abandon your humanity.</span><br /><br />

          <div className='quote'>- Arima Kishou</div>
        </div>
      </div>
    </div> 
  )
}

export default Home
