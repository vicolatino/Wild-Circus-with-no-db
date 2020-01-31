import { slide as Menu } from 'react-burger-menu';
import React from 'react';
import './Sidebar.css'
import { Link } from 'react-scroll'

class Sidebar extends React.Component {
  render () {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      <Menu className='sideBar'>
                    <Link
                        activeClass='active'
                        className='linkclick menu-item-bar-actu'
                        to='accueil'
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}>
                        Home
                    </Link>
                    <Link
                        activeClass='active'
                        className='linkclick menu-item-bar-actu'
                        to='aboutus'
                        spy={true}
                        smooth={true}
                        offset={-30}
                        duration={500}>
                        About us
                    </Link>
                    <Link
                        activeClass='active'
                        className='linkclick menu-item-bar-actu'
                        to='news'
                        spy={true}
                        smooth={true}
                        offset={-30}
                        duration={500}>
                        News
                    </Link>
                    <Link
                        activeClass='active'
                        className='linkclick menu-item-bar-actu'
                        to='contact'
                        spy={true}
                        smooth={true}
                        offset={-30}
                        duration={500}>
                        Contact
                    </Link>
      </Menu>
    );
  }
}

export default Sidebar