import React, { useState } from 'react';
import emailjs from 'emailjs-com'

const ContactForm = () => {
    const [sendInfo, setSendInfo] = useState(false)
    const [sendInfoError, setSendInfoError] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_f8zbuh7', 'template_fp3nlqq', e.target, "user_eY46KhzPufTceelW687zb")
        .then((res)=>{
            setSendInfo(true)
            document.getElementById('music-contact-form').reset()
        })
        .catch((err)=>{setSendInfoError(true)})
    }

    const emailRegex = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
    
    return (
        <div id='contact'>
            <header id='contact-form-header'>
                <h1>
                    Contact me
                </h1>
            </header>
            <form id='contact-form' onSubmit={sendEmail}>

                <label>Name:</label>
                <input type='text' name='name' required/>

                <label>E-mail:</label>
                <input type="email" name="email" pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required/>

                <label>Subject:</label>
                <input type='text' name='subject' required/>

                <label>Message:</label>
                <textarea name="message" rows='4' required/>

                <input type="submit" value='Send' />
                
            </form>
            <div>
                {sendInfo ? <div>Message sent successfully!</div> : null}
                {sendInfoError ? <div>Something went wrong! Try again later!</div> : null}
            </div>
        </div>
    );
};

export default ContactForm;