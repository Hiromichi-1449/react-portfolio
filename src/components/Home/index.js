import { Link } from 'react-router-dom'
import LogoTitle from '../../assets/images/logo-R.png';
import Loader from 'react-loaders'
import './index.scss';

<div>
    {
        // Line #16 needs to be changed to my name, as well as the logo.
    }
</div>

const Home = () => {

    return (
        <>
        <div className = 'container home-page'>
            <div className = 'text-zone'>
                <h1>Hi, <br /> I'm
                <img src = {LogoTitle} alt = 'developer' />
                icardo
                <br />
                Software Engineer 
                </h1>
                <h2>Frontend Developer / OpenGL & C++ Expert</h2>
                <Link to = '/contact' className = 'flat-button'>CONTACT ME </Link>
            </div>
        </div>
        <Loader type = 'line-scale-pulse-out' />
        </>
    );

}
export default Home