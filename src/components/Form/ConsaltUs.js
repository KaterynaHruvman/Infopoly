// import { useState } from 'react';
// import { send } from 'emailjs-com';
import styles from './ConsaltUs.module.css'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


function ConsaltUs() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs.sendForm('service_zmmi1uo', 'template_zedv23n', form.current, 'xaUe0KlHcXafY9QNu')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    // form.reset
  };

  return (

    <form className={styles.form} ref={form} onSubmit={sendEmail}>
      <label htmlFor="name">Name</label>
      <input type="text" name="user_name" id="name"/>
      <label htmlFor="email">Email</label>
      <input type="email" name="user_email" id="email" />
      <label>Subject</label>
      <input type="subject" name="subject" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
      </form>
  );
}
     
    
export default ConsaltUs;
