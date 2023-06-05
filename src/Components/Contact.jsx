import React, { useRef , useEffect } from 'react';
import emailjs from '@emailjs/browser';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../assets/css/Contact.css';

const Contact = () => {

    useEffect(()=>{
        AOS.init({duration: 3000,offset: -800});
        AOS.refresh();
    },[])

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
        <section data-aos="fade-down" id='contact' className='contactSection '>
            <div className="wrap-contact100">
                <form  ref={form} onSubmit={sendEmail} className="contact100-form validate-form">
                    <span className="contact100-form-title">
                        Contact Us
                    </span>
                    <div className="wrap-input100 validate-input" data-validate="Name is required">
                        <input className="input100" type="text" name="name" placeholder="Full Name"/>
                    </div>
                    <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                        <input className="input100" type="text" name="email" placeholder="Email"/>
                    </div>
                    <div className="wrap-input100 validate-input" data-validate="Message is required">
                        <textarea className="input100" name="message" placeholder="Your Message"></textarea>
                    </div>
                    <div className="wrapBtn">
                        <button type="submit" value="send" className="Wrap_button">
                            Send Email
                        </button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact
