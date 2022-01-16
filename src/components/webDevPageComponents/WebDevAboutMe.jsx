import React from 'react';
import DevAboutMeBackgroundSVG from '../backgroundComponents/DevAboutMeBackgroundSVG';
import { useWindowDimensions } from '../../utils/utils';

const WebDevAboutMe = () => {
    return (
        <div id='web-dev-about-me'>
            {useWindowDimensions().width > 1000 ? <DevAboutMeBackgroundSVG /> : null}
            <div id='web-dev-about-me-container'>
                <div id='web-dev-about-me-content'>
                    <header>
                        <h1>
                            About me
                        </h1>
                    </header>
                    <div id="web-dev-about-me-content-text">
                        I’m Szymon. I’m a junior full-stack developer.
                        I like adventures, and I try to make my life a big adventure by doing creative things and projects together with outstanding people I have the luck to meet on my life path. I love discovering new technologies and exploring opportunities for how to use them in life.
                    </div>
                </div>
                <div id='web-dev-about-me-photo'>
                    <img src={process.env.PUBLIC_URL + '/img/DevPhoto.jpg'} alt='me'/>
                </div>
            </div>
        </div>
    );
};

export default WebDevAboutMe;