import React from 'react';
import iconmonstrLinkedin from '../img/icons/iconmonstrLinkedin.png'
import iconmonstrGithub from '../img/icons/iconmonstrGithub.png'

const MenuFooter = () => {
    return (
        <div id='menu-footer-flex'>
            <div><img src={iconmonstrLinkedin} alt='LinkedIn Link' width='35' height='35'/></div>
            <div><img src={iconmonstrGithub} alt='Github Link' width='35' height='35'/></div>
        </div>
    );
};

export default MenuFooter;