// import { useState } from 'react';
// import { send } from 'emailjs-com';
import styles from './ConsaltUs.module.css'
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';


function ConsaltUs({ setShowForm, name, phone, email, subject, message, setMessage,
  setName, setPhone, setEmail, setSubject, toastHandler
}) {
  const form = useRef();
  const [disabled, setDisabled] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [emailError, setEmailError] = useState(false);
 
  const nameHandler = (e) => {
    if(!/\d/.test(e.target.value)){
      setName(e.target.value)   
    }
  }
  const phoneHandler = (e) => {
    if(/\d/.test(e.target.value)){
      setPhone(e.target.value)   
    }
    
    
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
    toastHandler()
    emailjs.sendForm('service_zmmi1uo', 'template_zedv23n', form.current, 'xaUe0KlHcXafY9QNu')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
      
    if(phone.length === 10){
      console.log('correct');
      setPhone('')
      setPhoneError(false)
    }else{
      console.log('incorrect');
      setPhoneError(true)
    }
    setName('')
    setEmail('')
    setSubject('')
    setMessage('')
    if(!phoneError){
      setShowForm(false)
    }
    // form.reset
  };
  return (
   
    <form ref={form} onSubmit={sendEmail}>
       <div className={styles.form}>
      <h2 className={styles.formTitle}> Get in Touch</h2>
      <h3 className={styles.formText}> please fill out the quick form and we will be in touch with lightening speed</h3>
      <input required type="text" name="user_name" placeholder="Name" value={name} onChange={(e)=>nameHandler(e)}/>
      <input type="text" name="user_phone"  placeholder="Phone" value={phone} onChange={(e)=>phoneHandler(e)}/>
      {
        phoneError && <span>Incorrect phone</span>
      }
      <input type="email" name="user_email" placeholder="Email" value={email} onChange={(e)=>emailHandler(e)}/>
      <input type="subject" name="subject" placeholder="Subject" value={subject} onChange={(e)=>subjectHandler(e)}/>
      <textarea className={styles.textarea} name="message" placeholder="Leave your message here" value={message} onChange={(e)=>messageHandler(e)}/>
      <button className={styles.btn+ ' ' +styles.btnGreen+ ' ' +styles.btnAnimate}  type="submit" value="Send">Send message</button>
      </div>
      </form>
  
  );
}
     
    
export default ConsaltUs;
 