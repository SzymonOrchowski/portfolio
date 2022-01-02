import React, { useEffect } from 'react';
import ContactForm from './ContactForm';

const ContactPage = ({setCurrentPage}) => {

    useEffect(()=>{
        setCurrentPage('ContactPage')
    },[])

    return (
        <div>
            <header>
                ContactPage
            </header>
            <ContactForm />
        </div>
    );
};

export default ContactPage;