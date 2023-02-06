import { useContext } from 'react';
import ThemeProvider from '../components/contexts/theme';

const HomePage = () => {
  const [theme, setTheme] = useContext(ThemeProvider.context)
  const text = <p>Hi, I'm Brent. Here you can learn more about me and see some of my web projects.
      Feel free to look at my portfolio and about pages to find out more about me and my work. If
      you have any questions for me, there is also a contact page. I am excited to share my work
      with you!</p>

  return (
    <div className='homePage' id={ theme === 'dark' ? 'pageDark' : '' }>
        <div className="homeBox"></div>
        <h1>Welcome</h1>
        {text}
    </div>
  )
};

export default HomePage;