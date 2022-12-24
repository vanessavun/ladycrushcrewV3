import React from 'react';
import PageHeader from '../../components/page-header/page-header.component';
import ContactForm from '../../components/contact-form/contact-form.component';
import { ContactContainer } from './contact-styles';

function Contact() {
  
  return (
    <ContactContainer>
      <PageHeader title="Contact Us" emote="💌" />
      <ContactForm />
    </ContactContainer>
  );
}

export default Contact;
