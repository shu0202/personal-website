import React, { useState, useRef, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import './Contact.css';
import mail from './images/mail_icon_new.png';

import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const [focusedElement, setFocusedElement] = useState(null);

    const [formData, setFormData] = useState({
        name: '',
        reply_to: '',
        message: '',
    });

    const [submitted, setSubmitted] = useState(false);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [triggerhideMessage, setTriggerhideMessage] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.send("service_b6jkz9e","template_5u3luj3",{
            from_name: e.target.name.value,
            message: e.target.message.value,
            reply_to: e.target.reply_to.value,
            },{
                publicKey: '_vXQLZmOC4TWBnKa0',
            })
            .then(
                () => {
                setSubmitted(true);
                setShowSuccessMessage(true);
                setFormData({
                    name: "",
                    reply_to: "",
                    message: "",
                  });
                // Hide the success message after 1 second
                setTimeout(() => {
                    setTriggerhideMessage(true);
                    setSubmitted(false);
                }, 2000);
                setTimeout(() => {
                    setTriggerhideMessage(false);
                }, 2300);
                setTimeout(() => {
                    setShowSuccessMessage(false);
                }, 2301);
                }
            );
      };

      useEffect(() => {
        const handleClickOutside = (e) => {
            if (focusedElement && !focusedElement.contains(e.target)) {
                focusedElement.classList.remove('focused');
                setFocusedElement(null);
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [focusedElement]);

    const handleFocus = (e) => {
        const group = e.currentTarget;
        if (focusedElement && focusedElement !== group) {
            focusedElement.classList.remove('focused');
        }
        group.classList.add('focused');
        setFocusedElement(group);
    };

    const handleMailClick = () => {
        window.location.href = 'mailto:yeungyanchun02@gmail.com';
      };

    return (
        <div className="contact-page">
            <Header />
            <div className='title-container'>
                <h1 className="contact-title">CONTACT</h1>
            </div>
            <div className="divider-contact"></div>
            <div className='contact-container'>
                <div className='contact-ways-container'>
                    <a className='contact-ways'>Email:</a>
                    <div className='contact-list'>
                        <img src={mail} alt="mail" onClick={handleMailClick} className="mail-icon"/>
                        <a href="mailto:yeungyanchun02@gmail.com" class="contact" className='contact'>yeungyanchun02@gmail.com</a>
                    </div>
                </div>
                <a className='or-word'>OR</a>
                <a className='contact-ways-form'>Query Form:</a>
                <a className='form-description'>Please provide a valid email address to ensure you receive any replies.</a>
            </div>
            <div className='form-container'>
                <form ref={form} onSubmit={sendEmail}>
                    <div className="form-group form-group-email" onClick={handleFocus}>
                        <label>E-MAIL*</label>
                        <input
                            type="email"
                            name="reply_to"
                            required
                            placeholder="This field is mandatory"
                        />
                    </div>
                    <div className="form-group form-group-name" onClick={handleFocus}>
                        <label>NAME*</label>
                        <input 
                            type="text" 
                            name="name" 
                            required
                            placeholder="This field is mandatory" />
                    </div>
                    <div className="form-group form-group-message" onClick={handleFocus}>
                        <label>MESSAGE*</label>
                        <textarea 
                            name="message" 
                            required
                            placeholder="Within 5000 words" />
                    </div>
                    <button className="email-form-button" type="submit">SEND</button>
                </form>

            </div>
            
            {showSuccessMessage && (
                <div className='form-data animated'>
                    <h2 className='success-message'>Form Submitted Successfully!</h2>
                </div>
            )}
            
            <Footer />
        </div>
    );
}

export default Contact;
