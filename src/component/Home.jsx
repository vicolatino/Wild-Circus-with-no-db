import React from 'react';
import './Home.css'
import './CssForAll.css'

function Home() {
    return (
        <div id='accueil' className='HomeContainer'>
            <div>
                <img className='BannerCircus' src="https://zupimages.net/up/20/05/ee53.png" alt="bannerofcircus"/>
                <img className='BannerCircusMobile' src="https://zupimages.net/up/20/05/y7iw.png" alt="bannerofcircus"/>
            </div>
            <div>
                <img className='PicCircus' src="https://zupimages.net/up/20/05/duta.jpg" alt="Picofcircus"/>
            </div>
        </div>
      
    );
  }

export default Home;