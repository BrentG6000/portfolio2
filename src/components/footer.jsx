import Link from 'next/link';
import Image from 'next/image'
import { useContext } from 'react'
import ThemeProvider from './contexts/theme';
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
                <Link href='https://github.com/BrentG6000'>
                    {theme === 'dark'
                        ? <Image src={darkGithubLogo} alt='' />
                        : <Image src={githubLogo} alt='' />
                    } 
                </Link>
                <Link href='https://www.linkedin.com/in/brent-gustafson-166170a8/'>
                    {theme === 'dark'
                        ? <Image src={darkLinkedInLogo} alt='' />
                        : <Image src={linkedInLogo} alt='' />
                    }   
                </Link>
            </div>
            <div className='footerText'>This site was created using NextJS</div>
        </div>
  )
}

export default Footer;