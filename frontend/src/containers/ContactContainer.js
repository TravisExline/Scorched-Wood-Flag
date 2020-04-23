import React from 'react'
import NavBar from '../components/NavBar'
import '../style/ContactContainer.css'

class ContactContainer extends React.Component {
    render() {
        return (
            <div className='contact-container'>
                <NavBar />
                <form className='contact-form'>
                    <input className='name-input' type='text' name='customer-name' placeholder='Enter Your Name'/>
                    <input className='email-input' type='text' name='customer-email' placeholder='Enter Your Email Address' />
                    <textarea className='message-input' type='text' name='customer-message' placeholder='Enter Your Message' />
                </form>
            </div>
        )
    }
}

export default ContactContainer