import React from 'react';
import ContactForm from '../ContactForm';

const MusicContact = () => {
    return (
        <div id='web-dev-contact-container'>
            <div id='web-dev-contact-form-container'>
                <ContactForm />
            </div>
            <div id='web-dev-contact-image-container'>
                <img src={process.env.PUBLIC_URL + '/img/backgrounds/piano.jpg'} alt='PianoKeyboard'/>
            </div>
        </div>
    );
};

export default MusicContact;