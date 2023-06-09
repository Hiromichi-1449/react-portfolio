import { useRef } from 'react'
import './index.scss'
import Loader from 'react-loaders'
import emailjs from '@emailjs/browser'

const Contact = () => {
    const refForm = useRef()
    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm (
                'gmail',
                'y8jEWnWu8GOv8LH38',
                refForm.current,
                'Luee3EFCzxeCJ6HDBQIxb'
            )
            .then(
                () => {
                    alert('Message successfully sent!')
                    window.location.reload(false)
                },
                () => {
                    alert('Failed to send the message, please try again.')
                }
            )
    }
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