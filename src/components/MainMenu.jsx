import { hover } from '@testing-library/user-event/dist/hover';
import React from 'react';
import { Link } from 'react-router-dom'

const renderMenu = (pageName, refs, fullScreenMenuIsVisible, setFullScreenMenuIsVisible) => {
    switch(pageName) {
        case 'WelcomePage':
            return (
                <>
                    <div class='menuItemButtonWithNoPadding' onClick={() => {
                        if (fullScreenMenuIsVisible) setFullScreenMenuIsVisible(false)
                        }}>
                            <Link to='/webdev' className='menuItemButtonLink' style={{textDecoration: 'none'}}>
                                Dev Portfolio
                            </Link>
                    </div>
                    <div class='menuItemButtonWithNoPadding' onClick={() => {
                        if (fullScreenMenuIsVisible) setFullScreenMenuIsVisible(false)
                        }}>
                            <Link to='/music' className='menuItemButtonLink' style={{textDecoration: 'none'}}>
                                Music Portfolio
                            </Link>
                    </div>
                </>
            );
        case 'WebDevPage':
            return (<>
                <div class='menuItemButton' onClick={() => {
                    refs.webDevAboutMe.current.scrollIntoView()
                    if (fullScreenMenuIsVisible) setFullScreenMenuIsVisible(false)
                    }}>
                        About Me
                </div>
                <div class='menuItemButton' onClick={() => {
                    refs.projects.current.scrollIntoView()
                    if (fullScreenMenuIsVisible) setFullScreenMenuIsVisible(false)
                    }}>
                    Projects
                </div>
                <div class='menuItemButton' onClick={() => {
                    refs.education.current.scrollIntoView()
                    if (fullScreenMenuIsVisible) setFullScreenMenuIsVisible(false)
                    }}>
                    Education
                </div>
                <div class='menuItemButton' onClick={() => {
                    refs.skills.current.scrollIntoView()
                    if (fullScreenMenuIsVisible) setFullScreenMenuIsVisible(false)
                    }}>
                    Skills
                </div>
                <div class='menuItemButton' onClick={() => {
                    refs.webDevContact.current.scrollIntoView()
                    if (fullScreenMenuIsVisible) setFullScreenMenuIsVisible(false)
                    }}>
                    Contact
                </div>
                    </>);
        case 'MusicPage':
            return (<>
                <div class='menuItemButton' onClick={() => {
                    refs.musicAboutMe.current.scrollIntoView()
                    if (fullScreenMenuIsVisible) setFullScreenMenuIsVisible(false)
                    }}>
                    About Me
                </div>
                <div class='menuItemButton' onClick={() => {
                    refs.myWorks.current.scrollIntoView()
                    if (fullScreenMenuIsVisible) setFullScreenMenuIsVisible(false)
                    }}>
                    My Works
                </div>
                <div class='menuItemButton' onClick={() => {
                    refs.myMusic.current.scrollIntoView()
                    if (fullScreenMenuIsVisible) setFullScreenMenuIsVisible(false)
                    }}>
                    My Music
                </div>
                <div class='menuItemButton' onClick={() => {
                    refs.myDiscography.current.scrollIntoView()
                    if (fullScreenMenuIsVisible) setFullScreenMenuIsVisible(false)
                    }}>
                    My Discography
                </div>
                <div class='menuItemButton' onClick={() => {
                    refs.musicForMarketing.current.scrollIntoView()
                    if (fullScreenMenuIsVisible) setFullScreenMenuIsVisible(false)
                    }}>
                    Music For Ads
                </div>
                <div class='menuItemButton' onClick={() => {
                    refs.filmScoring.current.scrollIntoView()
                    if (fullScreenMenuIsVisible) setFullScreenMenuIsVisible(false)
                    }}>
                    Film Scoring
                </div>
                <div class='menuItemButton' onClick={() => {
                    refs.soundDesign.current.scrollIntoView()
                    if (fullScreenMenuIsVisible) setFullScreenMenuIsVisible(false)
                    }}>
                    Sound Design
                </div>
                <div class='menuItemButton' onClick={() => {
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