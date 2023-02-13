import { useState } from 'react';
import Emailjs from 'emailjs-com';

const ContactUs = () => {
  const [message, setMessage] = useState('');

  const SendEmail = (e) => {
    e.preventDefault();
    
    if (message === '') {
      alert('No message to send!')
      return
    };

    Emailjs.sendForm('service_plx5r8b', 'contact_form', e.target, 'OkYo9_3EEf555GknA')
      .then((result) => {
        alert('Your message was successfully submitted!')
        setMessage('')
      }, (error) => {
        console.log(error.text);
      });
  };
  
  return (
    <form onSubmit={SendEmail}>
      <input type="hidden" name="contact_number" />
      <div></div><br/>
      <input type="text" name="user_name" placeholder='Name'/><br/>
      <input type="email" name="user_email" placeholder='Email'/><br/>
      <textarea name="message" placeholder='Message' value={message} onChange={(e) => setMessage(e.target.value)}/><br/>
      <button className='custom-btn btn-1' type="submit" target='_blank'>
        <span>Send</span>
      </button>
    </form>
  );
};

export default ContactUs;