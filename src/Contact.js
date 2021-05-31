import './scss/Contact.scss';
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import validator from 'validator';

function Contact() {

    const [emailError, setEmailError] = useState('')
    const validateEmail = (e) => {
        var email = e.target.value

        if (validator.isEmail(email)) {
            setEmailError('')
        } else {
            setEmailError('NotValid')
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        emailjs.sendForm('service_mp9gj0w', 'template_sevvb9r', e.target, 'user_vRO3iK7sTH6e4sYjcPsZg')
            .then((result) => {
                console.log(result.text);
                alert('Message sent.');
            }, (error) => {
                console.log(error.text);
                alert('Something went wrong.');
        });
        e.target.reset()
    }
        

    return (
        <div>
            <div className="contact">
                <div className="contact__inner">
                    <h1>You can send me an email. :)</h1>
                    <form onSubmit={handleSubmit}>
                        <input type="email" placeholder='Enter your email: ' className={emailError} name='email' required onChange={(e) => validateEmail(e)} autoComplete='off' />
                        <input type='text' placeholder='Enter your message: ' name='message' required />
                        <button type='submit'>Send message</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;