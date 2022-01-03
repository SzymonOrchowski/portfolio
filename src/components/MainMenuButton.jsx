import React from 'react';
import iconmonstrMenu from '../img/icons/iconmonstrMenu.png'
import iconmonstrXmark from '../img/icons/iconmonstrXmark.png'

const MainMenuButton = ({fullScreenMenuIsVisible, setFullScreenMenuIsVisible}) => {
    return (
        <div id='menu-button' onClick={() => {fullScreenMenuIsVisible ? setFullScreenMenuIsVisible(false) : setFullScreenMenuIsVisible(true)}}>
            {fullScreenMenuIsVisible ? <img src={iconmonstrXmark} alt='close menu' width='60' height='60' /> : <img src={iconmonstrMenu} alt='open menu' width='60' height='60' />}
        </div>
    );
};

export default MainMenuButton;