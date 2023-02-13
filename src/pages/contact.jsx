import { useContext } from 'react';
import ThemeProvider from '../components/contexts/theme';
import ContactForm from '../components/contact-form'

const Contact = () => {
  const [theme] = useContext(ThemeProvider.context);
  const text = <p>If you have any questions for me please fill in the contact form and
    I will respond to you as quickly as possible.</p>
  
  return (
    <div className='contactPage' id={ theme === 'dark' ? 'pageDark' : '' }>
      <div className="contactBox"></div>
      {text}
      <ContactForm/>
    </div>
  );
};

export default Contact;