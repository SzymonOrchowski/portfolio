import React, { useEffect } from 'react';
import WebDevAboutMe from './webDevPageComponents/WebDevAboutMe';
import Projects from './webDevPageComponents/Projects';
import Skills from './webDevPageComponents/Skills';
import WebDevContact from './webDevPageComponents/WebDevContact';
import Education from './webDevPageComponents/Education';

const WebDevPage = ({setCurrentPage}) => {

    useEffect(()=>{
        setCurrentPage('WebDevPage')
    },[])

    return (
        <div>
            <header>
                WebDevPage
            </header>
            <WebDevAboutMe />
            <Education />
            <Projects /> 
            <Skills />
            <WebDevContact />
        </div>
    );
};

export default WebDevPage;