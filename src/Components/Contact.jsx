import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import '../assets/css/Contact.css';

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_i4pm1dl', 'template_mwjotlo', form.current, 'HFkeUCTLvPxRr05Ou')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };

    return (
        <section id='contact' className='contactSection '>
            <div class="wrap-contact100">
                <form  ref={form} onSubmit={sendEmail} class="contact100-form validate-form">
                    <span class="contact100-form-title">
                        Contact Us
                    </span>
                    <div class="wrap-input100 validate-input" data-validate="Name is required">
                        <input class="input100" type="text" name="name" placeholder="Full Name"/>
                    </div>
                    <div class="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                        <input class="input100" type="text" name="email" placeholder="Email"/>
                    </div>
                    <div class="wrap-input100 validate-input" data-validate="Message is required">
                        <textarea class="input100" name="message" placeholder="Your Message"></textarea>
                    </div>
                    <div class="wrapBtn">
                        <button type="submit" value="send" class="Wrap_button">
                            Send Email
                        </button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact
