import React from "react";
import './CssForAll.css';
import './Contact.css'


function Contact(){
    return(
        <div>
            <h1 id='contact' className='titleContact'>ContAcT Us ?</h1>
            <div className='Flex SpaceAround'>
                <div className='ContactLinkLogo'>
                    <div>
                        <img className='Girl' src="https://zupimages.net/up/20/05/0buo.jpg" alt="trapezist girl"/>
                    </div>
                    <div className='logoContainer'>
                        <img className='logoContact' src="https://zupimages.net/up/20/05/8ol4.png" alt="logoFacebook"/>
                        <img className='logoContact' src="https://zupimages.net/up/20/05/wcna.png" alt="logoTwitter"/>
                        <img className='logoContact' src="https://zupimages.net/up/20/05/o5fl.png" alt="logoInstagram"/>
                    </div>
                    <p className='adressContact'>contact@link.com</p>
                </div>
                   
            </div>
        </div>
    )
};

export default Contact ;