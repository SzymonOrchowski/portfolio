import React from 'react';
import ContactForm from '../ContactForm';

const WebDevContact = () => {
    return (
        <div id='web-dev-contact-container'>
            <div id='web-dev-contact-form-container'>
                <ContactForm />
            </div>
            <div id='web-dev-contact-image-container'>
                <img src={process.env.PUBLIC_URL + '/img/backgrounds/pexels-negative-space-34153.jpg'} alt='computer keyboard'/>
            </div>
        </div>
    );
};

export default WebDevContact;