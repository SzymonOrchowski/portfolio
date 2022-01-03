import React from 'react';

const renderMenu = (pageName, webDevAboutMe, projects, education, skills, webDevContact, fullScreenMenuIsVisible, setFullScreenMenuIsVisible) => {
    switch(pageName) {
        case 'WelcomePage':
            return null;
        case 'WebDevPage':
            return (<>
                <div onClick={() => {
                    webDevAboutMe.current.scrollIntoView()
                    console.log(fullScreenMenuIsVisible);
                    if (fullScreenMenuIsVisible) setFullScreenMenuIsVisible(false)
                    }}>
                        About Me
                </div>
                <div onClick={() => {
                    projects.current.scrollIntoView()
                    if (fullScreenMenuIsVisible) setFullScreenMenuIsVisible(false)
                    }}>
                    Projects
                </div>
                <div onClick={() => {
                    education.current.scrollIntoView()
                    if (fullScreenMenuIsVisible) setFullScreenMenuIsVisible(false)
                    }}>
                    Education
                </div>
                <div onClick={() => {
                    skills.current.scrollIntoView()
                    if (fullScreenMenuIsVisible) setFullScreenMenuIsVisible(false)
                    }}>
                    Skills
                </div>
                <div onClick={() => {
                    webDevContact.current.scrollIntoView()
                    if (fullScreenMenuIsVisible) setFullScreenMenuIsVisible(false)
                    }}>
                    Contact
                </div>
                    </>);
        case 'MusicPage':
            return (<>
                <div>About Me</div>
                <div>My Works</div>
                <div>My Music</div>
                <div>My Discography</div>
                <div>Music For Ads</div>
                <div>Film Scoring</div>
                <div>Sound Design</div>
                <div>Contact</div>
                    </>);
        case 'DiscographyPage':
            return null;
        case 'ContactPage':
            return null;
    }
}

const MainMenu = ({currentPage, webDevAboutMe, projects, education, skills, webDevContact, fullScreenMenuIsVisible, setFullScreenMenuIsVisible}) => {
    return (
        <div>
            {renderMenu(currentPage, webDevAboutMe, projects, education, skills, webDevContact, fullScreenMenuIsVisible, setFullScreenMenuIsVisible)}
        </div>
    );
};

export default MainMenu;