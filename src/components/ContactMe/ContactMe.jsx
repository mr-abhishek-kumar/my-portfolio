import React from 'react';
import './ContactMe.css'
import ContactInfoCard from './ContactInfoCard/ContactInfoCard';
import ContactForm from '../ContactForm/ContactForm';

function ContactMe() {
  return (
    <section className="contact-container">
        <h5>Contact Me</h5>

        <div className="contact-content">
            <div style={{flex:1}}>
                <ContactInfoCard 
                    iconUrl="./assets/images/javascript-1-48.png"
                    text="abhishramishra07@gmail.com"
                />
                <ContactInfoCard 
                    iconUrl="./assets/images/javascript-1-48.png"
                    text="https://github.com/mr-abhishek-kumar"
                />
            </div>

            <div style={{flex:1}}>
                <ContactForm/>
            </div>
        </div>

    </section>
  )
}

export default ContactMe