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
                        The 13-weeks long full-time course covered a wide range of concepts from programming fundamentals through to back-end and front-end.
                        The expansive curriculum gave me an opportunity to learn both functional and object-oriented programming, along with industry-standard practices such as TTD (test-driven development), pair programming, and MVC architecture.
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Education;