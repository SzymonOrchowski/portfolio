import React from 'react';

const MainMenuButton = ({fullScreenMenuIsVisible, setFullScreenMenuIsVisible}) => {
    return (
        <div id='menu-button' onClick={() => {fullScreenMenuIsVisible ? setFullScreenMenuIsVisible(false) : setFullScreenMenuIsVisible(true)}}>
        </div>
    );
};

export default MainMenuButton;