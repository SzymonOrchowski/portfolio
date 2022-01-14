import React from 'react';
import iconmonstrLinkedin from '../img/icons/iconmonstrLinkedin.png'
import iconmonstrGithub from '../img/icons/iconmonstrGithub.png'

const MenuFooter = () => {
    return (
        <div id='menu-footer-flex'>
            <div>
                <img id='menu-footer-linkedin-icon' src={iconmonstrLinkedin} alt='LinkedIn Link' width='35' height='35' onClick={()=>{window.open('https://www.linkedin.com/in/szymon-orchowski-a52923197/')}}/>
            </div>
            <div>
                <img id='menu-footer-github-icon' src={iconmonstrGithub} alt='Github Link' width='35' height='35' onClick={()=>{window.open('https://github.com/SzymonOrchowski/')}}/>
            </div>
        </div>
    );
};

export default MenuFooter;