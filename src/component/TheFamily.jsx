import React from "react";
import './CssForAll.css';
import './TheFamily.css'
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';


function TheFamily(){
    return(
        <div>
            <div>
                <Slide top>
                <h1 id='aboutus' className='FamilyTitle'>THE FAMILY</h1>
                </Slide>
            </div>
            
            <div className='FamilyContainer Flex SpaceAround'>
                
                <div className='Flex Column ItemCenter'>
                    <div className='imgContainer'>
                        <Fade bottom>
                        <img src="https://zupimages.net/up/20/05/zfg7.jpg" alt="TheClown"/>
                        </Fade>
                    </div>
                        <Fade bottom>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut veritatis dolores quisquam quod esse explicabo reprehenderit? Dicta sint, id quae laborum ea quia eius officia maiores? Corporis quasi vitae dignissimos?</p></Fade>
                
                    <div className='imgContainer'>
                        <Fade bottom>
                        <img className='customWidth' src="https://zupimages.net/up/20/05/56rn.jpg" alt="YoungBoy"/>
                        </Fade>
                    </div>
                </div>
                <div className='Flex Column ItemCenter SpaceBetween'>
                    <div className='imgContainer'>
                        <Fade bottom>
                        <img src="https://zupimages.net/up/20/05/7uoy.jpg" alt="women suitcase"/>
                        </Fade>
                    </div>
                    <Fade bottom>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum cum incidunt eaque enim id officia, ullam minima, dignissimos ab harum vero. Amet molestiae obcaecati illum sit dicta nulla, minima illo!</p>
                    </Fade>
                    <div className='imgContainer'>
                        <Fade bottom>
                        <img src="https://zupimages.net/up/20/05/oal4.jpg" alt="Family"/>
                        </Fade>
                    </div>
                    <Fade bottom>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quasi ab iure, neque molestias mollitia sunt eum magni enim ratione. Eos deleniti ipsam alias! Sunt, ipsam! Ut molestiae a beatae.</p>
                    </Fade>
                </div>
                <div className='Flex Column ItemCenter SpaceBetween'>
                    <div className='imgContainer'>
                        <Fade bottom>
                        <img src="https://zupimages.net/up/20/05/ktxs.jpg" alt="trapezist"/>
                        </Fade>
                    </div>
                    <Fade bottom>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum voluptatum qui recusandae hic eaque minima omnis cum nihil, quisquam adipisci impedit maiores obcaecati nulla minus, quam nam saepe at commodi?</p>
                    </Fade>
                    <div className='imgContainer'>
                        <Fade bottom>
                        <img className='WomenTiger' src="https://zupimages.net/up/20/05/6knl.jpg" alt="tiger Women"/>
                        </Fade>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default TheFamily ;