import React, { useEffect } from 'react';
import ContactForm from './ContactForm';

const ContactPage = ({setCurrentPage}) => {

    useEffect(()=>{
        setCurrentPage('ContactPage')
    },[])

    return (
        <div id="Contact-Page">
            <ContactForm />
        </div>
    );
};

export default ContactPage;