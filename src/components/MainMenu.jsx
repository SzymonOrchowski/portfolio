import React from 'react';

const renderMenu = (pageName) => {
    switch(pageName) {
        case 'WelcomePage':
            return null;
        case 'WebDevPage':
            return (<>
                <p>About Me</p>
                <p>Projects</p>
                <p>Skills</p>
                <p>Contact</p>
                </>);
        case 'MusicPage':
            return (<>
                <p>About Me</p>
                <p>My Works</p>
                <p>My Music</p>
                <p>My Discography</p>
                <p>Music For Ads</p>
                <p>Film Scoring</p>
                <p>Sound Design</p>
                <p>Contact</p>
                </>);
        case 'DiscographyPage':
            return null;
        case 'ContactPage':
            return null;
    }
}

const MainMenu = ({currentPage}) => {
    return (
        <div>
            {renderMenu(currentPage)}
        </div>
    );
};

export default MainMenu;