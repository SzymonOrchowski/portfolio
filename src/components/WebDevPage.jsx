import React, { useEffect } from 'react';
import WebDevAboutMe from './webDevPageComponents/WebDevAboutMe';
import Projects from './webDevPageComponents/Projects';
import Skills from './webDevPageComponents/Skills';
import WebDevContact from './webDevPageComponents/WebDevContact';

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
            <Projects /> 
            <Skills />
            <WebDevContact />
        </div>
    );
};

export default WebDevPage;