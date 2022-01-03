import React, { useEffect } from 'react';
import WebDevAboutMe from './webDevPageComponents/WebDevAboutMe';
import Projects from './webDevPageComponents/Projects';
import Skills from './webDevPageComponents/Skills';
import WebDevContact from './webDevPageComponents/WebDevContact';
import Education from './webDevPageComponents/Education';

const WebDevPage = ({setCurrentPage, webDevAboutMe, projects, education, skills, webDevContact}) => {

    useEffect(()=>{
        setCurrentPage('WebDevPage')
    },[])

    return (
        <div id='web-dev-container'>
            <div ref={webDevAboutMe}>
                <WebDevAboutMe />
            </div>
            <div ref={projects}>
               <Projects /> 
            </div>
            <div ref={education}>
                <Education />
            </div>
            <div ref={skills}>
                <Skills />
            </div>
            <div ref={webDevContact}>
                <WebDevContact />
            </div>
        </div>
    );
};

export default WebDevPage;