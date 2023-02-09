import Link from 'next/link';
import { useContext } from 'react';
import ThemeProvider from './contexts/theme';

const Header = () => {
  const [theme, setTheme] = useContext(ThemeProvider.context);

  return (
    <header>
      <nav id={ theme === 'dark' ? 'dark' : ''}>
        { theme === 'dark'
          ? <div id='activeToggle'>
              <div className='activeIndicator' onClick={() =>  
                { theme === 'dark' ? setTheme('light') : setTheme('dark') }}>
              </div>
            </div>
          : <div id='toggle'>
              <div className='indicator' onClick={ () =>  
                { theme === 'dark' ? setTheme('light') : setTheme('dark') }}>
              </div>
            </div>
        }                
        <div className='navTitle'>
          <b>Brent Gustafson</b>
        </div>
        <div className='navSubtitle'>
          <firstchar>W</firstchar>eb Developer | <firstchar>R</firstchar>eact | 
          <firstchar>E</firstchar>xpress | <firstchar>M</firstchar>ongodb
        </div>
        <div className='navLinks'>
          <ul>
            <Link href={'/' }>
              <li >   
                <div className='link'>HOME</div>
              </li>
            </Link>
            <Link href={'/portfolio' }>
              <li>
                <div className='link'>PORTFOLIO</div>
              </li>
            </Link>
            <Link href={'/about' }>
              <li>
                <div className='link'>ABOUT</div>
              </li>
            </Link>
            <Link href={'/contact' }>
              <li>
                <div className='link'>CONTACT</div>
              </li>
            </Link>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header;