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
          <firstChar>W</firstChar>eb Developer | <firstChar>R</firstChar>eact | 
          <firstChar>E</firstChar>xpress | <firstChar>M</firstChar>ongodb
        </div>
        <div className='navLinks'>
          <ul>
            <Link href={'/' }>
              <li >   
                <div className='link'>HOME</div>
              </li>
            </Link>
            <Link href={'/Portfolio' }>
              <li>
                <div className='link'>PORTFOLIO</div>
              </li>
            </Link>
            <Link href={'/About' }>
              <li>
                <div className='link'>ABOUT</div>
              </li>
            </Link>
            <Link href={'/Contact' }>
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