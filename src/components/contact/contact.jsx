import React from 'react'
import './Contact.css'
import  { useRef } from 'react'; //emailjs react website template
import  emailjs from "emailjs-com";
import {AiOutlineMail} from 'react-icons/ai'
import {BsMessenger} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
const Contact = () => {
  const form=useRef();
  const sendEmail = (e) => {
    e.preventDefault();
  
    emailjs.sendForm('service_om67mll', 'template_0wwryso', form.current, 'u-XYTvIbVtz2HVSiT')
    e.target.reset();
  };
return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
<article className='contact_option'>
<AiOutlineMail className='contact_option-icon'/>
<h4>Email</h4>
<h5 className='email-a'>muhammadawab82002@gmail.com</h5>
<a href="mailto:muhammadawab82002@gmail.com">Send a Message</a>
</article>
<article className='contact_option'>
<BsMessenger className='contact_option-icon'/>
<h4>Fiverr</h4>
<h5>Level 1 Seller</h5>
<a href="https://www.fiverr.com/awabahmed310">Contact</a>
</article>
<article className='contact_option'>
<BsWhatsapp className='contact_option-icon'/>
<h4>Whatsapp</h4>
<h5>+923411888638</h5>
<a href="https://wa.me/+923411889638">Send a Message</a>
</article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
         <input type="text" name='name' placeholder='Your Full Name' required />
         <input type="email" name="email" placeholder='Your Email'  required/>
         <textarea name="message"  rows="7" placeholder='Your Message' required></textarea>
         <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
