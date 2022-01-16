import React, { useEffect } from 'react';
import WebDevAboutMe from './webDevPageComponents/WebDevAboutMe';
import Projects from './webDevPageComponents/Projects';
import Skills from './webDevPageComponents/Skills';
import WebDevContact from './webDevPageComponents/WebDevContact';
import Education from './webDevPageComponents/Education';

const WebDevPage = ({setCurrentPage, refs}) => {

    useEffect(()=>{
        setCurrentPage('WebDevPage')
    },[setCurrentPage])

    return (
        <div id='web-dev-container'>
            <div ref={refs.webDevAboutMe}>
                <WebDevAboutMe />
            </div>
            <div ref={refs.projects}>
               <Projects /> 
            </div>
            <div ref={refs.education}>
                <Education />
            </div>
            <div ref={refs.skills}>
                <Skills />
            </div>
            <div ref={refs.webDevContact}>
                <WebDevContact />
            </div>
        </div>
    );
};

export default WebDevPage;