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

                <label>Name: </label>
                <br/>
                <input type='text' name='name' required/>
            <br/>
                <label>E-mail: </label>
                <br/>
                <input type="email" name="email" pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required/>
            <br/>
                <label>Subject: </label>
                <br/>
                <input type='text' name='subject' required/>
            <br/>
                <label>Message: </label>
                <br/> 
                <textarea name="message" rows='10' required/>
            <br/>
                <input id="contact-send-button" type="submit" value='Send' />
                
            </form>
            <div>
                {sendInfo ? <div>Message sent successfully!</div> : null}
                {sendInfoError ? <div>Something went wrong! Try again later!</div> : null}
            </div>
        </div>
    );
};

export default ContactForm;