import './scss/Contact.scss';
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import validator from 'validator';
import { motion } from 'framer-motion';

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
        <motion.div 
            exit={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
        >
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
        </motion.div>
    );
}

export default Contact;