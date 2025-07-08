import React from 'react';

const ContactForm = () => {
    // We no longer need state or the sendEmail function
    // const [sendInfo, setSendInfo] = useState(false)
    // const [sendInfoError, setSendInfoError] = useState(false)
    // const sendEmail = (e) => { ... }
    
    return (
        <div id='contact'>
            <header id='contact-form-header'>
                <h1>
                    Contact me
                </h1>
            </header>

            {/* The form is replaced with this new contact-details div */}
            <div id='contact-details'>
                <p>
                    Feel free to reach out to me directly. I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of an ambitious vision.
                </p>
                <div className='contact-info-line'>
                    <strong>Email: </strong> 
                    <a href="mailto:szymonorchowski@gmail.com">szymonorchowski@gmail.com</a> 
                </div>
                <div className='contact-info-line'>
                    <strong>Mobile: </strong> 
                    <span>+48 690 956 398</span> 
                </div>
            </div>

        </div>
    );
};

export default ContactForm;