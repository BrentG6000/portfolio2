import { useContext } from 'react';
import Image from 'next/image';
import ThemeProvider from '../components/contexts/theme';
import Selfie from '../images/bg-0024.jpg';

const About = () => {
  const [Theme] = useContext(ThemeProvider.context);
  const text = <div className='aboutText'><h1>About Me</h1><p>
    I am a Univeristy of Minnesota student currently in the process of completing
    a B. A. in computer science. I have knowledge of Javascript, Node.js, the React
    and Express frameworks, and MongoDB. I have a strong passion for web development
    and that is where my focus is now. My time at University has taught me the
    fundamentals of programming including data structures, algorithms, and discrete
    math. I have used Java, C, and C++ extensively during my courses.</p></div>

  return (
    <div className='aboutPage' id={ Theme === 'dark' ? 'pageDark' : '' }>
      <div className="aboutBox"></div>
        <Image className="selfie" src={ Selfie } alt=''/>
        { text }
    </div>
  );
};

export default About;