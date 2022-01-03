import React from 'react';

const renderMenu = (pageName, refs, fullScreenMenuIsVisible, setFullScreenMenuIsVisible) => {
    switch(pageName) {
        case 'WelcomePage':
            return null;
        case 'WebDevPage':
            return (<>
                <div onClick={() => {
                    refs.webDevAboutMe.current.scrollIntoView()
                    if (fullScreenMenuIsVisible) setFullScreenMenuIsVisible(false)
                    }}>
                        About Me
                </div>
                <div onClick={() => {
                    refs.projects.current.scrollIntoView()
                    if (fullScreenMenuIsVisible) setFullScreenMenuIsVisible(false)
                    }}>
                    Projects
                </div>
                <div onClick={() => {
                    refs.education.current.scrollIntoView()
                    if (fullScreenMenuIsVisible) setFullScreenMenuIsVisible(false)
                    }}>
                    Education
                </div>
                <div onClick={() => {
                    refs.skills.current.scrollIntoView()
                    if (fullScreenMenuIsVisible) setFullScreenMenuIsVisible(false)
                    }}>
                    Skills
                </div>
                <div onClick={() => {
                    refs.webDevContact.current.scrollIntoView()
                    if (fullScreenMenuIsVisible) setFullScreenMenuIsVisible(false)
                    }}>
                    Contact
                </div>
                    </>);
        case 'MusicPage':
            return (<>
                <div onClick={() => {
                    refs.musicAboutMe.current.scrollIntoView()
                    if (fullScreenMenuIsVisible) setFullScreenMenuIsVisible(false)
                    }}>
                    About Me
                </div>
                <div onClick={() => {
                    refs.myWorks.current.scrollIntoView()
                    if (fullScreenMenuIsVisible) setFullScreenMenuIsVisible(false)
                    }}>
                    My Works
                </div>
                <div onClick={() => {
                    refs.myMusic.current.scrollIntoView()
                    if (fullScreenMenuIsVisible) setFullScreenMenuIsVisible(false)
                    }}>
                    My Music
                </div>
                <div onClick={() => {
                    refs.myDiscography.current.scrollIntoView()
                    if (fullScreenMenuIsVisible) setFullScreenMenuIsVisible(false)
                    }}>
                    My Discography
                </div>
                <div onClick={() => {
                    refs.musicForMarketing.current.scrollIntoView()
                    if (fullScreenMenuIsVisible) setFullScreenMenuIsVisible(false)
                    }}>
                    Music For Ads
                </div>
                <div onClick={() => {
                    refs.filmScoring.current.scrollIntoView()
                    if (fullScreenMenuIsVisible) setFullScreenMenuIsVisible(false)
                    }}>
                    Film Scoring
                </div>
                <div onClick={() => {
                    refs.soundDesign.current.scrollIntoView()
                    if (fullScreenMenuIsVisible) setFullScreenMenuIsVisible(false)
                    }}>
                    Sound Design
                </div>
                <div onClick={() => {
                    refs.musicContact.current.scrollIntoView()
                    if (fullScreenMenuIsVisible) setFullScreenMenuIsVisible(false)
                    }}>
                    Contact
                </div>
                    </>);
        case 'DiscographyPage':
            return null;
        case 'ContactPage':
            return null;
    }
}

const MainMenu = ({currentPage, refs, fullScreenMenuIsVisible, setFullScreenMenuIsVisible}) => {
    return (
        <div>
            {renderMenu(currentPage, refs, fullScreenMenuIsVisible, setFullScreenMenuIsVisible)}
        </div>
    );
};

export default MainMenu;