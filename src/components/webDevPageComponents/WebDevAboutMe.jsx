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
                        Hello, I&apos;m Szymon. <br/><br/> I&apos;m a software developer who thrives at the intersection of creative vision and disciplined engineering. <br/> My journey into technology is driven by a deep curiosity—a desire to understand how complex systems work and how they can be shaped into intuitive, powerful tools for people. I believe the most rewarding challenges involve turning ambitious ideas into polished, real-world applications. <br/><br/> I&apos;m always excited to connect with passionate people and explore what we can build next.
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