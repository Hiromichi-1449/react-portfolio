import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import Logos from '../../assets/images/logo-R.png'
import LogoSubtitle from '../../assets/images/logo-R-sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope, faWrench } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

<div>
    {
        // Line #3 & #4 is their original Logos, makes sure to change later
        // as well as line #17 & #18
    }
</div>



const Sidebar = () => (
    <div className = 'nav-bar'>
        <Link className = 'logo' to = '/'>
            <img src = {Logos} alt = 'logo'/>
            <img className = 'sub-logo' src = {LogoSubtitle} alt = 'ricardo'/>
        </Link>
        <nav>
            <NavLink exact = 'true' activeClassName = 'active' to = '/'>
                <FontAwesomeIcon icon = {faHome} color = '#4d4d4e' />
            </NavLink>
            <NavLink exact = 'true' activeClassName = 'active' className = 'about-link' to = '/about'>
                <FontAwesomeIcon icon = {faUser} color = '#4d4d4e' />
            </NavLink>
            <NavLink exact = 'true' activeClassName = 'active' className = 'skill-link' to = '/skill'>
                <FontAwesomeIcon icon = {faWrench} color = '#4d4d4e' />
            </NavLink>
            <NavLink exact = 'true' activeClassName = 'active' className = 'contact-link' to = '/contact'>
                <FontAwesomeIcon icon = {faEnvelope} color = '#4d4d4e' />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a
                    target = '_blank'
                    rel = 'noreferrer'
                    href = 'https://www.linkedin.com/in/ricardo-wu-191015127/'
                >
                    <FontAwesomeIcon icon = {faLinkedin} color = '#4d4d4e'/>
                </a>
            </li>
            <li>
                <a
                    target = '_blank'
                    rel = 'noreferrer'
                    href = 'https://github.com/Hiromichi-1449'
                >
                    <FontAwesomeIcon icon = {faGithub} color = '#4d4d4e'/>
                </a>
            </li>

        </ul>
    </div>
)


export default Sidebar