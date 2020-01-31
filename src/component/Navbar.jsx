import React from "react";
import './Navbar.css'
import './CssForAll.css'
import { Link } from 'react-scroll'

function Navbar(){
    return(
        <div className='NavBarContainer Flex SpaceBetween'>
            <ul className='Flex SpaceAround MaxWidth ItemCenter navbar'>
                <li className='NoStyleList BorderRight WidthLinkBar'>
                    <Link
                        activeClass='active'
                        className='linkclick'
                        to='accueil'
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}>
                        Home
                    </Link>
                </li>
                <li className='NoStyleList BorderRight WidthLinkBar'>
                    <Link
                        activeClass='active'
                        className='linkclick'
                        to='aboutus'
                        spy={true}
                        smooth={true}
                        offset={-30}
                        duration={500}>
                        About us
                    </Link>
                </li>
                <li className='NoStyleList BorderRight WidthLinkBar'>
                    <Link
                        activeClass='active'
                        className='linkclick'
                        to='news'
                        spy={true}
                        smooth={true}
                        offset={-30}
                        duration={500}>
                        News
                    </Link>
                </li>
                <li className='NoStyleList WidthLinkBar '>
                    <Link
                        activeClass='active'
                        className='linkclick'
                        to='contact'
                        spy={true}
                        smooth={true}
                        offset={-30}
                        duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>
            <div className='logoNavContainer Flex SpaceAround ItemCenter'>
                <img className='logoNavbar' src="https://zupimages.net/up/20/05/8ol4.png" alt="logoFacebook"/>
                <img className='logoNavbar' src="https://zupimages.net/up/20/05/wcna.png" alt="logoTwitter"/>
                <img className='logoNavbar' src="https://zupimages.net/up/20/05/o5fl.png" alt="logoInstagram"/>
            </div>
        </div>
      
 
  
    )
};

export default Navbar;
