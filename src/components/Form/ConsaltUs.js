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
  const [nameError, setNameError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const nameHandler = (e) => {
    !/\d/.test(e.target.value) && setName(e.target.value)
    e.target.value === '' && setNameError('Enter your name, please')
    e.target.value.length > 3 && setNameError(false)
    e.target.value.length <= 3 && e.target.value.length > 0 && setNameError('Your name is too short')
  }
  const phoneHandler = (e) => {
    if (/\d/.test(e.target.value)) {
      setPhone(e.target.value)
    }
    e.target.value.length === 10 ? setPhoneError(false) : setPhoneError('Enter correct phone, please')
    if (e.target.value === '') {
      setPhone('');
      setPhoneError('Enter your phone, please');
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
    // toastHandler()
    // emailjs.sendForm('service_zmmi1uo', 'template_zedv23n', form.current, 'xaUe0KlHcXafY9QNu')
    //   .then((result) => {
    //     console.log(result.text);
    //   }, (error) => {
    //     console.log(error.text);
    //   });

    if (phone.length === 10) {
      setPhone('')
      setPhoneError(false)
    } else {
      setPhoneError(true)
    }
    setName('')
    setEmail('')
    setSubject('')
    setMessage('')
    if (!phoneError) {
      console.log('here');
      setShowForm(false)
    }
    // form.reset
  };
  return (

    <form ref={form} className={styles.form} onSubmit={sendEmail}>
      <span className={styles.closeBtn} onClick={() => setShowForm(false)}>x</span>

      <h2 className={styles.formTitle}> Get in Touch</h2>
      <h3 className={styles.formText}> please fill out the quick form and we will be in touch with you</h3>
      <input required type="text" name="user_name" placeholder="Name" value={name} onChange={(e) => nameHandler(e)} />
      {
        nameError && <span>{nameError}</span>
      }
      <input type="number" name="user_phone" placeholder="Phone" value={phone} onChange={(e) => phoneHandler(e)} />
      {
        phoneError && <span>{phoneError}</span>
      }
      <input required type="email" name="user_email" placeholder="Email" value={email} onChange={(e) => emailHandler(e)} />
      <input type="subject" name="subject" placeholder="Subject" value={subject} onChange={(e) => subjectHandler(e)} />
      <textarea className={styles.textarea} name="message" placeholder="Leave your message here" value={message} onChange={(e) => messageHandler(e)} />
      <button className={styles.btn + ' ' + styles.btnGreen + ' ' + styles.btnAnimate} type="submit" value="Send">Send message</button>

    </form>

  );
}


export default ConsaltUs;
