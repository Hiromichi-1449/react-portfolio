import { faAndroid, faCss3, faHtml5, faJsSquare, faReact, faSwift } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Loader from 'react-loaders'
import './index.scss'

const About = () => {
    return (
        <>
        <div className = 'container about-page'>
            <div className = 'text-zone'>
                <h1>About me</h1>
                <p>
                    
                </p>
            </div>
            
            <div className = 'stage-cube-count'>
                <div className = 'cubeSpinner'>
                    <div className = 'face1'>
                        <FontAwesomeIcon icon = {faAndroid} color = '#27a546'/>
                    </div>
                    <div className = 'face2'>
                        <FontAwesomeIcon icon = {faSwift} style = {{color: '#d07016',}}/>
                    </div>
                    <div className = 'face3'>
                        <FontAwesomeIcon icon = {faReact} color = '#5ED4F4'/>
                    </div>
                    <div className = 'face4'>
                        <FontAwesomeIcon icon = {faJsSquare} color = '#F0DB4F'/>
                    </div>
                    <div className = 'face5'>
                        <FontAwesomeIcon icon = {faHtml5} color = '#F06529'/>
                    </div>
                    <div className = 'face6'>
                        <FontAwesomeIcon icon = {faCss3} color = '#28A4D9'/>
                    </div>
                </div>
            </div>
        </div>
        <Loader type = 'line-scale-pulse-out' />
        </>
    )
}


export default About