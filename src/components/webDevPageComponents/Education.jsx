import React from 'react';
import { useWindowDimensions } from '../../utils/utils';

const Education = () => {
    return (
        <div id='web-dev-education'>
            <div id='web-dev-education-background'>
                    {useWindowDimensions().width > 800 ? <img id='nc-image' src={process.env.PUBLIC_URL + '/img/education/Northcoders.png'} alt='Northcoders'/> : null }
                    <img id='nc-logo-image' src={process.env.PUBLIC_URL + '/img/education/NorthcodersLOGO.png'} alt='Northcoders Logo'/>
            </div>
            <div id='web-dev-education-container'>
                <header>
                    <h1>
                        Education
                    </h1>
                </header>
                <div id='web-dev-education-northcoders'>
                    <div id='web-dev-education-title'>
                        Northcoders
                    </div>
                    <div id='web-dev-education-description'>
                        Completed an intensive, 13-week full-stack bootcamp focused on modern software development.
                        <br/><br/>
                        The curriculum covered everything from programming fundamentals like <strong>Object-Oriented Programming (OOP)</strong> to advanced concepts in both back-end (Node.js, Express) and front-end (React) development.
                        <br/><br/>
                        A strong emphasis was placed on industry best practices, including <strong>Test-Driven Development (TDD)</strong>, pair programming, and RESTful API design, culminating in hands-on experience building and deploying scalable web applications.
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Education;