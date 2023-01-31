import Link from 'next/link';
import { useContext } from 'react';
import ThemeProvider from './contexts/theme';

const Header = () => {
  const [theme, setTheme] = useContext(ThemeProvider.context);

  return (
    <header>
      <nav id={ theme ? 'dark' : ''}>
        { theme === 'dark'
          ? <div id='activeToggle'>
              <div className='activeIndicator' onClick={() =>  
                { theme ? setTheme(false) : setTheme(true) }}>
              </div>
            </div>
          : <div id='toggle'>
              <div className='indicator' onClick={ () =>  
                { theme ? setTheme(false) : setTheme(true) }}>
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
            <Link to={ '/' }>
              <li >   
                <div className='link'>HOME</div>
              </li>
            </Link>
            <Link to={ '/Portfolio' }>
              <li>
                <div className='link'>PORTFOLIO</div>
              </li>
            </Link>
            <Link to={ '/About' }>
              <li>
                <div className='link'>ABOUT</div>
              </li>
            </Link>
            <Link to={ '/Contact' }>
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