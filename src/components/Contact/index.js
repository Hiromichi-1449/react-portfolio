import './index.scss'
import Loader from 'react-loaders'

const Contact = () => {
    return(
        <>
        <div className='container contact-page'>
            <div className = 'text-zone'>
                <h1>Contact me</h1>
                <p>
                I'm interested to participate in projects involving mobile end, websites or relating to GLSL/Blender. 
                However, if you have any questions or other requests, please don't hestitate to send me an email!
                </p>
                <div className = 'contact-form'>
                    <form>
                        <ul>
                            <li className = 'half'>
                                <input type = 'text' name = 'name' placeholder = 'Name' required />
                            </li>
                            <li className = 'half'>
                                <input type = 'text' name = 'email' placeholder = 'Email' required />
                            </li>
                            <li>
                                <input type = 'text' name = 'subject' placeholder = 'Subject' required />
                            </li>
                            <li>
                                <textarea name = 'message' placeholder = 'Message' required />
                            </li>
                            <li>
                               <input type = 'submit' className = 'flat-button' value = 'SEND' /> 
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </div>
        <Loader type = 'line-scale-pulse-out' />
        </>
    )
}


export default Contact