import Link from 'next/link';
import { useContext } from 'react'
import ThemeProvider from './contexts/theme';
import twitterLogo from '../images/TwitterLogo.png'
import darkTwitterLogo from '../images/DarkTwitterLogo.png'
import githubLogo from '../images/GithubLogo.png'
import darkGithubLogo from '../images/DarkGithubLogo.png'
import linkedInLogo from '../images/LinkedinLogo.png'
import darkLinkedInLogo from '../images/DarkLinkedinLogo.png'

const Footer = () => {
  const [theme, setTheme] = useContext(ThemeProvider.context);

  return (
    <div className='footer' id={ theme === 'dark' ? 'dark' : ''}>
            <div>
                <Link href={ '/Contact' }>
                    <div className='contact'>CONTACT</div>
                </Link> 
            </div>
            <div className='footerIcons'>
                <a href='https://twitter.com/BrentG6000'>
                { theme === 'dark' ? <img src={ darkTwitterLogo } alt=''></img>: <img src={ twitterLogo } alt=''></img> }
                </a>
                <a href='https://github.com/BrentG6000'>
                { theme === 'dark' ? <img src={ darkGithubLogo } alt=''></img>: <img src={ githubLogo } alt=''></img> } 
                </a>
                <a href='https://www.linkedin.com/in/brent-gustafson-166170a8/'>
                { theme === 'dark' ? <img src={ darkLinkedInLogo } alt=''></img>: <img src={ linkedInLogo } alt=''></img> }   
                </a>
            </div>
            <div className='footerText'>This site was created using ReactJS</div>
        </div>
  )
}

export default Footer;