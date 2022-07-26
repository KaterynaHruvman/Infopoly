// import { useState } from 'react';
// import { send } from 'emailjs-com';
import styles from './ConsaltUs.module.css'
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
  

function ConsaltUs({ setShowForm, name, phone, email, subject, message, setMessage,
  setName, setPhone, setEmail, setSubject
}) {
  const form = useRef();
  const [disabled, setDisabled] = useState(false);
 
  const nameHandler = (e) => {
    setName(e.target.value)   
  }
  const phoneHandler = (e) => {
      setPhone(e.target.value)   

    
  }
  const emailHandler = (e) => {
      setEmail(e.target.value)   

    
  }
  const subjectHandler = (e) => {
      setSubject(e.target.value)   

    
  }
  const messageHandler = (e) => {
      setMessage(e.target.value)   

    
  }
  
 
  const sendEmail = (e) => {
    e.preventDefault(); 
    // emailjs.sendForm('service_zmmi1uo', 'template_zedv23n', form.current, 'xaUe0KlHcXafY9QNu')
    //   .then((result) => {
    //     console.log(result.text);
    //   }, (error) => {
    //     console.log(error.text);
    //   });
    setName('')
    setEmail('')
    setPhone('')
    setSubject('')
    setMessage('')
    setShowForm(false)
    // form.reset
  };

  return (
    

    <form className={styles.form} ref={form} onSubmit={sendEmail}>
      <input type="text" name="user_name" placeholder="Name" value={name} onChange={(e)=>nameHandler(e)}/>
      <input type="text" name="user_phone"  placeholder="Phone" value={phone} onChange={(e)=>phoneHandler(e)}/>
      <input type="email" name="user_email" placeholder="Email" value={email} onChange={(e)=>emailHandler(e)}/>
      <input type="subject" name="subject" placeholder="Subject" value={subject} onChange={(e)=>subjectHandler(e)}/>
      <textarea name="message" placeholder="Type some message" value={message} onChange={(e)=>messageHandler(e)}/>
      <input type="submit" value="Send" disabled={disabled}/>
      </form>
  );
}
     
    
export default ConsaltUs;
