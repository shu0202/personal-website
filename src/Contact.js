import React, { useState, useRef, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import './Contact.css';

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
                setSubmitted(true); }
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

    return (
        <div className="contact">
            <Header />
            <div className='title-container'>
                <h1 className="contact-title">CONTACT</h1>
            </div>
            <div className="divider-contact"></div>
            <div className='contact-container'>
                <div className='contact-ways-container'>
                    <a className='contact-ways'>Email:</a>
                    <div className='contact-list'>
                        <a className='contact'>yeungyanchun02@gmail.com</a>
                    </div>
                </div>
                <a className='or'>OR</a>
                <a className='contact-ways-form'>Query Form:</a>
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
            
            {submitted && (
                <div className='form-data'>
                    <h2>Form Submitted Successfully!</h2>
                </div>
            )}
            
            <Footer />
        </div>
    );
}

export default Contact;
