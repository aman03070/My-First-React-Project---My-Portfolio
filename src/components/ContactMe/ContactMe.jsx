import React from 'react'
import './ContactMe.css'
import ContactInfoCard from './ContactInfoCard/ContactInfoCard';
import ContactForm from './ContactForm/ContactForm';

const ContactMe = () => {
  return (
<section className="contact-container">
<h5>Contact Me</h5>

<div className="contact-content">
<div style={{flex: 1}}>
<ContactInfoCard
iconUrl="./assets/images/mail.png"
text="amanaj379@gmail.com"
href="https://www.google.com/"
/>
<ContactInfoCard
iconUrl="./assets/images/github1.png"
text="https://github.com/aman03070"
/>
</div>
<div style={{flex: 1}}>
    <ContactForm />
</div>
</div>

</section>
  )
}

export default ContactMe;
