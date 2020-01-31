import React from "react";
import './CssForAll.css';
import './EventCard.css'
import Fade from 'react-reveal/Fade';



function EventCard({date, article, title}){
    return(
        <div className='ElementCardContainer Flex Column ItemCenter'>
            <Fade>
            <div className='DateLogoContainer'>
                <div className='LogoCircusContainer'>
                    <img className='LogoCircus' src="https://zupimages.net/up/20/05/1acf.png" alt="logoCircus"/>
                </div>
                <p className='DateEventCard'>{date.slice(8,10)}/{date.slice(5,7)}/{date.slice(2,4)}</p>
            </div>
            <div className='TitleCardContainer'>
                <h3 className='TitleEventCard'>{title}</h3>
            </div>
            <div className='ArticleContainer'>
                <p>{article}</p>
            </div>
            </Fade>   
        </div>
    )
};

export default EventCard ;